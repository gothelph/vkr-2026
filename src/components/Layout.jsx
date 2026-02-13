import { Outlet, Link } from "react-router-dom";

export default function Layout() {
  return (
    <div>
      <nav style={{ marginBottom: 20 }}>
        <Link to="/">Главная</Link>
        {" | "}
        <Link to="/contacts">Контакты</Link>
        {" | "}
        <Link to="/questions">Вопросы</Link>
        {" | "}
        <Link to="/topics">Темы</Link>
        {" | "}
        <Link to="/meetings">Встречи</Link>
      </nav>

      <Outlet />
    </div>
  );
}
