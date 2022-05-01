import styled from "styled-components";
import Button from "../../shared/Button";

const HeroSecction = () => {
  return (
    <Container>
      <h1>Lörem ipsum dogon antins även debelt.</h1>
      <p>
        Lörem ipsum laska nöbäpregt. Byrat titrebelt. Hemin samlarsyndrom och
        antisk reng. Makroning gåsamma plant medan egogt, som bengen.
      </p>
      <Button text="buscar vagas" />
      <Button text="criar conta" transparent={true} />
    </Container>
  );
};

const Container = styled.main`
  padding: 66px;
  h1 {
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 800;
    font-size: 50px;
    line-height: 61px;
    color: #e9e9e9;
    text-shadow: 5px 6px 0px #202020;
    width: 548px;
  }
  p {
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 26px;
    color: #e9e9e9;
    width: 390px;
    margin-top: 12px;
  }
`;

export default HeroSecction;
