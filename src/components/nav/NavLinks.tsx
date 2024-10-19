"use client";

import Link from "next/link";

const navItems = [
  {
    href: "/",
    label: "Home",
  },
  {
    href: "/about",
    label: "About",
  },
];

export default function NavLinks({ toggle }: { toggle: VoidFunction }) {
  return (
    <ul className="flex flex-col justify-center items-center p-2 text-3xl space-y-4 sm:text-xl sm:flex-row sm:space-y-0 sm:space-x-6">
      {navItems.map((item, idx) => (
        <li
          key={idx}
          className="hover:text-blue-900 hover:font-semibold"
          onClick={toggle}
        >
          <Link href={item.href}>{item.label}</Link>
        </li>
      ))}
    </ul>
  );
}
