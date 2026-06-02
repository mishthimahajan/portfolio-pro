import { useState, useEffect } from "react";

export default function ThemeToggle() {

  const [dark, setDark] = useState(true);

  useEffect(() => {

    if (dark) {

      document.body.style.background = "#030712";
      document.body.style.color = "white";

    } else {

      document.body.style.background = "#ffffff";
      document.body.style.color = "#111827";

    }

  }, [dark]);

  return (

    <button
      onClick={() => setDark(!dark)}
      className="
      p-2
      w-10
      h-10
      flex
      items-center
      justify-center
      rounded-full
      border
      border-cyan-400
      bg-slate-900
      hover:bg-slate-800
      hover:scale-110
      duration-300
      "
    >

      {dark ? "🌙" : "☀️"}

    </button>

  );
}
