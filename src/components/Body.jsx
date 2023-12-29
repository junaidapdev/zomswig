import resList from "../utils/mockData";
import { useState } from "react";
import RestaurantCard from "./RestaurantCard";

const Body = () => {

  const [listOfRestaurants, setlistOfRestaurants] = useState(resList)

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = resList.filter((res) => res.rating > 4)

            setlistOfRestaurants(filteredList);
           }}
        >
          Top rated restaurants
        </button>
      </div>
      <div className="resContainer">
        {listOfRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
