import os
import json
import unittest

class TestNextMigration(unittest.TestCase):
    def test_kandas_meta(self):
        meta_path = "content/ramayana/kandas_meta.json"
        self.assertTrue(os.path.exists(meta_path))
        with open(meta_path, "r", encoding="utf-8") as f:
            data = json.load(f)
        self.assertEqual(len(data), 7)
        total_sargas = sum(k["totalSargas"] for k in data)
        self.assertEqual(total_sargas, 645)

    def test_all_sarga_files_exist(self):
        kandas = {
            "balakanda": 77,
            "ayodhyakanda": 119,
            "aranyakanda": 75,
            "kishkindhakanda": 67,
            "sundarakanda": 68,
            "yuddhakanda": 128,
            "uttarakanda": 111
        }
        for kanda, count in kandas.items():
            for s in range(1, count + 1):
                p = f"content/ramayana/{kanda}/sarga_{s}.json"
                self.assertTrue(os.path.exists(p), f"Missing {p}")
                with open(p, "r", encoding="utf-8") as f:
                    sarga_data = json.load(f)
                self.assertGreater(len(sarga_data["verses"]), 0, f"Empty verses in {p}")

    def test_mangala_shloka(self):
        p = "content/ramayana/mangala_shloka.json"
        self.assertTrue(os.path.exists(p))
        with open(p, "r", encoding="utf-8") as f:
            data = json.load(f)
        self.assertEqual(data["totalVerses"], 17)

    def test_shlok_mala(self):
        p1 = "content/shlok_mala/shlok_mala_1.json"
        p2 = "content/shlok_mala/shlok_mala_2.json"
        self.assertTrue(os.path.exists(p1))
        self.assertTrue(os.path.exists(p2))
        with open(p1, "r", encoding="utf-8") as f:
            d1 = json.load(f)
        with open(p2, "r", encoding="utf-8") as f:
            d2 = json.load(f)
        self.assertEqual(d1["totalShlokas"], 120)
        self.assertEqual(d2["totalShlokas"], 229)

    def test_static_build_output(self):
        self.assertTrue(os.path.exists("out/index.html"))
        self.assertTrue(os.path.exists("out/books/ramayana/index.html"))
        self.assertTrue(os.path.exists("out/books/ramayana/balakanda/sarga-1/index.html"))
        self.assertTrue(os.path.exists("out/keyboard/index.html"))

if __name__ == "__main__":
    unittest.main()
