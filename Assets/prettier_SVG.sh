
#!/bin/bash

# Check if a directory was provided
if [ -z "$1" ]; then
    echo "Usage: $0 <directory>"
    exit 1
fi

# Check if the directory exists
if [ ! -d "$1" ]; then
    echo "Error: Directory '$1' does not exist."
    exit 1
fi

# format all SVG files recursively
find "$1" -type f -name "*.svg" -exec sh -c '
    for file do
        echo "format: $file"
        xmllint --format "$file" -o "$file"
    done
' sh {} +

echo "Finished formating SVG files"
