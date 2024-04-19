import { Link, NavLink } from "react-router-dom";
import { LuUser2 } from "react-icons/lu";
import { BsCart } from "react-icons/bs";

import Account from "../Account";
import { useState, useEffect } from "react"; // Import useEffect

import { useSelector } from "react-redux";

const Header = (
  <header>
    <ul>
      <NavLink to="/cremation-urns">Cremation Urns</NavLink>
      <NavLink to="/fingerprint-jewelry">Jewelry & Leepsakes</NavLink>
      <NavLink to="/jewelry">Fingerprint Jewelry</NavLink>
      <NavLink to="/pet-urns">Pet Urns</NavLink>
      <NavLink to="/remembrance-items">Remembrance Items</NavLink>
    </ul>
  </header>
);

export default function MenuItem() {
  const [show, setShow] = useState(false);

  const items = useSelector((state) => state.cart);
  // const totalPrice = items.reduce((total, item) => total + item.price, 0);

  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const newTotalPrice = items.reduce((total, item) => total + item.price, 0);
    setTotalPrice(newTotalPrice); // Set total price as a number
  }, [items]);

  return (
    <section>
      <div style={{ display: "flex", alignItems: "center", gap: "27rem" }}>
        <div>{Header}</div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "2.5rem",
          }}
        >
          <div>
            <Link
              onClick={() => setShow(!show)}
              style={{
                display: "flex",
                gap: "5px",
                fontSize: "15px",
                textDecoration: "none",
                color: "#727272",
                position: "relative",
              }}
            >
              <LuUser2 style={{ fontSize: "18px", color: "#a2a2a2" }} />
              My Account
            </Link>
            {show ? <Account /> : null}
          </div>
          <div
            style={{
              display: "flex",
              gap: "15px",
              fontSize: "15px",
              textDecoration: "none",
              fontWeight: "600",
              position: "relative",
            }}
          >
            <p
              style={{
                position: "absolute",
                left: "15px",
                marginTop: "0px",
                color: "red",
                fontWeight: "400",
              }}
            >
              {items.length}
            </p>

            <Link
              to="/added-items"
              style={{
                justifyContent: "center",
                alignItems: "center",
                display: "flex",
                position: "relative",
              }}
            >
              <BsCart
                style={{
                  fontSize: "18px",
                  color: "#a2a2a2",
                  position: "relative",
                }}
              />
            </Link>

            {/* {additems ? <AddCartItem /> : null} */}

            <p>${totalPrice}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
