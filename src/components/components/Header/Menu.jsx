import styled from "styled-components";
import { useState } from "react";

const Menu = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
      <Hamburguer src="images/menu-hamburguer.svg" />
      <MenuGroup>
        <ul></ul>
      </MenuGroup>
    </>
  );
};

const Hamburguer = styled.img`
  height: 18px;
`;

const MenuGroup = styled.nav`
  padding: 6px 0px;
  background: #e9e9e9;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.31);
  border-radius: 5px;
`;

export default Menu;
