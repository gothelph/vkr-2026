import { Link } from "react-router-dom";
import { topics } from "../data/topics";

export default function Topics() {
  return (
    <div>
      <h2>Темы ВКР</h2>
      {topics.map((t) => (
        <div key={t.id}>
          <Link to={`/topics/${t.id}`}>{t.title}</Link>
        </div>
      ))}
    </div>
  );
}
