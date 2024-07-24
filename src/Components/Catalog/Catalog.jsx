// product data imported
import { catelogProduct } from "../../assets/data/data";
// images imported
import Hero5 from "../../assets/common/hero4.jpg";
// icon imported
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

import { Link } from "react-router-dom";

export default function Catalog() {
  return (
    <section>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "2rem",
          boxSizing: "border-box",
          background: "white",
          width: "100%",
          padding: "2rem 4rem",
        }}
      >
        <div className="catalog">
          {catelogProduct.map((item) => (
            <div className="catalog-product" key={item.id}>
              <Link
                to={item.path}
                style={{ textDecoration: "none", color: "initial" }}
              >
                <img src={item.img} alt={item.title} />
                <h3>{item.title}</h3>
              </Link>
            </div>
          ))}
        </div>

        <div className="banner">
          <div
            style={{
              backgroundImage: `url(${Hero5})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "1rem",
            }}
          >
            <div className="left">
              <h2>Made In America Urns</h2>
              <p>
                Solid wood urns made with the highest level of craftsmanship
              </p>
              <button
                className="herobtn"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  border: "none",
                  padding: ".8rem 1.2rem",
                  borderRadius: "5px",
                }}
              >
                <Link
                  style={{
                    textDecoration: "none",
                    color: "white",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "15px",
                  }}
                  to="/urns"
                >
                  View Urns
                  <MdOutlineKeyboardArrowRight style={{ fontSize: "20px" }} />
                </Link>
              </button>
            </div>
            <div className="right">
              <img
                src="https://d16nepuje7oi2f.cloudfront.net/static/version1711868371/frontend/upd/updurns/en_US/images/prom_item01.png"
                alt="woods"
              />
            </div>
          </div>
          <div
            style={{
              backgroundImage: `url(${Hero5})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "1rem",
            }}
          >
            <div className="left">
              <h2>UPD Urn Store</h2>
              <p style={{ padding: "0 4rem 0 0 " }}>
                A retail cremation urn and jewelry storefor funeral homes.
                Expand your cremationurn selection and offer the Urn Store to
                your families.
              </p>
              <button
                className="herobtn"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  border: "none",
                  padding: ".8rem 1.2rem",
                  borderRadius: "5px",
                }}
              >
                <Link
                  style={{
                    textDecoration: "none",
                    color: "white",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "15px",
                  }}
                  to="/store3"
                >
                  Ream More
                  <MdOutlineKeyboardArrowRight style={{ fontSize: "20px" }} />
                </Link>
              </button>
            </div>
            <div className="right">
              <img
                src="https://d16nepuje7oi2f.cloudfront.net/static/version1711868371/frontend/upd/updurns/en_US/images/prom_item02.png"
                alt="store"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
