import React from "react";
import RestaurantCard from "./RestaurantCard";
import restList from "../Utils/mockData";

const Body = () => {
    return (
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container">
                {restList.map(restaurant =>
                    <RestaurantCard key={restaurant.info.id} restObj={restaurant}/>
                )}
            </div>
        </div>
    )
}

export default Body;