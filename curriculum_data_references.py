"""
Curriculum Data for HTML References (16 technical reference lessons)
"""

REFERENCES_LESSONS = [
  {
    "id": "html_ref_taglist",
    "category": "HTML References",
    "title": "HTML Tag List (Alphabetical A-Z)",
    "shortTitle": "Tag List Reference",
    "description": "An alphabetical index of all official HTML5 tags with descriptions and usage.",
    "content": """
      <h2>HTML Tag List (Alphabetical)</h2>
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
      </div>
    """,
    "codeExample": """<!DOCTYPE html>
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
</html>""",
    "exercise": {
      "question": "Which tag defines the top-level root element of all HTML documents?",
      "codeSnippet": """<<input class="exercise-input" data-answer="html" placeholder="tag">> ... </html>""",
      "hint": "html",
      "explanation": "<html> represents the root of an HTML document."
    }
  },
  {
    "id": "html_ref_attributes",
    "category": "HTML References",
    "title": "HTML Tag Attributes Reference",
    "shortTitle": "Attributes Reference",
    "description": "A complete list of HTML tag-specific attributes and the elements they apply to.",
    "content": """
      <h2>HTML Attributes Reference</h2>
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
      </div>
    """,
    "codeExample": """<!DOCTYPE html>
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
</html>""",
    "exercise": {
      "question": "Which attribute on an <a> element opens the link in a new browser tab or window?",
      "codeSnippet": """<a href="https://example.com" target="<input class="exercise-input" data-answer="_blank" placeholder="target">">New Tab</a>""",
      "hint": "_blank",
      "explanation": "target=\"_blank\" opens the linked document in a new window or tab."
    }
  },
  {
    "id": "html_ref_globalattributes",
    "category": "HTML References",
    "title": "HTML Global Attributes Reference",
    "shortTitle": "Global Attributes",
    "description": "Global attributes are attributes that can be used with ANY HTML element.",
    "content": """
      <h2>HTML Global Attributes</h2>
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
      </div>
    """,
    "codeExample": """<!DOCTYPE html>
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
</html>""",
    "exercise": {
      "question": "Which global attribute makes any HTML element directly editable by the user in the browser?",
      "codeSnippet": """<div <input class="exercise-input" data-answer="contenteditable" placeholder="attribute">="true">Editable text</div>""",
      "hint": "content + editable.",
      "explanation": "contenteditable=\"true\" turns any HTML element into a rich live text editor."
    }
  },
  {
    "id": "html_ref_eventattributes",
    "category": "HTML References",
    "title": "HTML Event Attributes Reference",
    "shortTitle": "Event Attributes",
    "description": "HTML events allow you to trigger JavaScript actions in the browser.",
    "content": """
      <h2>HTML Event Attributes</h2>
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
      </div>
    """,
    "codeExample": """<!DOCTYPE html>
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
</html>""",
    "exercise": {
      "question": "Which event attribute fires when a button is clicked by the user?",
      "codeSnippet": """<button <input class="exercise-input" data-answer="onclick" placeholder="attribute">="alert('Hello')">Click</button>""",
      "hint": "on + click.",
      "explanation": "onclick executes JavaScript when the user clicks the element."
    }
  },
  {
    "id": "html_ref_colornames",
    "category": "HTML References",
    "title": "HTML Color Names and Hex Codes",
    "shortTitle": "Color Names",
    "description": "All modern browsers support 140 official HTML color names.",
    "content": """
      <h2>HTML Color Names</h2>
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
      </div>
    """,
    "codeExample": """<!DOCTYPE html>
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
</html>""",
    "exercise": {
      "question": "What is the 6-character hexadecimal color code for pure red?",
      "codeSnippet": """color: #<input class="exercise-input" data-answer="FF0000" placeholder="hex">;""",
      "hint": "FF0000",
      "explanation": "#FF0000 is 100% Red with 0% Green and 0% Blue."
    }
  },
  {
    "id": "html_ref_canvas",
    "category": "HTML References",
    "title": "HTML Canvas 2D Reference",
    "shortTitle": "Canvas Reference",
    "description": "The HTML5 canvas element uses JavaScript to draw 2D graphics and paths.",
    "content": """
      <h2>HTML Canvas 2D Reference</h2>
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
      </div>
    """,
    "codeExample": """<!DOCTYPE html>
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
</html>""",
    "exercise": {
      "question": "Which method on an HTML canvas element retrieves the 2D drawing context?",
      "codeSnippet": """const ctx = canvas.<input class="exercise-input" data-answer="getContext" placeholder="method">("2d");""",
      "hint": "getContext",
      "explanation": "canvas.getContext('2d') returns a CanvasRenderingContext2D object."
    }
  },
  {
    "id": "html_ref_av_dom",
    "category": "HTML References",
    "title": "HTML Audio and Video DOM Reference",
    "shortTitle": "Audio/Video DOM",
    "description": "HTML5 audio and video elements feature comprehensive DOM properties, methods, and events.",
    "content": """
      <h2>HTML Audio and Video DOM Reference</h2>
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
      </div>
    """,
    "codeExample": """<!DOCTYPE html>
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
</html>""",
    "exercise": {
      "question": "Which DOM method begins playback on an HTML video element?",
      "codeSnippet": """videoElement.<input class="exercise-input" data-answer="play" placeholder="method">();""",
      "hint": "play",
      "explanation": "play() initiates media playback on <video> or <audio> elements."
    }
  },
  {
    "id": "html_ref_doctypes",
    "category": "HTML References",
    "title": "HTML Doctypes Reference",
    "shortTitle": "Doctypes Reference",
    "description": "A complete reference of document type declarations across HTML history.",
    "content": """
      <h2>HTML &lt;!DOCTYPE&gt; Declarations</h2>
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
      </div>
    """,
    "codeExample": """<!DOCTYPE html>
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
</html>""",
    "exercise": {
      "question": "What is the complete doctype declaration for modern HTML5 documents?",
      "codeSnippet": """<!DOCTYPE <input class="exercise-input" data-answer="html" placeholder="doctype">>""",
      "hint": "html",
      "explanation": "<!DOCTYPE html> is the concise doctype declaration introduced in HTML5."
    }
  },
  {
    "id": "html_ref_charactersets",
    "category": "HTML References",
    "title": "HTML Character Sets Reference",
    "shortTitle": "Character Sets",
    "description": "Standard character encodings used across the web including ASCII, ISO, and UTF-8.",
    "content": """
      <h2>HTML Character Sets Reference</h2>
      <p>A character set is a set of characters recognized by a computer. In HTML, character encoding specifies how characters are translated into bytes.</p>
      <div class="w3-panel w3-info">
        <h3>Major Character Encodings:</h3>
        <ul>
          <li><strong>ASCII:</strong> Defines 128 character codes (0 to 127). Includes numbers 0-9, English uppercase A-Z, lowercase a-z, and control characters.</li>
          <li><strong>ISO-8859-1:</strong> Extension of ASCII containing 256 characters. Includes characters for Western European languages.</li>
          <li><strong>UTF-8:</strong> Variable-width encoding covering 1,112,064 valid character code points. The undisputed universal standard for the World Wide Web.</li>
        </ul>
      </div>
    """,
    "codeExample": """<!DOCTYPE html>
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
</html>""",
    "exercise": {
      "question": "Which character encoding is the official standard for HTML5 web pages?",
      "codeSnippet": """<meta charset="<input class="exercise-input" data-answer="UTF-8" placeholder="charset">">""",
      "hint": "UTF-8",
      "explanation": "UTF-8 is the recommended character encoding for all HTML5 documents."
    }
  },
  {
    "id": "html_ref_urlencoding",
    "category": "HTML References",
    "title": "HTML URL Encoding Reference",
    "shortTitle": "URL Encoding",
    "description": "Complete reference table of ASCII characters and their percent-encoded equivalents.",
    "content": """
      <h2>URL Encoding Reference Table</h2>
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
      </div>
    """,
    "codeExample": """<!DOCTYPE html>
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
</html>""",
    "exercise": {
      "question": "What is the URL encoded percent value for the hash symbol (#)?",
      "codeSnippet": """# is represented in URL encoding as %<input class="exercise-input" data-answer="23" placeholder="hex">""",
      "hint": "23",
      "explanation": "%23 represents the hash symbol (#, ASCII 35) in URL encoding."
    }
  },
  {
    "id": "html_ref_language_codes",
    "category": "HTML References",
    "title": "HTML Language Codes Reference",
    "shortTitle": "Language Codes",
    "description": "ISO 639-1 two-letter language codes for the HTML lang attribute.",
    "content": """
      <h2>HTML ISO 639-1 Language Codes</h2>
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
      <p>Declaring a language is important for accessibility (screen readers pronounce words properly) and search engine crawlers.</p>
    """,
    "codeExample": """<!DOCTYPE html>
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
</html>""",
    "exercise": {
      "question": "Which attribute on the <html> tag declares the primary language of the document?",
      "codeSnippet": """<html <input class="exercise-input" data-answer="lang" placeholder="attribute">="en">""",
      "hint": "lang",
      "explanation": "The lang attribute defines the natural language of the document."
    }
  },
  {
    "id": "html_ref_country_codes",
    "category": "HTML References",
    "title": "HTML Country Codes Reference",
    "shortTitle": "Country Codes",
    "description": "ISO 3166-1 alpha-2 country codes used with language codes (e.g., en-US, en-GB, tr-TR).",
    "content": """
      <h2>HTML ISO 3166-1 Country Codes</h2>
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
      </div>
    """,
    "codeExample": """<!DOCTYPE html>
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
</html>""",
    "exercise": {
      "question": "What 2-letter country code specifies the United States in 'en-US'?",
      "codeSnippet": """<html lang="en-<input class="exercise-input" data-answer="US" placeholder="country">">""",
      "hint": "US",
      "explanation": "US is the ISO 3166-1 alpha-2 code for the United States."
    }
  },
  {
    "id": "html_ref_httpmessages",
    "category": "HTML References",
    "title": "HTML HTTP Status Messages Reference",
    "shortTitle": "HTTP Status Messages",
    "description": "Standard HTTP response codes returned by servers when requesting HTML resources.",
    "content": """
      <h2>HTTP Status Messages</h2>
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
      </div>
    """,
    "codeExample": """<!DOCTYPE html>
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
</html>""",
    "exercise": {
      "question": "What 3-digit HTTP status code indicates that a requested web resource was not found?",
      "codeSnippet": """HTTP Status Code: <input class="exercise-input" data-answer="404" placeholder="code"> Not Found""",
      "hint": "404",
      "explanation": "404 Not Found is the standard status code indicating the server cannot locate the resource."
    }
  },
  {
    "id": "html_ref_keyboardshortcuts",
    "category": "HTML References",
    "title": "HTML Keyboard Shortcuts and Accesskey Reference",
    "shortTitle": "Keyboard Shortcuts",
    "description": "Accesskeys and accessibility shortcuts in HTML documents.",
    "content": """
      <h2>The HTML accesskey Attribute</h2>
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
      </ul>
    """,
    "codeExample": """<!DOCTYPE html>
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
</html>""",
    "exercise": {
      "question": "Which HTML attribute specifies a shortcut key to activate or focus an element?",
      "codeSnippet": """<a href="https://www.w3schools.com" <input class="exercise-input" data-answer="accesskey" placeholder="attribute">="w">W3Schools</a>""",
      "hint": "access + key.",
      "explanation": "The accesskey attribute creates keyboard shortcut navigation to an element."
    }
  },
  {
    "id": "html_ref_px_to_em",
    "category": "HTML References",
    "title": "HTML PX to EM Conversion Reference",
    "shortTitle": "PX to EM Reference",
    "description": "Convert pixel sizes to relative em and rem units based on the default browser 16px font size.",
    "content": """
      <h2>HTML Pixels to EM Units</h2>
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
      <p>Using relative <code>em</code> or <code>rem</code> units instead of fixed <code>px</code> enhances user accessibility, allowing text to scale when users adjust browser zoom settings.</p>
    """,
    "codeExample": """<!DOCTYPE html>
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
</html>""",
    "exercise": {
      "question": "With a standard 16px base font size, what is 32px in em units?",
      "codeSnippet": """32px is equal to <input class="exercise-input" data-answer="2em" placeholder="unit">""",
      "hint": "2em (32 / 16)",
      "explanation": "32 / 16 = 2, so 32 pixels corresponds to 2em."
    }
  },
  {
    "id": "html_ref_browsersupport",
    "category": "HTML References",
    "title": "HTML5 Browser Support Reference",
    "shortTitle": "Browser Support",
    "description": "Guide to HTML5 element support across modern browsers and legacy polyfills.",
    "content": """
      <h2>HTML5 Browser Support</h2>
      <p>HTML5 is supported in all modern browsers (Chrome, Edge, Firefox, Safari, Opera).</p>
      <div class="w3-panel w3-info">
        <h3>Defaulting Block Elements:</h3>
        <p>To ensure older browsers treat modern semantic tags as block elements, add this CSS reset rule:</p>
        <pre>header, section, footer, aside, nav, main, article, figure {
  display: block;
}</pre>
      </div>
      <h2>HTML5 Shiv / Shim</h2>
      <p>Legacy versions of Internet Explorer (IE8 and earlier) did not recognize new HTML5 elements. Web developers used the HTML5 Shiv JavaScript library to register the elements dynamically.</p>
    """,
    "codeExample": """<!DOCTYPE html>
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
</html>""",
    "exercise": {
      "question": "Which CSS display value ensures semantic elements like <article> render as block boxes?",
      "codeSnippet": """article, section, nav { display: <input class="exercise-input" data-answer="block" placeholder="display">; }""",
      "hint": "block",
      "explanation": "display: block ensures that semantic tags behave as block-level containers in all browsers."
    }
  }
]
