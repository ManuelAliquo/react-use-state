export default function Card({ title, description }) {
  return (
    <div className="card">
      <h2>{title}</h2>
      <div className="description">{description}</div>
    </div>
  );
}
