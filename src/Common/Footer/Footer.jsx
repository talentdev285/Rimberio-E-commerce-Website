import { Link } from "react-router-dom";
import { PiCopyrightLight } from "react-icons/pi";

export default function Footer() {
  return (
    <section>
      <div>
        <div className="footer-container">
          <div className="footer-child">
            <Link to="/">
              <img src="/logo (1).png" alt="remmemberio" width="150px" />
            </Link>
            <p style={{ margin: "0" }}>
              The Best Cremation Productsand <br />
              Customer Experiencefor <br />
              Cremation Providers.
            </p>
          </div>
          <div className="footer-child">
            <span>About</span>
            <Link
              style={{ textDecoration: "none", color: "#5c5c5c" }}
              to="/contact"
            >
              Contact us
            </Link>
            <Link
              style={{ textDecoration: "none", color: "#5c5c5c" }}
              to="/privacy"
            >
              Privacy Policy
            </Link>
            <Link
              style={{ textDecoration: "none", color: "#5c5c5c" }}
              to="/returns"
            >
              Returns Policy
            </Link>
          </div>
          <div className="footer-child">
            <span>Account</span>
            <Link
              style={{ textDecoration: "none", color: "#5c5c5c" }}
              to="/my-account"
            >
              My Account
            </Link>
            <Link
              style={{ textDecoration: "none", color: "#5c5c5c" }}
              to="/shopping-cart"
            >
              Shopping Cart
            </Link>
            <Link
              style={{ textDecoration: "none", color: "#5c5c5c" }}
              to="/checkout"
            >
              Checkout
            </Link>
          </div>
          <div className="footer-child" style={{ marginTop: "50px" }}>
            <span style={{ marginBottom: "0px" }}>Address</span>
            <p style={{ marginBottom: "5px" }}>
              UPD Urns2926 Congressman <br />
              LaneDallas, TX 75220
            </p>

            <p>
              <span style={{ fontSize: "12px" }}>(888) 215-2885</span>
              <br /> Mon-Fri 8:30am - 6pm CST
            </p>
          </div>
        </div>
      </div>

      <div
        style={{
          background: "#363636",
          justifyContent: "center",
          alignItems: "center",
          height: "40px",
          display: "flex",
        }}
      >
        <p style={{ color: "white", fontSize: "14px", alignItems: "center" }}>
          <PiCopyrightLight />
          &nbsp; 2023. All Rights Reserved.&nbsp;
          <Link style={{ color: "white" }} to="/privacy">
            Privacy Policy
          </Link>
          &nbsp;& Copyright Policy.
          <Link
            style={{ color: "white", textDecoration: "none" }}
            to="/term&conditions"
          >
            &nbsp; Terms and Conditions.
          </Link>
        </p>
      </div>
    </section>
  );
}
