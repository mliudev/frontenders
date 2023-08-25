#!/bin/bash

TOP=$( cd -- "$( dirname -- "${BASH_SOURCE[0]}" )" &> /dev/null && pwd )

# verify required binaries are available
for BINARY in deno; do
    if ! type "$BINARY" > /dev/null 2>&1; then
        echo "Required binary not found: $BINARY"
        exit 1
    fi
done

# start prettier formatter
deno run --allow-sys --allow-read --allow-env --allow-run "npm:chokidar-cli" "**/*.ts" "**/*.html" -c "deno run --allow-read --allow-write --allow-env 'npm:prettier' . --check --write"
