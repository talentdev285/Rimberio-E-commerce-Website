import { Link } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import { remove } from "../redux/store/cartSlice";

export default function AddCartItem() {
  const dispatch = useDispatch();

  const MetalUrnsData = useSelector((state) => state.cart);
  const handleRemove = (id) => {
    dispatch(remove(id));
  };

  return (
    <section>
      <div className="AddCartItem">
        {MetalUrnsData.map((item) => (
          <div className="AddCartItem-content" key={item.id}>
            <img style={{ width: "10%" }} src={item.img} alt="" />
            <h4>{item.title}</h4>
            <p>{item.itemNum}</p>
            <span>{item.price}</span>
            <button
              style={{
                width: "100px",
                height: "40px",
                borderRadius: "5px",
                border: "none",
                justifyContent: "center",
              }}
              onClick={() => handleRemove(item.id)}
              className="herobtn"
            >
              Remove
            </button>
          </div>
        ))}
        <Link to="/checkout">
          <h2 style={{ textAlign: "center" }}>Click here of checkout</h2>
        </Link>
      </div>
    </section>
  );
}
