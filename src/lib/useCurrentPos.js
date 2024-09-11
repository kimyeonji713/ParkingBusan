import { useEffect, useState } from "react";

export const useCurrentPos = () => {
  const defaultlat = "35.15826667669885";
  const defaultlon = "129.06000137329102";
  const [lat, setLat] = useState(defaultlat);
  const [lon, setLon] = useState(defaultlon);

  const location = (pos) => {
    const {
      coords: { latitude, longitude },
    } = pos;
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(location);
  }, [lat, lon]);

  return { lat, lon };
};
