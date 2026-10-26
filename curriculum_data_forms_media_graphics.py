"""
Curriculum Data for HTML Forms, HTML Graphics, and HTML Media extensions
"""

FORMS_LESSONS = [
  {
    "id": "html_input_attributes",
    "category": "HTML Forms",
    "title": "HTML Input Attributes",
    "shortTitle": "Input Attributes",
    "description": "HTML input elements have attributes to define behaviors, restrictions, and default values.",
    "content": """
      <h2>HTML Input Attributes</h2>
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
      </div>
    """,
    "codeExample": """<!DOCTYPE html>
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
</html>""",
    "exercise": {
      "question": "Which input attribute specifies that the user must fill in a field before submitting?",
      "codeSnippet": """<input type="text" name="usrname" <input class="exercise-input" data-answer="required" placeholder="attribute">>""",
      "hint": "required",
      "explanation": "The required attribute prevents form submission if the input is empty."
    }
  },
  {
    "id": "html_input_form_attributes",
    "category": "HTML Forms",
    "title": "HTML Input Form Attributes",
    "shortTitle": "Form Attributes",
    "description": "Special form attributes on input and button elements that override the form element's attributes.",
    "content": """
      <h2>HTML Input Form Attributes</h2>
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
      </div>
    """,
    "codeExample": """<!DOCTYPE html>
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
</html>""",
    "exercise": {
      "question": "Which attribute on a submit button overrides the form's action attribute URL?",
      "codeSnippet": """<input type="submit" <input class="exercise-input" data-answer="formaction" placeholder="attribute">="/page2.php" value="Submit to Page 2">""",
      "hint": "form + action.",
      "explanation": "formaction specifies where to send the form-data when a specific submit button is clicked."
    }
  },
  {
    "id": "html_form_labels",
    "category": "HTML Forms",
    "title": "HTML Form Labels and Fieldset",
    "shortTitle": "Form Labels",
    "description": "Improve accessibility and organize form controls using label, fieldset, and legend.",
    "content": """
      <h2>The HTML &lt;label&gt; Element</h2>
      <p>The <code>&lt;label&gt;</code> element defines a label for several form elements.</p>
      <p>The <code>&lt;label&gt;</code> element is useful for screen-reader users, because the screen-reader will read out loud the label when the user focuses on the input element.</p>
      <p>The <code>for</code> attribute of the <code>&lt;label&gt;</code> tag must be equal to the <code>id</code> attribute of the related element to bind them together.</p>
      <div class="w3-panel w3-info">
        <h3>The &lt;fieldset&gt; and &lt;legend&gt; Elements:</h3>
        <ul>
          <li><code>&lt;fieldset&gt;</code> - Groups related data in a form with a visual border</li>
          <li><code>&lt;legend&gt;</code> - Defines a caption for the <code>&lt;fieldset&gt;</code> element</li>
        </ul>
      </div>
    """,
    "codeExample": """<!DOCTYPE html>
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
</html>""",
    "exercise": {
      "question": "Which tag defines the title/caption for a <fieldset> grouping?",
      "codeSnippet": """<fieldset><<input class="exercise-input" data-answer="legend" placeholder="tag">>Personal Information</legend></fieldset>""",
      "hint": "legend",
      "explanation": "<legend> defines a caption for the content in a <fieldset>."
    }
  }
]

