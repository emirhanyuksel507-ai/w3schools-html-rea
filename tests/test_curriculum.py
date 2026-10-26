"""
Automated Test Suite for W3Schools Reverse-Engineered Platform
Validates file integrity, HTML lesson data structure, Tryit Editor functionality, and HTTP endpoints.
"""

import unittest
import os
import re
import json
import threading
import time
import urllib.request
import urllib.error
from http.server import HTTPServer

# Import server handler
import sys
BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, BASE_DIR)
from server import W3SchoolsRequestHandler


class TestW3SchoolsFiles(unittest.TestCase):
    """Verifies that all required files and assets exist and are not empty."""

    def test_core_files_exist(self):
        expected_files = [
            "index.html",
            "tryit.html",
            "server.py",
            "css/w3schools.css",
            "js/lessons-data.js",
            "js/tryit.js",
            "js/app.js"
        ]
        for rel_path in expected_files:
            full_path = os.path.join(BASE_DIR, rel_path)
            self.assertTrue(os.path.isfile(full_path), f"Missing file: {rel_path}")
            self.assertGreater(os.path.getsize(full_path), 0, f"File is empty: {rel_path}")

    def test_index_html_structure(self):
        with open(os.path.join(BASE_DIR, "index.html"), "r", encoding="utf-8") as f:
            html = f.read()

        # Check critical DOM IDs
        required_ids = [
            "sidebar-nav",
            "main-content",
            "search-input",
            "search-results",
            "theme-toggle",
            "mobile-toggle",
            "tryit-modal",
            "tryit-btn-run",
            "tryit-textarea",
            "tryit-iframe",
            "tryit-template-select"
        ]
        for elem_id in required_ids:
            self.assertIn(f'id="{elem_id}"', html, f"Missing DOM id in index.html: {elem_id}")

        # Check W3Schools brand mark
        self.assertIn("w3schools", html.lower())
        self.assertIn("&lt;&gt;", html)

    def test_tryit_html_structure(self):
        with open(os.path.join(BASE_DIR, "tryit.html"), "r", encoding="utf-8") as f:
            html = f.read()

        required_ids = [
            "btn-run",
            "template-select",
            "btn-reset",
            "btn-clear",
            "btn-orient",
            "btn-console",
            "btn-download",
            "code-area",
            "preview-frame"
        ]
        for elem_id in required_ids:
            self.assertIn(f'id="{elem_id}"', html, f"Missing DOM id in tryit.html: {elem_id}")

    def test_css_design_system(self):
        with open(os.path.join(BASE_DIR, "css", "w3schools.css"), "r", encoding="utf-8") as f:
            css = f.read()

        # Check official W3Schools green color #04AA6D
        self.assertIn("#04AA6D", css)
        # Check dark mode theme styling
        self.assertIn('[data-theme="dark"]', css)
        # Check responsive query
        self.assertIn("@media (max-width:", css)
        # Check Tryit pane split layout classes
        self.assertIn(".tryit-pane-code", css)
        self.assertIn(".tryit-pane-preview", css)


