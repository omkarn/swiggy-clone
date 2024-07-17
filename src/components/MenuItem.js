import React from "react";

import { add, remove } from "../features/cartSlice";
import { MENU_ITEM_URL } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";

function MenuItem({ itemInfo }) {
  const dispatch = useDispatch();
  const cartItems=useSelector((store)=>store.cart.items)
  const handleAdd = (info) => {
    dispatch(add(info));
  };
  const handleRemove = (id) => {
    dispatch(remove(id))
  };
  return (
    <div className="item" key={itemInfo?.id}>
      <div className="item-div-left">
        <div>
          <p className="item-name">{itemInfo?.name}</p>
          <p className="item-price">
            ₹ {itemInfo?.defaultPrice / 100 || itemInfo?.price / 100}
          </p>
        </div>
        <div>
          <p className="item-description">{itemInfo?.description}</p>
        </div>
      </div>
      <div className="item-div-right">
        <img className="item-img" src={`${MENU_ITEM_URL}${itemInfo.imageId}`} />
          {!cartItems.includes(itemInfo) ? 
          <button className="item-button" onClick={() => handleAdd(itemInfo)}>
            Add
          </button> : <button className="item-button" style={{color:"rgb(248, 59, 59)"}} onClick={() => handleRemove(itemInfo.id)}>
            Remove
          </button>
}
      </div>
    </div>
  );
}

export default MenuItem;
