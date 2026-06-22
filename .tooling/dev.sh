#!/usr/bin/env bash
# Run the Vite dev server in WSL (sources nvm). Bound to 0.0.0.0 so Windows
# can reach it at http://localhost:5173 via WSL2 localhost forwarding.
set -e
export NVM_DIR="$HOME/.nvm"
# shellcheck disable=SC1090
[ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh"
cd /opt/projects/koba-web
exec npm run dev -- --host 0.0.0.0 --port 5173
