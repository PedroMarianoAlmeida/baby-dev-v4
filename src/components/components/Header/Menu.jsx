import styled from "styled-components";
import { useState } from "react";

const MenuWrapper = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <Menu>
      <Hamburguer src="images/menu-hamburguer.svg" />
      <MenuGroup>
        <ul>
          <li>Home</li>
          <li>Busca</li>
          <li>Parceiros</li>
          <li>Contato</li>
        </ul>
      </MenuGroup>
    </Menu>
  );
};

const Menu = styled.div`
  position: relative;
`;

const Hamburguer = styled.img`
  height: 18px;
`;

const MenuGroup = styled.nav`
  padding: 6px 0px;
  background: #e9e9e9;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.31);
  border-radius: 5px;

  position: absolute;
  top: 30px;
`;

export default MenuWrapper;
