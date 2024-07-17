import React from "react";
import { useSelector } from "react-redux";
import MenuItem from "./MenuItem";

function Cart() {
  const items = useSelector((store) => store.cart.items);
  const total = items.length
    ? items.reduce(
        (acc, obj) => acc + (obj?.price || obj.defaultPrice) / 100,
        0
      )
    : 0;
  return (
    <>
      {!items.length ? (
        <div className="cart-empty-div">
          <h1 className="cart-empty-heading">Your Cart is empty..!</h1>
        </div>
      ) : (
        <div className="cart res-menu">
          <h1 className="heading">Cart</h1>
          {items.map((item) => (
            <MenuItem itemInfo={item} />
          ))}
          <h2 style={{ margin: "20px", textAlign: "right" }}>
            Total : ₹ {total}
          </h2>
        </div>
      )}
    </>
  );
}

export default Cart;
