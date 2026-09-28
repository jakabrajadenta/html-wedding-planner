export default function ProgressTracker({ total, done }) {
  const percent = total === 0 ? 0 : Math.round((done / total) * 100);

  return (
    <section id="progress-tracker">
      <h2>Progress Tracker</h2>
      <p>
        {done} / {total} item selesai ({percent}%)
      </p>
      <div className="progress-bar">
        <div className="progress-bar-fill" style={{ width: `${percent}%` }} />
      </div>
    </section>
  );
}
