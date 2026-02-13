import { meetings } from "../data/meetings";
import VideoPlayer from "../components/VideoPlayer";

export default function Meetings() {
  return (
    <div>
      <h2>Встречи</h2>
      {meetings.map((m) => (
        <div key={m.id}>
          <h3>{m.title}</h3>
          <VideoPlayer src={m.videoUrl} />
          <ul>
            {m.timestamps.map((t, i) => (
              <li key={i}>
                {t.time} — {t.label}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
