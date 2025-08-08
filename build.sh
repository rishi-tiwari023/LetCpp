#!/bin/bash

# Build the React app
npm run build

# Ensure routing works by copying index.html to 200.html
cp build/index.html build/200.html

# Copy static.json to the build directory
cp public/static.json build/

# Copy _redirects to the build directory
cp public/_redirects build/

echo "Build completed successfully!"