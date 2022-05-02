import styled from "styled-components";

const Avatar = ({ size = "18px", src }) => {
  return <Image src={src} size={size} />;
};

const Image = styled.img`
  height: ${(props) => props.size};
  border-radius: 50%;
`;

export default Avatar;
