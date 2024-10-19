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
      <div className="hidden sticky top-0 sm:flex flex-col items-center">
        <div className="relative w-full flex justify-between">
          <LogoLink />
          <NavLinks toggle={handleDrawerToggle} />
        </div>
      </div>
      <div className="sm:hidden sticky top-0 flex flex-row justify-between items-center my-4 relative">
        <LogoLink />
        <MobileDrawer isOpen={isDrawerOpen} toggleOpen={handleDrawerToggle} />
      </div>
    </>
  );
}
