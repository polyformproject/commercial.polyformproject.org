#!/bin/sh
for string in console.log console.warn console.error; do
  if grep -F "$string" index.js >/dev/null; then
    fail=yes
    echo "ERROR: index.js contains \`$string\`."
  fi
done

if [ -n "$fail" ]; then
  exit 1
fi
