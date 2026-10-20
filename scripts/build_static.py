#!/usr/bin/env python3
"""Create a clean static distribution without altering source files."""
from pathlib import Path
import shutil

ROOT = Path(__file__).resolve().parent.parent
DIST = ROOT / "dist"
FILES = [
    "index.html",
    "styles.css",
    "script.js",
    "config.js",
    "manus-routes.json",
    "site.webmanifest",
    "robots.txt",
    "sitemap.xml",
    "favicon.png",
]
if DIST.exists():
    shutil.rmtree(DIST)
DIST.mkdir()

for name in FILES:
    shutil.copy2(ROOT / name, DIST / name)

(DIST / "assets").mkdir()
shutil.copytree(ROOT / "assets" / "optimized", DIST / "assets" / "optimized")
shutil.copytree(ROOT / "assets" / "fonts", DIST / "assets" / "fonts")

if not (DIST / "index.html").is_file():
    raise SystemExit("Static build failed: dist/index.html is missing")

print(f"Static build complete: {DIST}")
