import { useState } from "react";

export default function Accordion({ title, children }) {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setOpen(!open)}>{title}</button>
      {open && <div>{children}</div>}
    </div>
  );
}
