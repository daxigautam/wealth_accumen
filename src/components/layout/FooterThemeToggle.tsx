"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export function FooterThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return <div className="w-10 h-10" />;

  return (
    <button
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 text-white/60 hover:text-[#D4AF37] hover:border-[#D4AF37]/30 hover:bg-[#D4AF37]/5 transition-all shadow-sm group"
      aria-label="Toggle Theme"
    >
      {resolvedTheme === "dark" ? (
        <Sun size={16} className="group-hover:rotate-45 transition-transform duration-300" />
      ) : (
        <Moon size={16} className="group-hover:-rotate-12 transition-transform duration-300" />
      )}
      <span className="text-xs font-medium uppercase tracking-wider">
        {resolvedTheme === "dark" ? "Try Light Mode" : "Try Night Mode"}
      </span>
    </button>
  );
}
