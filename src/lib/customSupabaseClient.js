// API base URL — empty string means same origin (served by Express)
export const API_BASE = '';

export async function apiFetch(path, options = {}) {
  const token = localStorage.getItem('cybelator_admin_token');
  const headers = { 'Content-Type': 'application/json', ...options.headers };
  if (token) headers['Authorization'] = `Bearer ${token}`;

  const res = await fetch(`${API_BASE}${path}`, { ...options, headers });
  const data = await res.json().catch(() => ({}));
  return { data: res.ok ? data : null, error: res.ok ? null : data, status: res.status };
}
