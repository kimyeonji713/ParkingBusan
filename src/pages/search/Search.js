import styled from "styled-components";
import { colors } from "../../GlobalStyled";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Loading } from "../../components/Loading";
import { allParking } from "../../api";
import { FiSearch } from "react-icons/fi";
import { ErrorMessage } from "../../components/ErrorMessage";
import { SearchResult } from "./SearchResult";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #f9f9f9;
`;
// const Wrap = styled.div`
//   width: 550px;
//   height: 45px;
//   border-bottom: 2px solid ${colors.point};
//   position: absolute;
//   top: 150px;
//   left: 60%;
//   transform: translateX(-60%);
// `;

const Form = styled.form`
  position: relative;
  input {
    all: unset;
    width: 600px;
    height: 45px;
    border-bottom: 2px solid ${colors.point};
    position: absolute;
    top: 150px;
    left: 55%;
    transform: translateX(-60%);
    color: ${colors.pointGray};
    font-weight: 700;
    padding: 0px 5px;

    &::placeholder {
      color: ${colors.fontGray_2};
      font-weight: 400;
    }
  }
  button {
    all: unset;
    position: absolute;
    top: 165px;
    right: 32%;
    transform: translateX(-60%);
    color: ${colors.fontGray_2};
    cursor: pointer;
  }
`;

export const Search = () => {
  const [searchData, setSearchData] = useState();
  const [searchRD, setSearchRD] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [keyData, setKeyData] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const onSearchResult = async (data) => {
    const { keyword } = data;
    try {
      const {
        response: {
          body: {
            items: { item },
          },
        },
      } = await allParking();

      setSearchData(item);
      const searchResult = searchData.filter(
        (item) =>
          item.pkNam.includes(keyword) ||
          item.jibunAddr.includes(keyword) ||
          item.doroAddr.includes(keyword)
      );
      setSearchRD(searchResult);
      setKeyData(keyword);
      setIsLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  const nullKeyword = watch("keyword");

  return (
    <Container>
      <Form onSubmit={handleSubmit(onSearchResult)}>
        <input
          {...register("keyword", {
            required: "검색 내용을 입력해주세요!",
          })}
          type="text"
          placeholder="찾으시는 곳이 있으신가요?"
        />

        <button>
          <FiSearch />
        </button>

        <ErrorMessage>{errors?.keyword?.message}</ErrorMessage>
      </Form>

      {searchRD?.length === 0 && nullKeyword && (
        <div>일치하는 검색 결과가 없습니다.</div>
      )}

      {searchData?.length > 0 && (
        <SearchResult
          searchRD={searchData}
          keyData={keyData}
          isLoading={isLoading}
        />
      )}
    </Container>
  );
};
