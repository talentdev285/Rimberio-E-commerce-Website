// products data import
import { NewProductsData } from "../../assets/data/data";

import { Link } from "react-router-dom";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

export default function NewProducts() {
  return (
    <section>
      <div>
        <div className="NewProducts-container">
          <div
            style={{
              boxSizing: "border-box",
              display: "flex",
              alignItems: "center",
              width: "100%",
              padding: "2rem 4rem",
            }}
          >
            <h1 style={{ margin: 0 }}>New Products</h1>
            <hr
              style={{
                flex: 1,
                margin: "0 10rem 0 4rem",
                border: 0,
                borderTop: "3px dotted #f2f2f2",
              }}
            />
            <Link to="/all-new-products" style={{ marginLeft: "auto" }}>
              View All
            </Link>
          </div>
          <div className="catalog">
            <>
              <Swiper
                slidesPerView={5}
                spaceBetween={0}
                centeredSlides={true}
                className="mySwiper"
              >
                {NewProductsData.map((item) => (
                  <SwiperSlide key={item.id}>
                    <Link
                      style={{ textDecoration: "none", color: "initial" }}
                      to={item.path}
                    >
                      <div className="new-product">
                        <img
                          src={item.img}
                          alt={item.title}
                          style={{ width: "90%" }}
                        />
                        <p>{item.title}</p>
                      </div>
                    </Link>
                  </SwiperSlide>
                ))}
              </Swiper>
            </>
          </div>
        </div>
      </div>
    </section>
  );
}
