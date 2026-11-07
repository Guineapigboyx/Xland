#!/usr/bin/env bash

set -e

input="$1"

if [[ -z "$input" || ! -f "$input" ]]; then
    echo "Usage: $0 input.svg"
    exit 1
fi

# Read original viewBox
viewbox=$(grep -oP 'viewBox="\K[^"]+' "$input" | head -1)

if [[ -z "$viewbox" ]]; then
    echo "Error: SVG has no viewBox"
    exit 1
fi

read -r oldX oldY oldW oldH <<< "${viewbox//,/ }"

# Get drawing bounds from Inkscape
bounds=$(inkscape "$input" --query-all)

# Calculate new bounds, ignoring full-canvas objects
newbox=$(echo "$bounds" | awk -F',' \
    -v oldX="$oldX" \
    -v oldY="$oldY" \
    -v oldW="$oldW" \
    -v oldH="$oldH" '
function abs(x) { return x < 0 ? -x : x }

NF == 5 {
    x = $2
    y = $3
    w = $4
    h = $5

    if (abs(x) < 0.01 &&
        abs(y) < 0.01 &&
        abs(w - oldW) < 0.01 &&
        abs(h - oldH) < 0.01)
        next

    if (!found || x < minX) minX = x
    if (!found || y < minY) minY = y
    if (!found || x+w > maxX) maxX = x+w
    if (!found || y+h > maxY) maxY = y+h

    found = 1
}

END {
    if (found)
        printf "%.8f %.8f %.8f %.8f",
            oldX + minX,
            oldY + minY,
            maxX - minX,
            maxY - minY
}
')

if [[ -z "$newbox" ]]; then
    echo "Error: No usable artwork found"
    exit 1
fi

read -r newX newY newW newH <<< "$newbox"

# Create temporary file in the same directory
temp=$(mktemp "${input}.XXXXXX")
trap 'rm -f "$temp"' EXIT

# Replace viewBox
sed -E \
    "0,/viewBox=\"[^\"]*\"/s//viewBox=\"$newbox\"/" \
    "$input" > "$temp"

# Update width and height on the root SVG tag
sed -i -E \
    "0,/<svg /{
        s/ width=\"[^\"]*\"/ width=\"$newW\"/
        s/ height=\"[^\"]*\"/ height=\"$newH\"/
    }" "$temp"

# Beautify the SVG
xmllint --format "$temp" -o "$temp"

# Overwrite original SVG
chmod --reference="$input" "$temp"
mv -f -- "$temp" "$input"

echo "Cropped: $input"
echo "New viewBox: $newbox"
