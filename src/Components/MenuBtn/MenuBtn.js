import { MobileMenuBtn, MenuBtnIcon } from "./MenuBtn.styled";

const MenuBtn = ({ handleOpenMenu }) => {
  return (
    <>
      <MobileMenuBtn type="button" onClick={handleOpenMenu}>
        <MenuBtnIcon />
      </MobileMenuBtn>
    </>
  );
};

export default MenuBtn;
