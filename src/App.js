import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Common/Header/Header";
import Footer from "./Common/Footer/Footer";
import Home from "./Pages/Home/Home";
import CremationUrns from "./Pages/CremationUrns/CremationUrns";
import FingerprintJewelry from "./Pages/FingerprintJewelry/FingerprintJewelry";
import Jewerly from "./Pages/Jewerly&Leepsakes/Jewerly";
import PetUrns from "./Pages/PetUrns/PetUrns";
import RemembranceItems from "./Pages/RemembranceItems/RemembranceItems";
import MetalUrn from "./SubPage/MetalUrn";
// import SingleProductDetails from "./Components/SingleProductDetails/SingleProductDetails";

import { Provider } from "react-redux";
import reduxStore from "./redux/store/Store";
import AddCartItem from "./Common/AddCartItem";

export default function App() {
  return (
    <>
      <Provider store={reduxStore}>
        <BrowserRouter>
          <Header />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cremation-urns" element={<CremationUrns />} />
            <Route
              path="/fingerprint-jewelry"
              element={<FingerprintJewelry />}
            />
            <Route path="/jewelry" element={<Jewerly />} />
            <Route path="/pet-urns" element={<PetUrns />} />
            <Route path="/remembrance-items" element={<RemembranceItems />} />
            <Route path="/added-items" element={<AddCartItem />} />

            {/* suib-pages */}
            <Route path="/metal-urns" element={<MetalUrn />} />
            {/* <Route
              path="metal-urns/elias-urn"
              element={<SingleProductDetails />}
            /> */}
          </Routes>
          <Footer />
        </BrowserRouter>
      </Provider>
    </>
  );
}
