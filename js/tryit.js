/**
 * W3Schools Reverse-Engineered Tryit Editor
 * Handles code editing, live preview iframe, line numbers, templates,
 * interactive draggable resizer, auto-run, tag helpers, code formatting, and console interception.
 */

class TryitEditor {
  constructor(options = {}) {
    this.container = options.container || document.getElementById('tryit-container');
    this.textarea = options.textarea || document.getElementById('tryit-textarea');
    this.lineNumbers = options.lineNumbers || document.getElementById('tryit-line-numbers');
    this.iframe = options.iframe || document.getElementById('tryit-iframe');
    this.consoleEl = options.consoleEl || document.getElementById('tryit-console');
    this.consoleContent = options.consoleContent || document.getElementById('tryit-console-content');
    this.resizer = options.resizer || document.getElementById('tryit-resizer');
    this.codePane = options.codePane || (this.textarea ? this.textarea.closest('.tryit-pane-code') : null);
    this.previewPane = options.previewPane || (this.iframe ? this.iframe.closest('.tryit-pane-preview') : null);
    this.workspace = options.workspace || (this.textarea ? this.textarea.closest('.tryit-workspace') : null);
    this.viewportContainer = options.viewportContainer || (this.iframe ? this.iframe.closest('.tryit-iframe-container') : null);
    
    this.initialCode = options.initialCode || '';
    this.currentCode = this.initialCode;
    this.isVertical = false;
    this.autoRun = false;
    this.autoRunTimer = null;
    this.currentViewport = 'desktop';

    this.init();
  }

  init() {
    if (!this.textarea || !this.iframe) return;

    // Set initial content
    if (this.initialCode) {
      this.textarea.value = this.initialCode;
    }

    this.updateLineNumbers();

    // Textarea input
    this.textarea.addEventListener('input', () => {
      this.updateLineNumbers();
      if (this.autoRun) {
        this.scheduleAutoRun();
      }
    });

    // Sync scroll
    this.textarea.addEventListener('scroll', () => {
      if (this.lineNumbers) {
        this.lineNumbers.scrollTop = this.textarea.scrollTop;
      }
    });

    // Keyboard navigation: Tab, Shift+Tab, Ctrl+Enter
    this.textarea.addEventListener('keydown', (e) => {
      if (e.key === 'Tab') {
        e.preventDefault();
        this.handleTabKey(e.shiftKey);
      } else if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
        e.preventDefault();
        this.run();
      }
    });

    // Draggable Splitter
    this.initResizer();

    // Listen for messages from sandboxed iframe
    window.addEventListener('message', (event) => {
      if (event.data && event.data.type === 'tryit_console') {
        this.appendConsoleLog(event.data.level, event.data.message);
      }
    });

