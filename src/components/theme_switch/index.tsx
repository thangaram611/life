"use client";

import { FiSun, FiMoon } from "react-icons/fi";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import Placeholder from "@/components/placeholder";

export default function ThemeSwitch() {
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted) return <Placeholder />;

  if (resolvedTheme === "dark") {
    return <FiSun className="scale-[1.7]" onClick={() => setTheme("light")} />;
  }

  if (resolvedTheme === "light") {
    return <FiMoon className="scale-[1.7]" onClick={() => setTheme("dark")} />;
  }
}
