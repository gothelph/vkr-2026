import { Outlet, Link } from "react-router-dom";

export default function Layout() {
  return (
    <div className="flex flex-col min-h-screen font-sans px-6 sm:px-8 md:px-12">
      {/* Навигация */}
      <nav className="flex justify-center items-center flex-wrap gap-6 p-6 bg-gray-100 shadow-md rounded-xl">
        {[
          { name: "Главная", path: "/" },
          { name: "Контакты", path: "/contacts" },
          { name: "Вопросы", path: "/questions" },
          { name: "Темы", path: "/topics" },
          { name: "Встречи", path: "/meetings" },
        ].map((link) => (
          <Link
            key={link.path}
            to={link.path}
            className="text-gray-700 hover:text-blue-600 hover:underline transition-colors duration-200"
          >
            {link.name}
          </Link>
        ))}
      </nav>

      {/* Основной контент */}
      <main className="flex-1 w-full">
        <Outlet />
      </main>

      {/* Футер */}
      <footer className="text-center text-gray-500 p-4 bg-gray-100 mt-6 rounded-xl">
        © 2026 Комышан
      </footer>
    </div>
  );
}
