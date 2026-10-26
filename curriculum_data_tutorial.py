"""
Curriculum Data for HTML Tutorial lessons (Part 2: 21 additional lessons)
"""

TUTORIAL_LESSONS = [
  {
    "id": "html_favicon",
    "category": "HTML Tutorial",
    "title": "HTML Favicon",
    "shortTitle": "HTML Favicon",
    "description": "A favicon is a small image displayed next to the page title in the browser tab.",
    "content": """
      <h2>What is a Favicon?</h2>
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
      </ul>
    """,
    "codeExample": """<!DOCTYPE html>
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
</html>""",
    "exercise": {
      "question": "Which value should the rel attribute have when adding a favicon?",
      "codeSnippet": """<link rel="<input class="exercise-input" data-answer="icon" placeholder="rel">" type="image/x-icon" href="favicon.ico">""",
      "hint": "The value tells the browser that this link represents an icon.",
      "explanation": "rel=\"icon\" defines the relationship between the HTML document and the favicon."
    }
  },
  {
    "id": "html_page_title",
    "category": "HTML Tutorial",
    "title": "HTML Page Title",
    "shortTitle": "HTML Title",
    "description": "The HTML title element defines the title of the document and is required in all HTML documents.",
    "content": """
      <h2>The HTML &lt;title&gt; Element</h2>
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
      <p>Search engine algorithms use the contents of the <code>&lt;title&gt;</code> tag when determining the order when listing pages in search results.</p>
    """,
    "codeExample": """<!DOCTYPE html>
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
</html>""",
    "exercise": {
      "question": "Which HTML tag is used inside <head> to specify the document title?",
      "codeSnippet": """<<input class="exercise-input" data-answer="title" placeholder="tag">>My Cool Webpage</<input class="exercise-input" data-answer="title" placeholder="tag">>""",
      "hint": "It literally spells out title.",
      "explanation": "The <title> element specifies a title for the HTML page."
    }
  },
  {
    "id": "html_table_sizes",
    "category": "HTML Tutorial",
    "title": "HTML Table Sizes and Alignment",
    "shortTitle": "Table Sizes",
    "description": "Set the size of HTML tables and individual columns or rows using CSS width and height.",
    "content": """
      <h2>HTML Table Width and Height</h2>
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
      <p>Use <code>text-align: center;</code> or <code>text-align: right;</code> to adjust horizontal alignment, and <code>vertical-align: bottom;</code> for vertical alignment.</p>
    """,
    "codeExample": """<!DOCTYPE html>
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
</html>""",
    "exercise": {
      "question": "Which CSS property specifies the horizontal dimension of an HTML table column?",
      "codeSnippet": """<th style="<input class="exercise-input" data-answer="width" placeholder="property">: 70%;">Description</th>""",
      "hint": "width or height?",
      "explanation": "The width property sets the width of an element."
    }
  },
  {
    "id": "html_table_colgroup",
    "category": "HTML Tutorial",
    "title": "HTML Table Colgroup and Spanning",
    "shortTitle": "Table Colgroup",
    "description": "The colgroup element specifies a group of one or more columns in a table for formatting.",
    "content": """
      <h2>The HTML &lt;colgroup&gt; Element</h2>
      <p>The <code>&lt;colgroup&gt;</code> element is used to style specific columns of a table without having to repeat styles on every cell.</p>
      <p>The <code>&lt;colgroup&gt;</code> tag should be placed as a direct child of a <code>&lt;table&gt;</code>, before any other table elements (like <code>&lt;thead&gt;</code>, <code>&lt;tr&gt;</code>, etc.).</p>
      <div class="w3-panel w3-info">
        <h3>Colspan and Rowspan Attributes:</h3>
        <ul>
          <li><code>colspan="n"</code>: makes a table cell span across multiple columns.</li>
          <li><code>rowspan="n"</code>: makes a table cell span across multiple rows.</li>
        </ul>
      </div>
    """,
    "codeExample": """<!DOCTYPE html>
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
</html>""",
    "exercise": {
      "question": "Which attribute makes a table cell span across two columns?",
      "codeSnippet": """<td <input class="exercise-input" data-answer="colspan" placeholder="attribute">="2">Spans two columns</td>""",
      "hint": "Column span abbreviation.",
      "explanation": "colspan defines the number of columns a cell should span."
    }
  },
  {
    "id": "html_unordered_lists",
    "category": "HTML Tutorial",
    "title": "HTML Unordered Lists",
    "shortTitle": "Unordered Lists",
    "description": "An unordered list starts with the ul tag. Each list item starts with the li tag.",
    "content": """
      <h2>HTML Unordered Lists</h2>
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
      </div>
    """,
    "codeExample": """<!DOCTYPE html>
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
</html>""",
    "exercise": {
      "question": "Which CSS list-style-type value removes bullets from an unordered list?",
      "codeSnippet": """<ul style="list-style-type: <input class="exercise-input" data-answer="none" placeholder="value">;">""",
      "hint": "none of the markers.",
      "explanation": "list-style-type: none removes all default markers from list items."
    }
  },
  {
    "id": "html_ordered_lists",
    "category": "HTML Tutorial",
    "title": "HTML Ordered Lists",
    "shortTitle": "Ordered Lists",
    "description": "An ordered list starts with the ol tag. List items are marked with numbers or letters.",
    "content": """
      <h2>HTML Ordered Lists</h2>
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
      <p>By default, an ordered list will start counting from 1. Use the <code>start</code> attribute to start counting from a specified number, or <code>reversed</code> to count down.</p>
    """,
    "codeExample": """<!DOCTYPE html>
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
</html>""",
    "exercise": {
      "question": "Which attribute of <ol> specifies that items should be marked with uppercase letters?",
      "codeSnippet": """<ol <input class="exercise-input" data-answer="type" placeholder="attribute">="A">""",
      "hint": "The type attribute defines the numbering style.",
      "explanation": "type=\"A\" numbers ordered list items with uppercase letters (A, B, C...)."
    }
  },
  {
    "id": "html_description_lists",
    "category": "HTML Tutorial",
    "title": "HTML Description Lists",
    "shortTitle": "Description Lists",
    "description": "A description list is a list of terms, with a description of each term.",
    "content": """
      <h2>HTML Description Lists</h2>
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
      <p>Description lists are perfect for glossaries, metadata lists, key-value configurations, and FAQs.</p>
    """,
    "codeExample": """<!DOCTYPE html>
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
</html>""",
    "exercise": {
      "question": "Which HTML tag is used inside <dl> to define the description/definition of a term?",
      "codeSnippet": """<dl><dt>HTML</dt><<input class="exercise-input" data-answer="dd" placeholder="tag">>HyperText Markup Language</dd></dl>""",
      "hint": "dd stands for description data or definition description.",
      "explanation": "<dd> describes each term in a description list."
    }
  },
  {
    "id": "html_link_colors",
    "category": "HTML Tutorial",
    "title": "HTML Link Colors and Bookmarks",
    "shortTitle": "Link Bookmarks",
    "description": "Styling link states and creating HTML bookmarks to jump to specific parts of a webpage.",
    "content": """
      <h2>HTML Link Colors</h2>
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
      <p>Then, add a link to the bookmark using a hash symbol: <code>&lt;a href="#C4"&gt;Jump to Chapter 4&lt;/a&gt;</code>.</p>
    """,
    "codeExample": """<!DOCTYPE html>
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
</html>""",
    "exercise": {
      "question": "Which href value points to an element on the same page with id='section2'?",
      "codeSnippet": """<a href="<input class="exercise-input" data-answer="#section2" placeholder="href">">Jump to Section 2</a>""",
      "hint": "Start with a hash (#) symbol.",
      "explanation": "href=\"#section2\" tells the browser to jump to the element with id=\"section2\"."
    }
  },
  {
    "id": "html_image_maps",
    "category": "HTML Tutorial",
    "title": "HTML Image Maps",
    "shortTitle": "Image Maps",
    "description": "The map tag defines an image map with clickable areas.",
    "content": """
      <h2>What is an Image Map?</h2>
      <p>The HTML <code>&lt;map&gt;</code> tag defines an <strong>image map</strong>. An image map is an image with clickable areas.</p>
      <p>The areas are defined with one or more <code>&lt;area&gt;</code> tags.</p>
      <div class="w3-panel w3-info">
        <h3>How It Works:</h3>
        <ul>
          <li>The <code>&lt;img&gt;</code> tag uses the <code>usemap</code> attribute with a hash: <code>usemap="#workmap"</code>.</li>
          <li>The <code>&lt;map&gt;</code> tag has a matching <code>name</code> attribute: <code>&lt;map name="workmap"&gt;</code>.</li>
          <li>The <code>&lt;area&gt;</code> tag has <code>shape</code> (rect, circle, poly, default) and <code>coords</code>.</li>
        </ul>
      </div>
    """,
    "codeExample": """<!DOCTYPE html>
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
</html>""",
    "exercise": {
      "question": "Which attribute on the <img> tag connects it to a <map name='myMap'>?",
      "codeSnippet": """<img src="photo.jpg" alt="Photo" <input class="exercise-input" data-answer="usemap" placeholder="attribute">="#myMap">""",
      "hint": "use + map.",
      "explanation": "usemap=\"#myMap\" links the image element to the corresponding <map> element."
    }
  },
  {
    "id": "html_background_images",
    "category": "HTML Tutorial",
    "title": "HTML Background Images",
    "shortTitle": "Background Images",
    "description": "Apply background images to HTML elements with CSS background properties.",
    "content": """
      <h2>HTML Background Images</h2>
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
      </div>
    """,
    "codeExample": """<!DOCTYPE html>
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
</html>""",
    "exercise": {
      "question": "Which CSS property is used to specify an image as the background of an element?",
      "codeSnippet": """<div style="<input class="exercise-input" data-answer="background-image" placeholder="property">: url('bg.jpg');"></div>""",
      "hint": "background- + image.",
      "explanation": "background-image: url(...) sets the graphic file to render in the element's background."
    }
  },
  {
    "id": "html_picture",
    "category": "HTML Tutorial",
    "title": "HTML The Picture Element",
    "shortTitle": "HTML Picture",
    "description": "The picture element gives web developers more flexibility in specifying image resources.",
    "content": """
      <h2>The HTML &lt;picture&gt; Element</h2>
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
      </ul>
    """,
    "codeExample": """<!DOCTYPE html>
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
</html>""",
    "exercise": {
      "question": "Which tag wraps multiple <source> elements to provide responsive art-directed images?",
      "codeSnippet": """<<input class="exercise-input" data-answer="picture" placeholder="tag">><source media="(min-width:650px)" srcset="large.jpg"><img src="small.jpg" alt="Photo"></picture>""",
      "hint": "picture tag.",
      "explanation": "The <picture> element wraps <source> options and a fallback <img>."
    }
  },
  {
    "id": "html_filepaths",
    "category": "HTML Tutorial",
    "title": "HTML File Paths",
    "shortTitle": "HTML File Paths",
    "description": "A file path describes the location of a file in a web site's folder structure.",
    "content": """
      <h2>HTML File Paths</h2>
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
      </div>
    """,
    "codeExample": """<!DOCTYPE html>
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
</html>""",
    "exercise": {
      "question": "Which prefix points to a file located one level up in the parent directory?",
      "codeSnippet": """<img src="<input class="exercise-input" data-answer="../" placeholder="prefix">images/pic.jpg" alt="Parent folder">""",
      "hint": "Two dots and a forward slash.",
      "explanation": "../ moves one directory up from the current file's folder."
    }
  },
  {
    "id": "html_layout",
    "category": "HTML Tutorial",
    "title": "HTML Layout Elements and Techniques",
    "shortTitle": "HTML Layout",
    "description": "HTML has several semantic elements that define the different parts of a web page.",
    "content": """
      <h2>HTML Layout Elements</h2>
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
      </div>
    """,
    "codeExample": """<!DOCTYPE html>
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
</html>""",
    "exercise": {
      "question": "Which HTML layout element is used to define navigation links?",
      "codeSnippet": """<<input class="exercise-input" data-answer="nav" placeholder="tag">><a href="/home">Home</a><a href="/about">About</a></nav>""",
      "hint": "Short for navigation.",
      "explanation": "The <nav> element defines a section of navigation links."
    }
  },
  {
    "id": "html_responsive",
    "category": "HTML Tutorial",
    "title": "HTML Responsive Web Design",
    "shortTitle": "Responsive Design",
    "description": "Responsive web design makes your web page look good on all devices (desktops, tablets, phones).",
    "content": """
      <h2>What is Responsive Web Design?</h2>
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
      <p>Use CSS <code>max-width: 100%; height: auto;</code> so images scale responsively without overflowing their parent container.</p>
    """,
    "codeExample": """<!DOCTYPE html>
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
</html>""",
    "exercise": {
      "question": "What initial-scale value is standard in the viewport meta tag for 1:1 mobile scaling?",
      "codeSnippet": """<meta name="viewport" content="width=device-width, initial-scale=<input class="exercise-input" data-answer="1.0" placeholder="scale">">""",
      "hint": "1.0",
      "explanation": "initial-scale=1.0 establishes a 1:1 relationship between CSS pixels and device-independent pixels."
    }
  },
  {
    "id": "html_computercode",
    "category": "HTML Tutorial",
    "title": "HTML Computer Code Elements",
    "shortTitle": "Computer Code",
    "description": "HTML contains several elements for defining user input and computer code.",
    "content": """
      <h2>HTML Computer Code Elements</h2>
      <p>HTML has several elements for formatting computer code and user inputs:</p>
      <div class="w3-panel w3-info">
        <ul>
          <li><code>&lt;code&gt;</code> - Defines a piece of computer code</li>
          <li><code>&lt;kbd&gt;</code> - Defines keyboard input (e.g. Ctrl + S)</li>
          <li><code>&lt;samp&gt;</code> - Defines sample output from a computer program</li>
          <li><code>&lt;var&gt;</code> - Defines a mathematical or programming variable</li>
          <li><code>&lt;pre&gt;</code> - Defines preformatted text, preserving spaces and line breaks</li>
        </ul>
      </div>
    """,
    "codeExample": """<!DOCTYPE html>
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
</html>""",
    "exercise": {
      "question": "Which HTML element represents keyboard input entered by the user?",
      "codeSnippet": """Press <<input class="exercise-input" data-answer="kbd" placeholder="tag">>Ctrl</kbd> + C to copy.""",
      "hint": "Short for keyboard.",
      "explanation": "<kbd> denotes user input, typically entered from a keyboard."
    }
  },
  {
    "id": "html_styleguide",
    "category": "HTML Tutorial",
    "title": "HTML Style Guide and Coding Conventions",
    "shortTitle": "Style Guide",
    "description": "A consistent, clean, and tidy HTML code makes it easier for others to read and understand your code.",
    "content": """
      <h2>W3Schools HTML Style Guide</h2>
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
      </div>
    """,
    "codeExample": """<!DOCTYPE html>
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
</html>""",
    "exercise": {
      "question": "What declaration should always be placed on the first line of an HTML5 document?",
      "codeSnippet": """<!DOCTYPE <input class="exercise-input" data-answer="html" placeholder="type">>""",
      "hint": "html",
      "explanation": "<!DOCTYPE html> is the required HTML5 document type declaration."
    }
  },
  {
    "id": "html_symbols",
    "category": "HTML Tutorial",
    "title": "HTML Symbols",
    "shortTitle": "HTML Symbols",
    "description": "HTML symbols include mathematical symbols, Greek letters, arrows, and currency signs.",
    "content": """
      <h2>HTML Symbols</h2>
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
      </div>
    """,
    "codeExample": """<!DOCTYPE html>
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
</html>""",
    "exercise": {
      "question": "Which HTML entity name represents the mathematical infinity symbol ∞?",
      "codeSnippet": """&<input class="exercise-input" data-answer="infin" placeholder="entity">;""",
      "hint": "infin",
      "explanation": "&infin; displays the infinity symbol ∞."
    }
  },
  {
    "id": "html_emojis",
    "category": "HTML Tutorial",
    "title": "HTML Emojis",
    "shortTitle": "HTML Emojis",
    "description": "Emojis look like images or icons, but they are characters from the UTF-8 character set.",
    "content": """
      <h2>Using Emojis in HTML</h2>
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
      </ul>
    """,
    "codeExample": """<!DOCTYPE html>
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
</html>""",
    "exercise": {
      "question": "Which charset attribute value is required in the meta tag to display emojis reliably?",
      "codeSnippet": """<meta charset="<input class="exercise-input" data-answer="UTF-8" placeholder="charset">">""",
      "hint": "UTF-8",
      "explanation": "UTF-8 covers almost all characters, symbols, and emojis in the world."
    }
  },
  {
    "id": "html_charset",
    "category": "HTML Tutorial",
    "title": "HTML Character Sets",
    "shortTitle": "HTML Charsets",
    "description": "To display an HTML page correctly, a web browser must know the character set used in the page.",
    "content": """
      <h2>HTML Character Sets</h2>
      <p>To display an HTML page correctly, a web browser must know which character set (character encoding) to use.</p>
      <div class="w3-panel w3-info">
        <h3>Evolution of Character Encodings:</h3>
        <ul>
          <li><strong>ASCII:</strong> First character encoding standard. 128 character codes (0-127).</li>
          <li><strong>ANSI (Windows-1252):</strong> Extended ASCII to support 256 characters with European accents.</li>
          <li><strong>ISO-8859-1:</strong> The default character set for HTML 4. Supported 256 character codes.</li>
          <li><strong>UTF-8:</strong> The universal character set covering almost every character, symbol, and emoji across all languages. Recommended for all modern web pages.</li>
        </ul>
      </div>
    """,
    "codeExample": """<!DOCTYPE html>
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
</html>""",
    "exercise": {
      "question": "Which attribute on the <meta> tag specifies the character encoding?",
      "codeSnippet": """<meta <input class="exercise-input" data-answer="charset" placeholder="attribute">="UTF-8">""",
      "hint": "charset",
      "explanation": "The charset attribute specifies the character encoding for the HTML document."
    }
  },
  {
    "id": "html_urlencode",
    "category": "HTML Tutorial",
    "title": "HTML URL Encoding",
    "shortTitle": "HTML URL Encode",
    "description": "URL encoding converts characters into a format that can be transmitted over the Internet.",
    "content": """
      <h2>What is URL Encoding?</h2>
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
      </ul>
    """,
    "codeExample": """<!DOCTYPE html>
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
</html>""",
    "exercise": {
      "question": "In URL encoding, what hexadecimal sequence replaces the space character?",
      "codeSnippet": """Space character is converted to %<input class="exercise-input" data-answer="20" placeholder="hex">""",
      "hint": "20",
      "explanation": "%20 is the URL encoding representation of the space character (ASCII 32)."
    }
  },
  {
    "id": "html_xhtml",
    "category": "HTML Tutorial",
    "title": "HTML vs. XHTML",
    "shortTitle": "HTML vs XHTML",
    "description": "XHTML is HTML defined as an XML application, enforcing stricter syntax rules.",
    "content": """
      <h2>What is XHTML?</h2>
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
      </div>
    """,
    "codeExample": """<!DOCTYPE html>
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
</html>""",
    "exercise": {
      "question": "How must an empty break tag be closed in strict XHTML syntax?",
      "codeSnippet": """<br <input class="exercise-input" data-answer="/>" placeholder="closing">""",
      "hint": "slash followed by greater-than sign.",
      "explanation": "In XHTML, all void elements must end with a space and self-closing slash: />."
    }
  }
]
