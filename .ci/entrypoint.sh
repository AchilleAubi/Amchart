#!/bin/sh

defined_envs=$(printf '"${%s}"' $(env | cut -d= -f1 | grep -E '^CCA\_'))
for file in $(find "${APP_ROOT}" -type f -name '*.scss' -o -name '*.js' -o -name '*.html')
  do
      envsubst "$defined_envs" < $file > "${file}.tmp"
      mv "${file}.tmp" $file
  done

exec "$@"
