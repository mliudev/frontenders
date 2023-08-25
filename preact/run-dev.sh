#!/bin/bash

TOP=$( cd -- "$( dirname -- "${BASH_SOURCE[0]}" )" &> /dev/null && pwd )

# verify required binaries are available
for BINARY in deno; do
    if ! type "$BINARY" > /dev/null 2>&1; then
        echo "Required binary not found: $BINARY"
        exit 1
    fi
done

echo $TOP
# link index.html to dist folder
ln -sf $TOP/src/index.html $TOP/dist/index.html

# start deno dev server
deno run --allow-env --allow-run --allow-read serve-dev.ts