    // Initial run
    this.run();
  }

  handleTabKey(isShift) {
    const start = this.textarea.selectionStart;
    const end = this.textarea.selectionEnd;
    const value = this.textarea.value;

    if (!isShift) {
      if (start === end) {
        // Single cursor: insert 2 spaces, preserving undo history if possible
        if (document.queryCommandSupported && document.queryCommandSupported('insertText')) {
          document.execCommand('insertText', false, '  ');
        } else {
          this.textarea.value = value.substring(0, start) + '  ' + value.substring(end);
          this.textarea.selectionStart = this.textarea.selectionEnd = start + 2;
        }
      } else {
        // Multi-line selection: indent each selected line
        const lineStart = value.lastIndexOf('\n', start - 1) + 1;
        const lineEnd = (value.indexOf('\n', end) === -1) ? value.length : value.indexOf('\n', end);
        const lines = value.substring(lineStart, lineEnd).split('\n');
        const indented = lines.map(line => '  ' + line).join('\n');
        this.textarea.value = value.substring(0, lineStart) + indented + value.substring(lineEnd);
        this.textarea.selectionStart = start + 2;
        this.textarea.selectionEnd = end + (lines.length * 2);
      }
    } else {
      // Shift + Tab: unindent selected lines or current line
      const lineStart = value.lastIndexOf('\n', start - 1) + 1;
      const lineEnd = (value.indexOf('\n', end) === -1) ? value.length : value.indexOf('\n', end);
      const lines = value.substring(lineStart, lineEnd).split('\n');
      let spacesRemovedFirstLine = 0;
      let totalSpacesRemoved = 0;
      const unindented = lines.map((line, idx) => {
        let removed = 0;
        if (line.startsWith('  ')) {
          removed = 2;
        } else if (line.startsWith(' ')) {
          removed = 1;
        }
        if (idx === 0) spacesRemovedFirstLine = removed;
        totalSpacesRemoved += removed;
        return line.substring(removed);
      }).join('\n');
      this.textarea.value = value.substring(0, lineStart) + unindented + value.substring(lineEnd);
      this.textarea.selectionStart = Math.max(lineStart, start - spacesRemovedFirstLine);
      this.textarea.selectionEnd = Math.max(lineStart, end - totalSpacesRemoved);
    }

    this.updateLineNumbers();
    if (this.autoRun) this.scheduleAutoRun();
  }

  initResizer() {
    const resizer = this.resizer || document.querySelector('.tryit-resizer');
    const workspace = this.workspace || document.querySelector('.tryit-workspace');
    const codePane = this.codePane || document.querySelector('.tryit-pane-code');
    const previewPane = this.previewPane || document.querySelector('.tryit-pane-preview');
    const iframe = this.iframe;

    if (!resizer || !workspace || !codePane) return;

    let isDragging = false;

    const startDrag = (e) => {
      isDragging = true;
      resizer.classList.add('is-dragging');
      document.body.style.cursor = this.isVertical ? 'row-resize' : 'col-resize';
      document.body.style.userSelect = 'none';
      if (iframe) iframe.style.pointerEvents = 'none'; // prevent iframe hijacking mouse
      e.preventDefault();
    };

    const doDrag = (e) => {
      if (!isDragging) return;
      const clientX = e.touches ? e.touches[0].clientX : e.clientX;
      const clientY = e.touches ? e.touches[0].clientY : e.clientY;
      const rect = workspace.getBoundingClientRect();

      if (!this.isVertical) {
        const offset = clientX - rect.left;
        const percent = Math.max(15, Math.min(85, (offset / rect.width) * 100));
        codePane.style.width = `${percent}%`;
        if (previewPane) previewPane.style.width = `${100 - percent}%`;
      } else {
        const offset = clientY - rect.top;
        const percent = Math.max(15, Math.min(85, (offset / rect.height) * 100));
        codePane.style.height = `${percent}%`;
        if (previewPane) previewPane.style.height = `${100 - percent}%`;
      }
    };

    const stopDrag = () => {
      if (!isDragging) return;
      isDragging = false;
      resizer.classList.remove('is-dragging');
      document.body.style.cursor = '';
      document.body.style.userSelect = '';
      if (iframe) iframe.style.pointerEvents = 'auto';
    };

    resizer.addEventListener('mousedown', startDrag);
    resizer.addEventListener('touchstart', startDrag, { passive: false });

    window.addEventListener('mousemove', doDrag);
    window.addEventListener('touchmove', doDrag, { passive: false });

    window.addEventListener('mouseup', stopDrag);
    window.addEventListener('touchend', stopDrag);
  }

  updateLineNumbers() {
    if (!this.lineNumbers) return;
    const lines = this.textarea.value.split('\n').length;
    let lineStr = '';
    for (let i = 1; i <= lines; i++) {
      lineStr += i + '<br>';
    }
    this.lineNumbers.innerHTML = lineStr;
  }

  loadCode(code, optionalTitle = '') {
    this.initialCode = code;
    this.textarea.value = code;
    this.updateLineNumbers();
    if (this.consoleContent) this.consoleContent.innerHTML = '';
    
    const titleEl = document.getElementById('tryit-modal-title') || document.getElementById('tryit-title');
    if (titleEl && optionalTitle) {
      titleEl.innerText = `Tryit Editor: ${optionalTitle}`;
    }
    this.run();
  }

  scheduleAutoRun() {
    clearTimeout(this.autoRunTimer);
    this.autoRunTimer = setTimeout(() => {
      this.run();
    }, 400);
  }

  run() {
    const code = this.textarea.value;
    this.currentCode = code;

    // Inject safe console catching hook inside the HTML code
    const consoleHook = `
      <script>
        (function() {
          function safeStringify(item) {
            if (item === null) return 'null';
            if (item === undefined) return 'undefined';
            if (typeof item === 'string') return item;
            if (typeof item === 'number' || typeof item === 'boolean') return String(item);
            if (item instanceof HTMLElement) {
              return '<' + item.tagName.toLowerCase() + (item.id ? ' id="' + item.id + '"' : '') + (item.className ? ' class="' + item.className + '"' : '') + '>';
            }
            try {
              return JSON.stringify(item);
            } catch (_) {
              return Object.prototype.toString.call(item);
            }
          }
          function sendLog(level, args) {
            try {
              var msg = Array.prototype.slice.call(args).map(safeStringify).join(' ');
              window.parent.postMessage({ type: 'tryit_console', level: level, message: msg }, '*');
            } catch(e) {}
          }
          var origLog = console.log;
          var origError = console.error;
          var origWarn = console.warn;
          console.log = function() { sendLog('log', arguments); origLog.apply(console, arguments); };
          console.error = function() { sendLog('error', arguments); origError.apply(console, arguments); };
          console.warn = function() { sendLog('warn', arguments); origWarn.apply(console, arguments); };
          window.onerror = function(msg, url, line) {
            sendLog('error', ['Error (Line ' + line + '): ' + msg]);
          };
        })();
      </script>
    `;

    // Inject before </head> or <body> or after <html> or at start
    let processedCode = code;
    if (/<\/head>/i.test(code)) {
      processedCode = code.replace(/<\/head>/i, consoleHook + '</head>');
    } else if (/<body\b[^>]*>/i.test(code)) {
      processedCode = code.replace(/<body\b[^>]*>/i, '$&' + consoleHook);
    } else if (/<html\b[^>]*>/i.test(code)) {
      processedCode = code.replace(/<html\b[^>]*>/i, '$&<head>' + consoleHook + '</head>');
    } else {
      processedCode = consoleHook + code;
    }

    // Update iframe content using srcdoc
    this.iframe.srcdoc = processedCode;
  }

  insertTag(openTag, closeTag = '') {
    const start = this.textarea.selectionStart;
    const end = this.textarea.selectionEnd;
    const text = this.textarea.value;
    const selected = text.substring(start, end);
    const replacement = openTag + selected + closeTag;

    if (typeof this.textarea.setRangeText === 'function') {
      this.textarea.setRangeText(replacement, start, end, 'select');
      if (selected.length === 0) {
        this.textarea.selectionStart = this.textarea.selectionEnd = start + openTag.length;
      }
    } else {
      this.textarea.value = text.substring(0, start) + replacement + text.substring(end);
      if (selected.length > 0) {
        this.textarea.selectionStart = start + openTag.length;
        this.textarea.selectionEnd = start + openTag.length + selected.length;
      } else {
        this.textarea.selectionStart = this.textarea.selectionEnd = start + openTag.length;
      }
    }
    this.textarea.focus();
    this.updateLineNumbers();
    if (this.autoRun) this.scheduleAutoRun();
  }

  beautify() {
    const html = this.textarea.value;
    let formatted = '';
    let indent = 0;
    const tab = '  ';
    const voidTags = ['area', 'base', 'br', 'col', 'embed', 'hr', 'img', 'input', 'link', 'meta', 'param', 'source', 'track', 'wbr', '!doctype'];

    // Safeguard raw blocks (<script>, <style>, <pre>) so comparison operators and code aren't mangled
    const rawBlocks = [];
    const preserved = html.replace(/<(script|style|pre)\b[^>]*>[\s\S]*?<\/\1>/gi, (match) => {
      rawBlocks.push(match);
      return `___RAW_BLOCK_${rawBlocks.length - 1}___`;
    });

    const tokens = preserved.replace(/>\s*</g, '><').split(/(<[^>]+>)/g).filter(Boolean);

    for (let token of tokens) {
      token = token.trim();
      if (!token) continue;

      const rawMatch = token.match(/^___RAW_BLOCK_(\d+)___$/);
      if (rawMatch) {
        const rawContent = rawBlocks[parseInt(rawMatch[1], 10)];
        const lines = rawContent.split('\n');
        for (let line of lines) {
          formatted += (tab.repeat(indent) + line.trimEnd()) + '\n';
        }
        continue;
      }

      if (token.startsWith('</')) {
        indent = Math.max(0, indent - 1);
        formatted += tab.repeat(indent) + token + '\n';
      } else if (token.startsWith('<') && !token.startsWith('<!--')) {
        const tagName = (token.match(/<([a-zA-Z0-9\-]+)/) || [])[1];
        const isVoid = token.endsWith('/>') || (tagName && voidTags.includes(tagName.toLowerCase()));
        formatted += tab.repeat(indent) + token + '\n';
        if (!isVoid && !token.startsWith('<!')) {
          indent++;
        }
      } else {
        formatted += tab.repeat(indent) + token + '\n';
      }
    }

    this.textarea.value = formatted.trim();
    this.updateLineNumbers();
    this.run();
  }

  setViewport(mode) {
    this.currentViewport = mode;
    const container = this.viewportContainer || document.querySelector('.tryit-iframe-container');
    if (!container) return;

    container.classList.remove('viewport-desktop', 'viewport-tablet', 'viewport-mobile');
    container.classList.add(`viewport-${mode}`);

    // Update active state on buttons if any
    document.querySelectorAll('.viewport-btn').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.viewport === mode);
    });

    const badge = document.getElementById('screen-size-badge');
    if (badge) {
      if (mode === 'desktop') badge.innerText = 'Desktop View (100%)';
      else if (mode === 'tablet') badge.innerText = 'Tablet View (768px)';
      else if (mode === 'mobile') badge.innerText = 'Mobile View (375px)';
    }
  }

  reset() {
    this.textarea.value = this.initialCode;
    this.updateLineNumbers();
    if (this.consoleContent) this.consoleContent.innerHTML = '';
    this.run();
  }

  clear() {
    this.textarea.value = '<!DOCTYPE html>\n<html>\n<head>\n  <title>New Document</title>\n</head>\n<body>\n\n  \n\n</body>\n</html>';
    this.updateLineNumbers();
    this.run();
  }

  download() {
    const blob = new Blob([this.textarea.value], { type: 'text/html;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'w3schools_code.html';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }

  toggleOrientation() {
    const workspace = this.workspace || document.querySelector('.tryit-workspace');
    if (!workspace) return;
    this.isVertical = !this.isVertical;
    if (this.isVertical) {
      workspace.classList.add('orientation-vertical');
    } else {
      workspace.classList.remove('orientation-vertical');
    }
    // Reset widths/heights so flex applies correctly
    const codePane = this.codePane || document.querySelector('.tryit-pane-code');
    const previewPane = this.previewPane || document.querySelector('.tryit-pane-preview');
    if (codePane) {
      codePane.style.width = '';
      codePane.style.height = '';
    }
    if (previewPane) {
      previewPane.style.width = '';
      previewPane.style.height = '';
    }
  }

  toggleConsole() {
    if (!this.consoleEl) return;
    this.consoleEl.classList.toggle('active');
  }

  appendConsoleLog(level, message) {
    if (!this.consoleContent) return;
    const entry = document.createElement('div');
    entry.className = `console-entry ${level}`;
    const timestamp = new Date().toLocaleTimeString();
    entry.innerHTML = `<span style="color:#888;">[${timestamp}]</span> <strong>[${level.toUpperCase()}]</strong> ${this.escapeHtml(message)}`;
    this.consoleContent.appendChild(entry);
    this.consoleContent.scrollTop = this.consoleContent.scrollHeight;
  }

  escapeHtml(str) {
    if (typeof str !== 'string') str = String(str);
    return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }
}

// Global instance
window.tryitInstance = null;
window.initTryit = function(initialCode = '') {
  window.tryitInstance = new TryitEditor({
    initialCode: initialCode || (typeof TRYIT_TEMPLATES !== 'undefined' ? TRYIT_TEMPLATES.basic.code : '')
  });
};
