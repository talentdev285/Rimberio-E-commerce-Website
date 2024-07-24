// import product data
import { MetalUrnsData } from "../../assets/data/data";
import { useDispatch } from "react-redux";
import { add } from "../../redux/store/cartSlice";
import { useState } from "react";

export default function MetalUrnComponent() {
  const dispatch = useDispatch();

  // function handleAdd(item) {
  //   dispatch(add(item));
  // }

  const [selectedItem, setSelectedItem] = useState(null);
  const [quantity, setQuantity] = useState(1);

  const handleItemClick = (item) => {
    if (selectedItem === item) {
      // If the clicked item is already selected, deselect it
      setSelectedItem(null);
    } else {
      // Otherwise, select the clicked item
      setSelectedItem(item);
    }
  };

  const handleAddToCart = () => {
    if (selectedItem && quantity > 0) {
      dispatch(add({ ...selectedItem, quantity: quantity }));
      setSelectedItem(null);
      setQuantity(1);
    }
  };

  return (
    <section>
      <div>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "3rem",
            padding: "2rem",
            justifyContent: "center",
          }}
        >
          {MetalUrnsData.map((item) => (
            <div
              className="urncontent"
              key={item.id}
              style={{
                textAlign: "center",
                width: "300px",
                height: "350px",
                borderRadius: "10px",
                transition: "0.3s ease",
                border: selectedItem === item ? "2px solid blue" : "none",
              }}
              onClick={() => handleItemClick(item)}
            >
              <img style={{ width: "50%" }} src={item.img} alt={item.title} />
              <h4>{item.title}</h4>
              <p>{item.itemNum}</p>
              <p style={{ color: "red", fontWeight: "600" }}>${item.price}</p>
              <button
                // onClick={() => handleAdd(item)}
                style={{
                  marginTop: "1rem",
                  textAlign: "center",
                  padding: "0.5rem 1rem",
                  border: "none",
                  borderRadius: "5px",
                  background: "purple",
                  color: "white",
                }}
              >
                Click for Details
              </button>
            </div>
          ))}
        </div>
        {selectedItem && (
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, 0%)",
              textAlign: "center",
              width: "700px",
              height: "400px",
              background: "white",
              boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
              display: "flex",
              overflow: "scroll",
              padding: "1.5rem",
            }}
          >
            <div style={{ margin: "auto" }}>
              <img src={selectedItem.img} alt={selectedItem.title} />
            </div>
            <div>
              <h2>{selectedItem.title}</h2>
              <p>{selectedItem.description}</p>
              <p>
                Quantity:
                <input
                  type="number"
                  value={quantity}
                  onChange={(e) => {
                    const value = parseInt(e.target.value);
                    if (!isNaN(value) && value >= 0) {
                      setQuantity(value);
                    }
                  }}
                  styl
                  style={{
                    width: "30px",
                    height: "30px",
                    border: "1px solid black",
                    textAlign: "center",
                    padding: "0",
                  }}
                />
              </p>
              <button
                onClick={handleAddToCart}
                style={{
                  marginTop: "1rem",
                  textAlign: "center",
                  padding: "0.5rem 1rem",
                  border: "none",
                  borderRadius: "5px",
                  background: "purple",
                  color: "white",
                }}
              >
                Add to Cart
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
