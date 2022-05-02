import styled from "styled-components";
import Avatar from "../../shared/Avatar";

const Spots = () => {
  return (
    <Container>
      <Avatar size="150px" src={"images/person1.png"} />
      <Avatar size="150px" src={"images/person2.png"} />
      <Avatar size="150px" src={"images/person3.png"} />
      
    </Container>
  );
};

const Container = styled.div``;

export default Spots;
