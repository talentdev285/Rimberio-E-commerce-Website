import Brand from "../../Components/Brand/Brand";
import Catalog from "../../Components/Catalog/Catalog";
import CremationJewelry from "../../Components/CremationJewelry/CremationJewelry";
import CremationUrns from "../../Components/CremationUrns/CremationUrns";
import Directors from "../../Components/Directors/Directors";
import HeroSlider from "../../Components/Hero/HeroSlider";
import NewProducts from "../../Components/NewProducts/NewProducts";

export default function Home() {
  return (
    <>
      <HeroSlider />
      <Catalog />
      <NewProducts />
      <CremationUrns />
      <CremationJewelry />
      <Directors />
      <Brand />
    </>
  );
}
