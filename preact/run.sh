#!/bin/bash

TOP=$( cd -- "$( dirname -- "${BASH_SOURCE[0]}" )" &> /dev/null && pwd )

# verify required binaries are available
for BINARY in deno; do
    if ! type "$BINARY" > /dev/null 2>&1; then
        echo "Required binary not found: $BINARY"
        exit 1
    fi
done

# start python http server
exec deno run --allow-net --allow-read https://deno.land/std@0.159.0/http/file_server.ts --port 8000 src/
