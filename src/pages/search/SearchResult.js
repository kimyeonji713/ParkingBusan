import { useEffect, useState } from "react";
import { Loading } from "../../components/Loading";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  padding: 10px;
  h2 {
    font-size: 20px;
    font-weight: 400;
    opacity: 0.7;
  }
`;
const ResultBox = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  row-gap: 30px;
  column-gap: 15px;
`;
const Wrap = styled.div``;
const ConWrap = styled.div``;
const AddrText = styled.div``;
const Con = styled.div``;
const PayText = styled.div``;

export const SearchResult = ({ searchData, keyData, isLoading }) => {
  const [favorData, setFavorData] = useState([]);

  console.log(searchData);
  useEffect(() => {
    const saveFavor = JSON.parse(localStorage.getItem("favor")) || [];
    setFavorData(saveFavor);
  }, []);
  return (
    <Container>
      <h2>"{keyData}" 검색 결과 입니다.</h2>

      <ResultBox>
        {isLoading ? (
          <Loading />
        ) : (
          <>
            {searchData.map((data) => {
              const isOnLike = favorData.some((item) => item.id === data.id);
              return (
                <Wrap>
                  <Link to={`detail/${data.id}`}>
                    <ConWrap>
                      <h3>{data.pkNam}</h3>
                      {isOnLike ? <FaHeart /> : <FaRegHeart />}
                    </ConWrap>

                    {data.jibunAddr === "-" || data.jibunAddr === "" ? (
                      <AddrText>부산광역시 {data.doroAddr}</AddrText>
                    ) : (
                      <AddrText>부산광역시 {data.jibunAddr}</AddrText>
                    )}

                    {data.tenMin !== "-" ? (
                      <Con>
                        <PayText>
                          {data.pkBascTime}분 당 {data.tenMin}원
                        </PayText>
                      </Con>
                    ) : (
                      <Con>
                        <PayText>
                          {data.pkBascTime}분 당 {data.tenMin}원
                        </PayText>
                      </Con>
                    )}
                  </Link>
                </Wrap>
              );
            })}
          </>
        )}
      </ResultBox>
    </Container>
  );
};
