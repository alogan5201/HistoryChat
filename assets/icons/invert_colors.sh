#!/bin/bash

# Loop through all png images in the current directory
for img in *.png; do
    # Invert colors and overwrite the original image
    convert "$img" -negate "$img"
done

echo "All PNG images have been inverted."
