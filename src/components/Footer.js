import { FaRegHeart } from "react-icons/fa";
import { FiHome, FiInfo } from "react-icons/fi";
import { IoClose, IoHomeOutline, IoSearch } from "react-icons/io5";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { routes } from "../routes";
import { HiMenuAlt1 } from "react-icons/hi";
import { colors } from "../GlobalStyled";
import { useState } from "react";

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
  margin: 25px 20px;
`;
const Con = styled.button`
  all: unset;
  font-size: 25px;
  cursor: pointer;
  color: ${colors.point};

  a {
    color: ${colors.point};
  }

  .homeIcon {
    padding: 5px 8px;
    border-radius: 50%;
    background-color: ${colors.point};
    color: #fff;
  }
`;

const InfoWrap = styled.div``;
const Close = styled.div``;
const Info = styled.div``;
const Git = styled.div`
  display: ${(props) => props.$showAct};
`;

export const Footer = () => {
  const [show, setShow] = useState(false);

  const openHandler = () => {
    if (!show) {
      setShow(true);
    }
  };

  const closeHandler = () => {
    if (show) {
      setShow(false);
    }
  };

  return (
    <Container>
      <Wrap>
        <Con>
          <HiMenuAlt1 />
        </Con>
        <Con>
          <Link to={routes.search}>
            <IoSearch />
          </Link>
        </Con>
        <Con>
          <Link to={routes.home} className="homeIcon">
            <FiHome />
          </Link>
        </Con>
        <Con>
          <Link to={routes.favor}>
            <FaRegHeart />
          </Link>
        </Con>
        <Con onClick={openHandler}>
          <FiInfo />
        </Con>

        <InfoWrap>
          <Close onClick={closeHandler}>
            <IoClose />
          </Close>
          <Info>
            <p>&copy; KimYeonJI 2024</p>
            <Git $showAct={show ? "block" : "none"}>
              <p>github: </p>
              <a href="https://github.com/kimyeonji713">
                https://github.com/kimyeonji713
              </a>
            </Git>
          </Info>
        </InfoWrap>
      </Wrap>
    </Container>
  );
};
