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
          <li>
            Home <span>🏠</span>{" "}
          </li>
          <li>
            Busca <span>🔍</span>
          </li>
          <li>
            Parceiros <span>🤝</span>
          </li>
          <li>
            Contato <span>✉️</span>
          </li>
          <li className="divider" />
          <li className="login">Login</li>
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
  width: 130px;

  position: absolute;
  top: 30px;
  right: 0;

  ul {
    list-style: none;
    padding: 12px 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;

    li {
      padding: 6px 22px;
      font-style: normal;
      font-weight: 600;
      font-size: 12px;
      line-height: 15px;
      color: #202020;
      cursor: pointer;
      text-align: center;

      span {
        margin-left: 8px;
      }

      :hover {
        background-color: #d7225e;
        color: #e9e9e9;
      }
    }

    .login {
      text-align: right;
    }

    .divider{
        height: 0;
        padding: 0;
        border: 1px solid #CCCACA;
        margin: 8px 0;
    }
  }
`;

export default MenuWrapper;
