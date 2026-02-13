import { useState } from "react";

export default function Accordion({ title, children }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border border-gray-300 rounded-lg overflow-hidden mb-4 shadow-sm">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center p-4 bg-white hover:bg-gray-50 transition"
      >
        <span className="font-medium text-gray-800">{title}</span>
        {/* стрелка */}
        <svg
          className={`w-5 h-5 text-gray-500 transform transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {/* контент */}
      <div
        className={`overflow-hidden transition-[max-height] duration-300 bg-gray-50 ${
          open ? "max-h-96 p-4" : "max-h-0 p-0"
        }`}
      >
        {children}
      </div>
    </div>
  );
}