class TestCurriculumContent(unittest.TestCase):
    """Verifies that the curriculum only contains HTML lessons and proper interactive exercises."""

    @classmethod
    def setUpClass(cls):
        lessons_path = os.path.join(BASE_DIR, "js", "lessons-data.js")
        with open(lessons_path, "r", encoding="utf-8") as f:
            cls.raw_js = f.read()

    def test_only_html_lessons(self):
        # Extract categories
        categories = re.findall(r'category:\s*["\']([^"\']+)["\']', self.raw_js)
        self.assertGreater(len(categories), 0)
        for cat in categories:
            # Confirm that all categories are HTML specific
            self.assertTrue(cat.startswith("HTML"), f"Non-HTML category detected: {cat}")

    def test_lesson_counts_and_uniqueness(self):
        lesson_ids = re.findall(r'id:\s*["\']([^"\']+)["\']', self.raw_js)
        self.assertGreaterEqual(len(lesson_ids), 20, "Should contain at least 20 comprehensive HTML lessons")
        # Ensure all IDs are unique
        self.assertEqual(len(lesson_ids), len(set(lesson_ids)), "Duplicate lesson IDs found")

    def test_every_lesson_has_runnable_html(self):
        # Match codeExample blocks
        examples = re.findall(r'codeExample:\s*`([\s\S]*?)`', self.raw_js)
        self.assertGreaterEqual(len(examples), 20)
        for idx, code in enumerate(examples):
            self.assertTrue(
                "<!DOCTYPE html>" in code or "<html>" in code or "<div" in code,
                f"Example at index {idx} does not contain valid HTML markup"
            )

    def test_exercises_have_valid_answers(self):
        # Extract data-answer values
        answers = re.findall(r'data-answer=["\']([^"\']+)["\']', self.raw_js)
        self.assertGreaterEqual(len(answers), 20)
        for ans in answers:
            self.assertTrue(len(ans) > 0, "Exercise data-answer cannot be empty")

    def test_tryit_templates_exist(self):
        templates = re.findall(r'TRYIT_TEMPLATES\s*=\s*{([\s\S]*?)};', self.raw_js)
        self.assertTrue(len(templates) > 0, "TRYIT_TEMPLATES must be defined in lessons-data.js")
        self.assertIn("basic:", templates[0])
        self.assertIn("form:", templates[0])
        self.assertIn("table:", templates[0])
        self.assertIn("canvas:", templates[0])

    def test_complete_w3schools_html_curriculum_coverage(self):
        """Verifies that all 70+ HTML lessons across all 6 core W3Schools HTML sections are present."""
        lesson_ids = re.findall(r'id:\s*["\']([^"\']+)["\']', self.raw_js)
        self.assertGreaterEqual(len(lesson_ids), 70, f"Expected 70+ lessons, got {len(lesson_ids)}")

        categories = set(re.findall(r'category:\s*["\']([^"\']+)["\']', self.raw_js))
        expected_categories = {
            "HTML Tutorial",
            "HTML Forms",
            "HTML Graphics",
            "HTML Media",
            "HTML APIs",
            "HTML References"
        }
        for exp_cat in expected_categories:
            self.assertIn(exp_cat, categories, f"Missing category: {exp_cat}")

    def test_html_api_lessons_present(self):
        """Verifies that the HTML5 Web APIs specified in requirements are present."""
        expected_api_lessons = [
            "html_api_geolocation",
            "html_api_dragdrop",
            "html_api_webstorage",
            "html_api_webworkers",
            "html_api_sse"
        ]
        for api_id in expected_api_lessons:
            self.assertIn(f'id: "{api_id}"', self.raw_js, f"Missing HTML API lesson: {api_id}")

    def test_all_82_lessons_exhaustive_schema_and_exercise_syntax(self):
        """Exhaustively parses each lesson block to confirm 100% schema integrity."""
        pattern = r'\{\s*id:\s*"([^"]+)",\s*category:\s*"([^"]+)",\s*title:\s*"([^"]+)",\s*shortTitle:\s*"([^"]+)",\s*description:\s*"([^"]+)",\s*content:\s*`([\s\S]*?)`,\s*codeExample:\s*`([\s\S]*?)`,\s*exercise:\s*\{([\s\S]*?)\}\s*\}'
        matches = list(re.finditer(pattern, self.raw_js))
        self.assertEqual(len(matches), 82, f"Expected 82 schema-compliant lessons, found {len(matches)}")

        for m in matches:
            lid, cat, title, short_title, desc, content, example, ex_block = m.groups()
            self.assertTrue(cat.startswith("HTML"), f"Non-HTML category in {lid}: {cat}")
            self.assertGreater(len(title.strip()), 0, f"Empty title in {lid}")
            self.assertGreater(len(short_title.strip()), 0, f"Empty shortTitle in {lid}")
            self.assertGreater(len(desc.strip()), 0, f"Empty description in {lid}")
            self.assertGreater(len(content.strip()), 0, f"Empty content in {lid}")
            self.assertGreater(len(example.strip()), 0, f"Empty codeExample in {lid}")

            # Verify exercise structure
            self.assertIn("question:", ex_block, f"Missing question in exercise for {lid}")
            self.assertIn("hint:", ex_block, f"Missing hint in exercise for {lid}")
            self.assertIn("explanation:", ex_block, f"Missing explanation in exercise for {lid}")
            self.assertIn("codeSnippet:", ex_block, f"Missing codeSnippet in exercise for {lid}")

            snippet_m = re.search(r'codeSnippet:\s*`([\s\S]*?)`', ex_block)
            self.assertIsNotNone(snippet_m, f"Missing codeSnippet backtick literal in {lid}")
            snippet = snippet_m.group(1)

            inputs = re.findall(r'<input\b[^>]*>', snippet)
            answers = re.findall(r'data-answer="([^"]+)"', snippet)
            self.assertEqual(
                len(inputs), len(answers),
                f"Mismatch in input tags ({len(inputs)}) and data-answers ({len(answers)}) in {lid}"
            )
            for ans in answers:
                self.assertFalse(ans.startswith(" "), f"Leading space in answer '{ans}' in {lid}")
                self.assertFalse(ans.endswith(" "), f"Trailing space in answer '{ans}' in {lid}")



