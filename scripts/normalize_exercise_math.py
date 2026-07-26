from __future__ import annotations

import argparse
import re
import sys
from pathlib import Path

PROBLEM_GLOB = "docs/exercises-*/problem-*/index.md"
SAME_LINE_DISPLAY = re.compile(r"^\s*\$\$\s*(.+?)\s*\$\$\s*$")


def normalize_text(text: str) -> tuple[str, list[str]]:
    lines = text.splitlines()
    normalized: list[str] = []
    changes: list[str] = []
    in_fence = False

    for number, line in enumerate(lines, start=1):
        stripped = line.strip()

        if stripped.startswith("```"):
            in_fence = not in_fence
            normalized.append(line)
            continue

        if in_fence:
            normalized.append(line)
            continue

        same_line = SAME_LINE_DISPLAY.match(line)
        if same_line:
            normalized.extend(["$$", same_line.group(1).strip(), "$$"])
            changes.append(f"line {number}: split a one-line display formula")
            continue

        if stripped == "$$" and line != "$$":
            normalized.append("$$")
            changes.append(f"line {number}: removed indentation around a display delimiter")
            continue

        normalized.append(line)

    ending = "\n" if text.endswith("\n") else ""
    return "\n".join(normalized) + ending, changes


def validate_text(path: Path, text: str) -> list[str]:
    errors: list[str] = []
    display_markers = 0
    in_fence = False

    for number, line in enumerate(text.splitlines(), start=1):
        stripped = line.strip()

        if stripped.startswith("```"):
            in_fence = not in_fence
            continue
        if in_fence:
            continue

        if "\\[" in line or "\\]" in line:
            errors.append(f"{path}:{number}: use $$ delimiters instead of \\[ or \\]")

        if "$$" in line:
            if line != "$$":
                errors.append(
                    f"{path}:{number}: $$ must be the only characters on an unindented line"
                )
            else:
                display_markers += 1

    if display_markers % 2:
        errors.append(f"{path}: unbalanced display-math delimiters")

    return errors


def main() -> int:
    parser = argparse.ArgumentParser()
    parser.add_argument("--check", action="store_true")
    args = parser.parse_args()

    paths = sorted(Path(".").glob(PROBLEM_GLOB))
    if not paths:
        print(f"No files matched {PROBLEM_GLOB}", file=sys.stderr)
        return 1

    changed_files: list[Path] = []

    if not args.check:
        for path in paths:
            text = path.read_text(encoding="utf-8")
            normalized, changes = normalize_text(text)
            if normalized != text:
                path.write_text(normalized, encoding="utf-8")
                changed_files.append(path)
                for change in changes:
                    print(f"{path}: {change}")

    errors: list[str] = []
    for path in paths:
        errors.extend(validate_text(path, path.read_text(encoding="utf-8")))

    if errors:
        print("\n".join(errors), file=sys.stderr)
        return 1

    if args.check:
        print(f"Validated math delimiters in {len(paths)} exercise problem files.")
    elif changed_files:
        print(f"Normalized {len(changed_files)} exercise problem files.")
    else:
        print(f"No normalization needed in {len(paths)} exercise problem files.")

    return 0


if __name__ == "__main__":
    raise SystemExit(main())
