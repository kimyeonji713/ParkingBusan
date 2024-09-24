import { FaRegHeart } from "react-icons/fa";
import { FiHome, FiInfo } from "react-icons/fi";
import { IoClose, IoHomeOutline, IoSearch } from "react-icons/io5";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { routes } from "../routes";
import { HiMenuAlt1 } from "react-icons/hi";
import { colors } from "../GlobalStyled";
import { useState } from "react";
import { IoIosMore } from "react-icons/io";

const Container = styled.div`
  width: 80px;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: white;
  z-index: 10;
`;
const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 20px 20px;
  .homeIcon {
    margin-bottom: 20px;
  }
`;
const Con = styled.button`
  all: unset;
  width: 80px;
  height: 80px;
  text-align: center;
  font-size: 25px;
  cursor: pointer;
  color: ${colors.point};

  .active {
    background-color: ${colors.point};
  }
  a {
    color: ${colors.point};
  }
`;

const InfoWrap = styled.div`
  width: 330px;
  height: 150px;
  background-color: #fff;
  border-radius: 20px;
  position: absolute;
  bottom: 400px;
  left: 16%;
  padding: 20px;
  display: ${(props) => props.$showAct};
  color: ${colors.fontGray_2};
`;
const Info = styled.div`
  text-align: center;
  color: ${colors.point};
  font-weight: 700;
  margin-top: 35px;
`;
const Git = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${colors.fontGray_2};
  margin-top: -10px;
  a {
    text-decoration: none;
    color: ${colors.fontGray_2};
    margin-left: 5px;
  }
`;

const Close = styled.div`
  position: absolute;
  bottom: 20px;
  right: 20px;
  font-weight: 700;
  color: ${colors.point};
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
    <Container>
      <Wrap>
        <Con className="homeIcon">
          <Link to={routes.home}>
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
          <Info>
            <p>&copy; KimYeonJI 2024</p>
            <Git>
              <p>github: </p>
              <a href="https://github.com/kimyeonji713">
                https://github.com/kimyeonji713
              </a>
            </Git>
          </Info>

          <Close onClick={closeHandler}>닫기</Close>
        </InfoWrap>
      </Wrap>
    </Container>
  );
};

// const Container = styled.div`
//   width: 500px;
//   height: 80px;
//   position: fixed;
//   bottom: 0;
//   left: 50%;
//   transform: translateX(-50%);
//   background-color: white;
//   z-index: 10;
//   border-radius: 20px 20px 0 0;
// `;
// const Wrap = styled.div`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   margin: 25px 20px;
// `;
// const Con = styled.button`
//   all: unset;
//   font-size: 25px;
//   cursor: pointer;
//   color: ${colors.point};

//   a {
//     color: ${colors.point};
//   }

//   .homeIcon {
//     padding: 7px 8px 5px 8px;
//     border-radius: 50%;
//     background-color: ${colors.point};
//     color: #fff;
//   }
// `;

// const InfoWrap = styled.div`
//   width: 330px;
//   height: 150px;
//   background-color: #fff;
//   border-radius: 20px;
//   position: absolute;
//   bottom: 400px;
//   left: 16%;
//   padding: 20px;
//   display: ${(props) => props.$showAct};
//   color: ${colors.fontGray_2};
// `;
// const Info = styled.div`
//   text-align: center;
//   color: ${colors.point};
//   font-weight: 700;
//   margin-top: 35px;
// `;
// const Git = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   color: ${colors.fontGray_2};
//   margin-top: -10px;
//   a {
//     text-decoration: none;
//     color: ${colors.fontGray_2};
//     margin-left: 5px;
//   }
// `;

// const Close = styled.div`
//   position: absolute;
//   bottom: 20px;
//   right: 20px;
//   font-weight: 700;
//   color: ${colors.point};
//   cursor: pointer;
// `;
