from __future__ import annotations

import sys
from pathlib import Path

HTML_GLOB = "site_build/exercises-*/problem-*/index.html"


def main() -> int:
    paths = sorted(Path(".").glob(HTML_GLOB))
    if not paths:
        print(f"No generated exercise pages matched {HTML_GLOB}", file=sys.stderr)
        return 1

    errors: list[str] = []

    for path in paths:
        html = path.read_text(encoding="utf-8")

        if "$$" in html:
            errors.append(f"{path}: raw $$ delimiter remains in generated HTML")

        if 'class="required-record"' not in html:
            errors.append(f"{path}: missing Required record block")

        if 'class="verification-box"' not in html:
            errors.append(f"{path}: missing Verification block")

        if 'class="arithmatex"' not in html:
            # Every current problem contains at least one mathematical expression.
            errors.append(f"{path}: no rendered mathematics block or span found")

    if errors:
        print("\n".join(errors), file=sys.stderr)
        return 1

    print(
        f"Validated generated mathematics and required sections in {len(paths)} exercise pages."
    )
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
