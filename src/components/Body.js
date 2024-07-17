import RestaurantCard, {addOfferToRestaurantCard} from "./RestaurantCard";
import ShimmerRestaurantContainer from "./ShimmerRestaurantContainer";
import useRestaurantList from "../utils/useRestaurantList";

function Body() {
  const resList = useRestaurantList();
  const RestaurantCardWithOffer = addOfferToRestaurantCard(RestaurantCard);
  return (
    <div className="body">
      <h1 className="body-header">Restaurants with online food delivery</h1>
      <div className="res-container">
        {!resList ? (
          <ShimmerRestaurantContainer />
        ) : (
          resList.map((res) => (
            res.info.aggregatedDiscountInfoV3===null ? <RestaurantCard key={res.info.id} resInfo={res.info} /> : <RestaurantCardWithOffer key={res.info.id} resInfo={res.info}/>
          ))
        )}
      </div>
    </div>
  );
}

export default Body;
