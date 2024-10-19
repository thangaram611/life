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
    <div className="sticky top-0 z-10 border-b-[0.1px] w-full">
      <div className="backdrop-blur">
        <div className="hidden sm:flex justify-between items-center">
          <LogoLink />
          <NavLinks toggle={handleDrawerToggle} />
        </div>
        <div className="sm:hidden flex justify-between items-center">
          <LogoLink />
          <MobileDrawer isOpen={isDrawerOpen} toggleOpen={handleDrawerToggle} />
        </div>
      </div>
    </div>
  );
}
