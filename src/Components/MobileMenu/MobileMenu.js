import MenuBtn from "../MenuBtn/MenuBtn";
import { Menu } from "./MobileMenu.styled";
import Navigation from "../UserNav/Navigation/Navigation";
import { useState } from "react";

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenMenu = (e) => {
    isOpen ? setIsOpen(false) : setIsOpen(true);
  };

  return (
    <>
      <MenuBtn handleOpenMenu={handleOpenMenu} isOpen={isOpen} />
      {isOpen && (
        <Menu>
          <Navigation setIsOpen={setIsOpen} />
        </Menu>
      )}
    </>
  );
};

export default MobileMenu;
