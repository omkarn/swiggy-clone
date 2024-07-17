import React from "react";
import { CLOUDINARYIMAGEID } from "../utils/constants";
import { FaStar } from "react-icons/fa6";
import { Link } from "react-router-dom";

function RestaurantCard(props) {
  const {
    cloudinaryImageId,
    name,
    avgRating,
    sla,
    cuisines,
    areaName,
    id,
  } = props.resInfo;

  return (
    <Link className="link" to={`/restaurants/${id}`}>
      <div className="res-card">
        <div className="res-img-div">
        <img className="res-img" src={CLOUDINARYIMAGEID + cloudinaryImageId} />
        </div>
        <div className="res-details">
          <h4 className="res-name">{name}</h4>
          <div className="ratings-sla">
            <h4 className="ratings">
              <FaStar style={{ color: "green" }} /> <span>{avgRating}</span>
            </h4>
            <h4>{sla.slaString}</h4>
          </div>
          <p className="cuisines">{cuisines.join(", ")}</p>
          <p>{areaName}</p>
        </div>
      </div>
    </Link>
  );
}

export const addOfferToRestaurantCard = (RestaurantCard) => {
  
  return (props) => {
    const offerString=props?.resInfo?.aggregatedDiscountInfoV3?.header===undefined ? "" : props?.resInfo?.aggregatedDiscountInfoV3?.subHeader===undefined ? props?.resInfo?.aggregatedDiscountInfoV3?.header : props?.resInfo?.aggregatedDiscountInfoV3.header+" "+props?.resInfo?.aggregatedDiscountInfoV3.subHeader;
    return (
      <div className="hoc-res-card">
        <RestaurantCard {...props} />
        <h4 className="res-card-offer">{offerString}</h4>
      </div>
    );
  };
};

export default RestaurantCard;
