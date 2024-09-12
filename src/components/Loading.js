import { FaCarSide } from "react-icons/fa";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  margin: 100px auto;
`;
const Text = styled.div``;
const Icon = styled.div``;
const BigCircle = styled.div``;
const SmallCircle = styled.div``;

export const Loading = () => {
  return (
    <Container>
      <Text>위치를 불러오고 있어요!</Text>
      <Icon>
        <FaCarSide />
        <BigCircle />
        <SmallCircle />
      </Icon>
    </Container>
  );
};
