"use client";

import { useTheme } from "next-themes";
import Image from "next/image";
import Placeholder from "@/components/placeholder";
import { useEffect, useState } from "react";

export default function Logo() {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme } = useTheme();

  useEffect(() => setMounted(true), []);
  if (!mounted) {
    return <Placeholder />;
  }

  const src =
    resolvedTheme === "dark" ? "/img/logo-light.png" : "/img/logo-dark.png";
  return (
    <Image
      src={src}
      width={50}
      height={50}
      alt="logo"
      priority={true}
      className="w-full h-auto"
    />
  );
}
