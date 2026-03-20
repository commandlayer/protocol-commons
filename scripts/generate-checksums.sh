#!/usr/bin/env bash
set -euo pipefail

ROOT="${1:-schemas/v1.1.0}"
OUT="${2:-checksums.txt}"

if [ ! -d "$ROOT" ]; then
  echo "ERROR: missing schema root: $ROOT" >&2
  exit 1
fi

if [ "$#" -eq 0 ]; then
  echo "Generating SHA-256 checksums for the current authoritative schema line: $ROOT"
else
  echo "Generating SHA-256 checksums for $ROOT"
fi

find "$ROOT" -type f -name "*.json" -print0 \
  | LC_ALL=C sort -z \
  | xargs -0 sha256sum > "$OUT"

echo "Wrote $(wc -l < "$OUT") checksums to $OUT"
