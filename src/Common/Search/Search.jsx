import React from "react";
import { FiSearch } from "react-icons/fi";

export default function Search() {
  return (
    <section className="top-menu">
      <div className="searchContainer">
        <span className="searchIcon">
          <FiSearch />
        </span>
        <input
          type="text"
          placeholder="Search in UPD Urns"
          className="searchInput"
        />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "300px",
        }}
      >
        <div>
          <button className="primarybtn">Request Catalog</button>
        </div>
        <div>
          <span style={{ fontWeight: "600", fontSize: "18px" }}>
            (888) 215-2885
          </span>
          <p
            style={{ fontWeight: "300", fontSize: "10.7px", marginTop: "2px" }}
          >
            Mon-Fri 8:30am - 6pm CST
          </p>
        </div>
      </div>
    </section>
  );
}
