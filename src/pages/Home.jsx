export default function Home() {
  return (
    <div
      className="relative w-full h-[80vh] flex items-center justify-center text-center text-white"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1470&q=80')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* затемнение фона для читаемости текста */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* контент поверх картинки */}
      <div className="relative z-10 flex flex-col items-center space-y-4 px-6">
        <img
          src="../../public/logo.png"
          alt="logo"
          className="w-32 h-32 sm:w-40 sm:h-40 rounded-full border-4 border-white shadow-lg"
        />
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold drop-shadow-lg">
          ВКР 2026 — Комышан
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl drop-shadow-md max-w-2xl">
          Здесь собрана информация по ВКР, методички, вопросы и записи встреч с
          нашим научным руководителем.
        </p>
      </div>
    </div>
  );
}
