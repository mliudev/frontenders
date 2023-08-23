#!/bin/bash

TOP=$( cd -- "$( dirname -- "${BASH_SOURCE[0]}" )" &> /dev/null && pwd )

# verify required binaries are available
for BINARY in deno; do
    if ! type "$BINARY" > /dev/null 2>&1; then
        echo "Required binary not found: $BINARY"
        exit 1
    fi
done

# start deno linter
exec deno lint --watch
