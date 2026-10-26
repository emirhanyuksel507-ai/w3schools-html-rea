/**
 * W3Schools Reverse-Engineered Application Logic
 * Router, Lesson Renderer, Exercise Checker, In-Lesson Live Playground, Search Engine, and Theme Manager.
 */

document.addEventListener('DOMContentLoaded', () => {
  // Elements
  const sidebarNav = document.getElementById('sidebar-nav');
  const mainContent = document.getElementById('main-content');
  const searchInput = document.getElementById('search-input');
  const searchResults = document.getElementById('search-results');
  const themeToggle = document.getElementById('theme-toggle');
  const mobileToggle = document.getElementById('mobile-toggle');
  const sidebar = document.getElementById('w3-sidebar');
  const tryitModal = document.getElementById('tryit-modal');
  const tryitClose = document.getElementById('tryit-close');
  const navTryitBtn = document.getElementById('nav-tryit-btn');
  const navFullTryitBtn = document.getElementById('nav-full-tryit-btn');

  let currentLessonIndex = 0;
  const completedLessons = JSON.parse(localStorage.getItem('w3_completed_lessons') || '[]');

  // --- Initialize Tryit Editor ---
  window.initTryit();

  // --- Populate Sidebar ---
  function renderSidebar() {
    sidebarNav.innerHTML = '';
    const categories = {};

    HTML_CURRICULUM.forEach((lesson, index) => {
      if (!categories[lesson.category]) {
        categories[lesson.category] = [];
      }
      categories[lesson.category].push({ lesson, index });
    });

    for (const [category, items] of Object.entries(categories)) {
      const catHeader = document.createElement('div');
      catHeader.className = 'w3-sidebar-section-title';
      catHeader.innerText = category;
      sidebarNav.appendChild(catHeader);

      items.forEach(({ lesson, index }) => {
        const item = document.createElement('a');
        item.className = 'w3-sidebar-item';
        item.id = `sidebar-item-${lesson.id}`;
        item.href = `#${lesson.id}`;

        const isCompleted = completedLessons.includes(lesson.id);
        item.innerHTML = `
          <span>${lesson.shortTitle || lesson.title}</span>
          ${isCompleted ? '<span class="w3-badge-completed">✓</span>' : ''}
        `;

        item.addEventListener('click', (e) => {
          e.preventDefault();
          loadLesson(index);
          if (window.innerWidth <= 900) {
            sidebar.classList.remove('mobile-open');
          }
        });

        sidebarNav.appendChild(item);
      });
    }
  }

  // --- Syntax Highlighter for code snippets ---
  function escapeHtml(text) {
    if (typeof text !== 'string') text = String(text);
    return text
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');
  }

  function highlightHTML(code) {
    const escaped = escapeHtml(code);
    // 0. Doctype
    let styled = escaped.replace(/(&lt;!DOCTYPE\s+html&gt;)/gi, '<span style="color:#808080;">&lt;!</span><span style="color:#569cd6; font-weight:bold;">DOCTYPE</span> <span style="color:#9cdcfe;">html</span><span style="color:#808080;">&gt;</span>');
    // 1. Comments
    styled = styled.replace(/(&lt;!--[\s\S]*?--&gt;)/g, '<span style="color:#6a9955; font-style:italic;">$1</span>');
    // 2. Tags and attributes (handling single, double quotes or unquoted values)
    return styled.replace(/(&lt;\/?)([a-zA-Z0-9\-]+)(.*?)(&gt;)/g, (match, p1, p2, p3, p4) => {
      let attrs = p3.replace(/([a-zA-Z0-9\-]+)(=)(&quot;.*?&quot;|'.*?'|".*?")/g, 
        '<span style="color:#9cdcfe;">$1</span><span style="color:#d4d4d4;">$2</span><span style="color:#ce9178;">$3</span>');
      return `<span style="color:#808080;">${p1}</span><span style="color:#569cd6; font-weight:bold;">${p2}</span>${attrs}<span style="color:#808080;">${p4}</span>`;
    });
  }

  // --- Load and Render Lesson ---
  function loadLesson(index, pushHistory = true) {
    if (index < 0 || index >= HTML_CURRICULUM.length) return;
    currentLessonIndex = index;
    const lesson = HTML_CURRICULUM[index];

    // Update URL hash with history entry
    if (pushHistory) {
      if (window.location.hash !== `#${lesson.id}`) {
        history.pushState(null, null, `#${lesson.id}`);
      }
    } else {
      history.replaceState(null, null, `#${lesson.id}`);
    }

    // Update dynamic navbar standalone link
    if (navFullTryitBtn) {
      navFullTryitBtn.href = `tryit.html?lesson=${lesson.id}`;
      navFullTryitBtn.title = `Open ${lesson.title} in standalone Tryit Editor`;
    }

    // Update active state in sidebar
    document.querySelectorAll('.w3-sidebar-item').forEach(el => el.classList.remove('active'));
    const activeItem = document.getElementById(`sidebar-item-${lesson.id}`);
    if (activeItem) {
      activeItem.classList.add('active');
      activeItem.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
    }

    const hasPrev = index > 0;
    const hasNext = index < HTML_CURRICULUM.length - 1;

    // Build Exercise section
    let exerciseHtml = '';
    if (lesson.exercise) {
      exerciseHtml = `
        <div class="w3-exercise-card">
          <div class="w3-exercise-header">
            <span>✏️ Test Yourself With Exercises</span>
          </div>
          <div class="w3-exercise-desc">${lesson.exercise.question}</div>
          <div class="w3-exercise-box">
            ${lesson.exercise.codeSnippet}
          </div>
          <div class="w3-exercise-actions">
            <button class="w3-btn-submit-ex" id="btn-submit-ex">Submit Answer ❯</button>
            <button class="w3-btn-hint-ex" id="btn-hint-ex">Show Hint</button>
            <button class="w3-btn-answer-ex" id="btn-answer-ex">Show Answer</button>
            <button class="w3-btn-reset-ex" id="btn-reset-ex">↺ Reset</button>
          </div>
          <div class="w3-exercise-feedback" id="exercise-feedback"></div>
        </div>
      `;
    }

    // Render content
    mainContent.innerHTML = `
      <div class="w3-page-header">
        <h1 class="w3-page-title">${lesson.title}</h1>
        <p class="w3-page-desc">${lesson.description}</p>
      </div>

      <div class="w3-nav-controls">
        <button class="w3-btn-nav" id="btn-prev" ${!hasPrev ? 'disabled' : ''}>❮ Previous</button>
        <button class="w3-btn-nav" id="btn-next" ${!hasNext ? 'disabled' : ''}>Next ❯</button>
      </div>

      <div class="w3-article">
        ${lesson.content}
      </div>

      <div class="w3-example-box">
        <div class="w3-example-topbar">
          <div class="w3-example-tabs">
            <button class="w3-tab-btn active" id="tab-view-code">View Code</button>
            <button class="w3-tab-btn" id="tab-live-runner">⚡ Live Editor</button>
          </div>
          <div class="w3-example-actions">
            <button class="w3-btn-sub" id="btn-copy-code" title="Copy code to clipboard">📋 Copy</button>
            <a href="tryit.html?lesson=${lesson.id}" target="_blank" class="w3-btn-sub" title="Open in dedicated tab">↗ Standalone</a>
          </div>
        </div>

        <div id="code-view-container">
          <div class="w3-code-container">
            <pre><code>${highlightHTML(lesson.codeExample)}</code></pre>
          </div>
          <button class="w3-btn-tryit" id="btn-tryit-now">
            <span>Try it Yourself ❯</span>
          </button>
        </div>

        <div class="in-lesson-runner" id="in-lesson-runner">
          <div class="in-lesson-split">
            <div class="in-lesson-editor">
              <textarea id="in-lesson-textarea" spellcheck="false">${escapeHtml(lesson.codeExample)}</textarea>
            </div>
            <div class="in-lesson-preview">
              <iframe id="in-lesson-iframe" sandbox="allow-scripts allow-modals allow-same-origin allow-forms"></iframe>
            </div>
          </div>
          <div class="in-lesson-actions">
            <button class="btn-run" id="btn-in-lesson-run">▶ Run Live</button>
            <button class="w3-btn-sub" id="btn-in-lesson-reset">↺ Reset</button>
            <button class="w3-btn-tryit" id="btn-in-lesson-modal" style="padding: 7px 14px; font-size: 13px;">Full Editor ❯</button>
          </div>
        </div>
      </div>

      ${exerciseHtml}

      <div class="w3-nav-controls" style="margin-top: 40px;">
        <button class="w3-btn-nav" id="btn-prev-bottom" ${!hasPrev ? 'disabled' : ''}>❮ Previous</button>
        <button class="w3-btn-nav" id="btn-next-bottom" ${!hasNext ? 'disabled' : ''}>Next ❯</button>
      </div>
    `;

    // Window scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // Attach Prev / Next handlers
    const prevAction = () => { if (hasPrev) loadLesson(currentLessonIndex - 1); };
    const nextAction = () => { if (hasNext) loadLesson(currentLessonIndex + 1); };

    document.getElementById('btn-prev').addEventListener('click', prevAction);
    document.getElementById('btn-next').addEventListener('click', nextAction);
    document.getElementById('btn-prev-bottom').addEventListener('click', prevAction);
    document.getElementById('btn-next-bottom').addEventListener('click', nextAction);

    // Attach Try It Yourself modal handler
    document.getElementById('btn-tryit-now').addEventListener('click', () => {
      openTryitModal(lesson.codeExample, lesson.title);
    });

    // Copy code button handler
    const copyBtn = document.getElementById('btn-copy-code');
    if (copyBtn) {
      copyBtn.addEventListener('click', () => {
        navigator.clipboard.writeText(lesson.codeExample).then(() => {
          copyBtn.innerText = '✓ Copied!';
          setTimeout(() => { copyBtn.innerText = '📋 Copy'; }, 2000);
        }).catch(() => {
          copyBtn.innerText = '✓ Copied!';
          setTimeout(() => { copyBtn.innerText = '📋 Copy'; }, 2000);
        });
      });
    }

    // In-Lesson Example Tabs: View Code vs Live Editor
    const tabViewCode = document.getElementById('tab-view-code');
    const tabLiveRunner = document.getElementById('tab-live-runner');
    const codeViewContainer = document.getElementById('code-view-container');
    const inLessonRunner = document.getElementById('in-lesson-runner');
    const inLessonTextarea = document.getElementById('in-lesson-textarea');
    const inLessonIframe = document.getElementById('in-lesson-iframe');
    const btnInLessonRun = document.getElementById('btn-in-lesson-run');
    const btnInLessonReset = document.getElementById('btn-in-lesson-reset');
    const btnInLessonModal = document.getElementById('btn-in-lesson-modal');

    function runInLesson() {
      if (inLessonIframe && inLessonTextarea) {
        inLessonIframe.srcdoc = inLessonTextarea.value;
      }
    }

    tabViewCode.addEventListener('click', () => {
      tabViewCode.classList.add('active');
      tabLiveRunner.classList.remove('active');
      codeViewContainer.style.display = 'block';
      inLessonRunner.classList.remove('active');
    });

    tabLiveRunner.addEventListener('click', () => {
      tabLiveRunner.classList.add('active');
      tabViewCode.classList.remove('active');
      codeViewContainer.style.display = 'none';
      inLessonRunner.classList.add('active');
      runInLesson();
    });

    btnInLessonRun.addEventListener('click', runInLesson);
    btnInLessonReset.addEventListener('click', () => {
      inLessonTextarea.value = lesson.codeExample;
      runInLesson();
    });
    btnInLessonModal.addEventListener('click', () => {
      openTryitModal(inLessonTextarea.value, lesson.title);
    });

    // Keyboard shortcuts for in-lesson live editor: Tab and Ctrl+Enter
    if (inLessonTextarea) {
      inLessonTextarea.addEventListener('keydown', (e) => {
        if (e.key === 'Tab') {
          e.preventDefault();
          const start = inLessonTextarea.selectionStart;
          const end = inLessonTextarea.selectionEnd;
          if (typeof inLessonTextarea.setRangeText === 'function') {
            inLessonTextarea.setRangeText('  ', start, end, 'end');
          } else {
            inLessonTextarea.value = inLessonTextarea.value.substring(0, start) + '  ' + inLessonTextarea.value.substring(end);
            inLessonTextarea.selectionStart = inLessonTextarea.selectionEnd = start + 2;
          }
        } else if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
          e.preventDefault();
          runInLesson();
        }
      });
    }

    // Attach Exercise handler
    if (lesson.exercise) {
      const submitBtn = document.getElementById('btn-submit-ex');
      const hintBtn = document.getElementById('btn-hint-ex');
      const answerBtn = document.getElementById('btn-answer-ex');
      const resetBtn = document.getElementById('btn-reset-ex');
      const feedback = document.getElementById('exercise-feedback');
      const inputs = mainContent.querySelectorAll('.exercise-input');

      // Enter key navigation: advance focus to next input or submit on the last one
      inputs.forEach((input, idx) => {
        input.addEventListener('keydown', (e) => {
          if (e.key === 'Enter') {
            e.preventDefault();
            if (idx < inputs.length - 1) {
              inputs[idx + 1].focus();
            } else {
              submitBtn.click();
            }
          }
        });
      });

      function normalizeAnswer(str) {
        return (str || '')
          .trim()
          .toLowerCase()
          .replace(/["']/g, '"')
          .replace(/\s+/g, ' ')
          .replace(/\s*\(\s*/g, '(')
          .replace(/\s*\)\s*/g, ')')
          .replace(/\s*;\s*$/, '');
      }

      function isAnswerMatch(userVal, expected) {
        const u = normalizeAnswer(userVal);
        const e = normalizeAnswer(expected);
        if (u === e) return true;

        // Allow leading # for hex or without #
        if (e.startsWith('#') && u === e.substring(1)) return true;
        if (u.startsWith('#') && u.substring(1) === e) return true;

        // Allow <br> vs <br/> vs <br /> vs br
        if ((e === '<br>' || e === '<br/>' || e === '<br />' || e === 'br') &&
            (u === '<br>' || u === '<br/>' || u === '<br />' || u === 'br')) return true;

        // Allow </p> vs /p
        if ((e === '</p>' || e === '/p') && (u === '</p>' || u === '/p')) return true;

        // Allow tag enclosing brackets if omitted or typed
        if (e.startsWith('<') && e.endsWith('>') && !u.startsWith('<') && !u.endsWith('>')) {
          if ('<' + u + '>' === e) return true;
        }

        return false;
      }

      submitBtn.addEventListener('click', () => {
        feedback.removeAttribute('style');
        let allCorrect = true;

        inputs.forEach(input => {
          const expected = input.getAttribute('data-answer');
          const userVal = input.value;
          if (isAnswerMatch(userVal, expected)) {
            input.style.borderColor = '#04AA6D';
            input.style.backgroundColor = '#d4edda';
          } else {
            input.style.borderColor = '#f44336';
            input.style.backgroundColor = '#f8d7da';
            allCorrect = false;
          }
        });

        if (allCorrect) {
          feedback.className = 'w3-exercise-feedback correct';
          feedback.innerHTML = `<strong>Correct!</strong> Well done. ${lesson.exercise.explanation || ''}`;
          
          if (!completedLessons.includes(lesson.id)) {
            completedLessons.push(lesson.id);
            localStorage.setItem('w3_completed_lessons', JSON.stringify(completedLessons));
            renderSidebar();
            const el = document.getElementById(`sidebar-item-${lesson.id}`);
            if (el) el.classList.add('active');
          }
        } else {
          feedback.className = 'w3-exercise-feedback incorrect';
          feedback.innerHTML = `<strong>Not quite right!</strong> Check your tags or attributes and try again.`;
        }
      });

      hintBtn.addEventListener('click', () => {
        feedback.removeAttribute('style');
        feedback.className = 'w3-exercise-feedback hint';
        feedback.innerHTML = `💡 <strong>Hint:</strong> ${lesson.exercise.hint}`;
      });

      answerBtn.addEventListener('click', () => {
        feedback.removeAttribute('style');
        inputs.forEach(input => {
          input.value = input.getAttribute('data-answer');
          input.style.borderColor = '#04AA6D';
          input.style.backgroundColor = '#d4edda';
        });
        feedback.className = 'w3-exercise-feedback correct';
        feedback.innerHTML = `<strong>Solution revealed:</strong> ${lesson.exercise.explanation || ''}`;
      });

      resetBtn.addEventListener('click', () => {
        feedback.removeAttribute('style');
        feedback.className = 'w3-exercise-feedback';
        feedback.innerHTML = '';
        inputs.forEach(input => {
          input.value = '';
          input.style.borderColor = '';
          input.style.backgroundColor = '';
        });
      });
    }
  }

  // --- Modal Tryit Open/Close ---
  function openTryitModal(code, title) {
    if (window.tryitInstance) {
      window.tryitInstance.loadCode(code, title);
    }
    const popoutLink = document.getElementById('tryit-btn-popout');
    if (popoutLink) {
      const currentLesson = HTML_CURRICULUM[currentLessonIndex];
      popoutLink.href = currentLesson ? `tryit.html?lesson=${currentLesson.id}` : 'tryit.html';
    }
    tryitModal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeTryitModal() {
    tryitModal.classList.remove('active');
    document.body.style.overflow = '';
  }

  tryitClose.addEventListener('click', closeTryitModal);
  tryitModal.addEventListener('click', (e) => {
    if (e.target === tryitModal) closeTryitModal();
  });

  navTryitBtn.addEventListener('click', () => {
    const currentLesson = HTML_CURRICULUM[currentLessonIndex];
    openTryitModal(currentLesson ? currentLesson.codeExample : TRYIT_TEMPLATES.basic.code, currentLesson ? currentLesson.title : 'Full Sandbox');
  });

  // --- Top Navigation Templates Selector inside Modal ---
  const templateSelect = document.getElementById('tryit-template-select');
  if (templateSelect) {
    templateSelect.addEventListener('change', (e) => {
      const selected = e.target.value;
      if (TRYIT_TEMPLATES[selected] && window.tryitInstance) {
        window.tryitInstance.loadCode(TRYIT_TEMPLATES[selected].code, TRYIT_TEMPLATES[selected].name);
      }
    });
  }

  // --- Auto-Run Toggle in Modal ---
  const autoRunCheckbox = document.getElementById('tryit-auto-run');
  if (autoRunCheckbox) {
    autoRunCheckbox.addEventListener('change', (e) => {
      if (window.tryitInstance) {
        window.tryitInstance.autoRun = e.target.checked;
      }
    });
  }

  // --- Format / Beautify in Modal ---
  const beautifyBtn = document.getElementById('tryit-btn-beautify');
  if (beautifyBtn) {
    beautifyBtn.addEventListener('click', () => {
      if (window.tryitInstance) window.tryitInstance.beautify();
    });
  }

  // --- Quick Tag Toolbar in Modal ---
  document.querySelectorAll('#tryit-tag-toolbar .tag-chip').forEach(btn => {
    btn.addEventListener('click', () => {
      if (!window.tryitInstance) return;
      const tag = btn.dataset.tag;
      const isSelf = btn.dataset.self === 'true';
      if (isSelf) {
        if (tag === 'img') window.tryitInstance.insertTag('<img src="https://www.w3schools.com/html/img_girl.jpg" alt="Girl in a jacket" width="300">');
        else if (tag === 'input') window.tryitInstance.insertTag('<input type="text" placeholder="Enter text...">');
        else window.tryitInstance.insertTag(`<${tag}>`);
      } else {
        window.tryitInstance.insertTag(`<${tag}>`, `</${tag}>`);
      }
    });
  });

  // --- Viewport Switcher in Modal ---
  document.querySelectorAll('.viewport-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      if (window.tryitInstance) {
        window.tryitInstance.setViewport(btn.dataset.viewport);
      }
    });
  });

  // --- Modal Button Bindings ---
  document.getElementById('tryit-btn-run').addEventListener('click', () => {
    if (window.tryitInstance) window.tryitInstance.run();
  });

  document.getElementById('tryit-btn-reset').addEventListener('click', () => {
    if (window.tryitInstance) window.tryitInstance.reset();
  });

  document.getElementById('tryit-btn-clear').addEventListener('click', () => {
    if (window.tryitInstance) window.tryitInstance.clear();
  });

  document.getElementById('tryit-btn-download').addEventListener('click', () => {
    if (window.tryitInstance) window.tryitInstance.download();
  });

  document.getElementById('tryit-btn-orient').addEventListener('click', () => {
    if (window.tryitInstance) window.tryitInstance.toggleOrientation();
  });

  document.getElementById('tryit-btn-console').addEventListener('click', () => {
    if (window.tryitInstance) window.tryitInstance.toggleConsole();
  });

  const clearConsoleBtn = document.getElementById('tryit-clear-console-btn');
  if (clearConsoleBtn) {
    clearConsoleBtn.addEventListener('click', () => {
      const logBox = document.getElementById('tryit-console-content');
      if (logBox) logBox.innerHTML = '';
    });
  }

  // --- Search Engine ---
  let selectedSearchIndex = -1;

  searchInput.addEventListener('input', (e) => {
    const query = e.target.value.trim().toLowerCase();
    selectedSearchIndex = -1;
    if (!query) {
      searchResults.classList.remove('active');
      searchResults.innerHTML = '';
      return;
    }

    const matches = HTML_CURRICULUM.filter(item => {
      return item.title.toLowerCase().includes(query) ||
             item.description.toLowerCase().includes(query) ||
             item.id.toLowerCase().includes(query) ||
             item.category.toLowerCase().includes(query);
    });

    if (matches.length === 0) {
      searchResults.innerHTML = `<div class="search-result-item" style="color:#888;">No HTML lessons found for "${escapeHtml(query)}"</div>`;
    } else {
      searchResults.innerHTML = matches.map(m => {
        const idx = HTML_CURRICULUM.findIndex(l => l.id === m.id);
        return `
          <div class="search-result-item" data-index="${idx}">
            <div class="res-title">${escapeHtml(m.title)}</div>
            <div class="res-desc">${escapeHtml(m.category)} - ${escapeHtml(m.description.substring(0, 50))}...</div>
          </div>
        `;
      }).join('');
    }

    searchResults.classList.add('active');
  });

  searchInput.addEventListener('keydown', (e) => {
    const items = searchResults.querySelectorAll('.search-result-item[data-index]');
    if (!items.length) return;

    if (e.key === 'ArrowDown') {
      e.preventDefault();
      selectedSearchIndex = (selectedSearchIndex + 1) % items.length;
      updateSearchSelection(items);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      selectedSearchIndex = (selectedSearchIndex - 1 + items.length) % items.length;
      updateSearchSelection(items);
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (selectedSearchIndex >= 0 && selectedSearchIndex < items.length) {
        items[selectedSearchIndex].click();
      } else if (items.length > 0) {
        items[0].click();
      }
    } else if (e.key === 'Escape') {
      searchResults.classList.remove('active');
      searchInput.blur();
    }
  });

  function updateSearchSelection(items) {
    items.forEach((item, idx) => {
      item.classList.toggle('selected', idx === selectedSearchIndex);
      if (idx === selectedSearchIndex) {
        item.scrollIntoView({ block: 'nearest' });
      }
    });
  }

  searchResults.addEventListener('click', (e) => {
    const item = e.target.closest('.search-result-item');
    if (item && item.dataset.index) {
      loadLesson(parseInt(item.dataset.index, 10));
      searchResults.classList.remove('active');
      searchInput.value = '';
    }
  });

  document.addEventListener('click', (e) => {
    if (!e.target.closest('.w3-search-box')) {
      searchResults.classList.remove('active');
    }
    // Mobile sidebar click-outside closing
    if (window.innerWidth <= 900 && sidebar.classList.contains('mobile-open')) {
      if (!sidebar.contains(e.target) && !mobileToggle.contains(e.target)) {
        sidebar.classList.remove('mobile-open');
      }
    }
  });

  // Modal Escape key support
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      if (tryitModal.classList.contains('active')) {
        closeTryitModal();
      }
      searchResults.classList.remove('active');
    }
  });

  // --- Theme Toggle ---
  const savedTheme = localStorage.getItem('w3_theme') || 'light';
  document.documentElement.setAttribute('data-theme', savedTheme);
  updateThemeIcon(savedTheme);

  themeToggle.addEventListener('click', () => {
    const current = document.documentElement.getAttribute('data-theme') || 'light';
    const nextTheme = current === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', nextTheme);
    localStorage.setItem('w3_theme', nextTheme);
    updateThemeIcon(nextTheme);
  });

  function updateThemeIcon(theme) {
    themeToggle.innerHTML = theme === 'dark' ? '☀️' : '🌙';
    themeToggle.title = theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode';
  }

  // --- Mobile Sidebar Toggle ---
  mobileToggle.addEventListener('click', () => {
    sidebar.classList.toggle('mobile-open');
  });

  // --- Hash & History Routing ---
  function syncRouteFromHash() {
    const hash = window.location.hash.replace('#', '');
    const idx = HTML_CURRICULUM.findIndex(l => l.id === hash);
    if (idx !== -1 && idx !== currentLessonIndex) {
      loadLesson(idx, false);
    }
  }

  window.addEventListener('hashchange', syncRouteFromHash);
  window.addEventListener('popstate', syncRouteFromHash);

  // --- Initial Load Route ---
  renderSidebar();

  const hash = window.location.hash.replace('#', '');
  const initialIndex = HTML_CURRICULUM.findIndex(l => l.id === hash);
  if (initialIndex !== -1) {
    loadLesson(initialIndex, false);
  } else {
    loadLesson(0, false);
  }
});
