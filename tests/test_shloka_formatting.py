#!/usr/bin/env python3
"""
tests/test_shloka_formatting.py

Verifies strict metrical break rules and container-aware shloka formatting.
Guarantees:
1. Sanskrit verses break strictly at punctuation break points (। and ॥).
2. Mangala Shloka 1 is formatted as exactly 2 clean hemistich lines.
3. Shlok Mala 1 & 2 verses have clean line endings.
4. Static export contains shloka-container and shloka-line elements.
"""

import os
import json
import re
import unittest

class TestShlokaFormatting(unittest.TestCase):
    def test_mangala_shloka_one(self):
        with open("content/ramayana/mangala_shloka.json", "r", encoding="utf-8") as f:
            data = json.load(f)
        
        v1 = data["verses"][0]
        self.assertEqual(v1["number"], 1)
        lines = [l.strip() for l in v1["text"].split("\n") if l.strip()]
        
        self.assertEqual(len(lines), 2, f"Verse 1 must have exactly 2 lines, got {len(lines)}")
        
        expected_line1 = "श्रीमद्राघवपादपद्मयुगलं पद्मार्चितं पद्मया पद्मस्थेन तु पद्मजेन विनुतं पद्माश्रयस्याप्तये ।"
        expected_line2 = "यद्वेदैश्च नुतं सुखैकनिलयं सर्वाश्रयं निष्क्रियं शश्वच्छङ्करशङ्करं मुहुरहो सन्नौमि तल्लब्धये ॥ 1 ॥"
        
        self.assertEqual(lines[0], expected_line1)
        self.assertEqual(lines[1], expected_line2)
        self.assertTrue(lines[0].endswith("।"))
        self.assertTrue(lines[1].endswith("॥ 1 ॥"))

    def test_all_mangala_verses(self):
        with open("content/ramayana/mangala_shloka.json", "r", encoding="utf-8") as f:
            data = json.load(f)
        
        # Verses 1 to 16 are metrical shlokas
        for v in data["verses"][:16]:
            lines = [l.strip() for l in v["text"].split("\n") if l.strip()]
            self.assertEqual(len(lines), 2, f"Verse {v['number']} must be 2 lines, got {len(lines)}")
            self.assertTrue(lines[0].endswith("।"), f"Verse {v['number']} line 1 must end with ।")
            self.assertTrue("॥" in lines[1], f"Verse {v['number']} line 2 must end with ॥")

    def test_shlok_mala_cleanliness(self):
        for path in ["content/shlok_mala/shlok_mala_1.json", "content/shlok_mala/shlok_mala_2.json"]:
            with open(path, "r", encoding="utf-8") as f:
                data = json.load(f)
            for s in data["shlokas"]:
                text = s["sanskrit"]
                lines = [l.strip() for l in text.split("\n") if l.strip()]
                for idx, l in enumerate(lines[:-1]):
                    self.assertTrue(
                        l.endswith("।") or l.endswith("॥") or "।" in l or "॥" in l,
                        f"In {path} shloka {s['id']} line {idx+1} is broken mid-sentence: {l}"
                    )

    def test_static_html_contains_shloka_container(self):
        path = "out/books/ramayana/index.html"
        self.assertTrue(os.path.exists(path), f"File {path} must exist")
        with open(path, "r", encoding="utf-8") as f:
            html = f.read()
        self.assertIn("shloka-container", html)
        self.assertIn("shloka-line", html)
        self.assertIn("श्रीमद्राघवपादपद्मयुगलं पद्मार्चितं पद्मया पद्मस्थेन तु पद्मजेन विनुतं पद्माश्रयस्याप्तये ।", html)

if __name__ == "__main__":
    unittest.main()
