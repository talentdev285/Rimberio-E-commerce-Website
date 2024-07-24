// important pictures
import girlPicture1 from "../../assets/common/girl.png";
// import girlPicture2 from "../../assets/common/girl2.png";
// import girlPicture3 from "../../assets/common/girl3.png";

// required icon import
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

// picture imported
const Girl1 = (
  <img style={{ height: "400px" }} src={girlPicture1} alt="ceo picture" />
);

// const Girl2 = (
//   <img style={{ height: "400px" }} src={girlPicture2} alt="ceo picture" />
// );

// const Girl3 = (
//   <img style={{ height: "400px" }} src={girlPicture3} alt="ceo picture" />
// );
const Content = (
  <div>
    <div>
      <p style={{ fontSize: "12px", lineHeight: "20px" }}>
        The Best Cremation Productsand Customer Experiencefor Cremation
        Providers.
      </p>
    </div>
    <div>
      <h1
        style={{
          width: "70%",
          fontSize: "36px",
          color: "#75231c",
          fontWeight: "800",
        }}
      >
        Cremation Urns, Jewelry & Keepsakes
      </h1>
    </div>
    <div>
      <h4 style={{ width: "65%", fontWeight: "400", lineHeight: "20px" }}>
        Are you ready for the best cremationproducts and customer experience?
      </h4>
    </div>
    <div style={{ display: "flex", gap: "3rem" }}>
      <button className=" herobtn  primarybtn ">
        Get Funeral Director Access
        <MdOutlineKeyboardArrowRight />
      </button>
      <button className="primarybtn herobtn2">Brass Urns</button>
    </div>
  </div>
);

export default function App() {
  return (
    <div>
      <div className="heroContainer">
        <div style={{ width: "50%" }}>{Girl1}</div>
        <div style={{ width: "50%" }}>{Content}</div>
      </div>

      {/* <div className="heroContainer two">
        <div style={{ width: "50%" }}>{Girl2}</div>
        <div style={{ width: "50%" }}>{Content}</div>
      </div>

      <div className="heroContainer">
        <div style={{ width: "50%" }}>{Girl3}</div>
        <div style={{ width: "50%" }}>{Content}</div>
      </div> */}
    </div>
  );
}
