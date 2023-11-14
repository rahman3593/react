import React, {useState} from "react";
import RestaurantCard from "./RestaurantCard";
import restList from "../Utils/mockData";

const Body = () => {
    const [listRestaurants, setListRestaurants] = useState(restList)
    return (
        <div className="body">
            <div className="filter">
                <button className="filter-btn" onClick={() => {
                    const filteredRestaurants = listRestaurants.filter((rest) => rest.info.avgRating > 4);
                    setListRestaurants(filteredRestaurants);
                }}>Top Rated Restaurants
                </button>
            </div>
            <div className="res-container">
                {listRestaurants.map(restaurant =>
                    <RestaurantCard key={restaurant.info.id} restObj={restaurant}/>
                )}
            </div>
        </div>
    )
}

export default Body;