class TestHttpServer(unittest.TestCase):
    """Starts the custom HTTP server on a test port and verifies endpoints."""

    @classmethod
    def setUpClass(cls):
        cls.server = HTTPServer(("127.0.0.1", 0), W3SchoolsRequestHandler)
        cls.test_port = cls.server.server_address[1]
        cls.server_thread = threading.Thread(target=cls.server.serve_forever, daemon=True)
        cls.server_thread.start()
        time.sleep(0.1)

    @classmethod
    def tearDownClass(cls):
        cls.server.shutdown()
        cls.server.server_close()

    def test_health_endpoint(self):
        url = f"http://127.0.0.1:{self.test_port}/api/health"
        req = urllib.request.Request(url)
        with urllib.request.urlopen(req) as resp:
            self.assertEqual(resp.status, 200)
            data = json.loads(resp.read().decode("utf-8"))
            self.assertEqual(data.get("status"), "ok")

    def test_curriculum_stats_endpoint(self):
        url = f"http://127.0.0.1:{self.test_port}/api/curriculum-stats"
        req = urllib.request.Request(url)
        with urllib.request.urlopen(req) as resp:
            self.assertEqual(resp.status, 200)
            data = json.loads(resp.read().decode("utf-8"))
            self.assertGreaterEqual(data.get("total_lessons", 0), 70)
            self.assertTrue(data.get("has_tryit_editor"))
            self.assertIn("HTML Tutorial", data.get("categories", []))
            self.assertIn("HTML APIs", data.get("categories", []))

    def test_sse_endpoint(self):
        url = f"http://127.0.0.1:{self.test_port}/api/sse"
        req = urllib.request.Request(url)
        with urllib.request.urlopen(req) as resp:
            self.assertEqual(resp.status, 200)
            self.assertEqual(resp.headers.get("Content-Type"), "text/event-stream")
            line = resp.readline()
            self.assertIn(b"data:", line)

    def test_static_asset_serving(self):
        routes = [
            ("/index.html", "text/html"),
            ("/tryit.html", "text/html"),
            ("/css/w3schools.css", "text/css"),
            ("/js/lessons-data.js", "application/javascript"),
            ("/js/tryit.js", "application/javascript"),
            ("/js/app.js", "application/javascript")
        ]
        for route, expected_mime in routes:
            url = f"http://127.0.0.1:{self.test_port}{route}"
            req = urllib.request.Request(url)
            with urllib.request.urlopen(req) as resp:
                self.assertEqual(resp.status, 200, f"Failed to fetch {route}")
                content_type = resp.headers.get("Content-Type", "")
                self.assertTrue(expected_mime in content_type, f"Expected {expected_mime} for {route}, got {content_type}")
                self.assertGreater(len(resp.read()), 0)


if __name__ == "__main__":
    unittest.main()
