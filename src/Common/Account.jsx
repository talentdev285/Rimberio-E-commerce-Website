import { RiBookmarkLine } from "react-icons/ri";
import { MdOutlineFlipCameraAndroid } from "react-icons/md";
import { TbTruckDelivery } from "react-icons/tb";
import { PiSignOutBold } from "react-icons/pi";
import { NavLink } from "react-router-dom";

export default function Account() {
  return (
    <section>
      <div>
        <div className="account-container">
          <div>
            <NavLink
              to="/favorite"
              style={({ isActive, isPending }) => {
                return {
                  backgroundColor: isActive
                    ? "#dddde5"
                    : isPending
                    ? "inherit"
                    : "",
                  color: isActive ? "black" : isPending ? "#a2a2a2" : "inherit",
                  fontWeight: isActive ? "600" : isPending ? "bold" : "",
                  width: "160px",
                  padding: "10px",
                  textDecoration: "none",
                  display: "flex",
                  alignItems: "center",
                  gap: "15px",
                };
              }}
              className={({ isActive, isPending }) => {
                return isActive ? "active" : isPending ? "pending" : "";
              }}
            >
              <RiBookmarkLine style={{ fontWeight: "600", fontSize: "20px" }} />{" "}
              Favorite
            </NavLink>
          </div>
          <div>
            <NavLink
              to="/credit"
              style={({ isActive, isPending }) => {
                return {
                  backgroundColor: isActive
                    ? "#dddde5"
                    : isPending
                    ? "inherit"
                    : "",
                  color: isActive ? "black" : isPending ? "#a2a2a2" : "inherit",
                  fontWeight: isActive ? "600" : isPending ? "bold" : "",
                  width: "160px",
                  padding: "10px",
                  textDecoration: "none",
                  display: "flex",
                  alignItems: "center",
                  gap: "15px",
                };
              }}
              className={({ isActive, isPending }) => {
                return isActive ? "active" : isPending ? "pending" : "";
              }}
            >
              <MdOutlineFlipCameraAndroid /> Credit{" "}
              <span style={{ color: "red", fontWeight: "600" }}>$5.16</span>
            </NavLink>
          </div>
          <div>
            <NavLink
              to="/orders"
              style={({ isActive, isPending }) => {
                return {
                  backgroundColor: isActive
                    ? "#dddde5"
                    : isPending
                    ? "inherit"
                    : "",
                  color: isActive ? "black" : isPending ? "#a2a2a2" : "inherit",
                  fontWeight: isActive ? "600" : isPending ? "bold" : "",
                  width: "160px",
                  padding: "10px",
                  textDecoration: "none",
                  display: "flex",
                  alignItems: "center",
                  gap: "15px",
                };
              }}
              className={({ isActive, isPending }) => {
                return isActive ? "active" : isPending ? "pending" : "";
              }}
            >
              <TbTruckDelivery /> Orders
            </NavLink>
          </div>
          <div>
            <NavLink
              to="/sign-out"
              style={({ isActive, isPending }) => {
                return {
                  backgroundColor: isActive
                    ? "#dddde5"
                    : isPending
                    ? "inherit"
                    : "",
                  color: isActive ? "black" : isPending ? "#a2a2a2" : "inherit",
                  fontWeight: isActive ? "600" : isPending ? "bold" : "",
                  width: "160px",
                  padding: "10px",
                  textDecoration: "none",
                  display: "flex",
                  alignItems: "center",
                  gap: "15px",
                };
              }}
              className={({ isActive, isPending }) => {
                return isActive ? "active" : isPending ? "pending" : "";
              }}
            >
              <PiSignOutBold /> Sign Out
            </NavLink>
          </div>
        </div>
      </div>
    </section>
  );
}
