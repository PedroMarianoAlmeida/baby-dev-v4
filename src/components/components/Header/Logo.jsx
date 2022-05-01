import styled from "styled-components";

const LogoWrapper = () => {
  return (
    <Logo>
      <span>👶</span>
      <span>💻</span>
    </Logo>
  );
};

const Logo = styled.div`
  display: flex;
  gap: 12px;
`;

export default LogoWrapper;
