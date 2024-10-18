"use client";

import { useEffect, useState } from "react";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
      <button className="absolute right-2 top-2 p-2" onClick={toggleOpen}>
        <FontAwesomeIcon className="text-4xl" icon={faBars} />
      </button>
      <div
        className={`fixed flex flex-col justify-between items-center z-10 top-0 right-0 h-full w-full bg-white text-black transition-transform duration-300 transform ${
          isOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="flex flex-col w-full items-center">
          <button className="self-end p-3 m-4" onClick={toggleOpen}>
            <FontAwesomeIcon className="text-5xl" icon={faXmark} />
          </button>
          <NavLinks toggle={toggleOpen} />
        </div>
      </div>
    </>
  );
}
