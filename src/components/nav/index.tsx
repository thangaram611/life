"use client";

import { useCallback, useState } from "react";
import LogoLink from "./LogoLink";
import NavLinks from "./NavLinks";
import MobileDrawer from "./MobileDrawer";

export default function NavBar() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const handleDrawerToggle = useCallback(() => {
    setIsDrawerOpen(!isDrawerOpen);
  }, [isDrawerOpen]);

  return (
    <>
      <div className="hidden sticky top-0 py-6 sm:flex flex-col justify-center">
        <LogoLink />
        <NavLinks toggle={handleDrawerToggle} />
      </div>
      <div className="sm:hidden sticky top-0 flex flex-row my-4">
        <LogoLink />
        <MobileDrawer isOpen={isDrawerOpen} toggleOpen={handleDrawerToggle} />
      </div>
    </>
  );
}
