import { HelmetProvider } from "react-helmet-async";
import { Header } from "./components/Header";
import { HashRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/home/Home";
import { Detail } from "./pages/detail/Detail";
import { Search } from "./pages/search/Search";
import { routes } from "./routes";
import { Favorite } from "./pages/favorite/Favorite";
import { Footer } from "./components/Footer";
import { useCallback, useState } from "react";
import { useCurrentPos } from "./lib/useCurrentPos";

const { kakao } = window;

const Router = () => {
  const [map, setMap] = useState(null);
  const { lat, lon } = useCurrentPos();

  const MapHandler = useCallback((loadedMap) => {
    setMap(loadedMap);
  }, []);

  const panTo = () => {
    const moveLatLon = new kakao.maps.LatLng(lat, lon);

    map?.setLevel(3);
    map?.panTo(moveLatLon);
  };
  return (
    <HelmetProvider>
      <Header />
      <HashRouter>
        <Routes>
          <Route path={routes.home} element={<Home onMapLoad={MapHandler} />} />
          <Route path={routes.detail} element={<Detail />} />
          <Route path={routes.search} element={<Search />} />
          <Route path={routes.favor} element={<Favorite />} />
        </Routes>
      </HashRouter>
      <Footer onPanTo={panTo} />
    </HelmetProvider>
  );
};

export default Router;
