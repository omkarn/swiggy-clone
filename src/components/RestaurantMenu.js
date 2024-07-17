import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { FaStar } from "react-icons/fa6";

function RestaurantMenu() {
  const { resId } = useParams();

  const [resMenu, resInfo] = useRestaurantMenu(resId);

  return resMenu && resInfo ? (
    <div className="res-menu">
      <div className="name">
        <h1>{resInfo.name}</h1>
      </div>
      <div className="res-menu-info">
        <div className="ratings-cost">
          <FaStar style={{ color: "green" }} />
          <h4>
            <span>{resInfo?.avgRatingString}</span>
            <span>{` (${resInfo?.totalRatingsString})`}</span>
          </h4>

          <h4>{`| ${resInfo?.costForTwoMessage} `}</h4>
        </div>
        <div className="sla">
          <p>{resInfo?.sla?.slaString}</p>
        </div>
        <div>
          <p>
            {`${resInfo?.sla?.lastMileTravelString} | ${
              resInfo?.feeDetails?.message.split(" | ")[1]
            }`}
          </p>
        </div>
      </div>
      <div className="res-categories">
      {resMenu &&
        resMenu.map((category) => (
          <RestaurantCategory
            key={category?.card?.card?.title}
            subCat={false}
            data={category.card.card}
          />
        ))}
        </div>
    </div>
  ) : (
    <div className="res-menu">Loading</div>
  );
}

export default RestaurantMenu;
