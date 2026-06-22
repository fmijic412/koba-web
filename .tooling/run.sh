#!/usr/bin/env bash
# Source nvm, then run an npm script in the project dir.
# Usage: bash .tooling/run.sh <npm-args...>
set -e
export NVM_DIR="$HOME/.nvm"
# shellcheck disable=SC1090
[ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh"
cd /opt/projects/koba-web
exec npm "$@"
