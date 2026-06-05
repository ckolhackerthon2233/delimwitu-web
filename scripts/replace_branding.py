#!/usr/bin/env python3
import os
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
SKIP_DIRS = {'.git', 'node_modules', '.next', 'dist', 'build'}

url_re = re.compile(r'https?://\S+', re.I)
email_re = re.compile(r'\S+@\S+', re.I)
target_re = re.compile(r'delimwitu', re.I)

changed_files = []

def is_binary(path: Path):
    try:
        with open(path, 'rb') as f:
            CHUNK = f.read(8000)
            return b"\x00" in CHUNK
    except Exception:
        return True

for dirpath, dirnames, filenames in os.walk(ROOT):
    # filter out skip dirs
    dirnames[:] = [d for d in dirnames if d not in SKIP_DIRS]
    for fname in filenames:
        fpath = Path(dirpath) / fname
        # skip the script itself
        if fpath.samefile(Path(__file__)):
            continue
        # skip files/directories that contain delimwitu in the filesystem name (we won't rename files)
        # but we still process their contents
        # skip binary files
        if is_binary(fpath):
            continue
        try:
            text = fpath.read_text(encoding='utf-8')
        except Exception:
            try:
                text = fpath.read_text(encoding='latin-1')
            except Exception:
                continue

        # find ranges to skip (URLs and emails)
        skip_ranges = []
        for m in url_re.finditer(text):
            skip_ranges.append((m.start(), m.end()))
        for m in email_re.finditer(text):
            skip_ranges.append((m.start(), m.end()))

        def in_skips(pos):
            for a,b in skip_ranges:
                if a <= pos < b:
                    return True
            return False

        def repl(m):
            if in_skips(m.start()):
                return m.group(0)
            return 'Deli Mwitu'

        new_text = target_re.sub(repl, text)
        if new_text != text:
            fpath.write_text(new_text, encoding='utf-8')
            changed_files.append(str(fpath.relative_to(ROOT)))

print(f"Replaced occurrences in {len(changed_files)} files:")
for p in changed_files:
    print(p)
