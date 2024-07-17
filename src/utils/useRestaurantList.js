import { GET_RESTAURANTS } from "./constants";
import { useState, useEffect } from "react";

const useRestaurantList = () => {
const [resList, setResList] = useState("");

  const fetchData = async () => {
    data = await fetch(GET_RESTAURANTS);
    json_data = await data.json();
    setResList(
      json_data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  useEffect(() => {
    fetchData();
  }, []);

  return resList;

}

export default useRestaurantList;
