#!/usr/bin/env python3
"""Refactor HTML publications to use shared publication-reader assets."""

import re
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
ASSETS = ROOT / "assets"

PUBLICATIONS = [
    ASSETS / "Homocracy_and_Digital_Public_Infrastructure" / "Homocracy_and_Digital_Public_Infrastructure.html",
    ASSETS / "World_Federal_Government_Constitution" / "World_Federal_Government_Constitution.html",
    ASSETS / "Comprehension_Excerpts_on_LaaS_Homocracy—Volume-1" / "Comprehension_Excerpts_on_LaaS_Homocracy—Volume-1.html",
    ASSETS / "Comprehension_Excerpts_on_LaaS_Homocracy—Volume-2" / "Comprehension_Excerpts_on_LaaS_Homocracy—Volume-2.html",
    ASSETS / "Comprehension_Excerpts_on_LaaS_Homocracy—Volume-3" / "Comprehension_Excerpts_on_LaaS_Homocracy—Volume-3.html",
]

HEAD_TEMPLATE = """<!DOCTYPE html>
<html lang="en">
<head>
\t<meta charset="utf-8"/>
\t<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
\t<title>{title}</title>
\t<link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&amp;display=swap" rel="stylesheet"/>
\t<link rel="stylesheet" href="../publication-reader/publication-reader.css"/>
</head>
<body lang="en" dir="ltr" data-publication-title="{title_attr}">
{content}
\t<script src="https://unpkg.com/lucide@latest/dist/umd/lucide.min.js"></script>
\t<script src="../publication-reader/publication-reader.js"></script>
</body>
</html>
"""


def extract_title(html: str) -> str:
    m = re.search(r"<title[^>]*>(.*?)</title>", html, re.I | re.S)
    if m:
        return re.sub(r"\s+", " ", m.group(1)).strip()
    return "Publication"


def extract_content(html: str) -> str:
    """Extract main publication body content, stripping chrome and scripts."""
    # If already has publication-content main, extract its inner HTML
    main_match = re.search(
        r'<main[^>]*class="[^"]*publication-content[^"]*"[^>]*>(.*)</main>',
        html,
        re.I | re.S,
    )
    if main_match:
        return main_match.group(1).strip()

    # Strip from first body tag
    body_match = re.search(r"<body[^>]*>(.*)</body>", html, re.I | re.S)
    if not body_match:
        raise ValueError("No body found")
    body = body_match.group(1)

    # Remove publication reader script block
    body = re.sub(
        r"<!-- Publication reader script start -->.*<!-- Publication reader script end -->",
        "",
        body,
        flags=re.S,
    )
    body = re.sub(
        r"<!-- Publication reader script start -->.*?</script>\s*<!-- Publication reader script end -->",
        "",
        body,
        flags=re.S,
    )
    body = re.sub(r"<script\b[^>]*>.*?</script>", "", body, flags=re.S | re.I)

    # Remove publication reader nav block
    body = re.sub(
        r"<!-- Publication reader nav start -->.*?<!-- Publication reader nav end -->",
        "",
        body,
        flags=re.S,
    )

    # Remove orphaned nav elements if markers missing
    body = re.sub(
        r'<nav class="publication-nav"[^>]*>.*?</nav>',
        "",
        body,
        flags=re.S,
    )
    body = re.sub(
        r'<aside id="publicationSidebar"[^>]*>.*?</aside>',
        "",
        body,
        flags=re.S,
    )
    body = re.sub(
        r'<div id="publicationBackdrop"[^>]*></div>',
        "",
        body,
        flags=re.S,
    )

    return body.strip()


def remove_table_of_contents(content: str) -> str:
    """Remove explicit table-of-contents sections from body content."""
    patterns = [
        r"<h[1-6][^>]*>\s*Table of Contents\s*</h[1-6]>.*?(?=<h[1-6]\b|$)",
        r"<p[^>]*>\s*<[^>]*>\s*Table of Contents\s*</[^>]*>\s*</p>.*?(?=<h[1-6]\b|<p[^>]*>\s*<[^>]*>\s*<b|<div|$)",
        r"<p[^>]*>\s*<b>\s*Table of Contents\s*</b>\s*</p>.*?(?=<h[1-6]\b|$)",
    ]
    for pat in patterns:
        content = re.sub(pat, "", content, flags=re.I | re.S)
    return content


def escape_attr(text: str) -> str:
    return (
        text.replace("&", "&amp;")
        .replace('"', "&quot;")
        .replace("<", "&lt;")
        .replace(">", "&gt;")
    )


def refactor_file(path: Path) -> None:
    html = path.read_text(encoding="utf-8", errors="replace")
    title = extract_title(html)
    content = extract_content(html)
    content = remove_table_of_contents(content)

    # Indent content lines for readability (tab prefix)
    content_lines = content.splitlines()
    indented = "\n".join("\t" + line if line.strip() else line for line in content_lines)

    out = HEAD_TEMPLATE.format(
        title=escape_attr(title),
        title_attr=escape_attr(title),
        content=indented,
    )
    path.write_text(out, encoding="utf-8")
    print(f"Refactored: {path.name} ({len(out):,} bytes)")


def main() -> None:
    for pub in PUBLICATIONS:
        if not pub.exists():
            print(f"SKIP (missing): {pub}")
            continue
        refactor_file(pub)


if __name__ == "__main__":
    main()
