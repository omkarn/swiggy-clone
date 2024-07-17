import React, { useState } from "react";
import ItemList from "./ItemList";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

function RestaurantCategory(props) {
  const { data, subCat } = props;
  const [display, setDisplay] = useState(true)

  return (
    <div className="res-category">
      <button onClick={()=>setDisplay(!display)} className="category-accordion"><h4>{data?.title} {data?.itemCards?.length && `(${data?.itemCards?.length})`}</h4>{display ? <IoIosArrowUp/> : <IoIosArrowDown/>}</button>
      {subCat === false && (data?.["@type"]).includes("NestedItemCategory")
        ? data.categories.map((cat) => (
            <RestaurantCategory data={cat} subCat={true} />
          ))
        : ""}
      <ItemList display={display} items={data.itemCards} />
    </div>
  );
}

export default RestaurantCategory;
