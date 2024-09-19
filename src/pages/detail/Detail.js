import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { allParking } from "../../api";
import { Loading } from "../../components/Loading";
import { PageTitle } from "../../components/PageTitle";
import { DetailAdd } from "./components/DetailAdd";
import { Map } from "./components/Map";
import styled from "styled-components";

const Container = styled.div``;
const Wrap = styled.div``;
const ConWrap = styled.div``;
const Con = styled.div``;
const Title = styled.div``;
const Close = styled.div``;
const ClickFavor = styled.div``;
const Address = styled.div``;
const LocalWrap = styled.div``;
const Local = styled.div``;

export const Detail = () => {
  const [detailData, setDetailData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [isOnStar, setIsOnStar] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    (async () => {
      try {
        const parkingAllData = await allParking();
        const allgetData = parkingAllData?.response?.body?.items?.item;
        const dataAddUniqueIds = allgetData.map((item, index) => ({
          ...item,
          id: index,
        }));

        const findData = dataAddUniqueIds.find(
          (item) => item.id === Number(id)
        );

        const storagedData = JSON.parse(localStorage.getItem("favor")) || [];
        const isOnOff = storagedData.some((item) => item.id === detailData.id);

        setDetailData(findData);
        setIsOnStar(isOnOff);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [id, detailData?.id]);

  // console.log(detailData);

  const handleFavor = () => {
    const favorData = JSON.parse(localStorage.getItem("favor")) || [];

    const isAlreadyData = favorData.some((item) => item.id === detailData.id);

    if (!isAlreadyData) {
      const addFavorData = [...favorData, detailData];

      localStorage.setItem("favor", JSON.stringify(addFavorData));
      setIsOnStar(true);
    }
  };
  const handleCancel = () => {
    const favorData = JSON.parse(localStorage.getItem("favor")) || [];

    const updateCancelData = favorData.filter(
      (item) => item.id !== detailData.id
    );

    localStorage.setItem("favor", JSON.stringify(updateCancelData));
    setIsOnStar(false);
  };
  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <PageTitle title={"디테일"} />
          <Container>
            <Wrap>
              <ConWrap>
                <Con>
                  <Title></Title>
                  {isOnStar ? (
                    <Close onClick={handleCancel} />
                  ) : (
                    <ClickFavor onClick={handleFavor} />
                  )}
                </Con>

                {detailData?.jibunAddr === "-" ||
                detailData?.jibunAddr === "" ? (
                  <Address>부산광역시 {detailData?.doroAddr}</Address>
                ) : (
                  <Address>부산광역시 {detailData?.jibunAddrAddr}</Address>
                )}
              </ConWrap>

              <DetailAdd detailData={detailData} />

              {detailData?.xCdnt !== "-" && detailData?.yCdnt !== "-" && (
                <LocalWrap>
                  <Local>위치정보</Local>
                  <Map findData={detailData} />
                </LocalWrap>
              )}
            </Wrap>
          </Container>
        </>
      )}
    </>
  );
};
