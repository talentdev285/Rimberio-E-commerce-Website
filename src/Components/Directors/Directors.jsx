// imported data
import { DirectorsData } from "../../assets/data/data";

export default function Directors() {
  return (
    <section style={{ background: "" }}>
      <h1 style={{ marginLeft: "3.2rem" }}>
        What Funeral Directors Are Saying
      </h1>
      <div className="Directors-container">
        {DirectorsData.map((item) => (
          <div className="content" key={item.id}>
            <div>
              <img src={item.img} alt={item.Name} />
              <p style={{ height: "120px" }}>{item.description}</p>
            </div>

            <div style={{ marginTop: "4rem" }}>
              <span
                style={{
                  fontWeight: "600",
                  fontSize: "13px",
                  marginLeft: "1rem",
                }}
              >
                {item.Name}
              </span>
              <p style={{ fontSize: "12px" }}>{item.CompanyName}</p>
              <p style={{ color: "#a2a2a2" }}>{item.Position}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
