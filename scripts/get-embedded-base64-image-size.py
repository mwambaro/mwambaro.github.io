#!/usr/bin/env python3

import sys
import re
import base64
from io import BytesIO

from bs4 import BeautifulSoup
from PIL import Image


# Matches any Base64 image data URI
DATA_URI_RE = re.compile(
    r"^data:image/[^;]+;base64,",
    re.IGNORECASE,
)


def get_size(base64_str):
    """
    Return (width, height) in pixels from a Base64 image string.
    """

    # Remove whitespace/newlines
    base64_str = "".join(base64_str.split())

    image_bytes = base64.b64decode(base64_str)

    with Image.open(BytesIO(image_bytes)) as img:
        return img.size


def convert_html(input_file, output_file):

    with open(input_file, "r", encoding="utf-8") as f:
        soup = BeautifulSoup(f, "html.parser")

    for img in soup.find_all("img"):

        src = img.get("src", "")

        if not DATA_URI_RE.match(src):
            continue

        # Strip the "data:image/...;base64," prefix
        base64_data = DATA_URI_RE.sub("", src, count=1)

        try:
            width, height = get_size(base64_data)
        except Exception as e:
            print(f"Skipping image ({e})")
            continue

        amp_img = soup.new_tag("amp-img")

        # Copy all existing attributes
        for key, value in img.attrs.items():
            amp_img[key] = value

        # Add AMP attributes
        amp_img["width"] = str(width)
        amp_img["height"] = str(height)
        amp_img["layout"] = "responsive"

        # Copy any child nodes (usually none for <img>)
        for child in img.contents:
            amp_img.append(child)

        # Replace the old tag
        img.replace_with(amp_img)

        # Force explicit closing tag
        if not img.contents:
            img.string = ""

    html = soup.prettify()

    # Convert BeautifulSoup's 1-space indentation to 4 spaces
    html = re.sub(
        r'^( +)',
        lambda m: ' ' * (len(m.group(1)) * 4),
        html,
        flags=re.MULTILINE
    )

    with open(output_file, "w", encoding="utf-8", newline="\n") as f:
        f.write(html)


def main():

    if len(sys.argv) != 3:
        print("Usage:")
        print("    python convert_amp.py input.html output.html")
        sys.exit(1)

    convert_html(sys.argv[1], sys.argv[2])

    print(f"Written to {sys.argv[2]}")


if __name__ == "__main__":
    main()
