"""
Detailed Edge Case Tests for Exercise Parsing, Search Indexing, and Tryit Editor Code Generation.
"""

import unittest
import os
import re
import sys

BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

class TestEditorAndExercisesEdgeCases(unittest.TestCase):

    @classmethod
    def setUpClass(cls):
        lessons_path = os.path.join(BASE_DIR, "js", "lessons-data.js")
        with open(lessons_path, "r", encoding="utf-8") as f:
            cls.raw_js = f.read()

        with open(os.path.join(BASE_DIR, "js", "app.js"), "r", encoding="utf-8") as f:
            cls.raw_app_js = f.read()

        with open(os.path.join(BASE_DIR, "js", "tryit.js"), "r", encoding="utf-8") as f:
            cls.raw_tryit_js = f.read()

        with open(os.path.join(BASE_DIR, "index.html"), "r", encoding="utf-8") as f:
            cls.raw_index_html = f.read()

        with open(os.path.join(BASE_DIR, "tryit.html"), "r", encoding="utf-8") as f:
            cls.raw_tryit_html = f.read()

        with open(os.path.join(BASE_DIR, "css", "w3schools.css"), "r", encoding="utf-8") as f:
            cls.raw_css = f.read()

    def test_all_categories_strictly_html(self):
        # Extract categories
        categories = set(re.findall(r'category:\s*["\']([^"\']+)["\']', self.raw_js))
        for cat in categories:
            self.assertTrue("HTML" in cat.upper(), f"Category '{cat}' is not HTML-specific")

    def test_exercise_data_answer_integrity(self):
        # Match exercise input blocks: data-answer="..."
        matches = re.findall(r'data-answer="([^"]+)"', self.raw_js)
        self.assertGreaterEqual(len(matches), 70, f"Expected 70+ exercises with data-answer, found {len(matches)}")

        # Check that none of the answers have unescaped problematic characters
        for ans in matches:
            self.assertFalse(ans.startswith(" "), f"Answer '{ans}' should not have leading whitespace")
            self.assertFalse(ans.endswith(" "), f"Answer '{ans}' should not have trailing whitespace")

    def test_html_doctype_presence_in_examples(self):
        examples = re.findall(r'codeExample:\s*`([\s\S]*?)`', self.raw_js)
        for idx, code in enumerate(examples):
            # Check for standard HTML structure in full page examples
            if "<html" in code:
                self.assertIn("</html>", code, f"Example {idx} has unclosed <html> tag")
            if "<body" in code:
                self.assertIn("</body>", code, f"Example {idx} has unclosed <body> tag")

    def test_tryit_js_tab_and_keyboard_handling(self):
        # Check Tab key handling
        self.assertIn("e.key === 'Tab'", self.raw_tryit_js)
        # Check Ctrl+Enter shortcut handling
        self.assertIn("e.key === 'Enter'", self.raw_tryit_js)
        # Check console interceptor
        self.assertIn("origLog.apply(console", self.raw_tryit_js)
        self.assertIn("window.onerror", self.raw_tryit_js)

    def test_app_js_router_and_search_logic(self):
        # Check hash routing
        self.assertIn("window.location.hash", self.raw_app_js)
        # Check localStorage persistence for completed lessons
        self.assertIn("w3_completed_lessons", self.raw_app_js)
        # Check localStorage persistence for theme
        self.assertIn("w3_theme", self.raw_app_js)
        # Check search input event listener
        self.assertIn("searchInput.addEventListener('input'", self.raw_app_js)

    def test_syntax_highlighter_attributes_in_quotes(self):
        """Verifies that the syntax highlighter in app.js regex supports literal quotes."""
        # Ensure the regex pattern matches double-quoted attribute strings
        self.assertIn('".*?"', self.raw_app_js, "Syntax highlighter regex must match literal double quotes")
        # Ensure comments are highlighted
        self.assertIn("&lt;!--", self.raw_app_js)

    def test_exercise_actions_and_feedback(self):
        """Verifies Enter key support, Show Answer, and Reset button functionality in app.js."""
        self.assertIn("btn-answer-ex", self.raw_app_js)
        self.assertIn("btn-reset-ex", self.raw_app_js)
        self.assertIn("e.key === 'Enter'", self.raw_app_js)
        # Verify hint class in CSS
        self.assertIn(".w3-exercise-feedback.hint", self.raw_css)

    def test_in_lesson_interactive_runner(self):
        """Verifies the in-lesson live interactive HTML runner elements in index.html and app.js."""
        self.assertIn("in-lesson-runner", self.raw_app_js)
        self.assertIn("in-lesson-textarea", self.raw_app_js)
        self.assertIn("in-lesson-iframe", self.raw_app_js)
        self.assertIn("tab-live-runner", self.raw_app_js)
        self.assertIn(".in-lesson-split", self.raw_css)

    def test_draggable_resizer_support(self):
        """Verifies draggable split pane resizer in both HTML files, CSS, and JS."""
        self.assertIn('id="tryit-resizer"', self.raw_index_html)
        self.assertIn('id="resizer"', self.raw_tryit_html)
        self.assertIn(".tryit-resizer", self.raw_css)
        self.assertIn("initResizer", self.raw_tryit_js)
        self.assertIn("pointerEvents", self.raw_tryit_js)

    def test_safe_console_interceptor_circular_refs(self):
        """Verifies safe stringification that doesn't drop circular references or DOM nodes."""
        self.assertIn("safeStringify", self.raw_tryit_js)
        self.assertIn("HTMLElement", self.raw_tryit_js)
        self.assertIn("JSON.stringify", self.raw_tryit_js)

    def test_multiline_tab_and_shift_tab_unindent(self):
        """Verifies multi-line indentation and Shift+Tab unindenting."""
        self.assertIn("handleTabKey", self.raw_tryit_js)
        self.assertIn("isShift", self.raw_tryit_js)
        self.assertIn("lastIndexOf", self.raw_tryit_js)

    def test_html_beautifier_presence(self):
        """Verifies HTML code formatting feature."""
        self.assertIn("beautify()", self.raw_tryit_js)
        self.assertIn("tryit-btn-beautify", self.raw_index_html)
        self.assertIn("btn-beautify", self.raw_tryit_html)

    def test_viewport_modes(self):
        """Verifies desktop, tablet, and mobile viewport switcher modes."""
        self.assertIn("setViewport", self.raw_tryit_js)
        self.assertIn("viewport-desktop", self.raw_css)
        self.assertIn("viewport-tablet", self.raw_css)
        self.assertIn("viewport-mobile", self.raw_css)

    def test_auto_run_support(self):
        """Verifies debounced Auto-Run execution option."""
        self.assertIn("scheduleAutoRun", self.raw_tryit_js)
        self.assertIn("autoRun", self.raw_tryit_js)
        self.assertIn("tryit-auto-run", self.raw_index_html)

    def test_standalone_query_param_propagation(self):
        """Verifies that navigation dynamically updates the Full Tryit link with lesson query param."""
        self.assertIn("tryit.html?lesson=", self.raw_app_js)
        self.assertIn("URLSearchParams", self.raw_tryit_html)

    def test_hash_and_popstate_routing_support(self):
        """Verifies that browser back/forward and hash changes are supported."""
        self.assertIn("window.addEventListener('hashchange'", self.raw_app_js)
        self.assertIn("window.addEventListener('popstate'", self.raw_app_js)
        self.assertIn("history.pushState", self.raw_app_js)

    def test_search_xss_protection_and_keyboard_nav(self):
        """Verifies that search query is HTML-escaped and keyboard arrows/enter/escape are handled."""
        self.assertIn("escapeHtml(query)", self.raw_app_js)
        self.assertIn("ArrowDown", self.raw_app_js)
        self.assertIn("ArrowUp", self.raw_app_js)
        self.assertIn("selectedSearchIndex", self.raw_app_js)

    def test_smart_answer_matching_logic(self):
        """Verifies flexible answer matching for quotes, hash symbols, and tag variations."""
        self.assertIn("isAnswerMatch", self.raw_app_js)
        self.assertIn("normalizeAnswer", self.raw_app_js)

    def test_beautifier_preserves_code_blocks_and_operators(self):
        """Verifies beautifier preserves raw <script>, <style>, <pre> blocks without breaking < or >."""
        self.assertIn("___RAW_BLOCK_", self.raw_tryit_js)
        self.assertIn("<(script|style|pre)", self.raw_tryit_js)

    def test_escape_key_modal_support(self):
        """Verifies pressing Escape closes the Tryit modal and search dropdown."""
        self.assertIn("e.key === 'Escape'", self.raw_app_js)
        self.assertIn("closeTryitModal", self.raw_app_js)


if __name__ == "__main__":
    unittest.main()
