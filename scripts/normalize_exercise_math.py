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
    index = 0

    while index < len(lines):
        line = lines[index]
        stripped = line.strip()
        number = index + 1

        if stripped.startswith("```"):
            in_fence = not in_fence
            normalized.append(line)
            index += 1
            continue

        if in_fence:
            normalized.append(line)
            index += 1
            continue

        same_line = SAME_LINE_DISPLAY.match(line)
        if same_line:
            normalized.extend(["$$", same_line.group(1).strip(), "$$"])
            changes.append(f"line {number}: split a one-line display formula")
            index += 1
            continue

        if stripped != "$$":
            normalized.append(line)
            index += 1
            continue

        closing = index + 1
        while closing < len(lines) and lines[closing].strip() != "$$":
            closing += 1

        if closing >= len(lines):
            normalized.append("$$")
            if line != "$$":
                changes.append(
                    f"line {number}: removed indentation around an unmatched display delimiter"
                )
            index += 1
            continue

        content = lines[index + 1 : closing]
        previous_is_text = bool(normalized and normalized[-1].strip())

        if previous_is_text and len(content) == 1 and content[0].strip():
            formula = content[0].strip()
            previous = normalized.pop().rstrip()
            normalized.append(f"{previous} ${formula}$")
            changes.append(
                f"lines {number}-{closing + 1}: converted display math adjacent to text into inline math"
            )
            index = closing + 1
            continue

        if previous_is_text:
            normalized.append("")
            changes.append(
                f"line {number}: inserted a blank line before a display-math block"
            )

        normalized.append("$$")
        normalized.extend(content)
        normalized.append("$$")

        if line != "$$" or lines[closing] != "$$":
            changes.append(
                f"lines {number}-{closing + 1}: removed indentation around display delimiters"
            )

        index = closing + 1

    ending = "\n" if text.endswith("\n") else ""
    return "\n".join(normalized) + ending, changes


def validate_text(path: Path, text: str) -> list[str]:
    errors: list[str] = []
    display_markers = 0
    in_fence = False
    in_display = False
    lines = text.splitlines()

    for index, line in enumerate(lines):
        number = index + 1
        stripped = line.strip()

        if stripped.startswith("```"):
            in_fence = not in_fence
            continue
        if in_fence:
            continue

        if "\\[" in line or "\\]" in line:
            errors.append(f"{path}:{number}: use $$ delimiters instead of \\[ or \\]")

        if "$$" not in line:
            continue

        if line != "$$":
            errors.append(
                f"{path}:{number}: $$ must be the only characters on an unindented line"
            )
            continue

        display_markers += 1
        if not in_display:
            previous = lines[index - 1] if index > 0 else ""
            if previous.strip():
                errors.append(
                    f"{path}:{number}: display math must start after a blank line; use inline math after list text"
                )
            in_display = True
        else:
            in_display = False

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
