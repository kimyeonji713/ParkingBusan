import { FaRegHeart } from "react-icons/fa";
import { FiInfo } from "react-icons/fi";
import { IoHomeOutline, IoSearch } from "react-icons/io5";
import styled from "styled-components";

const Container = styled.div`
  width: 500px;
  height: 80px;
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  background-color: white;
  z-index: 10;
  border-radius: 20px 20px 0 0;
`;
const Wrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 25px 15px;
`;
const Con = styled.div`
  font-size: 25px;
`;

export const Footer = () => {
  return (
    <Container>
      <Wrap>
        <Con>
          <IoHomeOutline />
        </Con>
        <Con>
          <IoSearch />
        </Con>
        <Con>
          <FaRegHeart />
        </Con>
        <Con>
          <FiInfo />
        </Con>
      </Wrap>
    </Container>
  );
};