GRAPHICS_LESSONS = [
  {
    "id": "html_graphics_canvas_shapes",
    "category": "HTML Graphics",
    "title": "HTML Canvas Drawing and Paths",
    "shortTitle": "Canvas Shapes",
    "description": "Draw shapes, lines, text, gradients, and images onto the HTML5 Canvas using JavaScript.",
    "content": """
      <h2>HTML Canvas 2D Context</h2>
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
      </div>
    """,
    "codeExample": """<!DOCTYPE html>
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
</html>""",
    "exercise": {
      "question": "Which 2D context method draws a filled rectangle directly on the canvas?",
      "codeSnippet": """ctx.<input class="exercise-input" data-answer="fillRect" placeholder="method">(10, 10, 100, 50);""",
      "hint": "fill + Rect.",
      "explanation": "fillRect(x, y, width, height) draws a filled rectangle using the current fillStyle."
    }
  },
  {
    "id": "html_graphics_svg_shapes",
    "category": "HTML Graphics",
    "title": "HTML SVG Shapes and Text",
    "shortTitle": "SVG Shapes",
    "description": "Scalable Vector Graphics (SVG) elements for drawing circles, rectangles, stars, and text.",
    "content": """
      <h2>HTML SVG Elements</h2>
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
      <p>Unlike canvas, SVG elements become part of the DOM, meaning they can be styled with CSS and receive mouse events.</p>
    """,
    "codeExample": """<!DOCTYPE html>
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
</html>""",
    "exercise": {
      "question": "Which SVG attribute defines the radius of a circle element?",
      "codeSnippet": """<circle cx="50" cy="50" <input class="exercise-input" data-answer="r" placeholder="attribute">="40" fill="green" />""",
      "hint": "Single letter r.",
      "explanation": "r defines the radius of an SVG circle."
    }
  }
]

MEDIA_LESSONS = [
  {
    "id": "html_media_multimedia",
    "category": "HTML Media",
    "title": "HTML Multimedia Formats",
    "shortTitle": "Multimedia",
    "description": "Multimedia comes in many different formats including audio, video, animations, and sound.",
    "content": """
      <h2>HTML Multimedia</h2>
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
      </div>
    """,
    "codeExample": """<!DOCTYPE html>
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
</html>""",
    "exercise": {
      "question": "What is the standard MIME-type for MP4 video in the type attribute?",
      "codeSnippet": """<source src="movie.mp4" type="<input class="exercise-input" data-answer="video/mp4" placeholder="mime-type">">""",
      "hint": "video/mp4",
      "explanation": "video/mp4 informs the browser of the container and encoding format."
    }
  },
  {
    "id": "html_media_plugins",
    "category": "HTML Media",
    "title": "HTML Plug-ins (object and embed)",
    "shortTitle": "Plug-ins",
    "description": "The object and embed elements define an embedded object within an HTML document.",
    "content": """
      <h2>The HTML &lt;object&gt; and &lt;embed&gt; Elements</h2>
      <p>The <code>&lt;object&gt;</code> and <code>&lt;embed&gt;</code> elements are used to embed multimedia components such as PDFs, SVG images, or external web components into an HTML page.</p>
      <div class="w3-panel w3-info">
        <h3>Difference Between &lt;object&gt; and &lt;embed&gt;:</h3>
        <ul>
          <li><code>&lt;object&gt;</code> is a container element that supports fallback content if the resource fails to load.</li>
          <li><code>&lt;embed&gt;</code> is a void element (self-closing) without fallback content, directly embedding an external resource.</li>
        </ul>
      </div>
    """,
    "codeExample": """<!DOCTYPE html>
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
</html>""",
    "exercise": {
      "question": "Which self-closing HTML tag embeds an external resource without fallback tags?",
      "codeSnippet": """<<input class="exercise-input" data-answer="embed" placeholder="tag">> src="snippet.html" width="400" height="200">""",
      "hint": "embed",
      "explanation": "<embed> is a void element that embeds external interactive content or plugins."
    }
  },
  {
    "id": "html_media_youtube",
    "category": "HTML Media",
    "title": "HTML YouTube Videos",
    "shortTitle": "YouTube Videos",
    "description": "The easiest way to play videos in HTML is to use YouTube and iframe embeds.",
    "content": """
      <h2>Playing YouTube Videos in HTML</h2>
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
      </ul>
    """,
    "codeExample": """<!DOCTYPE html>
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
</html>""",
    "exercise": {
      "question": "Which URL segment in YouTube embeds precedes the video ID (e.g. /embed/ID)?",
      "codeSnippet": """<iframe src="https://www.youtube.com/<input class="exercise-input" data-answer="embed" placeholder="path">/tgbNymZ7vqY"></iframe>""",
      "hint": "embed",
      "explanation": "YouTube embed URLs use the /embed/ path followed by the video identifier."
    }
  }
]
