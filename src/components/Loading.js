import { FaCarSide } from "react-icons/fa";
import styled, { keyframes } from "styled-components";

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

const textAni = keyframes`
0%{
  opacity: 0;
}

50%{
  opacity: 1;
}
100%{
  opacity: 0;
}
`;

const Text = styled.div`
  font-size: 18px;
  font-weight: 400;
  animation: ${textAni} 2.2s infinite;
`;

const carAni = keyframes`

0%{
  transform: translateY(3px);
}

50%{
  transform: translateY(0px);
}
100%{
  transform: translateY(3px);
}
`;

const circleAni = keyframes`
0%{
  transform: translateY(3px);
  opacity: 0;
}

50%{
  transform: translateY(0px);
  opacity: 1;
}
100%{
  transform: translateY(3px);
  opacity: 0;
}
`;

const Icon = styled.div`
  margin-bottom: 15px;
  font-size: 44px;
  display: flex;
  justify-content: center;
  color: #a73121;
  .car {
    animation: ${carAni} 1.5s infinite;
  }
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
  animation: ${circleAni} 1.5s infinite;
`;
const SmallCircle = styled.div`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: lightgray;
  margin-right: 7px;
  animation: ${circleAni} 2s infinite;
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
          <FaCarSide className="car" />
        </Icon>
        <Text>위치를 불러오고 있어요!</Text>
      </Wrap>
    </Container>
  );
};
