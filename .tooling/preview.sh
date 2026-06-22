#!/usr/bin/env bash
# Build (if needed) and serve the production bundle from dist/ on port 4173.
set -e
export NVM_DIR="$HOME/.nvm"
# shellcheck disable=SC1090
[ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh"
cd /opt/projects/koba-web
exec npm run preview -- --host 0.0.0.0 --port 4173
