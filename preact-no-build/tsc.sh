#!/bin/bash

TOP=$( cd -- "$( dirname -- "${BASH_SOURCE[0]}" )" &> /dev/null && pwd )

# verify required binaries are available
for BINARY in deno; do
    if ! hash "$BINARY" 2> /dev/null; then
        echo "Required binary not found: $BINARY"
        exit 1
    fi
done

exec deno run \
    --allow-env \
    --allow-read \
    --allow-write \
    'npm:typescript@5.1.6/tsc' \
    --watch $@
