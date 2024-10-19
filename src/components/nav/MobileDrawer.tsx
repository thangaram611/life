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
      <button className="p-2 mr-2" onClick={toggleOpen}>
        <FontAwesomeIcon className="text-4xl" icon={faBars} />
      </button>
      <div
        className={`fixed top-0 right-0 h-screen w-screen bg-white text-black transition-transform duration-300 transform z-50 ${
          isOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="flex flex-col w-full h-full items-center">
          <button className="self-end p-3 m-4" onClick={toggleOpen}>
            <FontAwesomeIcon className="text-5xl" icon={faXmark} />
          </button>
          <NavLinks toggle={toggleOpen} />
        </div>
      </div>
    </>
  );
}
