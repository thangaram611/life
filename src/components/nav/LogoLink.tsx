"use client";

import Link from "next/link";
import Logo from "@/components/logo";

export default function LogoLink() {
  return (
    <div className="flex justify-center items-center w-[5rem] h-[5rem]">
      <Link href="/">
        <Logo />
      </Link>
    </div>
  );
}
