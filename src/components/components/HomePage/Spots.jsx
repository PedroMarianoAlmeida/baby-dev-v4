import styled from "styled-components";
import Avatar from "../../shared/Avatar";

const Spots = () => {
  return (
    <Container>
      <div className="details-wrapper">
        <div className="person1">
          <div style={{ position: "relative" }}>
            <div style={{ zIndex: 2 }}>
              <Avatar size="15vw" src={"images/person1.png"} />
            </div>
            <div className="person-border-1">
              <Circunference color={"#d7225e"} />
            </div>
          </div>
        </div>
        <div className="person2">
          <div style={{ position: "relative" }}>
            <Avatar size="15vw" src={"images/person2.png"} />

            <div className="person-border-2">
              <Circunference color={"#FFEC43"} />
            </div>
          </div>
        </div>
        <div className="person3">
          <div style={{ position: "relative" }}>
            <Avatar size="15vw" src={"images/person3.png"} />
            <div className="person-border-3">
              <Circunference color={"#FFEC43"} />
            </div>
            <div className="big-circle-1">
              <BigCircle />
            </div>
            <div className="big-circle-2">
              <BigCircle />
            </div>
            <div className="small-circle">
              <SmallCircle />
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

const Container = styled.div`
  flex-grow: 1;
  height: 350px;
  margin-left: -150px;
  //background-color: red;
 
  .details-wrapper {
    position: relative;
    height: 100%;
  }
  .person1 {
    position: absolute;
    left: 0;
    top: 135px;
    z-index: 2;    
  }

  .person-border-1 {
    position: absolute;
    top: 1.5vw;
    left: 1.5vw;
    z-index: 1;
  }

  .person2 {
    position: absolute;
    left: 40%;
    top: 19px;
  }

  .person3 {
    position: absolute;
    right: 20px;
    bottom: 0;
  }

  .person-border-2 {
    position: absolute;
    bottom: 2.5vw;
    left: 2.3vw;
    z-index: 1;
  }

  .person-border-3 {
    position: absolute;
    bottom: 2vw;
    left: 1.8vw;
    z-index: 1;
  }

  .big-circle-1 {
    position: absolute;
    bottom: 10px;
    left: -36px;
    z-index: 1;
  }

  .big-circle-2 {
    position: absolute;
    top: -61px;
    right: 5px;
    z-index: 1;
  }

  .small-circle {
    position: absolute;
    top: -83px;
    right: -3px;
    z-index: 1;
  }
`;
const Circunference = styled.div`
  width: 15vw;
  height: 15vw;
  border: 1px solid ${(props) => props.color};
  box-sizing: border-box;
  border-radius: 300px;
`;
const BigCircle = styled.div`
  width: 1.8vw;
  height: 1.8vw;
  background: #d7225e;
  border-radius: 75px;
`;

const SmallCircle = styled.div`
  width: .9vw;
  height: .9vw;
  background: #ffec43;
  border-radius: 75px;
`;
export default Spots;
