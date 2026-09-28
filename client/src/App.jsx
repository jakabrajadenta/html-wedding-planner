import { useCallback, useEffect, useState } from 'react';
import Hero from './components/Hero.jsx';
import ProgressTracker from './components/ProgressTracker.jsx';
import Checklist from './components/Checklist.jsx';
import Timeline from './components/Timeline.jsx';
import BudgetOverview from './components/BudgetOverview.jsx';
import { checklistApi } from './lib/api.js';

export default function App() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const loadItems = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await checklistApi.list();
      setItems(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadItems();
  }, [loadItems]);

  async function handleAdd(title) {
    try {
      const item = await checklistApi.create({ title });
      setItems((prev) => [...prev, item]);
    } catch (err) {
      setError(err.message);
    }
  }

  async function handleToggle(item) {
    try {
      const updated = await checklistApi.update(item.id, { isDone: !item.isDone });
      setItems((prev) => prev.map((i) => (i.id === updated.id ? updated : i)));
    } catch (err) {
      setError(err.message);
    }
  }

  async function handleDelete(id) {
    try {
      await checklistApi.remove(id);
      setItems((prev) => prev.filter((i) => i.id !== id));
    } catch (err) {
      setError(err.message);
    }
  }

  const done = items.filter((item) => item.isDone).length;

  return (
    <>
      <Hero />
      <main>
        <ProgressTracker total={items.length} done={done} />
        <Checklist
          items={items}
          loading={loading}
          error={error}
          onAdd={handleAdd}
          onToggle={handleToggle}
          onDelete={handleDelete}
        />
        <Timeline />
        <BudgetOverview />
      </main>
    </>
  );
}
