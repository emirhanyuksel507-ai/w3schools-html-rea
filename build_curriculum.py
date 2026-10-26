"""
Curriculum Builder for W3Schools Reverse-Engineered Platform
Combines original 32 HTML lessons with 50 new HTML lessons to create the complete 82-lesson HTML curriculum.
"""

import os
import re
import json

from curriculum_data_tutorial import TUTORIAL_LESSONS
from curriculum_data_forms_media_graphics import FORMS_LESSONS, GRAPHICS_LESSONS, MEDIA_LESSONS
from curriculum_data_apis import API_LESSONS
from curriculum_data_references import REFERENCES_LESSONS

BASE_DIR = os.path.dirname(os.path.abspath(__file__))
LESSONS_FILE = os.path.join(BASE_DIR, "js", "lessons-data.js")

def escape_template_literal(s):
    # Escape backslashes, backticks, and ${ in JS template literals
    return s.replace('\\', '\\\\').replace('`', '\\`').replace('${', '\\${')

def dict_to_js_lesson(lesson):
    id_str = json.dumps(lesson["id"])
    cat_str = json.dumps(lesson["category"])
    title_str = json.dumps(lesson["title"])
    short_title_str = json.dumps(lesson["shortTitle"])
    desc_str = json.dumps(lesson["description"])
    
    content_escaped = escape_template_literal(lesson["content"].strip())
    example_escaped = escape_template_literal(lesson["codeExample"].strip())
    
    ex = lesson["exercise"]
    q_str = json.dumps(ex["question"])
    snippet_escaped = escape_template_literal(ex["codeSnippet"].strip())
    hint_str = json.dumps(ex["hint"])
    exp_str = json.dumps(ex["explanation"])
    
    return f"""  {{
    id: {id_str},
    category: {cat_str},
    title: {title_str},
    shortTitle: {short_title_str},
    description: {desc_str},
    content: `{content_escaped}`,
    codeExample: `{example_escaped}`,
    exercise: {{
      question: {q_str},
      codeSnippet: `{snippet_escaped}`,
      hint: {hint_str},
      explanation: {exp_str}
    }}
  }}"""

