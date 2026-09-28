import { useState } from 'react';

export default function Checklist({ items, loading, error, onAdd, onToggle, onDelete }) {
  const [title, setTitle] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    if (!title.trim()) return;
    onAdd(title.trim());
    setTitle('');
  }

  return (
    <section id="checklist">
      <h2>Checklist</h2>

      <form onSubmit={handleSubmit} className="checklist-form">
        <input
          type="text"
          placeholder="Tambah item checklist..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button type="submit">Tambah</button>
      </form>

      {loading && <p>Memuat checklist...</p>}
      {error && <p className="error-text">{error}</p>}

      <ul className="checklist-list">
        {items.map((item) => (
          <li key={item.id} className={item.isDone ? 'is-done' : ''}>
            <label>
              <input type="checkbox" checked={item.isDone} onChange={() => onToggle(item)} />
              {item.title}
            </label>
            <button type="button" className="delete-btn" onClick={() => onDelete(item.id)}>
              Hapus
            </button>
          </li>
        ))}
      </ul>

      {!loading && items.length === 0 && <p>Belum ada item checklist.</p>}
    </section>
  );
}
