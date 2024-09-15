import { useEffect, useState } from "react";
import { allParking } from "../../api";
import { Loading } from "../../components/Loading";
import { PageTitle } from "../../components/PageTitle";

export const Home = () => {
  const [allData, setAllData] = useState();
  const [isLoading, setIsLoading] = useState(false);

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
        // console.log(item);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  console.log(allData);
  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <PageTitle title={"Home"} />

          <div>home</div>
        </>
      )}
    </>
  );
};
