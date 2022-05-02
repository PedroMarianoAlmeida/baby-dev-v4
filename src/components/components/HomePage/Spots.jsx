import styled from "styled-components";
import Avatar from "../../shared/Avatar";

const Spots = () => {
  return (
    <Container>
      <Avatar size="150px" src={"images/person1.png"} />
      <Avatar size="150px" src={"images/person2.png"} />
      <Avatar size="150px" src={"images/person3.png"} />
      <Circunference color={"#d7225e"} />
      <Circunference color={"#FFEC43"} />
      <Circunference color={"#FFEC43"} />
      <BigCircle />
      <BigCircle />
      <SmallCircle />
    </Container>
  );
};

const Container = styled.div``;
const Circunference = styled.div`
  width: 150px;
  height: 150px;
  border: 1px solid ${(props) => props.color};
  box-sizing: border-box;
  border-radius: 300px;
`;
const BigCircle = styled.div`
  width: 25px;
  height: 25px;
  background: #d7225e;
  border-radius: 75px;
`;

const SmallCircle = styled.div`
  width: 14px;
  height: 14px;
  background: #ffec43;
  border-radius: 75px;
`;
export default Spots;
