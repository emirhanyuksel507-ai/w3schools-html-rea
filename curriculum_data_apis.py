"""
Curriculum Data for HTML APIs (HTML5 Web APIs)
"""

API_LESSONS = [
  {
    "id": "html_api_geolocation",
    "category": "HTML APIs",
    "title": "HTML Geolocation API",
    "shortTitle": "Geolocation API",
    "description": "The HTML Geolocation API is used to get the geographical position of a user.",
    "content": """
      <h2>Locate the User's Position</h2>
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
      </div>
    """,
    "codeExample": """<!DOCTYPE html>
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
</html>""",
    "exercise": {
      "question": "Which method on navigator.geolocation retrieves the user's current location?",
      "codeSnippet": """navigator.geolocation.<input class="exercise-input" data-answer="getCurrentPosition" placeholder="method">(showPosition);""",
      "hint": "getCurrentPosition",
      "explanation": "getCurrentPosition() returns the current position of the device."
    }
  },
  {
    "id": "html_api_dragdrop",
    "category": "HTML APIs",
    "title": "HTML Drag and Drop API",
    "shortTitle": "Drag and Drop",
    "description": "In HTML, any element can be dragged and dropped into other elements.",
    "content": """
      <h2>HTML Drag and Drop</h2>
      <p>Drag and drop is a very common feature. It is when you "grab" an object and drag it to a different location.</p>
      <div class="w3-panel w3-info">
        <h3>How to Make an Element Draggable:</h3>
        <ol>
          <li>Set the <code>draggable</code> attribute to <code>"true"</code>: <code>&lt;img draggable="true"&gt;</code></li>
          <li>Specify what should happen when dragged with <code>ondragstart</code> and <code>dataTransfer.setData()</code></li>
          <li>Specify where to drop with <code>ondragover</code> (calling <code>event.preventDefault()</code> to allow drops)</li>
          <li>Perform the drop action with <code>ondrop</code> and <code>dataTransfer.getData()</code></li>
        </ol>
      </div>
    """,
    "codeExample": """<!DOCTYPE html>
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
</html>""",
    "exercise": {
      "question": "Which attribute must be set to 'true' to make an HTML element draggable?",
      "codeSnippet": """<div <input class="exercise-input" data-answer="draggable" placeholder="attribute">="true">Drag me</div>""",
      "hint": "draggable",
      "explanation": "draggable=\"true\" enables native drag operations for the element."
    }
  },
  {
    "id": "html_api_webstorage",
    "category": "HTML APIs",
    "title": "HTML Web Storage API",
    "shortTitle": "Web Storage",
    "description": "HTML web storage provides two objects for storing data on the client: localStorage and sessionStorage.",
    "content": """
      <h2>What is HTML Web Storage?</h2>
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
      </ul>
    """,
    "codeExample": """<!DOCTYPE html>
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
</html>""",
    "exercise": {
      "question": "Which method stores an item in localStorage under a specific key?",
      "codeSnippet": """localStorage.<input class="exercise-input" data-answer="setItem" placeholder="method">("username", "JohnDoe");""",
      "hint": "setItem",
      "explanation": "localStorage.setItem(key, value) persists the value under the specified key."
    }
  },
  {
    "id": "html_api_webworkers",
    "category": "HTML APIs",
    "title": "HTML Web Workers API",
    "shortTitle": "Web Workers",
    "description": "A web worker is a JavaScript script running in the background, without affecting the page performance.",
    "content": """
      <h2>What is a Web Worker?</h2>
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
      <p>Since web workers are in external files, they do not have access to the <code>window</code> object, the <code>document</code> object, or the <code>parent</code> object.</p>
    """,
    "codeExample": """<!DOCTYPE html>
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
</html>""",
    "exercise": {
      "question": "Which constructor creates a new HTML Web Worker instance?",
      "codeSnippet": """w = new <input class="exercise-input" data-answer="Worker" placeholder="constructor">("demo_workers.js");""",
      "hint": "Worker with uppercase W.",
      "explanation": "new Worker(url) initializes and launches a new background worker thread."
    }
  },
  {
    "id": "html_api_sse",
    "category": "HTML APIs",
    "title": "HTML Server-Sent Events (SSE)",
    "shortTitle": "Server-Sent Events",
    "description": "Server-Sent Events (SSE) allow a web page to get updates from a server automatically.",
    "content": """
      <h2>HTML Server-Sent Events (SSE)</h2>
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
      </ul>
    """,
    "codeExample": """<!DOCTYPE html>
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
</html>""",
    "exercise": {
      "question": "Which JavaScript class is used to connect to a Server-Sent Events stream?",
      "codeSnippet": """var source = new <input class="exercise-input" data-answer="EventSource" placeholder="class">("demo_sse.php");""",
      "hint": "EventSource",
      "explanation": "The EventSource interface handles the connection to an HTTP server-sent events stream."
    }
  }
]
