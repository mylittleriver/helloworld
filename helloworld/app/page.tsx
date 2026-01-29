"use client";
import { useEffect, useState } from "react";

export default function Home() {
  const [floating, setFloating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => setFloating(f => !f), 1000);
    return () => clearInterval(interval);
  }, []);

  return (
      <div className="flex min-h-screen items-center justify-center bg-linear-to-r from-purple-500 via-pink-500 to-red-500 font-sans">
        <h1
            className={`text-6xl font-bold text-white drop-shadow-lg transition-transform duration-1000 ${
                floating ? "translate-y-2" : "-translate-y-2"
            }`}
        >
          Hello World
        </h1>
      </div>
  );
}
