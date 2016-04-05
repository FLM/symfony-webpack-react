export default function apiUrl(url) {
  let u = `/api${url}`;
  if (__GLOBALS__.dev) {
    u = `/app_dev.php${u}`;
  }

  return u;
}
