// data imported
import { PromotalBrand } from "../../assets/data/data";

export default function Brand() {
  return (
    <section>
      <div
        style={{
          width: "100%",
          padding: "2rem 4rem",
          display: "flex",
          justifyContent: "center",
          background: "#E2E2E2",
          boxSizing: "border-box",
        }}
      >
        {PromotalBrand.map((item) => (
          <div className="brand_content">
            <img src={item.img} alt="brand" style={{ width: "50%" }} />
          </div>
        ))}
      </div>
    </section>
  );
}
