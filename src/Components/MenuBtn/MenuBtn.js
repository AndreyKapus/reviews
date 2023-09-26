import { MobileMenuBtn } from "./MenuBtn.styled";
import { AiOutlineCaretRight, AiFillCaretLeft } from "react-icons/ai";

const MenuBtn = ({ handleOpenMenu, isOpen }) => {
  return (
    <>
      <MobileMenuBtn type="button" onClick={handleOpenMenu}>
        {isOpen ? (
          <AiFillCaretLeft color="fff" />
        ) : (
          <AiOutlineCaretRight color="fff" />
        )}
      </MobileMenuBtn>
    </>
  );
};

export default MenuBtn;
