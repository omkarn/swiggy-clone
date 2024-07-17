import { GET_RESTAURANT_MENU } from "./constants";
import { useState,useEffect } from "react";

const useRestaurantMenu = (resId) => {
    const [resMenu, setResMenu] = useState("");
    const [resInfo,setResInfo] = useState("");
    const fetchRestaurantMenu = async () => {
        const data = await fetch(GET_RESTAURANT_MENU + resId);
        const json = await data.json();
        setResMenu(json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c)=>c?.card?.card?.['@type'].includes('ItemCategory')));
        setResInfo(json?.data?.cards[2].card?.card?.info);
      };
      useEffect(() => {
        fetchRestaurantMenu();
      },[]);
    return [resMenu,resInfo];
}

export default useRestaurantMenu;