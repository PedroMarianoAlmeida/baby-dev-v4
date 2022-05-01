import styled from "styled-components";
import LogoWrapper from "./Logo";
import Menu from "./Menu";

const HeaderWrapper = () => {
  return (
    <Header>
      <LogoWrapper />
      <Menu />
    </Header>
  );
};

const Header = styled.header`
  height: 54px;
  background: #210037;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 44px;

`;

export default HeaderWrapper;
