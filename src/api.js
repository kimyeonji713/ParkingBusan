// getPblcPrkngInfo?serviceKey=

const fetch = require("node-fetch");

const baseUrl = "http://apis.data.go.kr/6260000/";

const serviceKey =
  "czjc%2FLiXADgQwbo%2BD7wPVIDHrQsrdTly%2FtPY1ISDPgq1b4XfyXD4WryP5J6TNaEsZF9d%2F0%2F10Cto7gia8HcDnA%3D%3D";

const options = "&pageNo=1&numOfRows=10&resultType=json";

const url = (urlName) => {
  return baseUrl + `${urlName}?serviceKey=${serviceKey}&${options}`;
};

export const parking = () =>
  fetch(url("BusanPblcPrkngInfoService/getPblcPrkngInfo")).then((res) =>
    res.json()
  );

export const allParking = () => {
  const allUrl =
    baseUrl + `serviceKey=${serviceKey}&pageNo=1&numOfRows=615&resultType=json`;
  return fetch(allUrl).then((res) => res.json());
};
