"use client";

import Image from "next/image";
import Link from "next/link";

export default function LogoLink() {
  return (
    <div className="flex justify-center items-center z-10 w-24 h-24">
      <Link href="/">
        <Image
          src="/img/logo.png"
          width={75}
          height={75}
          alt="logo"
          priority={true}
          className="w-full h-auto"
        />
      </Link>
    </div>
  );
}
