import { useEffect, useState } from "react";
import { allParking } from "../../api";
import { Loading } from "../../components/Loading";
import { PageTitle } from "../../components/PageTitle";
import { KakaoMap } from "../../components/KakaoMap";
import styled from "styled-components";
import { size } from "../../GlobalStyled";
import { Header } from "../../components/Header";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  margin: 0 auto;
  @media screen and (max-width: ${size.size_1024};) {
    width: 100%;
  }

  @media screen and (max-width: ${size.size_768};) {
    width: 100%;
  }

  @media screen and (max-width: ${size.size_435};) {
    width: 100%;
  }

  @media screen and (max-width: ${size.size_368};) {
    width: 100%;
  }
`;

export const Home = ({ onMapLoad }) => {
  const [parkAllData, setParkAllData] = useState();
  const [isLoading, setIsLoading] = useState(true);

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
        setParkAllData(item);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  console.log(parkAllData);
  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <PageTitle title={"Home"} />
          <Container>
            <KakaoMap onMapLoad={onMapLoad} parkAllData={parkAllData} />
          </Container>
        </>
      )}
    </>
  );
};
