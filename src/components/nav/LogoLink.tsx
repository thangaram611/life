"use client";

import Image from "next/image";
import Link from "next/link";

export default function LogoLink() {
  return (
    <div className="flex justify-center items-center w-[5rem] h-[5rem]">
      <Link href="/">
        <Image
          src="/img/logo.png"
          width={50}
          height={50}
          alt="logo"
          priority={true}
          className="w-full h-auto"
        />
      </Link>
    </div>
  );
}
