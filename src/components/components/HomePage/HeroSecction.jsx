import styled from "styled-components";
import Button from "../../shared/Button";
import Spots from "./Spots";

const HeroSecction = () => {
  return (
    <Container>
      <h1>Conquiste sua primeira vaga Tech</h1>
      <p>Todas nossas vagas...</p>
      <ul>
        <li>Não exigem experiência prévia 👶</li>
        <li>São na área de ternologia 💻</li>
        <li>Exigem no máximo cinco tecnologias ⬇️ 5️⃣</li>
      </ul>
      <div className="button-group">
        <Button text="buscar vagas" />
        <Button text="criar conta" transparent={true} />
      </div>
      <Spots />
    </Container>
  );
};

const Container = styled.main`
  padding: 66px;
  h1 {
    font-style: normal;
    font-weight: 800;
    font-size: 50px;
    line-height: 61px;
    color: #e9e9e9;
    text-shadow: 5px 6px 0px #202020;
    width: 548px;
  }
  p,
  ul {
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 26px;
    color: #e9e9e9;
    width: 390px;
    margin-top: 12px;
  }

  ul {
    margin-left: 15px;
  }

  .button-group {
    margin-top: 44px;
    display: flex;
    gap: 22px;
  }
`;

export default HeroSecction;
