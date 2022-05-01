import styled from "styled-components";

const Button = ({ text, transparent = false }) => {
  return <Container transparent={transparent}>{text}</Container>;
};

const Container = styled.button`
  padding: 14px 12px 13px 12px;
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 15px;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  color: #e9e9e9;
  border-radius: 5px;
  background: ${(props) => props.transparent ? "transparent" :"#D7225E" };
  border-color: ${(props) => props.transparent ? "#E9E9E9" : "transparent" };
`;

export default Button;
