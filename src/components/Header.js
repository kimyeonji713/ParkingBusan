import styled from "styled-components";
import { colors } from "../GlobalStyled";

const Container = styled.div`
  width: 200px;
  height: 40px;
  border-radius: 20px;
  position: fixed;
  top: 15px;
  left: 42.5%;
  transform: translateX(-50%);
  z-index: 10;
  background-color: rgba(255, 255, 255, 0.8);
`;
const Text = styled.div`
  text-align: center;
  margin-top: 5px;
  font-size: 20px;
  font-weight: 700;
  color: ${colors.point};
  span {
    color: lightgray;
  }
`;

export const Header = () => {
  return (
    <Container>
      <Text>
        PARKING_ <span>BUSAN</span>
      </Text>
    </Container>
  );
};
