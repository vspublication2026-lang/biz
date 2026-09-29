/**
 * Path to a file in /public. Prefixed with the app's base path so the build
 * works when it is served from a sub-folder (e.g. /new/) as well as the root.
 */
const BASE = (process.env.PUBLIC_URL || "").replace(/\/$/, "");
export default function asset(path) {
  return `${BASE}${path.startsWith("/") ? path : `/${path}`}`;
}
