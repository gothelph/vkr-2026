import { questions } from "../data/questions";
import Accordion from "../components/Accordion";

export default function Questions() {
  return (
    <div>
      <h2>Общие вопросы</h2>
      {questions.map((q) => (
        <Accordion key={q.id} title={q.question}>
          <p>{q.answer}</p>
        </Accordion>
      ))}

      <h3>Методичка ВКР</h3>
      <p>PDF / ссылка / текст методички</p>
    </div>
  );
}
