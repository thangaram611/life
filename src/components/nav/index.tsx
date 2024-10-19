"use client";

import { useCallback, useState } from "react";
import LogoLink from "./LogoLink";
import NavLinks from "./NavLinks";
import MobileDrawer from "./MobileDrawer";
import ThemeSwitch from "../theme_switch";

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
          <div className="flex justify-between items-center space-x-6 mr-4">
            <ThemeSwitch />
            <NavLinks toggle={handleDrawerToggle} />
          </div>
        </div>
        <div className="sm:hidden flex justify-between items-center">
          <LogoLink />
          <div className="flex justify-between items-center space-x-6 mr-2">
            <ThemeSwitch />
            <MobileDrawer
              isOpen={isDrawerOpen}
              toggleOpen={handleDrawerToggle}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
