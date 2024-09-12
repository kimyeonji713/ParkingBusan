import { FaCarSide } from "react-icons/fa";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 800px;
  position: relative;
`;

const Wrap = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
const Text = styled.div`
  font-size: 18px;
  font-weight: 400;
`;
const Icon = styled.div`
  margin-bottom: 15px;
  font-size: 44px;
  display: flex;
  justify-content: center;
  color: #a73121;
`;

const CircleWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const BigCircle = styled.div`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: lightgray;
  margin-right: 7px;
`;
const SmallCircle = styled.div`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: lightgray;
  margin-right: 7px;
`;

export const Loading = () => {
  return (
    <Container>
      <Wrap>
        <Icon>
          <CircleWrap>
            <SmallCircle />
            <BigCircle />
          </CircleWrap>
          <FaCarSide />
        </Icon>
        <Text>위치를 불러오고 있어요!</Text>
      </Wrap>
    </Container>
  );
};
