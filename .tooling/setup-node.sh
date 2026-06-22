#!/usr/bin/env bash
# Ensure Node LTS is available in WSL via nvm. Idempotent.
set -e

export NVM_DIR="$HOME/.nvm"

if [ ! -s "$NVM_DIR/nvm.sh" ]; then
  echo ">> installing nvm..."
  curl -fsSL https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.1/install.sh | bash
fi

# shellcheck disable=SC1090
. "$NVM_DIR/nvm.sh"

if ! command -v node >/dev/null 2>&1; then
  echo ">> installing node LTS..."
  nvm install --lts
fi

nvm use --lts >/dev/null 2>&1 || true

echo "=== RESULT ==="
echo "node: $(node -v 2>&1)"
echo "npm:  $(npm -v 2>&1)"
echo "which node: $(which node 2>&1)"
echo "git: $(git --version 2>&1)"
