/**
 * Base-aware URL helper.
 *
 * The site can be served from a sub-path (GitHub Pages project page at
 * `/koba-web/`) or from a domain root (`/`). Vite rewrites asset URLs inside
 * bundled code and index.html, but NOT hardcoded string paths in JSX. So every
 * runtime href/src to a local page or public asset must go through `withBase`.
 *
 * import.meta.env.BASE_URL is set by Vite from the `base` config — e.g.
 * "/koba-web/" or "/". Always ends with a trailing slash.
 */
const BASE = import.meta.env.BASE_URL;

export function withBase(path: string): string {
  return BASE.replace(/\/$/, "") + "/" + path.replace(/^\//, "");
}
