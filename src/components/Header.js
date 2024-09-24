import styled from "styled-components";
import { colors, size } from "../GlobalStyled";
import { Link } from "react-router-dom";
import { routes } from "../routes";
import { IoSearch } from "react-icons/io5";

const Container = styled.div`
  width: 350px;
  height: 40px;
  border-radius: 20px;
  position: fixed;
  top: 50px;
  left: 47%;
  transform: translateX(-50%);
  z-index: 10;
  background-color: rgba(255, 255, 255, 0.9);
  display: none;
  a {
    margin-top: 12px;
    text-decoration: none;
    display: flex;
    justify-content: center;
    align-items: center;
    .icon {
      color: ${colors.point};
      font-size: 16px;
      font-weight: 700;
      position: absolute;
      top: 12px;
      right: 20px;
    }
  }

  @media screen and (max-width: ${size.size_1024};) {
    display: none;
  }

  @media screen and (max-width: ${size.size_768};) {
    display: none;
  }

  @media screen and (max-width: ${size.size_435};) {
    display: block;
  }

  @media screen and (max-width: ${size.size_368};) {
    display: block;
  }
`;
const Text = styled.div`
  font-size: 16px;
  font-weight: 700;
  color: ${colors.fontGray_2};
`;

export const Header = () => {
  return (
    <Container>
      <Link to={routes.search}>
        <Text>검색을 원하시나요?</Text>
        <IoSearch className="icon" />
      </Link>
    </Container>
  );
};
