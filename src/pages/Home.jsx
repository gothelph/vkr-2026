import logo from "../assets/logo.png";

export default function Home() {
  return (
    <div>
      <img src={logo} alt="Комышан" width={120} />
      <h1>ВКР 2026 — Комышан</h1>
      <p>
        Здесь собрана информация по ВКР, методички, вопросы и записи встреч с
        научным руководителем.
      </p>
    </div>
  );
}
