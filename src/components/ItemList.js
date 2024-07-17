import React from "react";
import MenuItem from "./MenuItem";

function ItemList(props) {
  const items = props.items;
  return (
    props.display && (
      <div className="category-panel">
        {typeof items === "object" &&
          items.map((item) => (
            <MenuItem itemInfo={item?.card?.info}/>
          ))}
      </div>
    )
  );
}

export default ItemList;
