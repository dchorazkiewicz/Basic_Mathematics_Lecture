from __future__ import annotations

import re
import sys
from pathlib import Path

HTML_GLOB = "site_build/exercises-*/problem-*/index.html"
PROBLEM_MAIN = re.compile(
    r'<main class="lecture-main exercise-problem-main">(.*?)</main>',
    flags=re.DOTALL,
)
NON_CONTENT_BLOCKS = re.compile(
    r"<(script|style|pre|code)\b[^>]*>.*?</\1>",
    flags=re.IGNORECASE | re.DOTALL,
)
MARKDOWN_CODE_FENCE = re.compile(r"```.*?```", flags=re.DOTALL)


def source_path_for(html_path: Path) -> Path:
    relative = html_path.relative_to("site_build")
    return Path("docs") / relative.parent / "index.md"


def source_contains_math(source: str) -> bool:
    without_code = MARKDOWN_CODE_FENCE.sub("", source)
    return "$" in without_code or "\\[" in without_code or "\\]" in without_code


def main() -> int:
    paths = sorted(Path(".").glob(HTML_GLOB))
    if not paths:
        print(f"No generated exercise pages matched {HTML_GLOB}", file=sys.stderr)
        return 1

    errors: list[str] = []

    for path in paths:
        html = path.read_text(encoding="utf-8")
        main_match = PROBLEM_MAIN.search(html)

        if main_match is None:
            errors.append(f"{path}: missing exercise problem main element")
            continue

        problem_html = NON_CONTENT_BLOCKS.sub("", main_match.group(1))

        # MathJax configuration in the document head legitimately contains '$$'.
        # Only raw delimiters remaining in the rendered problem content are errors.
        if "$$" in problem_html:
            errors.append(f"{path}: raw $$ delimiter remains in rendered problem content")

        if 'class="required-record"' not in problem_html:
            errors.append(f"{path}: missing Required record block")

        if 'class="verification-box"' not in problem_html:
            errors.append(f"{path}: missing Verification block")

        source_path = source_path_for(path)
        if not source_path.exists():
            errors.append(f"{path}: corresponding Markdown source is missing: {source_path}")
            continue

        source = source_path.read_text(encoding="utf-8")
        if source_contains_math(source) and 'class="arithmatex"' not in problem_html:
            errors.append(f"{path}: mathematical source was not rendered by Arithmatex")

    if errors:
        print("\n".join(errors), file=sys.stderr)
        return 1

    print(
        f"Validated generated mathematics and required sections in {len(paths)} exercise pages."
    )
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
