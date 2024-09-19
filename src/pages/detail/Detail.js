import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { allParking } from "../../api";
import { Loading } from "../../components/Loading";
import { PageTitle } from "../../components/PageTitle";

export const Detail = () => {
  const [detailData, setDetailData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [isOnStar, setIsOnStar] = useState(false);
  const { id } = useParams;

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
  }, [id, detailData.id]);

  console.log(detailData);

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
        </>
      )}
    </>
  );
};
