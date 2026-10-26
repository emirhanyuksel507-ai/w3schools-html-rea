/**
 * W3Schools HTML Curriculum Data
 * Reverse-Engineered HTML Course Database - Complete Comprehensive Edition (70+ Lessons)
 */

const HTML_CURRICULUM = [
  {
    id: "html_intro",
    category: "HTML Tutorial",
    title: "HTML Introduction",
    shortTitle: "HTML Intro",
    description: "HTML is the standard markup language for creating Web pages.",
    content: `
      <h2>What is HTML?</h2>
      <p><strong>HTML</strong> stands for <strong>H</strong>yper <strong>T</strong>ext <strong>M</strong>arkup <strong>L</strong>anguage.</p>
      <ul>
        <li>HTML is the standard markup language for documents designed to be displayed in a web browser.</li>
        <li>HTML describes the structure of a Web page semantically and originally included cues for the appearance of the document.</li>
        <li>HTML consists of a series of elements.</li>
        <li>HTML elements tell the browser how to display the content.</li>
        <li>HTML elements label pieces of content such as "this is a heading", "this is a paragraph", "this is a link", etc.</li>
      </ul>

      <div class="w3-panel w3-note">
        <h3>A Simple HTML Document</h3>
        <p>Take a look at how clean and minimal a modern HTML5 document is.</p>
      </div>
    `,
    codeExample: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Page Title - W3Schools Clone</title>
</head>
<body>

  <h1>My First Heading</h1>
  <p>My first paragraph in HTML.</p>
  <p>HTML is easy to learn and fun to write!</p>

</body>
</html>`,
    exercise: {
      question: "Complete the start tag for the main heading element:",
      codeSnippet: `<<input class="exercise-input" data-answer="h1" placeholder="tag">>Welcome to HTML</<input class="exercise-input" data-answer="h1" placeholder="tag">>`,
      hint: "HTML headings range from h1 to h6, where h1 is the most important.",
      explanation: "The <h1> tag defines the most important heading on a page."
    }
  },
  {
    id: "html_editors",
    category: "HTML Tutorial",
    title: "HTML Editors",
    shortTitle: "HTML Editors",
    description: "Learn how to write HTML using simple text editors or modern IDEs.",
    content: `
      <h2>Write HTML Using Notepad or TextEdit</h2>
      <p>Web pages can be created and modified by using professional HTML editors. However, for learning HTML we recommend a simple text editor like Notepad (PC) or TextEdit (Mac), or modern editors like VS Code.</p>
      <p>We believe that using a simple text editor is a good way to learn HTML from the ground up.</p>
      <div class="w3-panel w3-info">
        <h3>Steps to create your first page:</h3>
        <ol>
          <li><strong>Step 1:</strong> Open Notepad or any text editor.</li>
          <li><strong>Step 2:</strong> Write some HTML code.</li>
          <li><strong>Step 3:</strong> Save the HTML page with a <code>.html</code> or <code>.htm</code> extension (e.g. <code>index.html</code>).</li>
          <li><strong>Step 4:</strong> View the HTML page in your favorite browser.</li>
        </ol>
      </div>
    `,
    codeExample: `<!DOCTYPE html>
<html>
<body>

  <h2>Learning with an Editor</h2>
  <p>Save this file as <code>index.html</code> and open it in any web browser.</p>

</body>
</html>`,
    exercise: {
      question: "Which file extension is used to save HTML documents?",
      codeSnippet: `my_webpage.<input class="exercise-input" data-answer="html" placeholder="ext">`,
      hint: "It stands for HyperText Markup Language, usually 4 letters.",
      explanation: "HTML documents must have the .html (or .htm) extension."
    }
  },
  {
    id: "html_basic",
    category: "HTML Tutorial",
    title: "HTML Basic Examples",
    shortTitle: "HTML Basic",
    description: "Don't worry if these examples use tags you have not learned yet.",
    content: `
      <h2>The &lt;!DOCTYPE&gt; Declaration</h2>
      <p>All HTML documents must start with a <code>&lt;!DOCTYPE&gt;</code> declaration.</p>
      <p>The declaration is not an HTML tag. It is an "information" to the browser about what document type to expect.</p>
      <p>In HTML5, the declaration is simple: <code>&lt;!DOCTYPE html&gt;</code>.</p>
      
      <h2>Core Building Blocks</h2>
      <ul>
        <li>The HTML document itself begins with <code>&lt;html&gt;</code> and ends with <code>&lt;/html&gt;</code>.</li>
        <li>The visible part of the HTML document is between <code>&lt;body&gt;</code> and <code>&lt;/body&gt;</code>.</li>
      </ul>
    `,
    codeExample: `<!DOCTYPE html>
<html>
<body>

  <h1>HTML Headings</h1>
  <p>HTML headings are defined with the &lt;h1&gt; to &lt;h6&gt; tags.</p>

  <h2>HTML Paragraphs</h2>
  <p>HTML paragraphs are defined with the &lt;p&gt; tag.</p>

  <h2>HTML Links</h2>
  <a href="https://www.w3schools.com">This is a link to W3Schools</a>

</body>
</html>`,
    exercise: {
      question: "What is the declaration that must appear on the very first line of an HTML5 document?",
      codeSnippet: `<<input class="exercise-input" data-answer="!DOCTYPE html" placeholder="declaration">>`,
      hint: "It starts with an exclamation mark and specifies the doctype.",
      explanation: "<!DOCTYPE html> tells the browser that this is an HTML5 document."
    }
  },
  {
    id: "html_elements",
    category: "HTML Tutorial",
    title: "HTML Elements",
    shortTitle: "HTML Elements",
    description: "An HTML element is defined by a start tag, some content, and an end tag.",
    content: `
      <h2>HTML Elements Anatomy</h2>
      <p>The HTML <strong>element</strong> is everything from the start tag to the end tag:</p>
      <div class="code-box-display">
        <code>&lt;tagname&gt; Content goes here... &lt;/tagname&gt;</code>
      </div>
      <table class="w3-table">
        <thead>
          <tr><th>Start tag</th><th>Element content</th><th>End tag</th></tr>
        </thead>
        <tbody>
          <tr><td>&lt;h1&gt;</td><td>My First Heading</td><td>&lt;/h1&gt;</td></tr>
          <tr><td>&lt;p&gt;</td><td>My first paragraph.</td><td>&lt;/p&gt;</td></tr>
          <tr><td>&lt;br&gt;</td><td><em>none (empty element)</em></td><td><em>none</em></td></tr>
        </tbody>
      </table>

      <h3>Nested HTML Elements</h3>
      <p>HTML elements can be nested (elements can contain other elements). All HTML documents consist of nested HTML elements.</p>
    `,
    codeExample: `<!DOCTYPE html>
<html>
<body>

  <h1>Nested Elements Example</h1>
  <p>This is a paragraph with <b>bold text</b> and <i>italic text</i> inside it.</p>

</body>
</html>`,
    exercise: {
      question: "Close the paragraph element properly:",
      codeSnippet: `<p>Learning HTML step by step<input class="exercise-input" data-answer="</p>" placeholder="closing tag">`,
      hint: "Closing tags start with a forward slash /.",
      explanation: "A paragraph element is closed with </p>."
    }
  },
  {
    id: "html_attributes",
    category: "HTML Tutorial",
    title: "HTML Attributes",
    shortTitle: "HTML Attributes",
    description: "HTML attributes provide additional information about HTML elements.",
    content: `
      <h2>HTML Attributes Rules</h2>
      <ul>
        <li>All HTML elements can have <strong>attributes</strong>.</li>
        <li>Attributes provide <strong>additional information</strong> about elements.</li>
        <li>Attributes are always specified in <strong>the start tag</strong>.</li>
        <li>Attributes usually come in name/value pairs like: <code>name="value"</code>.</li>
      </ul>

      <h3>Common Attributes:</h3>
      <ul>
        <li><code>href</code>: Specifies the URL of the page the link goes to.</li>
        <li><code>src</code>: Specifies the path to the image to be displayed.</li>
        <li><code>width</code> and <code>height</code>: Provide size information for images.</li>
        <li><code>alt</code>: Specifies an alternate text for an image.</li>
        <li><code>style</code>: Used to add styles such as color, font, size.</li>
        <li><code>title</code>: Defines extra tooltip information.</li>
      </ul>
    `,
    codeExample: `<!DOCTYPE html>
<html>
<body>

  <h2>The href and title Attributes</h2>
  <p>Hover over this link to see the title attribute tooltip:</p>
  <a href="https://www.w3schools.com" title="Go to W3Schools Official Website" target="_blank">
    Visit W3Schools (Opens in new tab)
  </a>

  <h2>The src and alt Attributes</h2>
  <img src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=300" alt="Laptop on desk" width="300" height="200" style="border-radius: 8px;">

</body>
</html>`,
    exercise: {
      question: "Add a tooltip attribute with the value 'W3Schools' to this paragraph:",
      codeSnippet: `<p <input class="exercise-input" data-answer="title" placeholder="attribute">="W3Schools">Hover over me</p>`,
      hint: "The attribute name that displays a tooltip on hover is title.",
      explanation: "The title attribute provides hover tooltip text."
    }
  },
  {
    id: "html_headings",
    category: "HTML Tutorial",
    title: "HTML Headings",
    shortTitle: "HTML Headings",
    description: "HTML headings are titles or subtitles that you want to display on a webpage.",
    content: `
      <h2>HTML Headings (&lt;h1&gt; to &lt;h6&gt;)</h2>
      <p>HTML headings are defined with the <code>&lt;h1&gt;</code> to <code>&lt;h6&gt;</code> tags.</p>
      <p><code>&lt;h1&gt;</code> defines the most important heading. <code>&lt;h6&gt;</code> defines the least important heading.</p>
      
      <div class="w3-panel w3-warning">
        <p><strong>Important:</strong> Use HTML headings for headings only. Don't use headings to make text BIG or bold. Search engines use the headings to index the structure and content of your web pages.</p>
      </div>
    `,
    codeExample: `<!DOCTYPE html>
<html>
<body>

  <h1>Heading 1 (Main Title)</h1>
  <h2>Heading 2 (Section Title)</h2>
  <h3>Heading 3 (Subsection)</h3>
  <h4>Heading 4</h4>
  <h5>Heading 5</h5>
  <h6>Heading 6 (Smallest)</h6>

</body>
</html>`,
    exercise: {
      question: "Which heading tag represents the smallest and least important heading?",
      codeSnippet: `<<input class="exercise-input" data-answer="h6" placeholder="tag">>Smallest Heading</<input class="exercise-input" data-answer="h6" placeholder="tag">>`,
      hint: "Headings range from 1 to 6.",
      explanation: "<h6> is the smallest standard HTML heading."
    }
  },
  {
    id: "html_paragraphs",
    category: "HTML Tutorial",
    title: "HTML Paragraphs",
    shortTitle: "HTML Paragraphs",
    description: "The HTML <p> element defines a paragraph.",
    content: `
      <h2>HTML Paragraphs</h2>
      <p>A paragraph always starts on a new line, and browsers automatically add some white space (a margin) before and after a paragraph.</p>
      
      <h3>HTML Line Breaks (&lt;br&gt;)</h3>
      <p>The HTML <code>&lt;br&gt;</code> element defines a line break. Use <code>&lt;br&gt;</code> if you want a line break (a new line) without starting a new paragraph.</p>

      <h3>The HTML &lt;pre&gt; Element</h3>
      <p>The HTML <code>&lt;pre&gt;</code> element defines preformatted text. The text inside a <code>&lt;pre&gt;</code> element is displayed in a fixed-width font, and it preserves both spaces and line breaks.</p>
    `,
    codeExample: `<!DOCTYPE html>
<html>
<body>

  <p>This is a paragraph.<br>This is on a new line inside the same paragraph.</p>
  <hr>
  <pre>
    My Bonnie lies over the ocean.
    My Bonnie lies over the sea.
    Oh, bring back my Bonnie to me.
  </pre>

</body>
</html>`,
    exercise: {
      question: "Insert a line break inside this sentence:",
      codeSnippet: `Hello World!<input class="exercise-input" data-answer="<br>" placeholder="break tag">How are you today?`,
      hint: "Use the br empty tag.",
      explanation: "<br> inserts a single line break."
    }
  },
  {
    id: "html_styles",
    category: "HTML Tutorial",
    title: "HTML Styles",
    shortTitle: "HTML Styles",
    description: "The HTML style attribute is used to add styles to an element, such as color, font, size, and more.",
    content: `
      <h2>The HTML Style Attribute</h2>
      <p>Setting the style of an HTML element can be done with the <code>style</code> attribute.</p>
      <p>The HTML style attribute has the following syntax:</p>
      <div class="code-box-display">
        <code>&lt;tagname style="property:value;"&gt;</code>
      </div>
      <p>The <em>property</em> is a CSS property. The <em>value</em> is a CSS value.</p>
      <ul>
        <li><code>background-color</code>: defines background color</li>
        <li><code>color</code>: defines text color</li>
        <li><code>font-family</code>: defines text font</li>
        <li><code>font-size</code>: defines text size</li>
        <li><code>text-align</code>: defines text alignment</li>
      </ul>
    `,
    codeExample: `<!DOCTYPE html>
<html>
<body style="background-color: #f0f4f8; font-family: sans-serif;">

  <h1 style="color: #04AA6D; text-align: center;">Styling with HTML</h1>
  <p style="color: #333; font-size: 18px; text-align: center;">
    This text is styled using the inline style attribute!
  </p>

</body>
</html>`,
    exercise: {
      question: "Set the text color of the paragraph to red using the style attribute:",
      codeSnippet: `<p style="<input class="exercise-input" data-answer="color:red;" placeholder="property:value;">">I am red</p>`,
      hint: "Use color:red;",
      explanation: "The CSS color property sets the foreground text color."
    }
  },
  {
    id: "html_formatting",
    category: "HTML Tutorial",
    title: "HTML Text Formatting",
    shortTitle: "HTML Formatting",
    description: "HTML contains several elements for defining text with a special meaning.",
    content: `
      <h2>HTML Formatting Elements</h2>
      <p>Formatting elements were designed to display special types of text:</p>
      <ul>
        <li><code>&lt;b&gt;</code> - Bold text</li>
        <li><code>&lt;strong&gt;</code> - Important text</li>
        <li><code>&lt;i&gt;</code> - Italic text</li>
        <li><code>&lt;em&gt;</code> - Emphasized text</li>
        <li><code>&lt;mark&gt;</code> - Marked/highlighted text</li>
        <li><code>&lt;small&gt;</code> - Smaller text</li>
        <li><code>&lt;del&gt;</code> - Deleted text</li>
        <li><code>&lt;ins&gt;</code> - Inserted text</li>
        <li><code>&lt;sub&gt;</code> - Subscript text (e.g. H<sub>2</sub>O)</li>
        <li><code>&lt;sup&gt;</code> - Superscript text (e.g. x<sup>2</sup>)</li>
      </ul>
    `,
    codeExample: `<!DOCTYPE html>
<html>
<body>

  <p><b>Bold text</b> and <strong>strongly important text</strong>.</p>
  <p><i>Italic text</i> and <em>emphasized text</em>.</p>
  <p>Do not forget to buy <mark>milk</mark> today.</p>
  <p>My favorite color is <del>blue</del> <ins>green</ins>.</p>
  <p>Chemical formula: H<sub>2</sub>O and Math: E = mc<sup>2</sup></p>

</body>
</html>`,
    exercise: {
      question: "Highlight the word 'important' using the HTML mark tag:",
      codeSnippet: `This is <<input class="exercise-input" data-answer="mark" placeholder="tag">>important</<input class="exercise-input" data-answer="mark" placeholder="tag">> text.`,
      hint: "Use mark tag.",
      explanation: "<mark> marks or highlights text with a yellow background."
    }
  },
  {
    id: "html_quotations",
    category: "HTML Tutorial",
    title: "HTML Quotation and Citation Elements",
    shortTitle: "HTML Quotations",
    description: "Learn how to use <blockquote>, <q>, <abbr>, <address>, <cite>, and <bdo>.",
    content: `
      <h2>HTML Quotation Elements</h2>
      <ul>
        <li><code>&lt;blockquote&gt;</code>: Defines a section that is quoted from another source (browsers usually indent blockquote elements).</li>
        <li><code>&lt;q&gt;</code>: Defines a short inline quotation (browsers usually insert quotation marks).</li>
        <li><code>&lt;abbr&gt;</code>: Defines an abbreviation or an acronym.</li>
        <li><code>&lt;address&gt;</code>: Defines contact information for the author/owner.</li>
        <li><code>&lt;cite&gt;</code>: Defines the title of a creative work.</li>
        <li><code>&lt;bdo&gt;</code>: Bi-Directional Override (controls text direction).</li>
      </ul>
    `,
    codeExample: `<!DOCTYPE html>
<html>
<body>

  <p>Here is a quote from WWF's website:</p>
  <blockquote cite="http://www.worldwildlife.org/who/index.html">
    For 60 years, WWF has been protecting the future of nature.
  </blockquote>

  <p>WWF's goal is to: <q>Build a future where people live in harmony with nature.</q></p>

  <p>The <abbr title="World Health Organization">WHO</abbr> was founded in 1948.</p>

</body>
</html>`,
    exercise: {
      question: "Which tag is used for an inline short quotation?",
      codeSnippet: `He said, <<input class="exercise-input" data-answer="q" placeholder="tag">>Welcome to coding!</<input class="exercise-input" data-answer="q" placeholder="tag">>`,
      hint: "It is a single letter tag representing quotation.",
      explanation: "<q> defines a short inline quotation."
    }
  },
  {
    id: "html_comments",
    category: "HTML Tutorial",
    title: "HTML Comments",
    shortTitle: "HTML Comments",
    description: "HTML comments are not displayed in the browser, but they can help document your HTML source code.",
    content: `
      <h2>HTML Comment Syntax</h2>
      <p>You can add comments to your HTML source by using the following syntax:</p>
      <div class="code-box-display">
        <code>&lt;!-- Write your comments here --&gt;</code>
      </div>
      <p>Notice that there is an exclamation point (<code>!</code>) in the start tag, but not in the end tag.</p>
      <p>Comments are great for debugging HTML, because you can comment out HTML lines of code, one at a time, to search for errors.</p>
    `,
    codeExample: `<!DOCTYPE html>
<html>
<body>

  <!-- This is a comment. It will not show up on the web page! -->
  <h1>Visible Heading</h1>
  <!-- <p>This paragraph is commented out and hidden.</p> -->
  <p>This paragraph is visible to the user.</p>

</body>
</html>`,
    exercise: {
      question: "Complete the comment syntax around 'Notes':",
      codeSnippet: `<input class="exercise-input" data-answer="<!--" placeholder="open"> Notes <input class="exercise-input" data-answer="-->" placeholder="close">`,
      hint: "Opens with <!-- and closes with -->",
      explanation: "<!-- comment --> is the HTML comment syntax."
    }
  },
  {
    id: "html_colors",
    category: "HTML Tutorial",
    title: "HTML Colors",
    shortTitle: "HTML Colors",
    description: "HTML colors are specified with predefined color names, or with RGB, HEX, HSL, RGBA, or HSLA values.",
    content: `
      <h2>Color Values in HTML</h2>
      <p>HTML colors can be specified using:</p>
      <ul>
        <li><strong>Color Names</strong>: 140 standard color names like <code>Tomato</code>, <code>DodgerBlue</code>, <code>MediumSeaGreen</code>, <code>SlateBlue</code>.</li>
        <li><strong>RGB Values</strong>: <code>rgb(red, green, blue)</code> where each parameter defines intensity between 0 and 255.</li>
        <li><strong>HEX Values</strong>: <code>#rrggbb</code> where rr, gg, bb are hexadecimal values between 00 and ff.</li>
        <li><strong>RGBA Values</strong>: <code>rgba(red, green, blue, alpha)</code> where alpha is opacity (0.0 to 1.0).</li>
      </ul>
    `,
    codeExample: `<!DOCTYPE html>
<html>
<body>

  <div style="background-color: Tomato; color: white; padding: 15px; margin-bottom: 10px;">Tomato (Name)</div>
  <div style="background-color: #04AA6D; color: white; padding: 15px; margin-bottom: 10px;">#04AA6D (W3Schools Green HEX)</div>
  <div style="background-color: rgb(60, 179, 113); color: white; padding: 15px; margin-bottom: 10px;">rgb(60, 179, 113) (RGB)</div>
  <div style="background-color: rgba(255, 99, 71, 0.6); color: white; padding: 15px;">rgba(255, 99, 71, 0.6) (Transparent RGBA)</div>

</body>
</html>`,
    exercise: {
      question: "Which hexadecimal code represents the iconic W3Schools green color?",
      codeSnippet: `background-color: <input class="exercise-input" data-answer="#04AA6D" placeholder="#hex">;`,
      hint: "#04AA6D",
      explanation: "#04AA6D is the canonical W3Schools primary brand color."
    }
  },
  {
    id: "html_css",
    category: "HTML Tutorial",
    title: "HTML CSS",
    shortTitle: "HTML CSS",
    description: "CSS stands for Cascading Style Sheets. CSS saves a lot of work. It can control the layout of multiple web pages all at once.",
    content: `
      <h2>Three Ways to Insert CSS into HTML</h2>
      <ol>
        <li><strong>Inline</strong> - by using the <code>style</code> attribute inside HTML elements.</li>
        <li><strong>Internal</strong> - by using a <code>&lt;style&gt;</code> element in the <code>&lt;head&gt;</code> section.</li>
        <li><strong>External</strong> - by using a <code>&lt;link&gt;</code> element to link to an external CSS file.</li>
      </ol>
      <p>The most common way to add CSS is to keep the styles in external CSS files.</p>
    `,
    codeExample: `<!DOCTYPE html>
<html>
<head>
  <style>
    body {
      font-family: Arial, sans-serif;
      margin: 20px;
    }
    .w3-card {
      border: 1px solid #ddd;
      border-radius: 8px;
      padding: 16px;
      box-shadow: 0 4px 8px rgba(0,0,0,0.1);
      max-width: 350px;
    }
    .w3-btn {
      background-color: #04AA6D;
      color: white;
      border: none;
      padding: 10px 16px;
      border-radius: 4px;
      cursor: pointer;
    }
  </style>
</head>
<body>

  <div class="w3-card">
    <h2>Internal CSS Example</h2>
    <p>This card is styled with internal CSS in the &lt;head&gt; element.</p>
    <button class="w3-btn">Click Me</button>
  </div>

</body>
</html>`,
    exercise: {
      question: "Which tag is used inside the <head> to write internal CSS?",
      codeSnippet: `<<input class="exercise-input" data-answer="style" placeholder="tag">> body { background: white; } </<input class="exercise-input" data-answer="style" placeholder="tag">>`,
      hint: "Use style tag.",
      explanation: "The <style> element is used to define internal CSS."
    }
  },
  {
    id: "html_links",
    category: "HTML Tutorial",
    title: "HTML Links",
    shortTitle: "HTML Links",
    description: "HTML links are hyperlinks. You can click on a link and jump to another document.",
    content: `
      <h2>HTML Links - Syntax</h2>
      <p>The HTML <code>&lt;a&gt;</code> tag defines a hyperlink. It has the following syntax:</p>
      <div class="code-box-display">
        <code>&lt;a href="url"&gt;link text&lt;/a&gt;</code>
      </div>
      <p>The most important attribute of the <code>&lt;a&gt;</code> element is the <code>href</code> attribute, which indicates the link's destination.</p>

      <h3>The target Attribute</h3>
      <p>By default, the linked page will be displayed in the current browser window. To change this, you must specify another target:</p>
      <ul>
        <li><code>_self</code> - Default. Opens the document in the same window/tab.</li>
        <li><code>_blank</code> - Opens the document in a new window or tab.</li>
        <li><code>_parent</code> - Opens the document in the parent frame.</li>
        <li><code>_top</code> - Opens the document in the full body of the window.</li>
      </ul>
    `,
    codeExample: `<!DOCTYPE html>
<html>
<body>

  <h2>Link Examples</h2>
  <!-- External link opening in new tab -->
  <p><a href="https://www.w3schools.com" target="_blank">Visit W3Schools (New Tab)</a></p>

  <!-- Button style link -->
  <a href="#section2" style="background-color: #04AA6D; color: white; padding: 8px 16px; text-decoration: none; border-radius: 4px; display: inline-block;">Jump to Section 2</a>

  <div style="height: 200px;"></div>
  <h3 id="section2">Section 2 Reached!</h3>
  <p>You navigated here using an internal bookmark anchor link.</p>

</body>
</html>`,
    exercise: {
      question: "Which target value opens a link in a new browser tab or window?",
      codeSnippet: `<a href="https://example.com" target="<input class="exercise-input" data-answer="_blank" placeholder="_target">">Open</a>`,
      hint: "It starts with an underscore followed by blank.",
      explanation: "target=\"_blank\" opens the link in a new tab."
    }
  },
  {
    id: "html_images",
    category: "HTML Tutorial",
    title: "HTML Images",
    shortTitle: "HTML Images",
    description: "Images can improve the design and the appearance of a web page.",
    content: `
      <h2>HTML Images Syntax</h2>
      <p>The HTML <code>&lt;img&gt;</code> tag is used to embed an image in a web page.</p>
      <p>Images are not technically inserted into a web page; images are linked to web pages. The <code>&lt;img&gt;</code> tag creates a holding space for the referenced image.</p>
      <p>The <code>&lt;img&gt;</code> tag is empty, it contains attributes only, and does not have a closing tag.</p>
      <p>Two required attributes are:</p>
      <ul>
        <li><code>src</code> - Specifies the path to the image</li>
        <li><code>alt</code> - Specifies an alternate text for the image if the image cannot be displayed</li>
      </ul>
    `,
    codeExample: `<!DOCTYPE html>
<html>
<body>

  <h2>Embedding Images</h2>
  <img src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400" 
       alt="Code on Computer Screen" 
       width="400" 
       height="260"
       style="border-radius: 8px; box-shadow: 0 4px 10px rgba(0,0,0,0.15);">
  <p><em>Coding workspace image with alt text and fixed dimensions.</em></p>

</body>
</html>`,
    exercise: {
      question: "Specify the alternate text attribute for an image:",
      codeSnippet: `<img src="cat.jpg" <input class="exercise-input" data-answer="alt" placeholder="attr">="A cute cat">`,
      hint: "3 letters: alt",
      explanation: "The alt attribute provides alternative text for accessibility and broken images."
    }
  },
  {
    id: "html_tables",
    category: "HTML Tutorial",
    title: "HTML Tables",
    shortTitle: "HTML Tables",
    description: "HTML tables allow web developers to arrange data into rows and columns.",
    content: `
      <h2>HTML Table Tags</h2>
      <table class="w3-table">
        <thead>
          <tr><th>Tag</th><th>Description</th></tr>
        </thead>
        <tbody>
          <tr><td><code>&lt;table&gt;</code></td><td>Defines a table</td></tr>
          <tr><td><code>&lt;th&gt;</code></td><td>Defines a header cell in a table (bold and centered by default)</td></tr>
          <tr><td><code>&lt;tr&gt;</code></td><td>Defines a row in a table</td></tr>
          <tr><td><code>&lt;td&gt;</code></td><td>Defines a cell in a table (regular and left-aligned)</td></tr>
          <tr><td><code>&lt;caption&gt;</code></td><td>Defines a table caption</td></tr>
          <tr><td><code>&lt;colgroup&gt;</code></td><td>Specifies a group of one or more columns in a table for formatting</td></tr>
        </tbody>
      </table>

      <h3>Colspan &amp; Rowspan</h3>
      <p>To make a cell span more than one column, use the <code>colspan</code> attribute. For multiple rows, use <code>rowspan</code>.</p>
    `,
    codeExample: `<!DOCTYPE html>
<html>
<head>
  <style>
    table {
      font-family: arial, sans-serif;
      border-collapse: collapse;
      width: 100%;
    }
    td, th {
      border: 1px solid #dddddd;
      text-align: left;
      padding: 8px;
    }
    tr:nth-child(even) {
      background-color: #f2f2f2;
    }
    th {
      background-color: #04AA6D;
      color: white;
    }
  </style>
</head>
<body>

  <h2>HTML Table Example</h2>
  <table>
    <tr>
      <th>Company</th>
      <th>Contact</th>
      <th>Country</th>
    </tr>
    <tr>
      <td>Alfreds Futterkiste</td>
      <td>Maria Anders</td>
      <td>Germany</td>
    </tr>
    <tr>
      <td>Centro comercial Moctezuma</td>
      <td>Francisco Chang</td>
      <td>Mexico</td>
    </tr>
    <tr>
      <td>Ernst Handel</td>
      <td>Roland Mendel</td>
      <td>Austria</td>
    </tr>
  </table>

</body>
</html>`,
    exercise: {
      question: "Which tag defines a table row?",
      codeSnippet: `<<input class="exercise-input" data-answer="tr" placeholder="tag">> <td>Data</td> </<input class="exercise-input" data-answer="tr" placeholder="tag">>`,
      hint: "tr stands for table row.",
      explanation: "<tr> defines a row in an HTML table."
    }
  },
  {
    id: "html_lists",
    category: "HTML Tutorial",
    title: "HTML Lists",
    shortTitle: "HTML Lists",
    description: "HTML lists allow web developers to group a set of related items in lists.",
    content: `
      <h2>Types of HTML Lists</h2>
      <ol>
        <li><strong>Unordered HTML List (&lt;ul&gt;)</strong>: An unordered list starts with the <code>&lt;ul&gt;</code> tag. Each list item starts with the <code>&lt;li&gt;</code> tag. The list items will be marked with bullets (small black circles) by default.</li>
        <li><strong>Ordered HTML List (&lt;ol&gt;)</strong>: An ordered list starts with the <code>&lt;ol&gt;</code> tag. Each list item starts with the <code>&lt;li&gt;</code> tag. The list items will be marked with numbers by default.</li>
        <li><strong>HTML Description Lists (&lt;dl&gt;)</strong>: A list of terms with a description of each term (<code>&lt;dt&gt;</code> for term, <code>&lt;dd&gt;</code> for description).</li>
      </ol>
    `,
    codeExample: `<!DOCTYPE html>
<html>
<body>

  <h2>Unordered List</h2>
  <ul>
    <li>Coffee</li>
    <li>Tea</li>
    <li>Milk</li>
  </ul>

  <h2>Ordered List</h2>
  <ol type="A">
    <li>First step</li>
    <li>Second step</li>
    <li>Third step</li>
  </ol>

  <h2>Description List</h2>
  <dl>
    <dt>HTML</dt>
    <dd>- HyperText Markup Language</dd>
    <dt>CSS</dt>
    <dd>- Cascading Style Sheets</dd>
  </dl>

</body>
</html>`,
    exercise: {
      question: "What tag is used for each individual list item inside <ul> or <ol>?",
      codeSnippet: `<ul><<input class="exercise-input" data-answer="li" placeholder="tag">>Item 1</<input class="exercise-input" data-answer="li" placeholder="tag">></ul>`,
      hint: "li stands for list item.",
      explanation: "<li> defines a list item."
    }
  },
  {
    id: "html_block_inline",
    category: "HTML Tutorial",
    title: "HTML Block and Inline Elements",
    shortTitle: "HTML Block & Inline",
    description: "Every HTML element has a default display value, depending on what type of element it is.",
    content: `
      <h2>Block-level Elements</h2>
      <p>A block-level element always starts on a new line and takes up the full width available (stretches out to the left and right as far as it can).</p>
      <p>Two very common block elements are: <code>&lt;p&gt;</code> and <code>&lt;div&gt;</code>. Others include <code>&lt;h1&gt;-&lt;h6&gt;</code>, <code>&lt;form&gt;</code>, <code>&lt;header&gt;</code>, <code>&lt;footer&gt;</code>, <code>&lt;section&gt;</code>.</p>

      <h2>Inline Elements</h2>
      <p>An inline element does not start on a new line and only takes up as much width as necessary.</p>
      <p>Common inline elements are: <code>&lt;span&gt;</code>, <code>&lt;a&gt;</code>, <code>&lt;img&gt;</code>, <code>&lt;b&gt;</code>, <code>&lt;em&gt;</code>.</p>
    `,
    codeExample: `<!DOCTYPE html>
<html>
<body>

  <!-- Block element example -->
  <div style="background-color: #04AA6D; color: white; padding: 10px;">
    I am a &lt;div&gt; (block-level). I take up the full width!
  </div>

  <p>
    This is regular text with an
    <span style="background-color: yellow; color: black; font-weight: bold; padding: 2px 6px;">
      inline &lt;span&gt; element
    </span>
    inside it.
  </p>

</body>
</html>`,
    exercise: {
      question: "Which generic element is an inline container used to style parts of a text?",
      codeSnippet: `<<input class="exercise-input" data-answer="span" placeholder="tag">>Styled Text</<input class="exercise-input" data-answer="span" placeholder="tag">>`,
      hint: "It is span.",
      explanation: "<span> is an inline container."
    }
  },
  {
    id: "html_classes_id",
    category: "HTML Tutorial",
    title: "HTML Classes and Id",
    shortTitle: "HTML Class & Id",
    description: "The class and id attributes are used to specify CSS styles and JavaScript targets for HTML elements.",
    content: `
      <h2>The HTML class Attribute</h2>
      <p>The <code>class</code> attribute is often used to point to a class name in a style sheet. Multiple HTML elements can share the same class.</p>
      <p>In CSS, to select elements with a specific class, write a period (<code>.</code>) character, followed by the name of the class.</p>

      <h2>The HTML id Attribute</h2>
      <p>The <code>id</code> attribute is used to specify a unique id for an HTML element.</p>
      <p>You cannot have more than one element with the same id in an HTML document!</p>
      <p>In CSS, to select an element with a specific id, write a hash (<code>#</code>) character, followed by the id.</p>
    `,
    codeExample: `<!DOCTYPE html>
<html>
<head>
  <style>
    /* Class selector */
    .city {
      background-color: tomato;
      color: white;
      padding: 10px;
      margin: 10px 0;
      border-radius: 4px;
    }
    /* ID selector */
    #special-city {
      background-color: #04AA6D;
    }
  </style>
</head>
<body>

  <div class="city">London</div>
  <div class="city">Paris</div>
  <div class="city" id="special-city">Tokyo (Targeted by ID)</div>

</body>
</html>`,
    exercise: {
      question: "Which CSS symbol is used to select an element by its ID?",
      codeSnippet: `<input class="exercise-input" data-answer="#" placeholder="symbol">myHeader { color: blue; }`,
      hint: "It is the hash / pound symbol.",
      explanation: "# is used for IDs, and . (dot) is used for classes."
    }
  },
  {
    id: "html_iframes",
    category: "HTML Tutorial",
    title: "HTML Iframes",
    shortTitle: "HTML Iframes",
    description: "An HTML iframe is used to display a web page within a web page.",
    content: `
      <h2>HTML Iframe Syntax</h2>
      <p>The HTML <code>&lt;iframe&gt;</code> tag specifies an inline frame.</p>
      <div class="code-box-display">
        <code>&lt;iframe src="url" title="description" width="300" height="200"&gt;&lt;/iframe&gt;</code>
      </div>
      <p>Always include a <code>title</code> attribute (for screen readers).</p>
      <p>An iframe can also be used as the target frame for a link.</p>
    `,
    codeExample: `<!DOCTYPE html>
<html>
<body>

  <h2>Iframe Example</h2>
  <iframe srcdoc="<h3 style='color:#04AA6D;'>Hello from inside an embedded iframe!</h3><p>Self-contained document sandbox.</p>" 
          title="Demo Iframe" 
          width="100%" 
          height="150" 
          style="border: 2px solid #04AA6D; border-radius: 6px;">
  </iframe>

</body>
</html>`,
    exercise: {
      question: "What attribute specifies the URL or source of the document to embed in an iframe?",
      codeSnippet: `<iframe <input class="exercise-input" data-answer="src" placeholder="attribute">="demo.html"></iframe>`,
      hint: "Same attribute used in img tags.",
      explanation: "src specifies the source location for the iframe."
    }
  },
  {
    id: "html_javascript",
    category: "HTML Tutorial",
    title: "HTML JavaScript",
    shortTitle: "HTML JavaScript",
    description: "JavaScript makes HTML pages more dynamic and interactive.",
    content: `
      <h2>The HTML &lt;script&gt; Tag</h2>
      <p>The <code>&lt;script&gt;</code> tag is used to define a client-side script (JavaScript).</p>
      <p>The <code>&lt;script&gt;</code> element either contains script statements, or it points to an external script file through the <code>src</code> attribute.</p>

      <h2>The HTML &lt;noscript&gt; Tag</h2>
      <p>The <code>&lt;noscript&gt;</code> tag is used to provide an alternate content for users that have disabled scripts in their browser or have a browser that doesn't support script.</p>
    `,
    codeExample: `<!DOCTYPE html>
<html>
<body>

  <h2>Interactive JavaScript in HTML</h2>
  <p id="demo">JavaScript can change HTML content.</p>

  <button type="button" 
          onclick="document.getElementById('demo').innerHTML = 'Hello JavaScript from W3Schools!';"
          style="background:#04AA6D; color:white; border:none; padding:10px 16px; border-radius:4px; cursor:pointer;">
    Click to Change Text!
  </button>

</body>
</html>`,
    exercise: {
      question: "Which tag is used to insert client-side scripts into an HTML document?",
      codeSnippet: `<<input class="exercise-input" data-answer="script" placeholder="tag">> alert('Hello'); </<input class="exercise-input" data-answer="script" placeholder="tag">>`,
      hint: "script tag",
      explanation: "<script> is used to run JavaScript code in HTML."
    }
  },
  {
    id: "html_head",
    category: "HTML Tutorial",
    title: "HTML Head Elements",
    shortTitle: "HTML Head",
    description: "The HTML <head> element is a container for metadata (data about data).",
    content: `
      <h2>The HTML &lt;head&gt; Element</h2>
      <p>The <code>&lt;head&gt;</code> element contains metadata. Metadata is not displayed, but it defines the document title, character set, styles, scripts, and other meta information.</p>
      <ul>
        <li><code>&lt;title&gt;</code> - Defines the title of the document in browser tab.</li>
        <li><code>&lt;style&gt;</code> - Defines internal CSS styles.</li>
        <li><code>&lt;link&gt;</code> - Links to external stylesheets or favicon.</li>
        <li><code>&lt;meta&gt;</code> - Defines character set, viewport, page description, keywords.</li>
        <li><code>&lt;script&gt;</code> - Embeds client-side scripts.</li>
        <li><code>&lt;base&gt;</code> - Specifies the base URL for all relative URLs in a page.</li>
      </ul>
    `,
    codeExample: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="Free Web tutorials">
  <meta name="keywords" content="HTML, CSS, JavaScript">
  <meta name="author" content="W3Schools">
  <title>Understanding HTML Head</title>
</head>
<body>

  <h1>Inspect the Head Element</h1>
  <p>The elements inside &lt;head&gt; provide crucial metadata for browsers and search engines.</p>

</body>
</html>`,
    exercise: {
      question: "Which element inside <head> sets the title of the webpage shown on the browser tab?",
      codeSnippet: `<<input class="exercise-input" data-answer="title" placeholder="tag">>My Web Site</<input class="exercise-input" data-answer="title" placeholder="tag">>`,
      hint: "It is the title element.",
      explanation: "<title> defines the title of the page."
    }
  },
  {
    id: "html_semantics",
    category: "HTML Tutorial",
    title: "HTML Semantic Elements",
    shortTitle: "HTML Semantics",
    description: "Semantic elements = elements with a meaning.",
    content: `
      <h2>What are Semantic Elements?</h2>
      <p>A semantic element clearly describes its meaning to both the browser and the developer.</p>
      <p>Examples of <strong>non-semantic</strong> elements: <code>&lt;div&gt;</code> and <code>&lt;span&gt;</code> - Tells nothing about its content.</p>
      <p>Examples of <strong>semantic</strong> elements: <code>&lt;form&gt;</code>, <code>&lt;table&gt;</code>, and <code>&lt;article&gt;</code> - Clearly defines its content.</p>

      <h3>HTML5 Semantic Layout Tags:</h3>
      <ul>
        <li><code>&lt;header&gt;</code> - Specifies a header for a document or section.</li>
        <li><code>&lt;nav&gt;</code> - Defines a set of navigation links.</li>
        <li><code>&lt;section&gt;</code> - Defines a standalone section in a document.</li>
        <li><code>&lt;article&gt;</code> - Defines independent, self-contained content.</li>
        <li><code>&lt;aside&gt;</code> - Defines content aside from the page content (like a sidebar).</li>
        <li><code>&lt;footer&gt;</code> - Defines a footer for a document or section.</li>
        <li><code>&lt;main&gt;</code> - Specifies the main content of a document.</li>
      </ul>
    `,
    codeExample: `<!DOCTYPE html>
<html>
<head>
  <style>
    header, footer { background: #04AA6D; color: white; padding: 15px; text-align: center; }
    nav { background: #333; color: white; padding: 10px; }
    nav a { color: white; margin-right: 15px; text-decoration: none; }
    section { padding: 20px; background: #f9f9f9; }
    aside { background: #e9ecef; padding: 15px; margin-top: 10px; font-style: italic; }
  </style>
</head>
<body>

  <header>
    <h1>Website Semantic Header</h1>
  </header>

  <nav>
    <a href="#home">Home</a>
    <a href="#about">About</a>
    <a href="#contact">Contact</a>
  </nav>

  <section>
    <h2>Main Article</h2>
    <p>Semantic tags improve accessibility, readability, and SEO ranking.</p>
    <aside>Fun fact: HTML5 was officially released in 2014!</aside>
  </section>

  <footer>
    <p>Copyright © 2026 W3Schools Clone</p>
  </footer>

</body>
</html>`,
    exercise: {
      question: "Which semantic tag is used for the primary navigation links of a website?",
      codeSnippet: `<<input class="exercise-input" data-answer="nav" placeholder="tag">> <a href="/">Home</a> </<input class="exercise-input" data-answer="nav" placeholder="tag">>`,
      hint: "nav is short for navigation.",
      explanation: "<nav> defines navigation links."
    }
  },
  {
    id: "html_favicon",
    category: "HTML Tutorial",
    title: "HTML Favicon",
    shortTitle: "HTML Favicon",
    description: "A favicon is a small image displayed next to the page title in the browser tab.",
    content: `<h2>What is a Favicon?</h2>
      <p>A <strong>favicon</strong> (favorite icon) is an image displayed in the browser tab next to your document title.</p>
      <p>Favicons help users identify your website when multiple tabs are open in their browser.</p>
      <div class="w3-panel w3-info">
        <h3>How to Add a Favicon in HTML:</h3>
        <p>You can use any image you like as your favicon. You can also create your own favicon on sites like favicon.cc.</p>
        <p>A favicon image is inserted inside the <code>&lt;head&gt;</code> element using the <code>&lt;link&gt;</code> tag:</p>
        <pre>&lt;link rel="icon" type="image/x-icon" href="/images/favicon.ico"&gt;</pre>
      </div>
      <h2>Supported Favicon File Formats</h2>
      <ul>
        <li><code>ICO</code> - image/x-icon (supported by all browsers)</li>
        <li><code>PNG</code> - image/png</li>
        <li><code>SVG</code> - image/svg+xml</li>
        <li><code>GIF</code> - image/gif</li>
      </ul>`,
    codeExample: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Favicon Example - W3Schools</title>
  <link rel="icon" type="image/x-icon" href="https://www.w3schools.com/favicon.ico">
  <style>
    body { font-family: Arial, sans-serif; padding: 20px; text-align: center; }
    .box { background: #e8f5e9; border: 2px dashed #04AA6D; border-radius: 8px; padding: 30px; margin: 20px auto; max-width: 500px; }
  </style>
</head>
<body>

  <h1>HTML Favicon Tutorial</h1>
  <div class="box">
    <p>Look at the browser tab above! The icon next to the title is the favicon.</p>
    <p>Code used inside &lt;head&gt;:</p>
    <code>&lt;link rel="icon" type="image/x-icon" href="favicon.ico"&gt;</code>
  </div>

</body>
</html>`,
    exercise: {
      question: "Which value should the rel attribute have when adding a favicon?",
      codeSnippet: `<link rel="<input class="exercise-input" data-answer="icon" placeholder="rel">" type="image/x-icon" href="favicon.ico">`,
      hint: "The value tells the browser that this link represents an icon.",
      explanation: "rel=\"icon\" defines the relationship between the HTML document and the favicon."
    }
  },
  {
    id: "html_page_title",
    category: "HTML Tutorial",
    title: "HTML Page Title",
    shortTitle: "HTML Title",
    description: "The HTML title element defines the title of the document and is required in all HTML documents.",
    content: `<h2>The HTML &lt;title&gt; Element</h2>
      <p>The <code>&lt;title&gt;</code> tag defines the title of your HTML document.</p>
      <p>The title must be text-only, and it is shown in the browser's title bar or in the page's tab.</p>
      <div class="w3-panel w3-note">
        <h3>Why is the Page Title Important?</h3>
        <ul>
          <li>Defines a title in the browser toolbar or tab</li>
          <li>Provides a title for the page when it is added to favorites/bookmarks</li>
          <li>Displays a title for the page in search-engine results (SEO)</li>
        </ul>
      </div>
      <p>Search engine algorithms use the contents of the <code>&lt;title&gt;</code> tag when determining the order when listing pages in search results.</p>`,
    codeExample: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Mastering HTML - W3Schools Official Guide</title>
  <style>
    body { font-family: 'Segoe UI', Tahoma, sans-serif; padding: 25px; line-height: 1.6; }
    .badge { background: #04AA6D; color: white; padding: 4px 8px; border-radius: 4px; font-size: 13px; }
  </style>
</head>
<body>

  <h1>HTML Title Tag <span class="badge">SEO Essential</span></h1>
  <p>The title of this page in your browser tab is: <strong>Mastering HTML - W3Schools Official Guide</strong></p>
  <p>Always write accurate and meaningful page titles to improve search engine rankings.</p>

</body>
</html>`,
    exercise: {
      question: "Which HTML tag is used inside <head> to specify the document title?",
      codeSnippet: `<<input class="exercise-input" data-answer="title" placeholder="tag">>My Cool Webpage</<input class="exercise-input" data-answer="title" placeholder="tag">>`,
      hint: "It literally spells out title.",
      explanation: "The <title> element specifies a title for the HTML page."
    }
  },
  {
    id: "html_table_sizes",
    category: "HTML Tutorial",
    title: "HTML Table Sizes and Alignment",
    shortTitle: "Table Sizes",
    description: "Set the size of HTML tables and individual columns or rows using CSS width and height.",
    content: `<h2>HTML Table Width and Height</h2>
      <p>You can set the width and height of an HTML table using the CSS <code>width</code> and <code>height</code> properties.</p>
      <div class="w3-panel w3-info">
        <h3>Setting Table Dimensions:</h3>
        <ul>
          <li><code>width: 100%;</code> makes the table fill the entire width of its container.</li>
          <li>Setting <code>width</code> on a <code>&lt;th&gt;</code> sets the width for that specific column.</li>
          <li>Setting <code>height</code> on a <code>&lt;tr&gt;</code> sets the height for that specific row.</li>
        </ul>
      </div>
      <h2>Table Text Alignment</h2>
      <p>By default, content inside <code>&lt;th&gt;</code> elements is centered and bold. Content inside <code>&lt;td&gt;</code> elements is left-aligned.</p>
      <p>Use <code>text-align: center;</code> or <code>text-align: right;</code> to adjust horizontal alignment, and <code>vertical-align: bottom;</code> for vertical alignment.</p>`,
    codeExample: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>HTML Table Sizes</title>
  <style>
    table { width: 100%; border-collapse: collapse; font-family: sans-serif; }
    th, td { border: 1px solid #ddd; padding: 12px; }
    th { background-color: #04AA6D; color: white; text-align: left; }
    th.col-id { width: 10%; text-align: center; }
    th.col-desc { width: 60%; }
    th.col-price { width: 30%; text-align: right; }
    td.price { text-align: right; font-weight: bold; }
    td.center { text-align: center; }
  </style>
</head>
<body>

  <h2>Custom Table Column Sizes</h2>
  <table>
    <tr>
      <th class="col-id">#</th>
      <th class="col-desc">Course Name</th>
      <th class="col-price">Fee</th>
    </tr>
    <tr>
      <td class="center">1</td>
      <td>HTML5 Complete Developer Bootcamp</td>
      <td class="price">$0.00 (Free)</td>
    </tr>
    <tr>
      <td class="center">2</td>
      <td>Web Accessibility & Semantic HTML</td>
      <td class="price">$0.00 (Free)</td>
    </tr>
  </table>

</body>
</html>`,
    exercise: {
      question: "Which CSS property specifies the horizontal dimension of an HTML table column?",
      codeSnippet: `<th style="<input class="exercise-input" data-answer="width" placeholder="property">: 70%;">Description</th>`,
      hint: "width or height?",
      explanation: "The width property sets the width of an element."
    }
  },
  {
    id: "html_table_colgroup",
    category: "HTML Tutorial",
    title: "HTML Table Colgroup and Spanning",
    shortTitle: "Table Colgroup",
    description: "The colgroup element specifies a group of one or more columns in a table for formatting.",
    content: `<h2>The HTML &lt;colgroup&gt; Element</h2>
      <p>The <code>&lt;colgroup&gt;</code> element is used to style specific columns of a table without having to repeat styles on every cell.</p>
      <p>The <code>&lt;colgroup&gt;</code> tag should be placed as a direct child of a <code>&lt;table&gt;</code>, before any other table elements (like <code>&lt;thead&gt;</code>, <code>&lt;tr&gt;</code>, etc.).</p>
      <div class="w3-panel w3-info">
        <h3>Colspan and Rowspan Attributes:</h3>
        <ul>
          <li><code>colspan="n"</code>: makes a table cell span across multiple columns.</li>
          <li><code>rowspan="n"</code>: makes a table cell span across multiple rows.</li>
        </ul>
      </div>`,
    codeExample: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>HTML Colgroup and Spanning</title>
  <style>
    table { width: 100%; border-collapse: collapse; font-family: Arial, sans-serif; }
    th, td { border: 1px solid #999; padding: 10px; text-align: center; }
    th { background: #333; color: white; }
    .highlight { background-color: #e8f5e9; }
  </style>
</head>
<body>

  <h2>Table with Colgroup and Colspan</h2>
  <table>
    <colgroup>
      <col span="1" style="background-color: #f2f2f2;">
      <col span="2" class="highlight">
    </colgroup>
    <tr>
      <th>Day</th>
      <th colspan="2">Weekend Schedule</th>
    </tr>
    <tr>
      <td>Saturday</td>
      <td>Morning Walk</td>
      <td>Coding Practice</td>
    </tr>
    <tr>
      <td>Sunday</td>
      <td colspan="2">Relax & Reading (All Day)</td>
    </tr>
  </table>

</body>
</html>`,
    exercise: {
      question: "Which attribute makes a table cell span across two columns?",
      codeSnippet: `<td <input class="exercise-input" data-answer="colspan" placeholder="attribute">="2">Spans two columns</td>`,
      hint: "Column span abbreviation.",
      explanation: "colspan defines the number of columns a cell should span."
    }
  },
  {
    id: "html_unordered_lists",
    category: "HTML Tutorial",
    title: "HTML Unordered Lists",
    shortTitle: "Unordered Lists",
    description: "An unordered list starts with the ul tag. Each list item starts with the li tag.",
    content: `<h2>HTML Unordered Lists</h2>
      <p>An unordered list starts with the <code>&lt;ul&gt;</code> tag. Each list item starts with the <code>&lt;li&gt;</code> tag.</p>
      <p>The list items will be marked with bullets (small black circles) by default.</p>
      <div class="w3-panel w3-info">
        <h3>Choose List Item Marker (CSS list-style-type):</h3>
        <ul>
          <li><code>disc</code> - Sets the list item marker to a bullet (default)</li>
          <li><code>circle</code> - Sets the list item marker to a circle</li>
          <li><code>square</code> - Sets the list item marker to a square</li>
          <li><code>none</code> - The list items will not be marked</li>
        </ul>
      </div>`,
    codeExample: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>HTML Unordered Lists</title>
  <style>
    body { font-family: sans-serif; padding: 20px; }
    ul.square { list-style-type: square; }
    ul.circle { list-style-type: circle; }
  </style>
</head>
<body>

  <h2>Unordered List with Circle Markers</h2>
  <ul class="circle">
    <li>HTML5 Structure</li>
    <li>CSS3 Styling</li>
    <li>JavaScript Interactivity</li>
  </ul>

  <h2>Unordered List with Square Markers</h2>
  <ul class="square">
    <li>Chrome</li>
    <li>Firefox</li>
    <li>Safari</li>
    <li>Edge</li>
  </ul>

</body>
</html>`,
    exercise: {
      question: "Which CSS list-style-type value removes bullets from an unordered list?",
      codeSnippet: `<ul style="list-style-type: <input class="exercise-input" data-answer="none" placeholder="value">;">`,
      hint: "none of the markers.",
      explanation: "list-style-type: none removes all default markers from list items."
    }
  },
  {
    id: "html_ordered_lists",
    category: "HTML Tutorial",
    title: "HTML Ordered Lists",
    shortTitle: "Ordered Lists",
    description: "An ordered list starts with the ol tag. List items are marked with numbers or letters.",
    content: `<h2>HTML Ordered Lists</h2>
      <p>An ordered list starts with the <code>&lt;ol&gt;</code> tag. Each list item starts with the <code>&lt;li&gt;</code> tag.</p>
      <p>The list items will be marked with numbers by default.</p>
      <div class="w3-panel w3-info">
        <h3>The type Attribute:</h3>
        <ul>
          <li><code>type="1"</code> - The list items will be numbered with numbers (default)</li>
          <li><code>type="A"</code> - The list items will be numbered with uppercase letters</li>
          <li><code>type="a"</code> - The list items will be numbered with lowercase letters</li>
          <li><code>type="I"</code> - The list items will be numbered with uppercase roman numbers</li>
          <li><code>type="i"</code> - The list items will be numbered with lowercase roman numbers</li>
        </ul>
      </div>
      <h2>List Counting Control</h2>
      <p>By default, an ordered list will start counting from 1. Use the <code>start</code> attribute to start counting from a specified number, or <code>reversed</code> to count down.</p>`,
    codeExample: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>HTML Ordered Lists</title>
  <style>
    body { font-family: Arial, sans-serif; padding: 20px; }
  </style>
</head>
<body>

  <h2>Numbered with Roman Numerals</h2>
  <ol type="I">
    <li>Phase One: HTML Architecture</li>
    <li>Phase Two: CSS Layout & Flexbox</li>
    <li>Phase Three: Interactive JavaScript</li>
  </ol>

  <h2>Counting Down with Reversed</h2>
  <ol start="5" reversed>
    <li>Liftoff countdown: 5</li>
    <li>Countdown: 4</li>
    <li>Countdown: 3</li>
    <li>Countdown: 2</li>
    <li>Countdown: 1</li>
  </ol>

</body>
</html>`,
    exercise: {
      question: "Which attribute of <ol> specifies that items should be marked with uppercase letters?",
      codeSnippet: `<ol <input class="exercise-input" data-answer="type" placeholder="attribute">="A">`,
      hint: "The type attribute defines the numbering style.",
      explanation: "type=\"A\" numbers ordered list items with uppercase letters (A, B, C...)."
    }
  },
  {
    id: "html_description_lists",
    category: "HTML Tutorial",
    title: "HTML Description Lists",
    shortTitle: "Description Lists",
    description: "A description list is a list of terms, with a description of each term.",
    content: `<h2>HTML Description Lists</h2>
      <p>HTML also supports description lists (formerly called definition lists).</p>
      <p>A description list is a list of terms, with a description of each term.</p>
      <div class="w3-panel w3-info">
        <h3>Core Description List Elements:</h3>
        <ul>
          <li><code>&lt;dl&gt;</code> - Defines the description list container</li>
          <li><code>&lt;dt&gt;</code> - Defines the description term (the item name)</li>
          <li><code>&lt;dd&gt;</code> - Defines the description data (the definition/value)</li>
        </ul>
      </div>
      <p>Description lists are perfect for glossaries, metadata lists, key-value configurations, and FAQs.</p>`,
    codeExample: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>HTML Description Lists</title>
  <style>
    body { font-family: 'Segoe UI', Tahoma, sans-serif; padding: 20px; }
    dt { font-weight: bold; color: #04AA6D; margin-top: 15px; font-size: 17px; }
    dd { margin-left: 20px; color: #555; }
  </style>
</head>
<body>

  <h2>Web Development Glossary</h2>
  <dl>
    <dt>HTML</dt>
    <dd>HyperText Markup Language - the skeleton of all web pages.</dd>

    <dt>CSS</dt>
    <dd>Cascading Style Sheets - defines colors, fonts, and responsive grid layouts.</dd>

    <dt>JavaScript</dt>
    <dd>The programming language of the Web that creates interactive client-side logic.</dd>
  </dl>

</body>
</html>`,
    exercise: {
      question: "Which HTML tag is used inside <dl> to define the description/definition of a term?",
      codeSnippet: `<dl><dt>HTML</dt><<input class="exercise-input" data-answer="dd" placeholder="tag">>HyperText Markup Language</dd></dl>`,
      hint: "dd stands for description data or definition description.",
      explanation: "<dd> describes each term in a description list."
    }
  },
  {
    id: "html_link_colors",
    category: "HTML Tutorial",
    title: "HTML Link Colors and Bookmarks",
    shortTitle: "Link Bookmarks",
    description: "Styling link states and creating HTML bookmarks to jump to specific parts of a webpage.",
    content: `<h2>HTML Link Colors</h2>
      <p>By default, an HTML link will appear in browsers as:</p>
      <ul>
        <li>An unvisited link is underlined and blue</li>
        <li>A visited link is underlined and purple</li>
        <li>An active link is underlined and red</li>
      </ul>
      <div class="w3-panel w3-info">
        <h3>Styling Links with CSS Pseudo-Classes:</h3>
        <p>You can change the default colors by using CSS:</p>
        <pre>a:link { color: #04AA6D; }
a:visited { color: #555; }
a:hover { color: #ff9800; text-decoration: underline; }
a:active { color: #f44336; }</pre>
      </div>
      <h2>HTML Bookmarks</h2>
      <p>HTML bookmarks are used to allow readers to jump to specific parts of a webpage.</p>
      <p>First, create a bookmark with the <code>id</code> attribute: <code>&lt;h2 id="C4"&gt;Chapter 4&lt;/h2&gt;</code>.</p>
      <p>Then, add a link to the bookmark using a hash symbol: <code>&lt;a href="#C4"&gt;Jump to Chapter 4&lt;/a&gt;</code>.</p>`,
    codeExample: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>HTML Link Bookmarks</title>
  <style>
    body { font-family: Arial, sans-serif; padding: 20px; scroll-behavior: smooth; }
    a.custom-link:hover { color: #04AA6D; font-weight: bold; }
    .target-box { background: #e8f5e9; border: 1px solid #04AA6D; padding: 20px; margin-top: 400px; border-radius: 6px; }
  </style>
</head>
<body>

  <h2>Link Bookmarking Demo</h2>
  <p><a href="#chapter-two" class="custom-link">👇 Click here to jump directly to Chapter 2</a></p>

  <p>Scroll down or click the link above to test instant bookmark jumping.</p>

  <div id="chapter-two" class="target-box">
    <h3>Chapter 2: Advanced Topics</h3>
    <p>You arrived here via an internal bookmark link (#chapter-two)!</p>
    <p><a href="#">⬆ Back to top</a></p>
  </div>

</body>
</html>`,
    exercise: {
      question: "Which href value points to an element on the same page with id='section2'?",
      codeSnippet: `<a href="<input class="exercise-input" data-answer="#section2" placeholder="href">">Jump to Section 2</a>`,
      hint: "Start with a hash (#) symbol.",
      explanation: "href=\"#section2\" tells the browser to jump to the element with id=\"section2\"."
    }
  },
  {
    id: "html_image_maps",
    category: "HTML Tutorial",
    title: "HTML Image Maps",
    shortTitle: "Image Maps",
    description: "The map tag defines an image map with clickable areas.",
    content: `<h2>What is an Image Map?</h2>
      <p>The HTML <code>&lt;map&gt;</code> tag defines an <strong>image map</strong>. An image map is an image with clickable areas.</p>
      <p>The areas are defined with one or more <code>&lt;area&gt;</code> tags.</p>
      <div class="w3-panel w3-info">
        <h3>How It Works:</h3>
        <ul>
          <li>The <code>&lt;img&gt;</code> tag uses the <code>usemap</code> attribute with a hash: <code>usemap="#workmap"</code>.</li>
          <li>The <code>&lt;map&gt;</code> tag has a matching <code>name</code> attribute: <code>&lt;map name="workmap"&gt;</code>.</li>
          <li>The <code>&lt;area&gt;</code> tag has <code>shape</code> (rect, circle, poly, default) and <code>coords</code>.</li>
        </ul>
      </div>`,
    codeExample: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>HTML Image Map</title>
  <style>
    body { font-family: sans-serif; padding: 20px; text-align: center; }
  </style>
</head>
<body>

  <h2>Interactive HTML Image Map</h2>
  <p>Click on the computer, phone, or coffee cup to trigger actions:</p>

  <img src="https://www.w3schools.com/html/workplace.jpg" alt="Workplace" usemap="#workmap" width="400" height="379">

  <map name="workmap">
    <area shape="rect" coords="34,44,270,350" alt="Computer" href="javascript:alert('You clicked the Computer!');">
    <area shape="rect" coords="290,172,333,250" alt="Phone" href="javascript:alert('You clicked the Phone!');">
    <area shape="circle" coords="337,300,44" alt="Cup of coffee" href="javascript:alert('You clicked the Coffee!');">
  </map>

</body>
</html>`,
    exercise: {
      question: "Which attribute on the <img> tag connects it to a <map name='myMap'>?",
      codeSnippet: `<img src="photo.jpg" alt="Photo" <input class="exercise-input" data-answer="usemap" placeholder="attribute">="#myMap">`,
      hint: "use + map.",
      explanation: "usemap=\"#myMap\" links the image element to the corresponding <map> element."
    }
  },
  {
    id: "html_background_images",
    category: "HTML Tutorial",
    title: "HTML Background Images",
    shortTitle: "Background Images",
    description: "Apply background images to HTML elements with CSS background properties.",
    content: `<h2>HTML Background Images</h2>
      <p>A background image can be specified for almost any HTML element using the CSS <code>background-image</code> property.</p>
      <div class="w3-panel w3-info">
        <h3>Common Background CSS Properties:</h3>
        <ul>
          <li><code>background-image: url('img.jpg');</code> - Sets the image source</li>
          <li><code>background-repeat: no-repeat;</code> - Prevents the image from tiling</li>
          <li><code>background-size: cover;</code> - Stretches image to cover the entire container</li>
          <li><code>background-position: center;</code> - Centers the background image</li>
          <li><code>background-attachment: fixed;</code> - Creates a parallax fixed background effect</li>
        </ul>
      </div>`,
    codeExample: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>HTML Background Images</title>
  <style>
    .hero-banner {
      background-image: url('https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=1000');
      background-size: cover;
      background-position: center;
      color: white;
      text-align: center;
      padding: 60px 20px;
      border-radius: 8px;
      box-shadow: 0 4px 15px rgba(0,0,0,0.2);
    }
    .hero-banner h1 { margin: 0; font-size: 32px; text-shadow: 2px 2px 4px rgba(0,0,0,0.6); }
  </style>
</head>
<body>

  <div class="hero-banner">
    <h1>Welcome to W3Schools HTML</h1>
    <p>This banner uses a CSS background image with cover sizing!</p>
  </div>

</body>
</html>`,
    exercise: {
      question: "Which CSS property is used to specify an image as the background of an element?",
      codeSnippet: `<div style="<input class="exercise-input" data-answer="background-image" placeholder="property">: url('bg.jpg');"></div>`,
      hint: "background- + image.",
      explanation: "background-image: url(...) sets the graphic file to render in the element's background."
    }
  },
  {
    id: "html_picture",
    category: "HTML Tutorial",
    title: "HTML The Picture Element",
    shortTitle: "HTML Picture",
    description: "The picture element gives web developers more flexibility in specifying image resources.",
    content: `<h2>The HTML &lt;picture&gt; Element</h2>
      <p>The HTML <code>&lt;picture&gt;</code> element allows you to display different pictures for different devices or screen sizes.</p>
      <div class="w3-panel w3-info">
        <h3>How &lt;picture&gt; Works:</h3>
        <p>The <code>&lt;picture&gt;</code> element contains one or more <code>&lt;source&gt;</code> tags and one <code>&lt;img&gt;</code> tag.</p>
        <p>The browser looks for the first <code>&lt;source&gt;</code> element where the media query matches the current viewport, and displays that image.</p>
        <p>The <code>&lt;img&gt;</code> tag is required as the last child to provide a fallback for older browsers.</p>
      </div>
      <h2>Primary Use Cases</h2>
      <ul>
        <li><strong>Art Direction:</strong> Cropping or zooming images differently for mobile vs desktop</li>
        <li><strong>Format Support:</strong> Serving next-gen formats like AVIF or WebP with JPG fallback</li>
      </ul>`,
    codeExample: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>HTML Picture Element</title>
  <style>
    body { font-family: sans-serif; padding: 20px; text-align: center; }
    img { max-width: 100%; height: auto; border-radius: 8px; }
  </style>
</head>
<body>

  <h2>Responsive Image with &lt;picture&gt;</h2>
  <p>Resize your browser window to see the image source change dynamically:</p>

  <picture>
    <source media="(min-width: 650px)" srcset="https://www.w3schools.com/html/img_pink_flowers.jpg">
    <source media="(min-width: 465px)" srcset="https://www.w3schools.com/html/img_white_flower.jpg">
    <img src="https://www.w3schools.com/html/img_orange_flowers.jpg" alt="Flowers">
  </picture>

</body>
</html>`,
    exercise: {
      question: "Which tag wraps multiple <source> elements to provide responsive art-directed images?",
      codeSnippet: `<<input class="exercise-input" data-answer="picture" placeholder="tag">><source media="(min-width:650px)" srcset="large.jpg"><img src="small.jpg" alt="Photo"></picture>`,
      hint: "picture tag.",
      explanation: "The <picture> element wraps <source> options and a fallback <img>."
    }
  },
  {
    id: "html_filepaths",
    category: "HTML Tutorial",
    title: "HTML File Paths",
    shortTitle: "HTML File Paths",
    description: "A file path describes the location of a file in a web site's folder structure.",
    content: `<h2>HTML File Paths</h2>
      <p>A file path describes the location of a file in a web site's folder structure.</p>
      <p>File paths are used when linking to external files like web pages, images, style sheets, and JavaScript files.</p>
      <div class="w3-panel w3-info">
        <h3>File Path Syntax Rules:</h3>
        <ul>
          <li><code>&lt;img src="picture.jpg"&gt;</code> - File is in the same folder as the current page</li>
          <li><code>&lt;img src="images/picture.jpg"&gt;</code> - File is in the <code>images</code> subfolder</li>
          <li><code>&lt;img src="/images/picture.jpg"&gt;</code> - File is in the <code>images</code> folder at the root of the domain</li>
          <li><code>&lt;img src="../picture.jpg"&gt;</code> - File is located one level up from the current folder</li>
        </ul>
      </div>`,
    codeExample: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>HTML File Paths</title>
  <style>
    body { font-family: Arial, sans-serif; padding: 20px; line-height: 1.6; }
    code { background: #f1f1f1; padding: 3px 6px; border-radius: 4px; color: #d63384; }
  </style>
</head>
<body>

  <h1>Understanding HTML File Paths</h1>
  <p>Here are standard relative path examples:</p>
  <ul>
    <li>Current directory: <code>./assets/logo.png</code></li>
    <li>Parent directory: <code>../styles/main.css</code></li>
    <li>Grandparent directory: <code>../../data/config.json</code></li>
  </ul>

</body>
</html>`,
    exercise: {
      question: "Which prefix points to a file located one level up in the parent directory?",
      codeSnippet: `<img src="<input class="exercise-input" data-answer="../" placeholder="prefix">images/pic.jpg" alt="Parent folder">`,
      hint: "Two dots and a forward slash.",
      explanation: "../ moves one directory up from the current file's folder."
    }
  },
  {
    id: "html_layout",
    category: "HTML Tutorial",
    title: "HTML Layout Elements and Techniques",
    shortTitle: "HTML Layout",
    description: "HTML has several semantic elements that define the different parts of a web page.",
    content: `<h2>HTML Layout Elements</h2>
      <p>Websites often display content in multiple columns (like a magazine or newspaper).</p>
      <p>HTML has several semantic elements that define the different structural parts of a web page:</p>
      <div class="w3-panel w3-info">
        <ul>
          <li><code>&lt;header&gt;</code> - Defines a header for a document or a section</li>
          <li><code>&lt;nav&gt;</code> - Defines a set of navigation links</li>
          <li><code>&lt;section&gt;</code> - Defines a thematic section in a document</li>
          <li><code>&lt;article&gt;</code> - Defines an independent, self-contained content</li>
          <li><code>&lt;aside&gt;</code> - Defines content aside from the main content (sidebar)</li>
          <li><code>&lt;footer&gt;</code> - Defines a footer for a document or a section</li>
        </ul>
      </div>`,
    codeExample: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>HTML Page Layout</title>
  <style>
    body { font-family: Arial, sans-serif; margin: 0; }
    header { background: #04AA6D; color: white; padding: 20px; text-align: center; }
    nav { background: #333; padding: 10px; text-align: center; }
    nav a { color: white; margin: 0 15px; text-decoration: none; font-weight: bold; }
    .layout-body { display: flex; padding: 20px; gap: 20px; }
    article { flex: 3; background: #f9f9f9; padding: 20px; border-radius: 6px; }
    aside { flex: 1; background: #e8f5e9; padding: 20px; border-radius: 6px; }
    footer { background: #222; color: #aaa; text-align: center; padding: 15px; }
  </style>
</head>
<body>

  <header>
    <h1>City News Portal</h1>
  </header>

  <nav>
    <a href="#home">Home</a>
    <a href="#news">News</a>
    <a href="#contact">Contact</a>
  </nav>

  <div class="layout-body">
    <article>
      <h2>Local Technology Hub Opens</h2>
      <p>The city unveiled a new public technology center offering free coding and robotics courses for learners of all ages.</p>
    </article>
    <aside>
      <h3>Trending</h3>
      <p>Weather: 24°C Sunny</p>
      <p>Traffic: Normal</p>
    </aside>
  </div>

  <footer>
    <p>&copy; 2026 City News Portal. All rights reserved.</p>
  </footer>

</body>
</html>`,
    exercise: {
      question: "Which HTML layout element is used to define navigation links?",
      codeSnippet: `<<input class="exercise-input" data-answer="nav" placeholder="tag">><a href="/home">Home</a><a href="/about">About</a></nav>`,
      hint: "Short for navigation.",
      explanation: "The <nav> element defines a section of navigation links."
    }
  },
  {
    id: "html_responsive",
    category: "HTML Tutorial",
    title: "HTML Responsive Web Design",
    shortTitle: "Responsive Design",
    description: "Responsive web design makes your web page look good on all devices (desktops, tablets, phones).",
    content: `<h2>What is Responsive Web Design?</h2>
      <p>Responsive web design is about using HTML and CSS to automatically resize, hide, shrink, or enlarge a website, to make it look good on all devices (desktops, tablets, and phones).</p>
      <div class="w3-panel w3-info">
        <h3>Setting The Viewport:</h3>
        <p>To control the viewport, include the following <code>&lt;meta&gt;</code> element in all your web pages:</p>
        <pre>&lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;</pre>
        <ul>
          <li><code>width=device-width</code> sets the width of the page to follow the screen-width of the device.</li>
          <li><code>initial-scale=1.0</code> sets the initial zoom level when the page is first loaded.</li>
        </ul>
      </div>
      <h2>Responsive Images</h2>
      <p>Use CSS <code>max-width: 100%; height: auto;</code> so images scale responsively without overflowing their parent container.</p>`,
    codeExample: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Responsive Web Design</title>
  <style>
    body { font-family: sans-serif; margin: 0; padding: 20px; line-height: 1.6; }
    .col { float: left; width: 50%; box-sizing: border-box; padding: 15px; }
    .card { background: #f1f1f1; padding: 15px; border-radius: 8px; }
    @media (max-width: 600px) {
      .col { width: 100%; float: none; }
    }
  </style>
</head>
<body>

  <h1>Responsive Two-Column Grid</h1>
  <p>Resize the window: on screens smaller than 600px, these two columns stack vertically!</p>

  <div class="col">
    <div class="card">
      <h3>Column 1</h3>
      <p>Responsive design adapts seamlessly to desktop, tablet, and mobile screens.</p>
    </div>
  </div>

  <div class="col">
    <div class="card">
      <h3>Column 2</h3>
      <p>The viewport meta tag is essential for responsive mobile rendering.</p>
    </div>
  </div>

</body>
</html>`,
    exercise: {
      question: "What initial-scale value is standard in the viewport meta tag for 1:1 mobile scaling?",
      codeSnippet: `<meta name="viewport" content="width=device-width, initial-scale=<input class="exercise-input" data-answer="1.0" placeholder="scale">">`,
      hint: "1.0",
      explanation: "initial-scale=1.0 establishes a 1:1 relationship between CSS pixels and device-independent pixels."
    }
  },
  {
    id: "html_computercode",
    category: "HTML Tutorial",
    title: "HTML Computer Code Elements",
    shortTitle: "Computer Code",
    description: "HTML contains several elements for defining user input and computer code.",
    content: `<h2>HTML Computer Code Elements</h2>
      <p>HTML has several elements for formatting computer code and user inputs:</p>
      <div class="w3-panel w3-info">
        <ul>
          <li><code>&lt;code&gt;</code> - Defines a piece of computer code</li>
          <li><code>&lt;kbd&gt;</code> - Defines keyboard input (e.g. Ctrl + S)</li>
          <li><code>&lt;samp&gt;</code> - Defines sample output from a computer program</li>
          <li><code>&lt;var&gt;</code> - Defines a mathematical or programming variable</li>
          <li><code>&lt;pre&gt;</code> - Defines preformatted text, preserving spaces and line breaks</li>
        </ul>
      </div>`,
    codeExample: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>HTML Computer Code</title>
  <style>
    body { font-family: sans-serif; padding: 20px; line-height: 1.6; }
    kbd { background: #eee; border: 1px solid #ccc; border-radius: 3px; padding: 2px 6px; box-shadow: 0 1px 0 rgba(0,0,0,0.2); }
    samp { color: #d63384; font-family: monospace; }
  </style>
</head>
<body>

  <h2>Computer Code Elements</h2>
  <p>To save your work, press <kbd>Ctrl</kbd> + <kbd>S</kbd> on your keyboard.</p>

  <p>Sample program output: <samp>Error 404: File Not Found</samp></p>

  <p>In physics, Einstein stated that <var>E</var> = <var>m</var><var>c</var><sup>2</sup>.</p>

  <pre>
function helloWorld() {
  console.log("Hello, W3Schools!");
}
  </pre>

</body>
</html>`,
    exercise: {
      question: "Which HTML element represents keyboard input entered by the user?",
      codeSnippet: `Press <<input class="exercise-input" data-answer="kbd" placeholder="tag">>Ctrl</kbd> + C to copy.`,
      hint: "Short for keyboard.",
      explanation: "<kbd> denotes user input, typically entered from a keyboard."
    }
  },
  {
    id: "html_styleguide",
    category: "HTML Tutorial",
    title: "HTML Style Guide and Coding Conventions",
    shortTitle: "Style Guide",
    description: "A consistent, clean, and tidy HTML code makes it easier for others to read and understand your code.",
    content: `<h2>W3Schools HTML Style Guide</h2>
      <p>A consistent, clean, and tidy HTML code makes it easier for others to read and understand your code.</p>
      <div class="w3-panel w3-info">
        <h3>Best Practices & Rules:</h3>
        <ul>
          <li><strong>Always Declare Document Type:</strong> Always declare <code>&lt;!DOCTYPE html&gt;</code> as the first line.</li>
          <li><strong>Use Lowercase Element Names:</strong> Write <code>&lt;body&gt;</code>, not <code>&lt;BODY&gt;</code>.</li>
          <li><strong>Close All HTML Elements:</strong> Never omit closing tags like <code>&lt;/p&gt;</code>.</li>
          <li><strong>Use Lowercase Attribute Names:</strong> Write <code>href</code>, not <code>HREF</code>.</li>
          <li><strong>Always Quote Attribute Values:</strong> Always write <code>class="header"</code>, not <code>class=header</code>.</li>
          <li><strong>Always Specify Alt, Width, and Height for Images:</strong> This reduces flickering because browser reserves space.</li>
        </ul>
      </div>`,
    codeExample: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Clean HTML Style Guide</title>
  <style>
    body { font-family: Arial, sans-serif; padding: 25px; line-height: 1.6; }
    .highlight { background: #e8f5e9; border-left: 4px solid #04AA6D; padding: 15px; }
  </style>
</head>
<body>

  <h1>HTML Style Guide Rules</h1>
  <div class="highlight">
    <p>This code adheres to official W3Schools coding conventions:</p>
    <ul>
      <li>Lowercase tags and attributes</li>
      <li>Quoted attribute values</li>
      <li>Explicitly closed elements</li>
      <li>Proper 2-space indentation</li>
    </ul>
  </div>

</body>
</html>`,
    exercise: {
      question: "What declaration should always be placed on the first line of an HTML5 document?",
      codeSnippet: `<!DOCTYPE <input class="exercise-input" data-answer="html" placeholder="type">>`,
      hint: "html",
      explanation: "<!DOCTYPE html> is the required HTML5 document type declaration."
    }
  },
  {
    id: "html_symbols",
    category: "HTML Tutorial",
    title: "HTML Symbols",
    shortTitle: "HTML Symbols",
    description: "HTML symbols include mathematical symbols, Greek letters, arrows, and currency signs.",
    content: `<h2>HTML Symbols</h2>
      <p>Many mathematical, technical, and currency symbols are not present on a normal keyboard.</p>
      <p>To add such symbols to an HTML page, you can use the entity name or the entity number (a decimal or a hexadecimal reference).</p>
      <div class="w3-panel w3-info">
        <h3>Common Symbol Entities:</h3>
        <ul>
          <li><code>&amp;forall;</code> - For all symbol (&forall;)</li>
          <li><code>&amp;part;</code> - Partial differential (&part;)</li>
          <li><code>&amp;exist;</code> - There exists (&exist;)</li>
          <li><code>&amp;radic;</code> - Square root (&radic;)</li>
          <li><code>&amp;infin;</code> - Infinity (&infin;)</li>
          <li><code>&amp;sum;</code> - Summation (&sum;)</li>
          <li><code>&amp;euro;</code> - Euro currency (&euro;)</li>
        </ul>
      </div>`,
    codeExample: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>HTML Mathematical Symbols</title>
  <style>
    body { font-family: sans-serif; padding: 20px; font-size: 18px; }
    .symbol-card { background: #f9f9f9; border: 1px solid #ddd; padding: 15px; border-radius: 6px; margin: 10px 0; }
  </style>
</head>
<body>

  <h2>Math & Technical Symbols in HTML</h2>
  <div class="symbol-card">
    <p>Infinity: <strong>&infin;</strong> (<code>&amp;infin;</code>)</p>
    <p>Square root: <strong>&radic;16 = 4</strong> (<code>&amp;radic;</code>)</p>
    <p>Summation: <strong>&sum; x<sub>i</sub></strong> (<code>&amp;sum;</code>)</p>
    <p>Euro currency: <strong>100 &euro;</strong> (<code>&amp;euro;</code>)</p>
  </div>

</body>
</html>`,
    exercise: {
      question: "Which HTML entity name represents the mathematical infinity symbol \u221e?",
      codeSnippet: `&<input class="exercise-input" data-answer="infin" placeholder="entity">;`,
      hint: "infin",
      explanation: "&infin; displays the infinity symbol \u221e."
    }
  },
  {
    id: "html_emojis",
    category: "HTML Tutorial",
    title: "HTML Emojis",
    shortTitle: "HTML Emojis",
    description: "Emojis look like images or icons, but they are characters from the UTF-8 character set.",
    content: `<h2>Using Emojis in HTML</h2>
      <p>Emojis look like images, or icons, but they are not. They are letters (characters) from the UTF-8 (Unicode) character set.</p>
      <div class="w3-panel w3-info">
        <h3>The UTF-8 Charset Declaration:</h3>
        <p>To display an HTML page with emojis correctly, specify the UTF-8 character set in your <code>&lt;head&gt;</code>:</p>
        <pre>&lt;meta charset="UTF-8"&gt;</pre>
      </div>
      <h2>Emoji Decimal Codes</h2>
      <ul>
        <li><code>&amp;#128512;</code> displays 😀 (Grinning Face)</li>
        <li><code>&amp;#128516;</code> displays 😄 (Grinning Face with Smiling Eyes)</li>
        <li><code>&amp;#128640;</code> displays 🚀 (Rocket)</li>
        <li><code>&amp;#128187;</code> displays 💻 (Laptop)</li>
      </ul>`,
    codeExample: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>HTML Emojis</title>
  <style>
    body { font-family: sans-serif; padding: 25px; text-align: center; }
    .emoji-row { font-size: 40px; margin: 20px 0; }
  </style>
</head>
<body>

  <h1>Displaying Emojis with UTF-8</h1>
  <div class="emoji-row">
    <span>&#128512;</span>
    <span>&#128640;</span>
    <span>&#128187;</span>
    <span>&#128170;</span>
    <span>&#127775;</span>
  </div>
  <p>All these emojis are text characters rendered natively by your browser!</p>

</body>
</html>`,
    exercise: {
      question: "Which charset attribute value is required in the meta tag to display emojis reliably?",
      codeSnippet: `<meta charset="<input class="exercise-input" data-answer="UTF-8" placeholder="charset">">`,
      hint: "UTF-8",
      explanation: "UTF-8 covers almost all characters, symbols, and emojis in the world."
    }
  },
  {
    id: "html_charset",
    category: "HTML Tutorial",
    title: "HTML Character Sets",
    shortTitle: "HTML Charsets",
    description: "To display an HTML page correctly, a web browser must know the character set used in the page.",
    content: `<h2>HTML Character Sets</h2>
      <p>To display an HTML page correctly, a web browser must know which character set (character encoding) to use.</p>
      <div class="w3-panel w3-info">
        <h3>Evolution of Character Encodings:</h3>
        <ul>
          <li><strong>ASCII:</strong> First character encoding standard. 128 character codes (0-127).</li>
          <li><strong>ANSI (Windows-1252):</strong> Extended ASCII to support 256 characters with European accents.</li>
          <li><strong>ISO-8859-1:</strong> The default character set for HTML 4. Supported 256 character codes.</li>
          <li><strong>UTF-8:</strong> The universal character set covering almost every character, symbol, and emoji across all languages. Recommended for all modern web pages.</li>
        </ul>
      </div>`,
    codeExample: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Character Encoding Demo</title>
  <style>
    body { font-family: Arial, sans-serif; padding: 20px; line-height: 1.6; }
  </style>
</head>
<body>

  <h2>Multilingual UTF-8 Support</h2>
  <p>English: Welcome to W3Schools!</p>
  <p>Turkish: W3Schools'a hoş geldiniz!</p>
  <p>Spanish: ¡Bienvenido a W3Schools!</p>
  <p>Japanese: W3Schoolsへようこそ！</p>
  <p>Arabic: مرحبًا بك في W3Schools!</p>

</body>
</html>`,
    exercise: {
      question: "Which attribute on the <meta> tag specifies the character encoding?",
      codeSnippet: `<meta <input class="exercise-input" data-answer="charset" placeholder="attribute">="UTF-8">`,
      hint: "charset",
      explanation: "The charset attribute specifies the character encoding for the HTML document."
    }
  },
  {
    id: "html_urlencode",
    category: "HTML Tutorial",
    title: "HTML URL Encoding",
    shortTitle: "HTML URL Encode",
    description: "URL encoding converts characters into a format that can be transmitted over the Internet.",
    content: `<h2>What is URL Encoding?</h2>
      <p>URLs can only be sent over the Internet using the ASCII character-set.</p>
      <p>Since URLs often contain characters outside the ASCII set, the URL has to be converted into a valid ASCII format.</p>
      <div class="w3-panel w3-info">
        <h3>How URL Encoding Works:</h3>
        <p>URL encoding replaces unsafe ASCII characters with a "<code>%</code>" followed by two hexadecimal digits.</p>
        <p>URLs cannot contain spaces. URL encoding normally replaces a space with a plus (<code>+</code>) sign or with <code>%20</code>.</p>
      </div>
      <h2>Common URL Encoding Examples:</h2>
      <ul>
        <li>Space &rarr; <code>%20</code></li>
        <li>Exclamation mark <code>!</code> &rarr; <code>%21</code></li>
        <li>Question mark <code>?</code> &rarr; <code>%3F</code></li>
        <li>Ampersand <code>&amp;</code> &rarr; <code>%26</code></li>
      </ul>`,
    codeExample: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>HTML URL Encoding</title>
  <style>
    body { font-family: sans-serif; padding: 20px; line-height: 1.6; }
    .url-box { background: #f4f4f4; border: 1px solid #ccc; padding: 12px; border-radius: 4px; font-family: monospace; }
  </style>
</head>
<body>

  <h2>URL Encoding in Links</h2>
  <p>Original query: <code>hello world & welcome</code></p>
  <div class="url-box">
    https://example.com/search?q=hello%20world%20%26%20welcome
  </div>
  <p>Notice how spaces become <code>%20</code> and ampersands become <code>%26</code>.</p>

</body>
</html>`,
    exercise: {
      question: "In URL encoding, what hexadecimal sequence replaces the space character?",
      codeSnippet: `Space character is converted to %<input class="exercise-input" data-answer="20" placeholder="hex">`,
      hint: "20",
      explanation: "%20 is the URL encoding representation of the space character (ASCII 32)."
    }
  },
  {
    id: "html_xhtml",
    category: "HTML Tutorial",
    title: "HTML vs. XHTML",
    shortTitle: "HTML vs XHTML",
    description: "XHTML is HTML defined as an XML application, enforcing stricter syntax rules.",
    content: `<h2>What is XHTML?</h2>
      <p><strong>XHTML</strong> stands for E<strong>X</strong>tensible <strong>H</strong>yper<strong>T</strong>ext <strong>M</strong>arkup <strong>L</strong>anguage.</p>
      <p>XHTML is HTML defined as an XML application, supported by all major browsers.</p>
      <div class="w3-panel w3-info">
        <h3>The Most Important Differences from HTML:</h3>
        <ul>
          <li><code>&lt;!DOCTYPE&gt;</code> is mandatory in XHTML</li>
          <li>The <code>xmlns</code> attribute in <code>&lt;html&gt;</code> is mandatory</li>
          <li><code>&lt;html&gt;</code>, <code>&lt;head&gt;</code>, <code>&lt;title&gt;</code>, and <code>&lt;body&gt;</code> are mandatory</li>
          <li>Elements must always be properly nested</li>
          <li>Elements must always be closed (e.g. <code>&lt;br /&gt;</code>, <code>&lt;img /&gt;</code>)</li>
          <li>Elements and attributes must always be in lowercase</li>
          <li>Attribute values must always be quoted</li>
          <li>Attribute minimization is forbidden (write <code>checked="checked"</code>)</li>
        </ul>
      </div>`,
    codeExample: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>HTML vs XHTML Syntax</title>
  <style>
    body { font-family: sans-serif; padding: 20px; line-height: 1.6; }
    table { width: 100%; border-collapse: collapse; }
    th, td { border: 1px solid #ccc; padding: 10px; }
    th { background: #04AA6D; color: white; text-align: left; }
  </style>
</head>
<body>

  <h2>HTML vs XHTML Quick Comparison</h2>
  <table>
    <tr>
      <th>Feature</th>
      <th>HTML5</th>
      <th>XHTML</th>
    </tr>
    <tr>
      <td>Self-closing tags</td>
      <td>&lt;br&gt; or &lt;br /&gt;</td>
      <td>Must close: &lt;br /&gt;</td>
    </tr>
    <tr>
      <td>Tag casing</td>
      <td>Case-insensitive</td>
      <td>Must be lowercase</td>
    </tr>
    <tr>
      <td>Boolean attributes</td>
      <td>&lt;input disabled&gt;</td>
      <td>&lt;input disabled="disabled" /&gt;</td>
    </tr>
  </table>

</body>
</html>`,
    exercise: {
      question: "How must an empty break tag be closed in strict XHTML syntax?",
      codeSnippet: `<br <input class="exercise-input" data-answer="/>" placeholder="closing">`,
      hint: "slash followed by greater-than sign.",
      explanation: "In XHTML, all void elements must end with a space and self-closing slash: />."
    }
  },
  {
    id: "html_forms",
    category: "HTML Forms",
    title: "HTML Forms",
    shortTitle: "HTML Forms",
    description: "An HTML form is used to collect user input. The user input is most often sent to a server for processing.",
    content: `
      <h2>The &lt;form&gt; Element</h2>
      <p>The HTML <code>&lt;form&gt;</code> element is used to create an HTML form for user input.</p>
      
      <h2>The &lt;input&gt; Element</h2>
      <p>The HTML <code>&lt;input&gt;</code> element is the most used form element.</p>
      <p>An <code>&lt;input&gt;</code> element can be displayed in many ways, depending on the <code>type</code> attribute.</p>

      <h2>The &lt;label&gt; Element</h2>
      <p>The <code>&lt;label&gt;</code> tag defines a label for many form elements. The <code>for</code> attribute of the <code>&lt;label&gt;</code> tag should be equal to the <code>id</code> attribute of the <code>&lt;input&gt;</code> element to bind them together.</p>
    `,
    codeExample: `<!DOCTYPE html>
<html>
<head>
  <style>
    form { max-width: 400px; padding: 20px; border: 1px solid #ccc; border-radius: 8px; }
    input[type=text], input[type=password] {
      width: 100%; padding: 8px; margin: 8px 0; box-sizing: border-box; border: 1px solid #ccc; border-radius: 4px;
    }
    input[type=submit] {
      background-color: #04AA6D; color: white; padding: 10px 20px; border: none; border-radius: 4px; cursor: pointer;
    }
  </style>
</head>
<body>

  <h2>HTML Form Example</h2>
  <form action="#" method="get">
    <label for="fname">First Name:</label><br>
    <input type="text" id="fname" name="fname" value="John"><br>

    <label for="lname">Last Name:</label><br>
    <input type="text" id="lname" name="lname" value="Doe"><br><br>

    <input type="submit" value="Submit Form">
  </form>

</body>
</html>`,
    exercise: {
      question: "Which input type is used to create a form submission button?",
      codeSnippet: `<input type="<input class="exercise-input" data-answer="submit" placeholder="type">" value="Send">`,
      hint: "submit",
      explanation: "type=\"submit\" creates a button that submits the form."
    }
  },
  {
    id: "html_form_attributes",
    category: "HTML Forms",
    title: "HTML Form Attributes",
    shortTitle: "Form Attributes",
    description: "Learn about the action, target, method, and autocomplete attributes on HTML forms.",
    content: `
      <h2>The Action Attribute</h2>
      <p>The <code>action</code> attribute defines the action to be performed when the form is submitted.</p>

      <h2>The Method Attribute</h2>
      <p>The <code>method</code> attribute specifies the HTTP method to be used when submitting the form data:</p>
      <ul>
        <li><code>GET</code>: Appends the form data to the URL in name/value pairs. Never use GET to send sensitive data!</li>
        <li><code>POST</code>: Appends the form data inside the body of the HTTP request. Good for passwords or large amounts of data.</li>
      </ul>

      <h2>The Autocomplete Attribute</h2>
      <p>The <code>autocomplete</code> attribute specifies whether a form should have autocomplete on or off (e.g. <code>autocomplete="on"</code>).</p>
    `,
    codeExample: `<!DOCTYPE html>
<html>
<body>

  <h2>Form Method Comparison</h2>
  <form action="/submit_page" method="post" autocomplete="on">
    <label for="email">User Email:</label><br>
    <input type="email" id="email" name="email" required><br><br>

    <label for="pwd">Password:</label><br>
    <input type="password" id="pwd" name="pwd" required><br><br>

    <input type="submit" value="Log In (POST)" style="background:#04AA6D; color:white; padding:8px 16px; border:none; border-radius:4px;">
  </form>

</body>
</html>`,
    exercise: {
      question: "Which HTTP method sends form data securely in the body of the request instead of the URL?",
      codeSnippet: `<form method="<input class="exercise-input" data-answer="post" placeholder="method">">`,
      hint: "post (or POST)",
      explanation: "POST sends data inside the request body."
    }
  },
  {
    id: "html_form_elements",
    category: "HTML Forms",
    title: "HTML Form Elements",
    shortTitle: "Form Elements",
    description: "Detailed overview of all input elements, select dropdowns, textareas, and fieldsets.",
    content: `
      <h2>Comprehensive Form Elements</h2>
      <ul>
        <li><code>&lt;input&gt;</code> - Flexible field for multiple types of input</li>
        <li><code>&lt;label&gt;</code> - Accessible caption for an item</li>
        <li><code>&lt;select&gt;</code> &amp; <code>&lt;option&gt;</code> - Dropdown list</li>
        <li><code>&lt;textarea&gt;</code> - Multi-line text input field</li>
        <li><code>&lt;button&gt;</code> - Clickable button</li>
        <li><code>&lt;fieldset&gt;</code> &amp; <code>&lt;legend&gt;</code> - Group related data in a form</li>
        <li><code>&lt;datalist&gt;</code> - Pre-defined autocomplete options</li>
      </ul>
    `,
    codeExample: `<!DOCTYPE html>
<html>
<body>

  <h2>Diverse Form Elements</h2>
  <form>
    <fieldset style="border: 2px solid #04AA6D; border-radius: 6px; padding: 15px;">
      <legend style="color: #04AA6D; font-weight: bold;">User Feedback</legend>

      <label for="cars">Choose a topic:</label>
      <select id="cars" name="cars">
        <option value="html">HTML5</option>
        <option value="css">CSS3</option>
        <option value="js">JavaScript</option>
      </select>
      <br><br>

      <label for="message">Your Message:</label><br>
      <textarea id="message" name="message" rows="4" cols="40" placeholder="Type here..."></textarea>
      <br><br>

      <input type="checkbox" id="subscribe" name="subscribe" checked>
      <label for="subscribe">Subscribe to W3Schools newsletter</label>
    </fieldset>
  </form>

</body>
</html>`,
    exercise: {
      question: "Which tag is used for multi-line text input?",
      codeSnippet: `<<input class="exercise-input" data-answer="textarea" placeholder="tag">>Type story here...</<input class="exercise-input" data-answer="textarea" placeholder="tag">>`,
      hint: "textarea",
      explanation: "<textarea> defines a multi-line input control."
    }
  },
  {
    id: "html_input_types",
    category: "HTML Forms",
    title: "HTML Input Types",
    shortTitle: "Input Types",
    description: "HTML offers a rich variety of input types for modern browsers.",
    content: `
      <h2>HTML5 Input Types</h2>
      <table class="w3-table">
        <thead>
          <tr><th>Input Type</th><th>Description</th></tr>
        </thead>
        <tbody>
          <tr><td><code>type="text"</code></td><td>Default single-line text input</td></tr>
          <tr><td><code>type="password"</code></td><td>Masked password characters</td></tr>
          <tr><td><code>type="email"</code></td><td>Automatically validates email address format</td></tr>
          <tr><td><code>type="number"</code></td><td>Numeric input with min/max bounds</td></tr>
          <tr><td><code>type="date"</code></td><td>Date picker control</td></tr>
          <tr><td><code>type="color"</code></td><td>Interactive color picker palette</td></tr>
          <tr><td><code>type="range"</code></td><td>Slider control for values</td></tr>
          <tr><td><code>type="checkbox"</code></td><td>Multiple selection checkbox</td></tr>
          <tr><td><code>type="radio"</code></td><td>Single choice radio button</td></tr>
          <tr><td><code>type="file"</code></td><td>File upload chooser</td></tr>
        </tbody>
      </table>
    `,
    codeExample: `<!DOCTYPE html>
<html>
<body>

  <h2>HTML5 Modern Input Types</h2>
  <form>
    <label for="favcolor">Pick your favorite color:</label>
    <input type="color" id="favcolor" name="favcolor" value="#04AA6D"><br><br>

    <label for="birthday">Birthday:</label>
    <input type="date" id="birthday" name="birthday"><br><br>

    <label for="points">Skill Level (between 1 and 100):</label>
    <input type="range" id="points" name="points" min="1" max="100" value="85"><br><br>

    <label for="quantity">Quantity (1-10):</label>
    <input type="number" id="quantity" name="quantity" min="1" max="10" value="1">
  </form>

</body>
</html>`,
    exercise: {
      question: "Which input type allows the user to select a color from a visual picker?",
      codeSnippet: `<input type="<input class="exercise-input" data-answer="color" placeholder="type">">`,
      hint: "color",
      explanation: "type=\"color\" renders a color picker."
    }
  },
  {
    id: "html_input_attributes",
    category: "HTML Forms",
    title: "HTML Input Attributes",
    shortTitle: "Input Attributes",
    description: "HTML input elements have attributes to define behaviors, restrictions, and default values.",
    content: `<h2>HTML Input Attributes</h2>
      <p>This chapter describes the different attributes for HTML <code>&lt;input&gt;</code> elements.</p>
      <div class="w3-panel w3-info">
        <h3>Common Input Attributes:</h3>
        <ul>
          <li><code>value</code> - Specifies an initial value for an input field</li>
          <li><code>readonly</code> - Specifies that an input field is read-only</li>
          <li><code>disabled</code> - Specifies that an input field is disabled</li>
          <li><code>size</code> - Specifies the visible width, in characters, of an input field</li>
          <li><code>maxlength</code> - Specifies the maximum number of characters allowed</li>
          <li><code>min</code> and <code>max</code> - Specify minimum and maximum values for numeric inputs</li>
          <li><code>multiple</code> - Allows user to enter multiple values (for file or email)</li>
          <li><code>pattern</code> - Specifies a regular expression to validate the input against</li>
          <li><code>placeholder</code> - Specifies a short hint describing the expected value</li>
          <li><code>required</code> - Specifies that an input field must be filled out before submitting</li>
          <li><code>step</code> - Specifies the legal number intervals for an input field</li>
          <li><code>autofocus</code> - Specifies that an input field should automatically get focus when page loads</li>
        </ul>
      </div>`,
    codeExample: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>HTML Input Attributes</title>
  <style>
    body { font-family: Arial, sans-serif; padding: 20px; }
    form { max-width: 400px; background: #f9f9f9; padding: 20px; border-radius: 6px; }
    label { display: block; margin-top: 10px; font-weight: bold; }
    input { width: 100%; padding: 8px; margin-top: 4px; box-sizing: border-box; }
    input[type=submit] { background: #04AA6D; color: white; border: none; margin-top: 15px; cursor: pointer; }
  </style>
</head>
<body>

  <h2>Input Attributes Demo</h2>
  <form action="#" method="get">
    <label for="username">Username (required, autofocus):</label>
    <input type="text" id="username" name="username" placeholder="Enter username" required autofocus>

    <label for="code">Coupon (readonly):</label>
    <input type="text" id="code" name="code" value="W3SCHOOLS2026" readonly>

    <label for="quantity">Quantity (min 1, max 10, step 1):</label>
    <input type="number" id="quantity" name="quantity" min="1" max="10" step="1" value="2">

    <input type="submit" value="Submit Form">
  </form>

</body>
</html>`,
    exercise: {
      question: "Which input attribute specifies that the user must fill in a field before submitting?",
      codeSnippet: `<input type="text" name="usrname" <input class="exercise-input" data-answer="required" placeholder="attribute">>`,
      hint: "required",
      explanation: "The required attribute prevents form submission if the input is empty."
    }
  },
  {
    id: "html_input_form_attributes",
    category: "HTML Forms",
    title: "HTML Input Form Attributes",
    shortTitle: "Form Attributes",
    description: "Special form attributes on input and button elements that override the form element's attributes.",
    content: `<h2>HTML Input Form Attributes</h2>
      <p>HTML5 allows <code>&lt;input&gt;</code> and <code>&lt;button&gt;</code> elements to override the action, method, and encoding of the parent <code>&lt;form&gt;</code>.</p>
      <div class="w3-panel w3-info">
        <h3>Override Attributes:</h3>
        <ul>
          <li><code>formaction</code> - Specifies the URL for form submission (overrides the form's <code>action</code>)</li>
          <li><code>formenctype</code> - Specifies how form data should be encoded (overrides <code>enctype</code>)</li>
          <li><code>formmethod</code> - Specifies HTTP method (GET or POST, overrides <code>method</code>)</li>
          <li><code>formnovalidate</code> - Bypasses HTML5 form validation (overrides <code>novalidate</code>)</li>
          <li><code>formtarget</code> - Specifies where to display the response (overrides <code>target</code>)</li>
        </ul>
      </div>`,
    codeExample: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>HTML Input Form Attributes</title>
  <style>
    body { font-family: Arial, sans-serif; padding: 20px; }
    form { max-width: 400px; background: #f2f2f2; padding: 20px; border-radius: 8px; }
    input[type=text] { width: 100%; padding: 8px; margin-bottom: 12px; box-sizing: border-box; }
    .btn { padding: 10px 15px; border: none; border-radius: 4px; cursor: pointer; font-weight: bold; }
    .btn-primary { background: #04AA6D; color: white; }
    .btn-secondary { background: #2196F3; color: white; }
  </style>
</head>
<body>

  <h2>Submit to Multiple Endpoints</h2>
  <form action="/action_page.php">
    <label for="fname">First Name:</label>
    <input type="text" id="fname" name="fname" required>

    <button type="submit" class="btn btn-primary">Standard Submit</button>
    <button type="submit" class="btn btn-secondary" formaction="/admin_page.php" formnovalidate>Admin Submit</button>
  </form>

</body>
</html>`,
    exercise: {
      question: "Which attribute on a submit button overrides the form's action attribute URL?",
      codeSnippet: `<input type="submit" <input class="exercise-input" data-answer="formaction" placeholder="attribute">="/page2.php" value="Submit to Page 2">`,
      hint: "form + action.",
      explanation: "formaction specifies where to send the form-data when a specific submit button is clicked."
    }
  },
  {
    id: "html_form_labels",
    category: "HTML Forms",
    title: "HTML Form Labels and Fieldset",
    shortTitle: "Form Labels",
    description: "Improve accessibility and organize form controls using label, fieldset, and legend.",
    content: `<h2>The HTML &lt;label&gt; Element</h2>
      <p>The <code>&lt;label&gt;</code> element defines a label for several form elements.</p>
      <p>The <code>&lt;label&gt;</code> element is useful for screen-reader users, because the screen-reader will read out loud the label when the user focuses on the input element.</p>
      <p>The <code>for</code> attribute of the <code>&lt;label&gt;</code> tag must be equal to the <code>id</code> attribute of the related element to bind them together.</p>
      <div class="w3-panel w3-info">
        <h3>The &lt;fieldset&gt; and &lt;legend&gt; Elements:</h3>
        <ul>
          <li><code>&lt;fieldset&gt;</code> - Groups related data in a form with a visual border</li>
          <li><code>&lt;legend&gt;</code> - Defines a caption for the <code>&lt;fieldset&gt;</code> element</li>
        </ul>
      </div>`,
    codeExample: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>HTML Form Labels & Fieldset</title>
  <style>
    body { font-family: sans-serif; padding: 20px; }
    fieldset { border: 2px solid #04AA6D; border-radius: 8px; padding: 15px; max-width: 400px; }
    legend { color: #04AA6D; font-weight: bold; padding: 0 8px; }
    .row { margin: 10px 0; }
  </style>
</head>
<body>

  <form>
    <fieldset>
      <legend>User Credentials</legend>
      <div class="row">
        <label for="user">Username:</label><br>
        <input type="text" id="user" name="user">
      </div>
      <div class="row">
        <label for="pass">Password:</label><br>
        <input type="password" id="pass" name="pass">
      </div>
    </fieldset>
  </form>

</body>
</html>`,
    exercise: {
      question: "Which tag defines the title/caption for a <fieldset> grouping?",
      codeSnippet: `<fieldset><<input class="exercise-input" data-answer="legend" placeholder="tag">>Personal Information</legend></fieldset>`,
      hint: "legend",
      explanation: "<legend> defines a caption for the content in a <fieldset>."
    }
  },
  {
    id: "html_graphics_canvas",
    category: "HTML Graphics",
    title: "HTML Canvas",
    shortTitle: "HTML Canvas",
    description: "The HTML <canvas> element is used to draw graphics on the fly, via scripting (usually JavaScript).",
    content: `
      <h2>The &lt;canvas&gt; Element</h2>
      <p>The HTML <code>&lt;canvas&gt;</code> element is only a container for graphics. You must use JavaScript to actually draw the graphics.</p>
      <p>Canvas has several methods for drawing paths, boxes, circles, text, and adding images.</p>
    `,
    codeExample: `<!DOCTYPE html>
<html>
<body>

  <h2>Canvas 2D Graphics</h2>
  <canvas id="myCanvas" width="300" height="150" style="border:1px solid #04AA6D; border-radius:6px;"></canvas>

  <script>
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    
    // Draw green rectangle
    ctx.fillStyle = "#04AA6D";
    ctx.fillRect(20, 20, 120, 100);

    // Draw text
    ctx.fillStyle = "#ffffff";
    ctx.font = "16px Arial";
    ctx.fillText("W3 Canvas", 35, 75);

    // Draw circle
    ctx.beginPath();
    ctx.arc(220, 70, 45, 0, 2 * Math.PI);
    ctx.fillStyle = "#FFC107";
    ctx.fill();
  </script>

</body>
</html>`,
    exercise: {
      question: "Which JavaScript method is called on a canvas element to get the 2D rendering context?",
      codeSnippet: `var ctx = canvas.<input class="exercise-input" data-answer="getContext('2d')" placeholder="method">;`,
      hint: "getContext('2d')",
      explanation: "canvas.getContext('2d') retrieves the 2D drawing context."
    }
  },
  {
    id: "html_graphics_svg",
    category: "HTML Graphics",
    title: "HTML SVG",
    shortTitle: "HTML SVG",
    description: "SVG stands for Scalable Vector Graphics. SVG defines vector-based graphics in XML format.",
    content: `
      <h2>What is SVG?</h2>
      <ul>
        <li>SVG stands for <strong>S</strong>calable <strong>V</strong>ector <strong>G</strong>raphics.</li>
        <li>SVG is used to define graphics for the Web.</li>
        <li>SVG does not lose any quality if it is zoomed or resized.</li>
        <li>Every element and attribute in SVG files can be animated.</li>
      </ul>
    `,
    codeExample: `<!DOCTYPE html>
<html>
<body>

  <h2>Scalable Vector Graphics (SVG)</h2>
  <svg width="250" height="120">
    <rect width="240" height="100" rx="10" ry="10" style="fill:#04AA6D;stroke:black;stroke-width:2;opacity:0.9" />
    <circle cx="50" cy="50" r="30" fill="#FFF4A3" />
    <text fill="#ffffff" font-size="20" font-family="Verdana" x="90" y="60">W3Schools SVG</text>
  </svg>

</body>
</html>`,
    exercise: {
      question: "What does SVG stand for? (First word)",
      codeSnippet: `<input class="exercise-input" data-answer="Scalable" placeholder="Word"> Vector Graphics`,
      hint: "Scalable",
      explanation: "SVG stands for Scalable Vector Graphics."
    }
  },
  {
    id: "html_graphics_canvas_shapes",
    category: "HTML Graphics",
    title: "HTML Canvas Drawing and Paths",
    shortTitle: "Canvas Shapes",
    description: "Draw shapes, lines, text, gradients, and images onto the HTML5 Canvas using JavaScript.",
    content: `<h2>HTML Canvas 2D Context</h2>
      <p>The HTML <code>&lt;canvas&gt;</code> element is only a container for graphics. You must use JavaScript to actually draw the graphics.</p>
      <div class="w3-panel w3-info">
        <h3>Essential Canvas Methods:</h3>
        <ul>
          <li><code>getContext('2d')</code> - Obtains the 2D rendering context</li>
          <li><code>beginPath()</code> - Starts a new path</li>
          <li><code>moveTo(x, y)</code> - Moves the path to a specified point without drawing</li>
          <li><code>lineTo(x, y)</code> - Adds a line segment to the path</li>
          <li><code>stroke()</code> - Outlines the current path</li>
          <li><code>arc(x, y, r, startAngle, endAngle)</code> - Creates a circular arc</li>
          <li><code>fillRect(x, y, width, height)</code> - Draws a filled rectangle</li>
        </ul>
      </div>`,
    codeExample: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>HTML Canvas Shapes</title>
  <style>
    body { font-family: sans-serif; text-align: center; padding: 20px; }
    canvas { border: 2px solid #04AA6D; border-radius: 8px; background: #fff; }
  </style>
</head>
<body>

  <h2>Drawing Geometric Shapes with Canvas</h2>
  <canvas id="shapesCanvas" width="400" height="200"></canvas>

  <script>
    const canvas = document.getElementById('shapesCanvas');
    const ctx = canvas.getContext('2d');

    // Filled Green Rectangle
    ctx.fillStyle = '#04AA6D';
    ctx.fillRect(20, 20, 100, 80);

    // Blue Line
    ctx.beginPath();
    ctx.moveTo(150, 20);
    ctx.lineTo(250, 100);
    ctx.strokeStyle = '#2196F3';
    ctx.lineWidth = 4;
    ctx.stroke();

    // Red Circle
    ctx.beginPath();
    ctx.arc(330, 60, 40, 0, 2 * Math.PI);
    ctx.fillStyle = '#ff5722';
    ctx.fill();

    // Canvas Text
    ctx.font = '16px Arial';
    ctx.fillStyle = '#333';
    ctx.fillText('Canvas 2D Graphics', 130, 160);
  </script>

</body>
</html>`,
    exercise: {
      question: "Which 2D context method draws a filled rectangle directly on the canvas?",
      codeSnippet: `ctx.<input class="exercise-input" data-answer="fillRect" placeholder="method">(10, 10, 100, 50);`,
      hint: "fill + Rect.",
      explanation: "fillRect(x, y, width, height) draws a filled rectangle using the current fillStyle."
    }
  },
  {
    id: "html_graphics_svg_shapes",
    category: "HTML Graphics",
    title: "HTML SVG Shapes and Text",
    shortTitle: "SVG Shapes",
    description: "Scalable Vector Graphics (SVG) elements for drawing circles, rectangles, stars, and text.",
    content: `<h2>HTML SVG Elements</h2>
      <p>SVG defines vector-based graphics in XML format directly inside HTML5.</p>
      <div class="w3-panel w3-info">
        <h3>Standard SVG Shape Elements:</h3>
        <ul>
          <li><code>&lt;rect&gt;</code> - Draws a rectangle (with optional <code>rx</code>, <code>ry</code> for rounded corners)</li>
          <li><code>&lt;circle&gt;</code> - Draws a circle using <code>cx</code>, <code>cy</code>, and <code>r</code></li>
          <li><code>&lt;ellipse&gt;</code> - Draws an ellipse using <code>rx</code> and <code>ry</code></li>
          <li><code>&lt;line&gt;</code> - Draws a line between <code>(x1, y1)</code> and <code>(x2, y2)</code></li>
          <li><code>&lt;polygon&gt;</code> - Draws multi-sided shapes like triangles or stars</li>
          <li><code>&lt;text&gt;</code> - Renders vector scalable typography</li>
        </ul>
      </div>
      <p>Unlike canvas, SVG elements become part of the DOM, meaning they can be styled with CSS and receive mouse events.</p>`,
    codeExample: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>HTML SVG Shapes</title>
  <style>
    body { font-family: sans-serif; text-align: center; padding: 20px; }
    svg { background: #fdfdfd; border: 1px solid #ddd; border-radius: 8px; box-shadow: 0 2px 6px rgba(0,0,0,0.1); }
  </style>
</head>
<body>

  <h2>Scalable Vector Graphics (SVG)</h2>

  <svg width="400" height="180">
    <!-- Rounded Rectangle -->
    <rect x="20" y="20" rx="10" ry="10" width="100" height="80" fill="#04AA6D" />

    <!-- Circle -->
    <circle cx="180" cy="60" r="40" fill="#2196F3" stroke="#0b7ad1" stroke-width="3" />

    <!-- Polygon Triangle -->
    <polygon points="260,100 310,20 360,100" fill="#ff9800" />

    <!-- SVG Text -->
    <text x="130" y="150" font-family="Arial" font-size="18" fill="#333">HTML5 SVG Shapes</text>
  </svg>

</body>
</html>`,
    exercise: {
      question: "Which SVG attribute defines the radius of a circle element?",
      codeSnippet: `<circle cx="50" cy="50" <input class="exercise-input" data-answer="r" placeholder="attribute">="40" fill="green" />`,
      hint: "Single letter r.",
      explanation: "r defines the radius of an SVG circle."
    }
  },
  {
    id: "html_media_video",
    category: "HTML Media",
    title: "HTML Video",
    shortTitle: "HTML Video",
    description: "The HTML <video> element is used to show a video on a web page.",
    content: `
      <h2>The HTML &lt;video&gt; Element</h2>
      <p>To show a video in HTML, use the <code>&lt;video&gt;</code> element:</p>
      <div class="code-box-display">
        <code>&lt;video width="320" height="240" controls&gt;<br>
&nbsp;&nbsp;&lt;source src="movie.mp4" type="video/mp4"&gt;<br>
&nbsp;&nbsp;Your browser does not support the video tag.<br>
&lt;/video&gt;</code>
      </div>
      <p>The <code>controls</code> attribute adds video controls, like play, pause, and volume.</p>
      <p>It is a good idea to always include <code>width</code> and <code>height</code> attributes. If height and width are not set, the browser does not know the size of the video while loading.</p>
    `,
    codeExample: `<!DOCTYPE html>
<html>
<body>

  <h2>HTML5 Video Player</h2>
  <video width="320" height="240" controls poster="https://images.unsplash.com/photo-1536240478700-b869070f9279?w=320">
    <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4">
    Your browser does not support the video tag.
  </video>

</body>
</html>`,
    exercise: {
      question: "Which attribute must be added to <video> to provide play, pause, and volume controls?",
      codeSnippet: `<video width="320" height="240" <input class="exercise-input" data-answer="controls" placeholder="attribute">></video>`,
      hint: "controls",
      explanation: "The controls attribute enables playback controls."
    }
  },
  {
    id: "html_media_audio",
    category: "HTML Media",
    title: "HTML Audio",
    shortTitle: "HTML Audio",
    description: "The HTML <audio> element is used to play an audio file on a web page.",
    content: `
      <h2>The HTML &lt;audio&gt; Element</h2>
      <p>To play an audio file in HTML, use the <code>&lt;audio&gt;</code> element:</p>
      <p>The <code>controls</code> attribute adds audio controls, like play, pause, and volume.</p>
      <p>The <code>&lt;source&gt;</code> element allows you to specify alternative audio files which the browser may choose from.</p>
    `,
    codeExample: `<!DOCTYPE html>
<html>
<body>

  <h2>HTML5 Audio Player</h2>
  <p>Listen to an audio sample:</p>
  <audio controls>
    <source src="https://www.w3schools.com/html/horse.ogg" type="audio/ogg">
    <source src="https://www.w3schools.com/html/horse.mp3" type="audio/mpeg">
    Your browser does not support the audio element.
  </audio>

</body>
</html>`,
    exercise: {
      question: "Which tag is used to embed audio files in HTML5?",
      codeSnippet: `<<input class="exercise-input" data-answer="audio" placeholder="tag">> controls></<input class="exercise-input" data-answer="audio" placeholder="tag">>`,
      hint: "audio",
      explanation: "<audio> is the standard HTML5 element for audio."
    }
  },
  {
    id: "html_media_multimedia",
    category: "HTML Media",
    title: "HTML Multimedia Formats",
    shortTitle: "Multimedia",
    description: "Multimedia comes in many different formats including audio, video, animations, and sound.",
    content: `<h2>HTML Multimedia</h2>
      <p>Multimedia comes in many different formats. It can be almost anything you can hear or see, like images, music, sound, videos, records, films, animations, and more.</p>
      <div class="w3-panel w3-info">
        <h3>Common Video Formats:</h3>
        <ul>
          <li><strong>MP4 (.mp4):</strong> Video format with H.264 video codec and AAC audio codec. Supported by all modern browsers.</li>
          <li><strong>WebM (.webm):</strong> Developed by Google for HTML5 video. Supported by Chrome, Firefox, Opera, and Edge.</li>
          <li><strong>Ogg (.ogv):</strong> Open-source video format developed by Xiph.Org.</li>
        </ul>
        <h3>Common Audio Formats:</h3>
        <ul>
          <li><strong>MP3 (.mp3):</strong> Most popular audio format for compressed music.</li>
          <li><strong>WAV (.wav):</strong> Uncompressed waveform audio format developed by IBM & Microsoft.</li>
          <li><strong>OGG (.ogg):</strong> Open source audio format.</li>
        </ul>
      </div>`,
    codeExample: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>HTML Multimedia Formats</title>
  <style>
    body { font-family: sans-serif; padding: 20px; line-height: 1.6; }
    table { width: 100%; border-collapse: collapse; }
    th, td { border: 1px solid #ddd; padding: 10px; }
    th { background: #04AA6D; color: white; text-align: left; }
  </style>
</head>
<body>

  <h2>Standard HTML5 Media Codecs</h2>
  <table>
    <tr>
      <th>Format</th>
      <th>Media Type</th>
      <th>MIME-Type</th>
    </tr>
    <tr>
      <td>MP4</td>
      <td>Video</td>
      <td>video/mp4</td>
    </tr>
    <tr>
      <td>WebM</td>
      <td>Video</td>
      <td>video/webm</td>
    </tr>
    <tr>
      <td>MP3</td>
      <td>Audio</td>
      <td>audio/mpeg</td>
    </tr>
  </table>

</body>
</html>`,
    exercise: {
      question: "What is the standard MIME-type for MP4 video in the type attribute?",
      codeSnippet: `<source src="movie.mp4" type="<input class="exercise-input" data-answer="video/mp4" placeholder="mime-type">">`,
      hint: "video/mp4",
      explanation: "video/mp4 informs the browser of the container and encoding format."
    }
  },
  {
    id: "html_media_plugins",
    category: "HTML Media",
    title: "HTML Plug-ins (object and embed)",
    shortTitle: "Plug-ins",
    description: "The object and embed elements define an embedded object within an HTML document.",
    content: `<h2>The HTML &lt;object&gt; and &lt;embed&gt; Elements</h2>
      <p>The <code>&lt;object&gt;</code> and <code>&lt;embed&gt;</code> elements are used to embed multimedia components such as PDFs, SVG images, or external web components into an HTML page.</p>
      <div class="w3-panel w3-info">
        <h3>Difference Between &lt;object&gt; and &lt;embed&gt;:</h3>
        <ul>
          <li><code>&lt;object&gt;</code> is a container element that supports fallback content if the resource fails to load.</li>
          <li><code>&lt;embed&gt;</code> is a void element (self-closing) without fallback content, directly embedding an external resource.</li>
        </ul>
      </div>`,
    codeExample: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>HTML Plug-ins Demo</title>
  <style>
    body { font-family: Arial, sans-serif; padding: 20px; text-align: center; }
    object, embed { border: 2px solid #04AA6D; border-radius: 8px; }
  </style>
</head>
<body>

  <h2>Embedding Content with &lt;object&gt;</h2>
  <object data="https://www.w3schools.com/html/img_car.jpg" type="image/jpeg" width="300" height="200">
    <p>Fallback: Your browser does not support embedding this object.</p>
  </object>

</body>
</html>`,
    exercise: {
      question: "Which self-closing HTML tag embeds an external resource without fallback tags?",
      codeSnippet: `<<input class="exercise-input" data-answer="embed" placeholder="tag">> src="snippet.html" width="400" height="200">`,
      hint: "embed",
      explanation: "<embed> is a void element that embeds external interactive content or plugins."
    }
  },
  {
    id: "html_media_youtube",
    category: "HTML Media",
    title: "HTML YouTube Videos",
    shortTitle: "YouTube Videos",
    description: "The easiest way to play videos in HTML is to use YouTube and iframe embeds.",
    content: `<h2>Playing YouTube Videos in HTML</h2>
      <p>The easiest way to play videos in HTML is to use YouTube.</p>
      <div class="w3-panel w3-info">
        <h3>How to Embed YouTube Videos:</h3>
        <p>Use an <code>&lt;iframe&gt;</code> pointing to the YouTube embed URL:</p>
        <pre>&lt;iframe width="560" height="315" src="https://www.youtube.com/embed/VIDEO_ID" title="YouTube video player" frameborder="0" allowfullscreen&gt;&lt;/iframe&gt;</pre>
      </div>
      <h2>Useful URL Parameters</h2>
      <ul>
        <li><code>autoplay=1</code> - Starts playing automatically (requires <code>mute=1</code> in most browsers)</li>
        <li><code>mute=1</code> - Mutes video playback by default</li>
        <li><code>controls=0</code> - Hides player controls</li>
        <li><code>loop=1</code> - Causes video to loop indefinitely</li>
      </ul>`,
    codeExample: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>HTML YouTube Embed</title>
  <style>
    body { font-family: sans-serif; padding: 20px; text-align: center; }
    iframe { max-width: 100%; border-radius: 8px; box-shadow: 0 4px 15px rgba(0,0,0,0.15); }
  </style>
</head>
<body>

  <h2>Embedded YouTube Player</h2>
  <iframe width="500" height="280" src="https://www.youtube.com/embed/tgbNymZ7vqY" title="YouTube Video" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</body>
</html>`,
    exercise: {
      question: "Which URL segment in YouTube embeds precedes the video ID (e.g. /embed/ID)?",
      codeSnippet: `<iframe src="https://www.youtube.com/<input class="exercise-input" data-answer="embed" placeholder="path">/tgbNymZ7vqY"></iframe>`,
      hint: "embed",
      explanation: "YouTube embed URLs use the /embed/ path followed by the video identifier."
    }
  },
  {
    id: "html_api_geolocation",
    category: "HTML APIs",
    title: "HTML Geolocation API",
    shortTitle: "Geolocation API",
    description: "The HTML Geolocation API is used to get the geographical position of a user.",
    content: `<h2>Locate the User's Position</h2>
      <p>The HTML <strong>Geolocation API</strong> is used to get the geographical position of a user.</p>
      <p>Since this can compromise privacy, the position is not available unless the user approves it.</p>
      <div class="w3-panel w3-info">
        <h3>Using the Geolocation API:</h3>
        <p>The <code>getCurrentPosition()</code> method is used to return the user's position:</p>
        <pre>navigator.geolocation.getCurrentPosition(showPosition, showError);</pre>
        <p>The callback function receives a <code>position</code> object containing:</p>
        <ul>
          <li><code>coords.latitude</code> - The latitude as a decimal number</li>
          <li><code>coords.longitude</code> - The longitude as a decimal number</li>
          <li><code>coords.accuracy</code> - The accuracy of position in meters</li>
        </ul>
      </div>`,
    codeExample: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>HTML Geolocation API</title>
  <style>
    body { font-family: sans-serif; padding: 25px; text-align: center; }
    button { background: #04AA6D; color: white; padding: 12px 24px; border: none; border-radius: 4px; cursor: pointer; font-size: 16px; font-weight: bold; }
    #demo { margin-top: 20px; font-size: 18px; color: #333; }
  </style>
</head>
<body>

  <h2>HTML Geolocation</h2>
  <p>Click the button to get your geographical coordinates:</p>

  <button onclick="getLocation()">Get Coordinates</button>
  <p id="demo"></p>

  <script>
    const demo = document.getElementById("demo");

    function getLocation() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition, showError);
      } else {
        demo.innerHTML = "Geolocation is not supported by this browser.";
      }
    }

    function showPosition(position) {
      demo.innerHTML = "Latitude: " + position.coords.latitude + 
      "<br>Longitude: " + position.coords.longitude;
    }

    function showError(error) {
      demo.innerHTML = "User denied or unavailable location.";
    }
  </script>

</body>
</html>`,
    exercise: {
      question: "Which method on navigator.geolocation retrieves the user's current location?",
      codeSnippet: `navigator.geolocation.<input class="exercise-input" data-answer="getCurrentPosition" placeholder="method">(showPosition);`,
      hint: "getCurrentPosition",
      explanation: "getCurrentPosition() returns the current position of the device."
    }
  },
  {
    id: "html_api_dragdrop",
    category: "HTML APIs",
    title: "HTML Drag and Drop API",
    shortTitle: "Drag and Drop",
    description: "In HTML, any element can be dragged and dropped into other elements.",
    content: `<h2>HTML Drag and Drop</h2>
      <p>Drag and drop is a very common feature. It is when you "grab" an object and drag it to a different location.</p>
      <div class="w3-panel w3-info">
        <h3>How to Make an Element Draggable:</h3>
        <ol>
          <li>Set the <code>draggable</code> attribute to <code>"true"</code>: <code>&lt;img draggable="true"&gt;</code></li>
          <li>Specify what should happen when dragged with <code>ondragstart</code> and <code>dataTransfer.setData()</code></li>
          <li>Specify where to drop with <code>ondragover</code> (calling <code>event.preventDefault()</code> to allow drops)</li>
          <li>Perform the drop action with <code>ondrop</code> and <code>dataTransfer.getData()</code></li>
        </ol>
      </div>`,
    codeExample: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>HTML Drag and Drop</title>
  <style>
    body { font-family: sans-serif; padding: 20px; }
    .drop-box { width: 220px; height: 120px; padding: 10px; border: 2px dashed #04AA6D; border-radius: 8px; display: inline-block; vertical-align: top; margin-right: 20px; text-align: center; }
    .drag-item { background: #04AA6D; color: white; padding: 10px; border-radius: 4px; cursor: move; display: inline-block; font-weight: bold; }
  </style>
</head>
<body>

  <h2>Drag and Drop Example</h2>
  <p>Drag the green box into the second dashed area:</p>

  <div id="div1" class="drop-box" ondrop="drop(event)" ondragover="allowDrop(event)">
    <div id="drag1" class="drag-item" draggable="true" ondragstart="drag(event)">Drag Me!</div>
  </div>

  <div id="div2" class="drop-box" ondrop="drop(event)" ondragover="allowDrop(event)">
    <p style="color:#888;">Drop target area</p>
  </div>

  <script>
    function allowDrop(ev) {
      ev.preventDefault();
    }

    function drag(ev) {
      ev.dataTransfer.setData("text", ev.target.id);
    }

    function drop(ev) {
      ev.preventDefault();
      var data = ev.dataTransfer.getData("text");
      ev.target.closest('.drop-box').appendChild(document.getElementById(data));
    }
  </script>

</body>
</html>`,
    exercise: {
      question: "Which attribute must be set to 'true' to make an HTML element draggable?",
      codeSnippet: `<div <input class="exercise-input" data-answer="draggable" placeholder="attribute">="true">Drag me</div>`,
      hint: "draggable",
      explanation: "draggable=\"true\" enables native drag operations for the element."
    }
  },
  {
    id: "html_api_webstorage",
    category: "HTML APIs",
    title: "HTML Web Storage API",
    shortTitle: "Web Storage",
    description: "HTML web storage provides two objects for storing data on the client: localStorage and sessionStorage.",
    content: `<h2>What is HTML Web Storage?</h2>
      <p>With web storage, web applications can store data locally within the user's browser.</p>
      <p>Before HTML5, application data had to be stored in cookies, included in every server request. Web storage is more secure, and large amounts of data can be stored locally, without affecting website performance.</p>
      <div class="w3-panel w3-info">
        <h3>Two Web Storage Objects:</h3>
        <ul>
          <li><code>window.localStorage</code> - stores data with no expiration date. The data will not be deleted when the browser is closed.</li>
          <li><code>window.sessionStorage</code> - stores data for one session (data is lost when the browser tab is closed).</li>
        </ul>
      </div>
      <h2>Key Web Storage Methods:</h2>
      <ul>
        <li><code>setItem(key, value)</code> - Stores a key-value pair</li>
        <li><code>getItem(key)</code> - Retrieves the value for a key</li>
        <li><code>removeItem(key)</code> - Deletes a key</li>
        <li><code>clear()</code> - Deletes all stored keys</li>
      </ul>`,
    codeExample: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>HTML Web Storage</title>
  <style>
    body { font-family: Arial, sans-serif; padding: 20px; }
    .card { background: #f9f9f9; padding: 20px; border-radius: 8px; max-width: 400px; border: 1px solid #ddd; }
    input[type=text] { width: 100%; padding: 8px; margin: 10px 0; box-sizing: border-box; }
    button { background: #04AA6D; color: white; border: none; padding: 10px 15px; border-radius: 4px; cursor: pointer; }
    #output { margin-top: 15px; font-weight: bold; color: #04AA6D; }
  </style>
</head>
<body>

  <div class="card">
    <h2>localStorage Demonstration</h2>
    <label for="username">Enter your name:</label>
    <input type="text" id="username" placeholder="Jane Doe">
    <button onclick="saveName()">Save to localStorage</button>
    <div id="output"></div>
  </div>

  <script>
    function saveName() {
      const val = document.getElementById('username').value;
      localStorage.setItem('demo_user', val);
      displaySaved();
    }

    function displaySaved() {
      const saved = localStorage.getItem('demo_user');
      if (saved) {
        document.getElementById('output').innerText = 'Hello, ' + saved + '! (Retrieved from localStorage)';
      }
    }

    displaySaved();
  </script>

</body>
</html>`,
    exercise: {
      question: "Which method stores an item in localStorage under a specific key?",
      codeSnippet: `localStorage.<input class="exercise-input" data-answer="setItem" placeholder="method">("username", "JohnDoe");`,
      hint: "setItem",
      explanation: "localStorage.setItem(key, value) persists the value under the specified key."
    }
  },
  {
    id: "html_api_webworkers",
    category: "HTML APIs",
    title: "HTML Web Workers API",
    shortTitle: "Web Workers",
    description: "A web worker is a JavaScript script running in the background, without affecting the page performance.",
    content: `<h2>What is a Web Worker?</h2>
      <p>When executing scripts in an HTML page, the page becomes unresponsive until the script is finished.</p>
      <p>A <strong>web worker</strong> is a JavaScript running in the background, independently of other scripts, without affecting the performance of the page. You can continue to do whatever you want: clicking, selecting things, etc., while the web worker runs in the background.</p>
      <div class="w3-panel w3-info">
        <h3>How to Create a Web Worker:</h3>
        <pre>var worker = new Worker("worker.js");
worker.onmessage = function(event) {
  document.getElementById("result").innerHTML = event.data;
};
worker.postMessage("start");</pre>
      </div>
      <h2>Worker Capabilities and Limitations</h2>
      <p>Since web workers are in external files, they do not have access to the <code>window</code> object, the <code>document</code> object, or the <code>parent</code> object.</p>`,
    codeExample: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>HTML Web Workers</title>
  <style>
    body { font-family: sans-serif; padding: 25px; line-height: 1.6; }
    .box { background: #e8f5e9; padding: 20px; border-radius: 8px; border: 1px solid #04AA6D; max-width: 500px; }
    button { background: #04AA6D; color: white; border: none; padding: 10px 16px; border-radius: 4px; cursor: pointer; margin-right: 10px; font-weight: bold; }
  </style>
</head>
<body>

  <div class="box">
    <h2>Web Worker Background Counter</h2>
    <p>Count: <output id="result" style="font-size:24px; font-weight:bold; color:#04AA6D;">0</output></p>
    <button onclick="startWorker()">Start Worker</button>
    <button onclick="stopWorker()">Stop Worker</button>
  </div>

  <script>
    let w;

    function startWorker() {
      if (typeof(Worker) !== "undefined") {
        if (!w) {
          // Inline worker simulation via Blob
          const blobCode = "let i = 0; function timedCount() { i++; postMessage(i); setTimeout(timedCount, 500); } timedCount();";
          const blob = new Blob([blobCode], { type: 'application/javascript' });
          w = new Worker(URL.createObjectURL(blob));
          w.onmessage = function(event) {
            document.getElementById("result").innerText = event.data;
          };
        }
      }
    }

    function stopWorker() {
      if (w) {
        w.terminate();
        w = undefined;
      }
    }
  </script>

</body>
</html>`,
    exercise: {
      question: "Which constructor creates a new HTML Web Worker instance?",
      codeSnippet: `w = new <input class="exercise-input" data-answer="Worker" placeholder="constructor">("demo_workers.js");`,
      hint: "Worker with uppercase W.",
      explanation: "new Worker(url) initializes and launches a new background worker thread."
    }
  },
  {
    id: "html_api_sse",
    category: "HTML APIs",
    title: "HTML Server-Sent Events (SSE)",
    shortTitle: "Server-Sent Events",
    description: "Server-Sent Events (SSE) allow a web page to get updates from a server automatically.",
    content: `<h2>HTML Server-Sent Events (SSE)</h2>
      <p><strong>Server-Sent Events (SSE)</strong> allow a web page to get updates from a server automatically without polling.</p>
      <p>Examples include Facebook/Twitter updates, stock price updates, news feeds, or sports results.</p>
      <div class="w3-panel w3-info">
        <h3>The EventSource Object:</h3>
        <p>The <code>EventSource</code> object is used to receive server-sent event notifications:</p>
        <pre>var source = new EventSource("demo_sse.php");
source.onmessage = function(event) {
  document.getElementById("result").innerHTML += event.data + "&lt;br&gt;";
};</pre>
      </div>
      <h2>SSE vs WebSockets</h2>
      <ul>
        <li>SSE is unidirectional (server to client only) and uses standard HTTP protocol.</li>
        <li>WebSockets are bidirectional (client and server communicate simultaneously) and use the WS protocol.</li>
      </ul>`,
    codeExample: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>HTML Server-Sent Events</title>
  <style>
    body { font-family: 'Segoe UI', Tahoma, sans-serif; padding: 20px; }
    #result { background: #f4f4f4; border: 1px solid #ccc; padding: 15px; border-radius: 6px; min-height: 100px; font-family: monospace; }
  </style>
</head>
<body>

  <h2>Server-Sent Events Feed</h2>
  <p>Live stream output:</p>
  <div id="result">Waiting for stream messages...</div>

  <script>
    // Demonstration of SSE client handler
    if (typeof(EventSource) !== "undefined") {
      const result = document.getElementById("result");
      result.innerText = "✓ EventSource API is natively supported in this browser!";
    } else {
      document.getElementById("result").innerText = "Sorry, your browser does not support server-sent events...";
    }
  </script>

</body>
</html>`,
    exercise: {
      question: "Which JavaScript class is used to connect to a Server-Sent Events stream?",
      codeSnippet: `var source = new <input class="exercise-input" data-answer="EventSource" placeholder="class">("demo_sse.php");`,
      hint: "EventSource",
      explanation: "The EventSource interface handles the connection to an HTTP server-sent events stream."
    }
  },
  {
    id: "html_entities",
    category: "HTML References",
    title: "HTML Entities & Symbols",
    shortTitle: "HTML Entities",
    description: "Reserved characters in HTML must be replaced with character entities.",
    content: `
      <h2>HTML Entities</h2>
      <p>Some characters are reserved in HTML. If you use the less than (<code>&lt;</code>) or greater than (<code>&gt;</code>) signs in your text, the browser might mix them with tags.</p>
      <p>Character entities are used to display reserved characters in HTML.</p>
      <table class="w3-table">
        <thead>
          <tr><th>Result</th><th>Description</th><th>Entity Name</th><th>Entity Number</th></tr>
        </thead>
        <tbody>
          <tr><td>&nbsp;</td><td>non-breaking space</td><td><code>&amp;nbsp;</code></td><td><code>&amp;#160;</code></td></tr>
          <tr><td>&lt;</td><td>less than</td><td><code>&amp;lt;</code></td><td><code>&amp;#60;</code></td></tr>
          <tr><td>&gt;</td><td>greater than</td><td><code>&amp;gt;</code></td><td><code>&amp;#62;</code></td></tr>
          <tr><td>&amp;</td><td>ampersand</td><td><code>&amp;amp;</code></td><td><code>&amp;#38;</code></td></tr>
          <tr><td>&quot;</td><td>double quotation mark</td><td><code>&amp;quot;</code></td><td><code>&amp;#34;</code></td></tr>
          <tr><td>&copy;</td><td>copyright</td><td><code>&amp;copy;</code></td><td><code>&amp;#169;</code></td></tr>
          <tr><td>&euro;</td><td>euro</td><td><code>&amp;euro;</code></td><td><code>&amp;#8364;</code></td></tr>
        </tbody>
      </table>
    `,
    codeExample: `<!DOCTYPE html>
<html>
<body>

  <h2>Common HTML Entities</h2>
  <p>Non-breaking space: Word1&nbsp;&nbsp;&nbsp;&nbsp;Word2</p>
  <p>Less than and greater than: &lt;div&gt; tag</p>
  <p>Ampersand symbol: AT&amp;T</p>
  <p>Copyright symbol: &copy; 2026 W3Schools</p>
  <p>Currencies: &dollar; 100, &euro; 85, &pound; 75, &yen; 12000</p>
  <p>Emojis (UTF-8): &#128512; &#128640; &#128187;</p>

</body>
</html>`,
    exercise: {
      question: "Which HTML entity name represents the copyright symbol ©?",
      codeSnippet: `&<input class="exercise-input" data-answer="copy" placeholder="entity">;`,
      hint: "copy",
      explanation: "&copy; produces the copyright symbol ©."
    }
  },
  {
    id: "html_ref_taglist",
    category: "HTML References",
    title: "HTML Tag List (Alphabetical A-Z)",
    shortTitle: "Tag List Reference",
    description: "An alphabetical index of all official HTML5 tags with descriptions and usage.",
    content: `<h2>HTML Tag List (Alphabetical)</h2>
      <p>W3Schools' complete alphabetical list of all standard HTML elements from A to Z.</p>
      <div class="w3-panel w3-info">
        <h3>Common HTML5 Tags:</h3>
        <ul>
          <li><code>&lt;a&gt;</code> - Defines a hyperlink</li>
          <li><code>&lt;article&gt;</code> - Defines independent, self-contained article content</li>
          <li><code>&lt;button&gt;</code> - Defines a clickable button</li>
          <li><code>&lt;div&gt;</code> - Defines a division or a section in an HTML document</li>
          <li><code>&lt;form&gt;</code> - Defines an HTML form for user input</li>
          <li><code>&lt;img&gt;</code> - Embeds an image</li>
          <li><code>&lt;input&gt;</code> - Defines an input control</li>
          <li><code>&lt;nav&gt;</code> - Defines navigation links</li>
          <li><code>&lt;p&gt;</code> - Defines a paragraph</li>
          <li><code>&lt;span&gt;</code> - Defines an inline section in a document</li>
          <li><code>&lt;table&gt;</code> - Defines a table</li>
        </ul>
      </div>`,
    codeExample: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>HTML Tag List Reference</title>
  <style>
    body { font-family: Arial, sans-serif; padding: 20px; line-height: 1.6; }
    table { width: 100%; border-collapse: collapse; }
    th, td { border: 1px solid #ddd; padding: 10px; text-align: left; }
    th { background: #04AA6D; color: white; }
    code { background: #eee; padding: 2px 5px; border-radius: 3px; }
  </style>
</head>
<body>

  <h2>Alphabetical HTML Tags Quick View</h2>
  <table>
    <tr>
      <th>Tag</th>
      <th>Description</th>
      <th>HTML5</th>
    </tr>
    <tr>
      <td><code>&lt;a&gt;</code></td>
      <td>Defines a hyperlink</td>
      <td>Yes</td>
    </tr>
    <tr>
      <td><code>&lt;b&gt;</code></td>
      <td>Defines bold text</td>
      <td>Yes</td>
    </tr>
    <tr>
      <td><code>&lt;canvas&gt;</code></td>
      <td>Draws graphics on the fly via scripting</td>
      <td>Yes (New)</td>
    </tr>
  </table>

</body>
</html>`,
    exercise: {
      question: "Which tag defines the top-level root element of all HTML documents?",
      codeSnippet: `<<input class="exercise-input" data-answer="html" placeholder="tag">> ... </html>`,
      hint: "html",
      explanation: "<html> represents the root of an HTML document."
    }
  },
  {
    id: "html_ref_attributes",
    category: "HTML References",
    title: "HTML Tag Attributes Reference",
    shortTitle: "Attributes Reference",
    description: "A complete list of HTML tag-specific attributes and the elements they apply to.",
    content: `<h2>HTML Attributes Reference</h2>
      <p>HTML attributes provide additional information about HTML elements.</p>
      <div class="w3-panel w3-info">
        <h3>Selected Attribute Guide:</h3>
        <ul>
          <li><code>accept</code> - Specifies the types of files that the server accepts (for <code>&lt;input type="file"&gt;</code>)</li>
          <li><code>action</code> - Specifies where to send the form-data when a form is submitted (for <code>&lt;form&gt;</code>)</li>
          <li><code>alt</code> - Specifies an alternate text when the original element cannot be displayed (for <code>&lt;img&gt;</code>, <code>&lt;area&gt;</code>)</li>
          <li><code>href</code> - Specifies the URL of the page the link goes to (for <code>&lt;a&gt;</code>, <code>&lt;link&gt;</code>)</li>
          <li><code>src</code> - Specifies the URL of the media file (for <code>&lt;img&gt;</code>, <code>&lt;audio&gt;</code>, <code>&lt;video&gt;</code>, <code>&lt;script&gt;</code>)</li>
          <li><code>target</code> - Specifies where to open the linked document (e.g. <code>_blank</code>)</li>
        </ul>
      </div>`,
    codeExample: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>HTML Attributes Reference</title>
  <style>
    body { font-family: sans-serif; padding: 20px; line-height: 1.6; }
    .card { background: #fdfdfd; border: 1px solid #ddd; padding: 15px; border-radius: 6px; }
  </style>
</head>
<body>

  <h2>Common Attributes in Action</h2>
  <div class="card">
    <p><a href="https://www.w3schools.com" target="_blank" rel="noopener">W3Schools Official (opens in new tab)</a></p>
    <img src="https://www.w3schools.com/html/img_chania.jpg" alt="Chania Harbor" width="250" height="180">
  </div>

</body>
</html>`,
    exercise: {
      question: "Which attribute on an <a> element opens the link in a new browser tab or window?",
      codeSnippet: `<a href="https://example.com" target="<input class="exercise-input" data-answer="_blank" placeholder="target">">New Tab</a>`,
      hint: "_blank",
      explanation: "target=\"_blank\" opens the linked document in a new window or tab."
    }
  },
  {
    id: "html_ref_globalattributes",
    category: "HTML References",
    title: "HTML Global Attributes Reference",
    shortTitle: "Global Attributes",
    description: "Global attributes are attributes that can be used with ANY HTML element.",
    content: `<h2>HTML Global Attributes</h2>
      <p>Global attributes are attributes that can be used with any and all HTML elements.</p>
      <div class="w3-panel w3-info">
        <h3>Standard Global Attributes:</h3>
        <ul>
          <li><code>accesskey</code> - Specifies a shortcut key to activate/focus an element</li>
          <li><code>class</code> - Specifies one or more classnames for an element (referencing CSS)</li>
          <li><code>contenteditable</code> - Specifies whether the content of an element is editable</li>
          <li><code>data-*</code> - Used to store custom data private to the page or application</li>
          <li><code>dir</code> - Specifies the text direction for the content in an element (ltr or rtl)</li>
          <li><code>draggable</code> - Specifies whether an element is draggable or not</li>
          <li><code>hidden</code> - Specifies that an element is not yet, or is no longer, relevant</li>
          <li><code>id</code> - Specifies a unique id for an element</li>
          <li><code>lang</code> - Specifies the language of the element's content</li>
          <li><code>style</code> - Specifies an inline CSS style for an element</li>
          <li><code>tabindex</code> - Specifies the tabbing order of an element</li>
          <li><code>title</code> - Specifies extra information about an element (displayed as tooltip)</li>
        </ul>
      </div>`,
    codeExample: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>HTML Global Attributes</title>
  <style>
    body { font-family: Arial, sans-serif; padding: 20px; line-height: 1.6; }
    .editable-box { border: 2px dashed #04AA6D; padding: 15px; border-radius: 6px; background: #e8f5e9; }
  </style>
</head>
<body>

  <h2>Global Attributes Example</h2>
  <p title="This is a tooltip displayed on hover!">Hover over this paragraph to see the title tooltip.</p>

  <h3>contenteditable Attribute</h3>
  <div class="editable-box" contenteditable="true">
    Click here! You can edit this text directly in your browser. Try typing!
  </div>

</body>
</html>`,
    exercise: {
      question: "Which global attribute makes any HTML element directly editable by the user in the browser?",
      codeSnippet: `<div <input class="exercise-input" data-answer="contenteditable" placeholder="attribute">="true">Editable text</div>`,
      hint: "content + editable.",
      explanation: "contenteditable=\"true\" turns any HTML element into a rich live text editor."
    }
  },
  {
    id: "html_ref_eventattributes",
    category: "HTML References",
    title: "HTML Event Attributes Reference",
    shortTitle: "Event Attributes",
    description: "HTML events allow you to trigger JavaScript actions in the browser.",
    content: `<h2>HTML Event Attributes</h2>
      <p>HTML has the ability to let events trigger actions in a browser, like starting a JavaScript when a user clicks on an element.</p>
      <div class="w3-panel w3-info">
        <h3>Common Event Categories:</h3>
        <ul>
          <li><strong>Window Events:</strong> <code>onload</code>, <code>onresize</code>, <code>onunload</code></li>
          <li><strong>Form Events:</strong> <code>onchange</code>, <code>onsubmit</code>, <code>onfocus</code>, <code>onblur</code>, <code>oninput</code></li>
          <li><strong>Keyboard Events:</strong> <code>onkeydown</code>, <code>onkeyup</code>, <code>onkeypress</code></li>
          <li><strong>Mouse Events:</strong> <code>onclick</code>, <code>ondblclick</code>, <code>onmouseover</code>, <code>onmouseout</code>, <code>onmousemove</code></li>
          <li><strong>Clipboard Events:</strong> <code>oncopy</code>, <code>oncut</code>, <code>onpaste</code></li>
        </ul>
      </div>`,
    codeExample: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>HTML Event Attributes</title>
  <style>
    body { font-family: sans-serif; padding: 20px; }
    button { background: #04AA6D; color: white; padding: 10px 18px; border: none; border-radius: 4px; cursor: pointer; font-size: 15px; }
    #msg { margin-top: 15px; color: #04AA6D; font-weight: bold; }
  </style>
</head>
<body>

  <h2>Mouse & Input Events</h2>
  <button onclick="document.getElementById('msg').innerText = '✓ Click event triggered at ' + new Date().toLocaleTimeString();">
    Click Me!
  </button>
  <p id="msg"></p>

  <label for="txt">Type something:</label><br>
  <input type="text" id="txt" oninput="document.getElementById('msg').innerText = 'You typed: ' + this.value;">

</body>
</html>`,
    exercise: {
      question: "Which event attribute fires when a button is clicked by the user?",
      codeSnippet: `<button <input class="exercise-input" data-answer="onclick" placeholder="attribute">="alert('Hello')">Click</button>`,
      hint: "on + click.",
      explanation: "onclick executes JavaScript when the user clicks the element."
    }
  },
  {
    id: "html_ref_colornames",
    category: "HTML References",
    title: "HTML Color Names and Hex Codes",
    shortTitle: "Color Names",
    description: "All modern browsers support 140 official HTML color names.",
    content: `<h2>HTML Color Names</h2>
      <p>All modern browsers support <strong>140 official color names</strong> (like <code>Red</code>, <code>Green</code>, <code>Blue</code>, <code>Tomato</code>, <code>DodgerBlue</code>, <code>SlateBlue</code>).</p>
      <div class="w3-panel w3-info">
        <h3>Popular Standard Web Colors:</h3>
        <ul>
          <li><code>#04AA6D</code> - Official W3Schools Brand Green</li>
          <li><code>Tomato</code> - <code>#FF6347</code> (rgb(255, 99, 71))</li>
          <li><code>Orange</code> - <code>#FFA500</code> (rgb(255, 165, 0))</li>
          <li><code>DodgerBlue</code> - <code>#1E90FF</code> (rgb(30, 144, 255))</li>
          <li><code>MediumSeaGreen</code> - <code>#3CB371</code> (rgb(60, 179, 113))</li>
          <li><code>Gray</code> - <code>#808080</code> (rgb(128, 128, 128))</li>
          <li><code>SlateBlue</code> - <code>#6A5ACD</code> (rgb(106, 90, 205))</li>
        </ul>
      </div>`,
    codeExample: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>HTML Color Names</title>
  <style>
    body { font-family: sans-serif; padding: 20px; }
    .color-swatch { display: inline-block; width: 140px; padding: 20px; margin: 8px; text-align: center; color: white; font-weight: bold; border-radius: 6px; text-shadow: 1px 1px 2px rgba(0,0,0,0.5); }
  </style>
</head>
<body>

  <h2>Official HTML Colors</h2>
  <div class="color-swatch" style="background-color: Tomato;">Tomato</div>
  <div class="color-swatch" style="background-color: DodgerBlue;">DodgerBlue</div>
  <div class="color-swatch" style="background-color: MediumSeaGreen;">MediumSeaGreen</div>
  <div class="color-swatch" style="background-color: SlateBlue;">SlateBlue</div>
  <div class="color-swatch" style="background-color: #04AA6D;">W3 Green</div>

</body>
</html>`,
    exercise: {
      question: "What is the 6-character hexadecimal color code for pure red?",
      codeSnippet: `color: #<input class="exercise-input" data-answer="FF0000" placeholder="hex">;`,
      hint: "FF0000",
      explanation: "#FF0000 is 100% Red with 0% Green and 0% Blue."
    }
  },
  {
    id: "html_ref_canvas",
    category: "HTML References",
    title: "HTML Canvas 2D Reference",
    shortTitle: "Canvas Reference",
    description: "The HTML5 canvas element uses JavaScript to draw 2D graphics and paths.",
    content: `<h2>HTML Canvas 2D Reference</h2>
      <p>The <code>&lt;canvas&gt;</code> element is used to draw graphics on a web page via JavaScript.</p>
      <div class="w3-panel w3-info">
        <h3>2D Context Methods & Properties:</h3>
        <ul>
          <li><code>fillStyle</code> - Sets or returns the color, gradient, or pattern used to fill the drawing</li>
          <li><code>strokeStyle</code> - Sets or returns the color, gradient, or pattern used for strokes</li>
          <li><code>fillRect(x,y,w,h)</code> - Draws a "filled" rectangle</li>
          <li><code>strokeRect(x,y,w,h)</code> - Draws a rectangle (no fill)</li>
          <li><code>clearRect(x,y,w,h)</code> - Clears the specified pixels within a given rectangle</li>
          <li><code>beginPath()</code> - Begins a path, or resets the current path</li>
          <li><code>closePath()</code> - Creates a path from the current point back to the starting point</li>
          <li><code>arc(x,y,r,sAngle,eAngle)</code> - Creates an arc/curve (used to create circles, or parts of circles)</li>
          <li><code>drawImage(img,x,y)</code> - Draws an image, canvas, or video onto the canvas</li>
        </ul>
      </div>`,
    codeExample: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Canvas Reference Demo</title>
  <style>
    body { font-family: sans-serif; padding: 20px; text-align: center; }
    canvas { border: 1px solid #333; border-radius: 8px; }
  </style>
</head>
<body>

  <h2>Linear Gradient in Canvas</h2>
  <canvas id="gradCanvas" width="350" height="150"></canvas>

  <script>
    const canvas = document.getElementById("gradCanvas");
    const ctx = canvas.getContext("2d");

    // Create gradient
    const grd = ctx.createLinearGradient(0, 0, 350, 0);
    grd.addColorStop(0, "#04AA6D");
    grd.addColorStop(1, "#2196F3");

    // Fill with gradient
    ctx.fillStyle = grd;
    ctx.fillRect(20, 20, 310, 110);
  </script>

</body>
</html>`,
    exercise: {
      question: "Which method on an HTML canvas element retrieves the 2D drawing context?",
      codeSnippet: `const ctx = canvas.<input class="exercise-input" data-answer="getContext" placeholder="method">("2d");`,
      hint: "getContext",
      explanation: "canvas.getContext('2d') returns a CanvasRenderingContext2D object."
    }
  },
  {
    id: "html_ref_av_dom",
    category: "HTML References",
    title: "HTML Audio and Video DOM Reference",
    shortTitle: "Audio/Video DOM",
    description: "HTML5 audio and video elements feature comprehensive DOM properties, methods, and events.",
    content: `<h2>HTML Audio and Video DOM Reference</h2>
      <p>HTML5 introduces new elements for media: <code>&lt;audio&gt;</code> and <code>&lt;video&gt;</code>. These elements have DOM methods, properties, and events for programmatic control.</p>
      <div class="w3-panel w3-info">
        <h3>Key Audio/Video Methods:</h3>
        <ul>
          <li><code>play()</code> - Starts playing the audio/video</li>
          <li><code>pause()</code> - Pauses the currently playing audio/video</li>
          <li><code>load()</code> - Reloads the audio/video element</li>
        </ul>
        <h3>Key Audio/Video Properties:</h3>
        <ul>
          <li><code>currentTime</code> - Sets or returns the current playback position in seconds</li>
          <li><code>duration</code> - Returns the total length of the audio/video in seconds</li>
          <li><code>paused</code> - Returns whether the audio/video is currently paused</li>
          <li><code>volume</code> - Sets or returns the volume (from 0.0 to 1.0)</li>
          <li><code>muted</code> - Sets or returns whether audio is muted</li>
        </ul>
      </div>`,
    codeExample: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Audio/Video DOM Control</title>
  <style>
    body { font-family: sans-serif; padding: 20px; text-align: center; }
    video { border-radius: 8px; max-width: 100%; }
    .controls { margin-top: 10px; }
    button { background: #04AA6D; color: white; border: none; padding: 8px 16px; border-radius: 4px; cursor: pointer; margin: 4px; }
  </style>
</head>
<body>

  <h2>Custom Video Controls</h2>
  <video id="myVid" width="360" poster="https://www.w3schools.com/html/img_chania.jpg">
    <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4">
  </video>

  <div class="controls">
    <button onclick="document.getElementById('myVid').play()">Play ▶</button>
    <button onclick="document.getElementById('myVid').pause()">Pause ⏸</button>
  </div>

</body>
</html>`,
    exercise: {
      question: "Which DOM method begins playback on an HTML video element?",
      codeSnippet: `videoElement.<input class="exercise-input" data-answer="play" placeholder="method">();`,
      hint: "play",
      explanation: "play() initiates media playback on <video> or <audio> elements."
    }
  },
  {
    id: "html_ref_doctypes",
    category: "HTML References",
    title: "HTML Doctypes Reference",
    shortTitle: "Doctypes Reference",
    description: "A complete reference of document type declarations across HTML history.",
    content: `<h2>HTML &lt;!DOCTYPE&gt; Declarations</h2>
      <p>The <code>&lt;!DOCTYPE&gt;</code> declaration must be the very first thing in your HTML document, before the <code>&lt;html&gt;</code> tag.</p>
      <p>The declaration is an instruction to the web browser about what version of the markup language the page is written in.</p>
      <div class="w3-panel w3-info">
        <h3>Historical Comparison of DOCTYPEs:</h3>
        <ul>
          <li><strong>HTML5:</strong> <code>&lt;!DOCTYPE html&gt;</code> (Clean, case-insensitive, standards-mode)</li>
          <li><strong>HTML 4.01 Strict:</strong> <code>&lt;!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd"&gt;</code></li>
          <li><strong>HTML 4.01 Transitional:</strong> <code>&lt;!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd"&gt;</code></li>
          <li><strong>XHTML 1.0 Strict:</strong> <code>&lt;!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd"&gt;</code></li>
        </ul>
      </div>`,
    codeExample: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>HTML Doctypes Guide</title>
  <style>
    body { font-family: 'Segoe UI', Tahoma, sans-serif; padding: 25px; line-height: 1.6; }
    .code-box { background: #282a36; color: #f8f8f2; padding: 15px; border-radius: 6px; font-family: monospace; }
  </style>
</head>
<body>

  <h1>HTML5 Simple Doctype</h1>
  <div class="code-box">
    &lt;!DOCTYPE html&gt;
  </div>
  <p>In HTML5, the doctype is minimal, easy to remember, and triggers standard rendering mode in all modern web browsers.</p>

</body>
</html>`,
    exercise: {
      question: "What is the complete doctype declaration for modern HTML5 documents?",
      codeSnippet: `<!DOCTYPE <input class="exercise-input" data-answer="html" placeholder="doctype">>`,
      hint: "html",
      explanation: "<!DOCTYPE html> is the concise doctype declaration introduced in HTML5."
    }
  },
  {
    id: "html_ref_charactersets",
    category: "HTML References",
    title: "HTML Character Sets Reference",
    shortTitle: "Character Sets",
    description: "Standard character encodings used across the web including ASCII, ISO, and UTF-8.",
    content: `<h2>HTML Character Sets Reference</h2>
      <p>A character set is a set of characters recognized by a computer. In HTML, character encoding specifies how characters are translated into bytes.</p>
      <div class="w3-panel w3-info">
        <h3>Major Character Encodings:</h3>
        <ul>
          <li><strong>ASCII:</strong> Defines 128 character codes (0 to 127). Includes numbers 0-9, English uppercase A-Z, lowercase a-z, and control characters.</li>
          <li><strong>ISO-8859-1:</strong> Extension of ASCII containing 256 characters. Includes characters for Western European languages.</li>
          <li><strong>UTF-8:</strong> Variable-width encoding covering 1,112,064 valid character code points. The undisputed universal standard for the World Wide Web.</li>
        </ul>
      </div>`,
    codeExample: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Character Sets Reference</title>
  <style>
    body { font-family: Arial, sans-serif; padding: 20px; line-height: 1.6; }
    .badge { background: #04AA6D; color: white; padding: 4px 8px; border-radius: 4px; font-size: 13px; }
  </style>
</head>
<body>

  <h2>Character Set Encodings <span class="badge">UTF-8 Standard</span></h2>
  <p>UTF-8 is backward-compatible with ASCII and supports every living human language and emoji system.</p>

</body>
</html>`,
    exercise: {
      question: "Which character encoding is the official standard for HTML5 web pages?",
      codeSnippet: `<meta charset="<input class="exercise-input" data-answer="UTF-8" placeholder="charset">">`,
      hint: "UTF-8",
      explanation: "UTF-8 is the recommended character encoding for all HTML5 documents."
    }
  },
  {
    id: "html_ref_urlencoding",
    category: "HTML References",
    title: "HTML URL Encoding Reference",
    shortTitle: "URL Encoding",
    description: "Complete reference table of ASCII characters and their percent-encoded equivalents.",
    content: `<h2>URL Encoding Reference Table</h2>
      <p>URLs can only be sent over the Internet using the ASCII character set. Characters that are not standard ASCII characters must be encoded using percent (<code>%</code>) hex values.</p>
      <div class="w3-panel w3-info">
        <h3>Common URL Hex Conversions:</h3>
        <ul>
          <li><code>Space</code> &rarr; <code>%20</code></li>
          <li><code>!</code> &rarr; <code>%21</code></li>
          <li><code>"</code> &rarr; <code>%22</code></li>
          <li><code>#</code> &rarr; <code>%23</code></li>
          <li><code>$</code> &rarr; <code>%24</code></li>
          <li><code>%</code> &rarr; <code>%25</code></li>
          <li><code>&amp;</code> &rarr; <code>%26</code></li>
          <li><code>+</code> &rarr; <code>%2B</code></li>
          <li><code>/</code> &rarr; <code>%2F</code></li>
          <li><code>:</code> &rarr; <code>%3A</code></li>
          <li><code>=</code> &rarr; <code>%3D</code></li>
          <li><code>?</code> &rarr; <code>%3F</code></li>
        </ul>
      </div>`,
    codeExample: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>URL Encoding Reference</title>
  <style>
    body { font-family: monospace; padding: 20px; font-size: 15px; }
    table { width: 100%; border-collapse: collapse; font-family: sans-serif; }
    th, td { border: 1px solid #ddd; padding: 8px; text-align: left; }
    th { background: #04AA6D; color: white; }
  </style>
</head>
<body>

  <h2>ASCII Character to URL Percent-Encoding</h2>
  <table>
    <tr>
      <th>Character</th>
      <th>Hex Code</th>
      <th>Usage Example</th>
    </tr>
    <tr>
      <td>Space</td>
      <td>%20</td>
      <td>search?q=w3schools%20html</td>
    </tr>
    <tr>
      <td>Ampersand &amp;</td>
      <td>%26</td>
      <td>param1=val1%26param2=val2</td>
    </tr>
    <tr>
      <td>Question Mark ?</td>
      <td>%3F</td>
      <td>path%3Fquery</td>
    </tr>
  </table>

</body>
</html>`,
    exercise: {
      question: "What is the URL encoded percent value for the hash symbol (#)?",
      codeSnippet: `# is represented in URL encoding as %<input class="exercise-input" data-answer="23" placeholder="hex">`,
      hint: "23",
      explanation: "%23 represents the hash symbol (#, ASCII 35) in URL encoding."
    }
  },
  {
    id: "html_ref_language_codes",
    category: "HTML References",
    title: "HTML Language Codes Reference",
    shortTitle: "Language Codes",
    description: "ISO 639-1 two-letter language codes for the HTML lang attribute.",
    content: `<h2>HTML ISO 639-1 Language Codes</h2>
      <p>The <code>lang</code> attribute in the <code>&lt;html&gt;</code> tag specifies the language of the document.</p>
      <div class="w3-panel w3-info">
        <h3>Standard ISO 639-1 Codes:</h3>
        <ul>
          <li><code>en</code> - English</li>
          <li><code>tr</code> - Turkish</li>
          <li><code>es</code> - Spanish</li>
          <li><code>fr</code> - French</li>
          <li><code>de</code> - German</li>
          <li><code>it</code> - Italian</li>
          <li><code>ja</code> - Japanese</li>
          <li><code>zh</code> - Chinese</li>
          <li><code>ar</code> - Arabic</li>
          <li><code>ru</code> - Russian</li>
        </ul>
      </div>
      <p>Declaring a language is important for accessibility (screen readers pronounce words properly) and search engine crawlers.</p>`,
    codeExample: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>HTML Language Codes Reference</title>
  <style>
    body { font-family: sans-serif; padding: 20px; line-height: 1.6; }
    code { background: #f1f1f1; padding: 3px 6px; border-radius: 4px; }
  </style>
</head>
<body>

  <h2>Language Declaration</h2>
  <p>The root tag declares English: <code>&lt;html lang="en"&gt;</code></p>
  <p>You can also declare language for specific sections:</p>
  <p lang="fr"><em>Bonjour le monde!</em> (French text pronounced with French voice engine)</p>

</body>
</html>`,
    exercise: {
      question: "Which attribute on the <html> tag declares the primary language of the document?",
      codeSnippet: `<html <input class="exercise-input" data-answer="lang" placeholder="attribute">="en">`,
      hint: "lang",
      explanation: "The lang attribute defines the natural language of the document."
    }
  },
  {
    id: "html_ref_country_codes",
    category: "HTML References",
    title: "HTML Country Codes Reference",
    shortTitle: "Country Codes",
    description: "ISO 3166-1 alpha-2 country codes used with language codes (e.g., en-US, en-GB, tr-TR).",
    content: `<h2>HTML ISO 3166-1 Country Codes</h2>
      <p>When combined with language codes, country codes specify regional dialects in the <code>lang</code> attribute (e.g. <code>lang="en-US"</code> for American English or <code>lang="en-GB"</code> for British English).</p>
      <div class="w3-panel w3-info">
        <h3>Common ISO 3166-1 Alpha-2 Codes:</h3>
        <ul>
          <li><code>US</code> - United States</li>
          <li><code>GB</code> - United Kingdom</li>
          <li><code>TR</code> - Turkey</li>
          <li><code>DE</code> - Germany</li>
          <li><code>FR</code> - France</li>
          <li><code>CA</code> - Canada</li>
          <li><code>AU</code> - Australia</li>
          <li><code>JP</code> - Japan</li>
          <li><code>CN</code> - China</li>
        </ul>
      </div>`,
    codeExample: `<!DOCTYPE html>
<html lang="en-US">
<head>
  <meta charset="UTF-8">
  <title>Country Codes in HTML</title>
  <style>
    body { font-family: sans-serif; padding: 20px; line-height: 1.6; }
    .box { background: #f9f9f9; border-left: 4px solid #04AA6D; padding: 15px; }
  </style>
</head>
<body>

  <div class="box">
    <h2>Regional Dialect Declaration</h2>
    <p>Document language is set to: <strong>en-US</strong> (English as used in the United States).</p>
  </div>

</body>
</html>`,
    exercise: {
      question: "What 2-letter country code specifies the United States in 'en-US'?",
      codeSnippet: `<html lang="en-<input class="exercise-input" data-answer="US" placeholder="country">">`,
      hint: "US",
      explanation: "US is the ISO 3166-1 alpha-2 code for the United States."
    }
  },
  {
    id: "html_ref_httpmessages",
    category: "HTML References",
    title: "HTML HTTP Status Messages Reference",
    shortTitle: "HTTP Status Messages",
    description: "Standard HTTP response codes returned by servers when requesting HTML resources.",
    content: `<h2>HTTP Status Messages</h2>
      <p>When a browser requests a page from a web server, the server returns an HTTP status code.</p>
      <div class="w3-panel w3-info">
        <h3>Status Code Categories:</h3>
        <ul>
          <li><strong>1xx (Informational):</strong> Request received, continuing process (e.g. 100 Continue)</li>
          <li><strong>2xx (Successful):</strong> Action was successfully received and accepted:
            <ul>
              <li><code>200 OK</code> - Standard successful HTTP request</li>
              <li><code>201 Created</code> - New resource was created</li>
            </ul>
          </li>
          <li><strong>3xx (Redirection):</strong> Further action must be taken:
            <ul>
              <li><code>301 Moved Permanently</code> - Permanent URL redirection</li>
              <li><code>304 Not Modified</code> - Cached version is up to date</li>
            </ul>
          </li>
          <li><strong>4xx (Client Error):</strong> Request contains bad syntax or cannot be fulfilled:
            <ul>
              <li><code>400 Bad Request</code> - Malformed syntax</li>
              <li><code>401 Unauthorized</code> - Authentication required</li>
              <li><code>403 Forbidden</code> - Server refuses to respond</li>
              <li><code>404 Not Found</code> - Requested resource does not exist</li>
            </ul>
          </li>
          <li><strong>5xx (Server Error):</strong> Server failed to fulfill an apparently valid request:
            <ul>
              <li><code>500 Internal Server Error</code> - Generic server failure</li>
              <li><code>503 Service Unavailable</code> - Server overloaded or down for maintenance</li>
            </ul>
          </li>
        </ul>
      </div>`,
    codeExample: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>HTTP Status Codes</title>
  <style>
    body { font-family: sans-serif; padding: 20px; line-height: 1.6; }
    .status-badge { display: inline-block; padding: 4px 8px; border-radius: 4px; font-weight: bold; color: white; }
    .ok { background: #04AA6D; }
    .err { background: #f44336; }
  </style>
</head>
<body>

  <h2>Web Server Response Status Codes</h2>
  <p><span class="status-badge ok">200 OK</span> Page loaded successfully.</p>
  <p><span class="status-badge err">404 Not Found</span> The requested URL was not found on this server.</p>

</body>
</html>`,
    exercise: {
      question: "What 3-digit HTTP status code indicates that a requested web resource was not found?",
      codeSnippet: `HTTP Status Code: <input class="exercise-input" data-answer="404" placeholder="code"> Not Found`,
      hint: "404",
      explanation: "404 Not Found is the standard status code indicating the server cannot locate the resource."
    }
  },
  {
    id: "html_ref_keyboardshortcuts",
    category: "HTML References",
    title: "HTML Keyboard Shortcuts and Accesskey Reference",
    shortTitle: "Keyboard Shortcuts",
    description: "Accesskeys and accessibility shortcuts in HTML documents.",
    content: `<h2>The HTML accesskey Attribute</h2>
      <p>The <code>accesskey</code> attribute specifies a shortcut key to activate or focus an element.</p>
      <div class="w3-panel w3-info">
        <h3>Browser Shortcut Keys:</h3>
        <p>The way to access the shortcut key depends on the browser and the operating system:</p>
        <ul>
          <li><strong>Windows (Chrome, Edge):</strong> <code>Alt</code> + accesskey</li>
          <li><strong>Windows (Firefox):</strong> <code>Alt</code> + <code>Shift</code> + accesskey</li>
          <li><strong>Mac (Chrome, Safari, Firefox):</strong> <code>Ctrl</code> + <code>Option</code> + accesskey</li>
        </ul>
      </div>
      <h2>The tabindex Attribute</h2>
      <p>The <code>tabindex</code> attribute controls the sequential focus navigation order (usually with the Tab key):</p>
      <ul>
        <li><code>tabindex="0"</code> makes an element focusable in the natural document flow.</li>
        <li><code>tabindex="-1"</code> makes an element focusable via script, but not through keyboard tab.</li>
        <li><code>tabindex="1"</code> or higher gives an explicit tab order.</li>
      </ul>`,
    codeExample: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>HTML Keyboard Accesskey</title>
  <style>
    body { font-family: sans-serif; padding: 20px; line-height: 1.6; }
    a.key-link { display: inline-block; padding: 8px 14px; background: #04AA6D; color: white; text-decoration: none; border-radius: 4px; margin-right: 10px; }
  </style>
</head>
<body>

  <h2>Keyboard Navigation Shortcuts</h2>
  <p>Press <kbd>Alt</kbd> + <kbd>H</kbd> to activate the Home link:</p>
  <p>
    <a href="#home" accesskey="h" class="key-link">Home (Alt+H)</a>
    <a href="#contact" accesskey="c" class="key-link">Contact (Alt+C)</a>
  </p>

</body>
</html>`,
    exercise: {
      question: "Which HTML attribute specifies a shortcut key to activate or focus an element?",
      codeSnippet: `<a href="https://www.w3schools.com" <input class="exercise-input" data-answer="accesskey" placeholder="attribute">="w">W3Schools</a>`,
      hint: "access + key.",
      explanation: "The accesskey attribute creates keyboard shortcut navigation to an element."
    }
  },
  {
    id: "html_ref_px_to_em",
    category: "HTML References",
    title: "HTML PX to EM Conversion Reference",
    shortTitle: "PX to EM Reference",
    description: "Convert pixel sizes to relative em and rem units based on the default browser 16px font size.",
    content: `<h2>HTML Pixels to EM Units</h2>
      <p>In web browsers, the default base font size is <strong>16 pixels</strong> (<code>16px = 1em = 100%</code>).</p>
      <div class="w3-panel w3-info">
        <h3>Conversion Formula:</h3>
        <pre>em = pixels / 16</pre>
        <h3>Common PX to EM Conversion Table:</h3>
        <ul>
          <li><code>10px</code> = <code>0.625em</code></li>
          <li><code>12px</code> = <code>0.75em</code></li>
          <li><code>14px</code> = <code>0.875em</code></li>
          <li><code>16px</code> = <code>1em</code> (Base)</li>
          <li><code>18px</code> = <code>1.125em</code></li>
          <li><code>20px</code> = <code>1.25em</code></li>
          <li><code>24px</code> = <code>1.5em</code></li>
          <li><code>32px</code> = <code>2em</code></li>
        </ul>
      </div>
      <p>Using relative <code>em</code> or <code>rem</code> units instead of fixed <code>px</code> enhances user accessibility, allowing text to scale when users adjust browser zoom settings.</p>`,
    codeExample: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>PX to EM Demonstration</title>
  <style>
    body { font-family: sans-serif; padding: 20px; font-size: 16px; }
    h1 { font-size: 2em; /* 32px */ color: #04AA6D; }
    p.lead { font-size: 1.25em; /* 20px */ }
    small { font-size: 0.875em; /* 14px */ color: #666; }
  </style>
</head>
<body>

  <h1>Heading at 2em (32px)</h1>
  <p class="lead">Lead paragraph sized at 1.25em (20px).</p>
  <p><small>Fine print text at 0.875em (14px).</small></p>

</body>
</html>`,
    exercise: {
      question: "With a standard 16px base font size, what is 32px in em units?",
      codeSnippet: `32px is equal to <input class="exercise-input" data-answer="2em" placeholder="unit">`,
      hint: "2em (32 / 16)",
      explanation: "32 / 16 = 2, so 32 pixels corresponds to 2em."
    }
  },
  {
    id: "html_ref_browsersupport",
    category: "HTML References",
    title: "HTML5 Browser Support Reference",
    shortTitle: "Browser Support",
    description: "Guide to HTML5 element support across modern browsers and legacy polyfills.",
    content: `<h2>HTML5 Browser Support</h2>
      <p>HTML5 is supported in all modern browsers (Chrome, Edge, Firefox, Safari, Opera).</p>
      <div class="w3-panel w3-info">
        <h3>Defaulting Block Elements:</h3>
        <p>To ensure older browsers treat modern semantic tags as block elements, add this CSS reset rule:</p>
        <pre>header, section, footer, aside, nav, main, article, figure {
  display: block;
}</pre>
      </div>
      <h2>HTML5 Shiv / Shim</h2>
      <p>Legacy versions of Internet Explorer (IE8 and earlier) did not recognize new HTML5 elements. Web developers used the HTML5 Shiv JavaScript library to register the elements dynamically.</p>`,
    codeExample: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>HTML5 Browser Compatibility</title>
  <style>
    header, section, footer, nav, article { display: block; }
    body { font-family: Arial, sans-serif; padding: 20px; line-height: 1.6; }
    .badge { background: #04AA6D; color: white; padding: 4px 8px; border-radius: 4px; }
  </style>
</head>
<body>

  <h2>Modern HTML5 Browser Standards <span class="badge">Evergreen</span></h2>
  <article>
    <p>All modern evergreen web browsers provide native support for HTML5 markup, canvas, multimedia, and web APIs without plugins!</p>
  </article>

</body>
</html>`,
    exercise: {
      question: "Which CSS display value ensures semantic elements like <article> render as block boxes?",
      codeSnippet: `article, section, nav { display: <input class="exercise-input" data-answer="block" placeholder="display">; }`,
      hint: "block",
      explanation: "display: block ensures that semantic tags behave as block-level containers in all browsers."
    }
  }
];

// Starter templates for the Interactive Tryit Editor
const TRYIT_TEMPLATES = {
  basic: {
    name: "Basic HTML5 Skeleton",
    code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Basic HTML Page</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      margin: 30px;
      line-height: 1.6;
    }
    h1 {
      color: #04AA6D;
    }
  </style>
</head>
<body>

  <h1>Welcome to the Interactive HTML Editor</h1>
  <p>This is a real-time sandbox reverse-engineered from W3Schools.</p>
  <p>Edit anything in the left panel and click <strong>Run ❯</strong> to update!</p>

</body>
</html>`
  },
  card: {
    name: "Styled Profile Card",
    code: `<!DOCTYPE html>
<html>
<head>
  <style>
    body {
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      background: #f1f1f1;
      display: flex;
      justify-content: center;
      padding-top: 40px;
    }
    .card {
      box-shadow: 0 4px 12px rgba(0,0,0,0.15);
      max-width: 300px;
      background: white;
      text-align: center;
      border-radius: 12px;
      overflow: hidden;
    }
    .card img {
      width: 100%;
      height: 200px;
      object-fit: cover;
    }
    .title {
      color: #777;
      font-size: 16px;
    }
    button {
      border: none;
      outline: 0;
      display: inline-block;
      padding: 12px;
      color: white;
      background-color: #04AA6D;
      text-align: center;
      cursor: pointer;
      width: 100%;
      font-size: 16px;
      font-weight: bold;
    }
    button:hover {
      background-color: #038a58;
    }
  </style>
</head>
<body>

<div class="card">
  <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400" alt="Jane">
  <h2>Jane Doe</h2>
  <p class="title">Lead Web Developer</p>
  <p>Harvard University</p>
  <p><button onclick="alert('Contacting Jane!')">Contact</button></p>
</div>

</body>
</html>`
  },
  form: {
    name: "Interactive Contact Form",
    code: `<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; padding: 20px; background: #fafafa; }
    .form-container {
      background: white;
      padding: 24px;
      border-radius: 8px;
      max-width: 450px;
      margin: auto;
      box-shadow: 0 2px 8px rgba(0,0,0,0.1);
    }
    h2 { color: #04AA6D; margin-top: 0; }
    label { font-weight: bold; font-size: 14px; }
    input[type=text], input[type=email], select, textarea {
      width: 100%;
      padding: 10px;
      margin: 8px 0 16px 0;
      border: 1px solid #ccc;
      border-radius: 4px;
      box-sizing: border-box;
    }
    input[type=submit] {
      background-color: #04AA6D;
      color: white;
      padding: 12px 20px;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      font-weight: bold;
      width: 100%;
    }
    input[type=submit]:hover {
      background-color: #059862;
    }
  </style>
</head>
<body>

<div class="form-container">
  <h2>Contact Us</h2>
  <form onsubmit="event.preventDefault(); document.getElementById('msg').style.display='block';">
    <label for="name">Your Name</label>
    <input type="text" id="name" placeholder="John Smith" required>

    <label for="email">Email Address</label>
    <input type="email" id="email" placeholder="john@example.com" required>

    <label for="subject">Topic</label>
    <select id="subject">
      <option value="html">HTML Questions</option>
      <option value="general">General Support</option>
      <option value="feedback">Feedback</option>
    </select>

    <label for="content">Message</label>
    <textarea id="content" rows="4" placeholder="Write your message here..."></textarea>

    <input type="submit" value="Send Message">
  </form>
  <p id="msg" style="display:none; color:#04AA6D; font-weight:bold; margin-top:15px; text-align:center;">
    ✓ Thank you! Your message was received.
  </p>
</div>

</body>
</html>`
  },
  table: {
    name: "Zebra Styled Data Table",
    code: `<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; padding: 20px; }
    h2 { color: #282A35; }
    table {
      border-collapse: collapse;
      width: 100%;
      box-shadow: 0 1px 3px rgba(0,0,0,0.1);
    }
    th, td {
      text-align: left;
      padding: 12px;
    }
    tr:nth-child(even) { background-color: #f2f2f2; }
    tr:hover { background-color: #e9f7ef; }
    th {
      background-color: #04AA6D;
      color: white;
    }
    .badge {
      padding: 4px 8px;
      border-radius: 12px;
      font-size: 12px;
      font-weight: bold;
    }
    .active { background: #d4edda; color: #155724; }
    .pending { background: #fff3cd; color: #856404; }
  </style>
</head>
<body>

<h2>Customer Orders</h2>
<table>
  <tr>
    <th>Order ID</th>
    <th>Customer</th>
    <th>Item</th>
    <th>Status</th>
  </tr>
  <tr>
    <td>#1001</td>
    <td>Alice Walker</td>
    <td>HTML5 Mastery Book</td>
    <td><span class="badge active">Shipped</span></td>
  </tr>
  <tr>
    <td>#1002</td>
    <td>Bob Martin</td>
    <td>Web Developer Starter Pack</td>
    <td><span class="badge pending">Processing</span></td>
  </tr>
  <tr>
    <td>#1003</td>
    <td>Charlie Brown</td>
    <td>CSS Grid & Flexbox Guide</td>
    <td><span class="badge active">Delivered</span></td>
  </tr>
</table>

</body>
</html>`
  },
  canvas: {
    name: "Animated HTML5 Canvas",
    code: `<!DOCTYPE html>
<html>
<head>
  <style>
    body { text-align: center; font-family: sans-serif; background: #1e1e24; color: white; padding-top: 20px; }
    canvas { background: #000; border-radius: 10px; box-shadow: 0 4px 20px rgba(0,0,0,0.5); }
  </style>
</head>
<body>

<h2>Interactive HTML5 Canvas Bouncing Ball</h2>
<canvas id="myCanvas" width="400" height="250"></canvas>

<script>
  const canvas = document.getElementById("myCanvas");
  const ctx = canvas.getContext("2d");

  let x = canvas.width / 2;
  let y = canvas.height - 30;
  let dx = 3;
  let dy = -3;
  const ballRadius = 15;

  function drawBall() {
    ctx.beginPath();
    ctx.arc(x, y, ballRadius, 0, Math.PI * 2);
    ctx.fillStyle = "#04AA6D";
    ctx.fill();
    ctx.closePath();
  }

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBall();

    if (x + dx > canvas.width - ballRadius || x + dx < ballRadius) {
      dx = -dx;
    }
    if (y + dy > canvas.height - ballRadius || y + dy < ballRadius) {
      dy = -dy;
    }

    x += dx;
    y += dy;
    requestAnimationFrame(draw);
  }

  draw();
</script>

</body>
</html>`
  }
};

// Expose on window or module for tests
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { HTML_CURRICULUM, TRYIT_TEMPLATES };
}
