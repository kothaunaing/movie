import { MenuIcon, XIcon } from "lucide-react";
import React, { useState } from "react";
import ZFlixLogo from "./ZFlixLogo";

import NavLinksMobile from "./NavLinksMobile";

const MenuButton = ({ icon, handleClick }) => {
  return (
    <button
      onClick={handleClick}
      className="hover:bg-white hover:text-black transition-colors p-2 duration-150 rounded-full "
    >
      {icon}
    </button>
  );
};

const MobileMenu = () => {
  const [openSidebar, setOpenSidebar] = useState(false);

  const handleClick = () => {
    setOpenSidebar((prev) => !prev);
  };

  return (
    <div className="md:hidden z-40">
      <MenuButton handleClick={handleClick} icon={<MenuIcon />} />
      {openSidebar && (
        <div className="fixed flex justify-center items-center inset-0 bg-black/60 backdrop-blur-md ">
          <div className="m-1">
            <div className="flex items-center justify-between p-2 absolute top-1 right-2 left-2">
              <ZFlixLogo />
              <MenuButton handleClick={handleClick} icon={<XIcon />} />
            </div>
            <div className="">
              <ul className="space-y-3 ">
                <NavLinksMobile handleClick={handleClick} />
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileMenu;
