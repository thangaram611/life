"use client";

import { useEffect, useState } from "react";
import { FaBars, FaXmark } from "react-icons/fa6";
import NavLinks from "./NavLinks";

export default function MobileDrawer({
  isOpen,
  toggleOpen,
}: {
  isOpen: boolean;
  toggleOpen: VoidFunction;
}) {
  // Track whether the component has been mounted (hydrated) on the client
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // Once the component mounts, set isMounted to true
    setIsMounted(true);
  }, []);

  // If not mounted yet, do not render the drawer at all
  if (!isMounted) {
    return null;
  }

  return (
    <>
      <button className="p-2" onClick={toggleOpen}>
        <FaBars className="scale-[1.7]" />
      </button>
      <div
        className={`fixed top-0 right-0 h-screen w-screen transition-transform duration-300 transform z-100 ${
          isOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="flex flex-col w-full h-full items-center backdrop-blur-xl">
          <button className="self-end p-3 m-4" onClick={toggleOpen}>
            <FaXmark className="scale-[1.7]" />
          </button>
          <NavLinks toggle={toggleOpen} />
        </div>
      </div>
    </>
  );
}
