import styled from "styled-components";
import { colors } from "../../GlobalStyled";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Loading } from "../../components/Loading";
import { allParking } from "../../api";
import { FiSearch } from "react-icons/fi";
import { ErrorMessage } from "../../components/ErrorMessage";

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

const Form = styled.form``;

export const Search = () => {
  const [searchData, setSearchData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  useEffect(() => {
    (async () => {
      try {
        const {
          response: {
            body: {
              items: { item },
            },
          },
        } = await allParking();
        setSearchData(item);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  const nullKeyword = watch("keyword");

  const onSearchResult = (data) => {
    const { keyword } = data;
  };
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
      {!isLoading ? (
        <>
          {searchData?.length === 0 && nullKeyword && (
            <div>일치하는 검색 결과가 없습니다.</div>
          )}
        </>
      ) : (
        <div>search</div>
      )}
    </Container>
  );
};
