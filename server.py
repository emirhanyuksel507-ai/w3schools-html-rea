"""
W3Schools Reverse-Engineered Platform Server
Lightweight HTTP server with REST endpoints for curriculum inspection and health checks.
"""

import http.server
import socketserver
import json
import os
import re
import sys

PORT = int(os.environ.get("PORT", 8080))
BASE_DIR = os.path.dirname(os.path.abspath(__file__))

class W3SchoolsRequestHandler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=BASE_DIR, **kwargs)

    extensions_map = http.server.SimpleHTTPRequestHandler.extensions_map.copy()
    extensions_map.update({
        ".js": "application/javascript",
        ".css": "text/css",
        ".html": "text/html",
        ".json": "application/json",
        ".svg": "image/svg+xml"
    })

    def do_GET(self):
        # Health check endpoint
        if self.path == "/api/health":
            self.send_response(200)
            self.send_header("Content-Type", "application/json")
            self.end_headers()
            self.wfile.write(json.dumps({"status": "ok", "app": "w3schools-html-reverse-engineered"}).encode("utf-8"))
            return

        # Curriculum stats endpoint
        if self.path == "/api/curriculum-stats":
            stats = self.get_curriculum_stats()
            self.send_response(200)
            self.send_header("Content-Type", "application/json")
            self.end_headers()
            self.wfile.write(json.dumps(stats, indent=2).encode("utf-8"))
            return

        # HTML5 Server-Sent Events demonstration endpoint
        if self.path == "/api/sse":
            self.send_response(200)
            self.send_header("Content-Type", "text/event-stream")
            self.send_header("Cache-Control", "no-cache")
            self.send_header("Connection", "keep-alive")
            self.end_headers()
            self.wfile.write(b"data: Welcome to W3Schools SSE Feed!\n\n")
            return

        # Default static file handling
        return super().do_GET()

    def get_curriculum_stats(self):
        lessons_file = os.path.join(BASE_DIR, "js", "lessons-data.js")
        if not os.path.exists(lessons_file):
            return {"error": "lessons-data.js not found"}

        with open(lessons_file, "r", encoding="utf-8") as f:
            content = f.read()

        # Extract lesson count using regex pattern
        lesson_matches = re.findall(r'id:\s*["\']([^"\']+)["\']', content)
        categories = re.findall(r'category:\s*["\']([^"\']+)["\']', content)
        exercises = re.findall(r'question:\s*["\']', content)

        return {
            "total_lessons": len(lesson_matches),
            "categories": sorted(list(set(categories))),
            "total_exercises": len(exercises),
            "lesson_ids": lesson_matches,
            "has_tryit_editor": True
        }


def run_server(port=PORT):
    with socketserver.TCPServer(("", port), W3SchoolsRequestHandler) as httpd:
        print(f"🚀 W3Schools Reverse-Engineered server running at http://localhost:{port}")
        print("Press Ctrl+C to terminate.")
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print("\nShutting down server.")
            httpd.server_close()


if __name__ == "__main__":
    port_arg = int(sys.argv[1]) if len(sys.argv) > 1 else PORT
    run_server(port_arg)
