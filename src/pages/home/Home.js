import { useEffect, useState } from "react";
import { allParking } from "../../api";
import { Loading } from "../../components/Loading";
import { PageTitle } from "../../components/PageTitle";
import { KakaoMap } from "../../components/KakaoMap";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  margin: 0 auto;
`;

export const Home = ({ onMapLoad }) => {
  const [allData, setAllData] = useState();
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
        setAllData(item);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  // console.log(allData);
  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <PageTitle title={"Home"} />

          <Container>
            <KakaoMap onMapLoad={onMapLoad} allData={allData} />
          </Container>
        </>
      )}
    </>
  );
};
