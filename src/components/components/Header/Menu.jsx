import styled from "styled-components";
import { useState } from "react";

const MenuWrapper = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleMenuClick = () => {
    setShowMenu((prevState) => !prevState);
  };

  return (
    <Menu>
      <Hamburguer src="images/menu-hamburguer.svg" onClick={handleMenuClick} />
      <MenuGroup show={showMenu}>
        <ul>
          <li>Home 🏠 </li>
          <li>Busca 🔍</li>
          <li>Parceiros 🤝</li>
          <li>Contato ✉️</li>
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
  display: ${(props) => (props.show ? "unset" : "none")};

  position: absolute;
  top: 30px;
  right: 0;

  ul {
    list-style: none;
    padding: 22px 0;
    width: 112px;

    li {
      padding: 6px 22px;

      :hover {
        background-color: #d7225e;
      }
    }
  }
`;

export default MenuWrapper;
