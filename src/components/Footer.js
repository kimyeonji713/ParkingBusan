import { FaRegHeart } from "react-icons/fa";
import { FiHome, FiInfo } from "react-icons/fi";
import { IoSearch } from "react-icons/io5";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { routes } from "../routes";
import { colors, size } from "../GlobalStyled";
import { useState } from "react";
import { IoIosMore } from "react-icons/io";

const Container = styled.div`
  width: 80px;
  height: 100%;
  position: fixed;
  bottom: 0;
  left: 0;
  background-color: white;
  z-index: 10;

  @media screen and (max-width: ${size.size_500}) {
    width: 100%;
    height: 80px;
    position: fixed;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    background-color: white;
    z-index: 10;
    border-radius: 20px 20px 0 0;
  }
  @media screen and (max-width: ${size.size_435}) {
    width: 100%;
    height: 80px;
    position: fixed;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    background-color: white;
    z-index: 10;
    border-radius: 20px 20px 0 0;
  }
  @media screen and (max-width: ${size.size_368}) {
    width: 100%;
    height: 80px;
    position: fixed;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    background-color: white;
    z-index: 10;
    border-radius: 20px 20px 0 0;
  }
`;
const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 20px 20px;
  @media screen and (max-width: ${size.size_500}) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin: 0px 20px;
  }
  @media screen and (max-width: ${size.size_435}) {
    margin: 0px 10px;
  }
  @media screen and (max-width: ${size.size_368}) {
    margin: 0;
  }
`;
const Con = styled.button`
  all: unset;
  width: 80px;
  height: 80px;
  text-align: center;
  font-size: 25px;
  cursor: pointer;
  color: ${colors.pointGray};

  .homeIcon {
    margin-bottom: 20px;
    color: ${colors.point};
  }
  a {
    color: ${colors.pointGray};
  }

  @media screen and (max-width: ${size.size_500}) {
    all: unset;
    width: 80px;
    height: 80px;
    text-align: center;
    font-size: 25px;
    cursor: pointer;
    color: ${colors.pointGray};

    .homeIcon {
      margin-bottom: 0px;
      color: ${colors.point};
    }
    a {
      color: ${colors.pointGray};
    }
  }
  @media screen and (max-width: ${size.size_435}) {
    font-size: 24px;
  }
  @media screen and (max-width: ${size.size_368}) {
    font-size: 24px;
  }
`;

const InfoWrap = styled.div`
  width: 330px;
  height: 150px;
  background-color: ${colors.point};
  border-radius: 20px;
  position: absolute;
  top: 39%;
  left: 178%;
  padding: 20px;
  display: ${(props) => props.$showAct};
  color: ${colors.fontGray_2};

  @media screen and (max-width: ${size.size_500}) {
    width: 330px;
    height: 150px;
    background-color: ${colors.point};
    border-radius: 20px;
    position: absolute;
    top: -650%;
    left: 16%;
    padding: 20px;
    display: ${(props) => props.$showAct};
    color: ${colors.fontGray_2};
  }
  @media screen and (max-width: ${size.size_435}) {
    width: 330px;
    height: 150px;
    background-color: ${colors.point};
    border-radius: 20px;
    position: absolute;
    top: -650%;
    left: 16%;
    padding: 20px;
    display: ${(props) => props.$showAct};
    color: ${colors.fontGray_2};
  }

  @media screen and (max-width: ${size.size_368}) {
    width: 330px;
    height: 150px;
    background-color: ${colors.point};
    border-radius: 20px;
    position: absolute;
    top: -650%;
    left: 16%;
    padding: 20px;
    display: ${(props) => props.$showAct};
    color: ${colors.fontGray_2};
  }
`;

const Box = styled.div`
  width: 20px;
  height: 20px;
  background-color: ${colors.point};
  position: absolute;
  bottom: 7px;
  left: -4px;
  transform: rotate(35deg);
  display: block;
  @media screen and (max-width: ${size.size_500}) {
    width: 20px;
    height: 20px;
    background-color: ${colors.point};
    position: absolute;
    bottom: 7px;
    left: -4px;
    transform: rotate(35deg);
    display: none;
  }
  @media screen and (max-width: ${size.size_435}) {
    display: none;
  }
  @media screen and (max-width: ${size.size_368}) {
    display: none;
  }
`;
const Info = styled.div`
  text-align: center;
  color: #fff;
  font-weight: 700;
  margin-top: 10px;
  h4 {
    font-size: 18px;
    font-weight: 900;
    margin-bottom: 10px;
  }
  p {
    margin-bottom: 10px;
  }
  a {
    text-decoration: none;
    color: #fff;
    margin-left: 5px;
  }
`;

const Close = styled.div`
  position: absolute;
  bottom: 20px;
  right: 20px;
  font-weight: 700;
  color: #fff;
  cursor: pointer;
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
    <Container onClick={closeHandler}>
      <Wrap>
        <Con>
          <Link to={routes.home} className="homeIcon">
            <FiHome />
          </Link>
        </Con>
        <Con>
          <Link to={routes.search}>
            <IoSearch />
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
        <Con>
          <IoIosMore />
        </Con>

        <InfoWrap $showAct={show ? "block" : "none"}>
          <Box />
          <Info>
            <h4>PARKING_BUSAN</h4>
            <p>&copy; KimYeonJI 2024</p>
            <a href="https://github.com/kimyeonji713">
              https://github.com/kimyeonji713
            </a>
          </Info>

          <Close onClick={closeHandler}>닫기</Close>
        </InfoWrap>
      </Wrap>
    </Container>
  );
};
