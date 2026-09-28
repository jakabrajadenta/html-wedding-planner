const API_URL = import.meta.env.VITE_API_URL || '/api';

async function request(path, options = {}) {
  const response = await fetch(`${API_URL}${path}`, {
    headers: { 'Content-Type': 'application/json' },
    ...options,
  });

  if (!response.ok) {
    const body = await response.json().catch(() => ({}));
    throw new Error(body.error || `Request failed: ${response.status}`);
  }

  if (response.status === 204) return null;
  return response.json();
}

export const checklistApi = {
  list: () => request('/checklist'),
  create: (data) => request('/checklist', { method: 'POST', body: JSON.stringify(data) }),
  update: (id, data) => request(`/checklist/${id}`, { method: 'PATCH', body: JSON.stringify(data) }),
  remove: (id) => request(`/checklist/${id}`, { method: 'DELETE' }),
};