def main():
    print("Reading existing js/lessons-data.js...")
    with open(LESSONS_FILE, "r", encoding="utf-8") as f:
        existing_js = f.read()

    # Match all original lesson blocks:
    pattern = r'(  \{\s*\n\s*id:\s*["\']([^"\']+)["\'],[\s\S]*?\n  \}(?=,\n|\n\]))'
    matched_blocks = re.findall(pattern, existing_js)
    print(f"Found {len(matched_blocks)} existing lesson blocks.")

    BASE_32_IDS = {
        "html_intro", "html_editors", "html_basic", "html_elements", "html_attributes",
        "html_headings", "html_paragraphs", "html_styles", "html_formatting", "html_quotations",
        "html_comments", "html_colors", "html_css", "html_links", "html_images", "html_tables",
        "html_lists", "html_block_inline", "html_classes_id", "html_iframes", "html_javascript",
        "html_head", "html_semantics", "html_forms", "html_form_attributes", "html_form_elements",
        "html_input_types", "html_media_video", "html_media_audio", "html_graphics_canvas",
        "html_graphics_svg", "html_entities"
    }

    # Group existing base blocks by category
    existing_by_category = {}
    for block, lid in matched_blocks:
        if lid in BASE_32_IDS:
            cat_m = re.search(r'category:\s*["\']([^"\']+)["\']', block)
            cat = cat_m.group(1) if cat_m else "UNKNOWN"
            existing_by_category.setdefault(cat, []).append((lid, block))

    # Extract TRYIT_TEMPLATES and trailing code
    templates_pos = existing_js.find("// Starter templates for the Interactive Tryit Editor")
    if templates_pos == -1:
        templates_pos = existing_js.find("const TRYIT_TEMPLATES")
    templates_code = existing_js[templates_pos:]

    # Build ordered list of all lessons
    # Desired categories in order:
    # 1. HTML Tutorial
    # 2. HTML Forms
    # 3. HTML Graphics
    # 4. HTML Media
    # 5. HTML APIs
    # 6. HTML References

    all_lesson_blocks = []

    # 1. HTML Tutorial
    print("Assembling HTML Tutorial...")
    for lid, block in existing_by_category.get("HTML Tutorial", []):
        all_lesson_blocks.append(block)
    for lesson in TUTORIAL_LESSONS:
        all_lesson_blocks.append(dict_to_js_lesson(lesson))

    # 2. HTML Forms
    print("Assembling HTML Forms...")
    for lid, block in existing_by_category.get("HTML Forms", []):
        all_lesson_blocks.append(block)
    for lesson in FORMS_LESSONS:
        all_lesson_blocks.append(dict_to_js_lesson(lesson))

    # 3. HTML Graphics
    print("Assembling HTML Graphics...")
    for lid, block in existing_by_category.get("HTML Graphics", []):
        all_lesson_blocks.append(block)
    for lesson in GRAPHICS_LESSONS:
        all_lesson_blocks.append(dict_to_js_lesson(lesson))

    # 4. HTML Media
    print("Assembling HTML Media...")
    for lid, block in existing_by_category.get("HTML Media", []):
        all_lesson_blocks.append(block)
    for lesson in MEDIA_LESSONS:
        all_lesson_blocks.append(dict_to_js_lesson(lesson))

    # 5. HTML APIs
    print("Assembling HTML APIs...")
    for lesson in API_LESSONS:
        all_lesson_blocks.append(dict_to_js_lesson(lesson))

    # 6. HTML References
    print("Assembling HTML References...")
    for lid, block in existing_by_category.get("HTML References", []):
        all_lesson_blocks.append(block)
    for lesson in REFERENCES_LESSONS:
        all_lesson_blocks.append(dict_to_js_lesson(lesson))

    print(f"Total compiled lessons: {len(all_lesson_blocks)}")

    # Construct full JS file
    header = """/**
 * W3Schools HTML Curriculum Data
 * Reverse-Engineered HTML Course Database - Complete Comprehensive Edition (70+ Lessons)
 */

const HTML_CURRICULUM = [
"""
    body = ",\n".join(all_lesson_blocks)
    footer = "\n];\n\n" + templates_code

    new_content = header + body + footer

    # Verification before saving
    all_ids = re.findall(r'id:\s*["\']([^"\']+)["\']', new_content)
    categories = re.findall(r'category:\s*["\']([^"\']+)["\']', new_content)
    exercises = re.findall(r'data-answer=["\']([^"\']+)["\']', new_content)
    examples = re.findall(r'codeExample:\s*`([\s\S]*?)`', new_content)

    print(f"Verified {len(all_ids)} lesson IDs.")
    assert len(all_ids) >= 70, f"Expected at least 70 lessons, got {len(all_ids)}"
    assert len(all_ids) == len(set(all_ids)), f"Duplicate IDs detected! Total: {len(all_ids)}, Unique: {len(set(all_ids))}"

    for cat in set(categories):
        assert cat.startswith("HTML"), f"Non-HTML category: {cat}"

    for ans in exercises:
        assert len(ans) > 0, "Empty answer detected"
        assert not ans.startswith(" "), f"Leading space in answer: {ans}"
        assert not ans.endswith(" "), f"Trailing space in answer: {ans}"

    for idx, ex in enumerate(examples):
        assert "<!DOCTYPE html>" in ex or "<html>" in ex or "<div" in ex, f"Invalid HTML in example {idx}"
        if "<html" in ex:
            assert "</html>" in ex, f"Unclosed <html> in example {idx}"
        if "<body" in ex:
            assert "</body>" in ex, f"Unclosed <body> in example {idx}"

    print("All validation assertions passed successfully!")

    # Write file
    with open(LESSONS_FILE, "w", encoding="utf-8") as f:
        f.write(new_content)
    print(f"Successfully generated {LESSONS_FILE} ({len(new_content)} bytes).")

if __name__ == "__main__":
    main()
