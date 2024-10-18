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
    <ul className="sm:absolute sm:inset-x-0 text-3xl sm:text-xl sm:flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
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
