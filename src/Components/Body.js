import React, {useEffect, useState} from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import {Link} from "react-router-dom";
import useOnlineStatus from "../Utils/useOnlineStatus";
import useRestaurantList from "../Utils/useRestaurantList";

const Body = () => {
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);
    const [searchText, setSearchText] = useState("")
    const onlineStatus = useOnlineStatus();
    const listRestaurants = useRestaurantList();

    useEffect(() => {
        setFilteredRestaurants(listRestaurants);
    }, [listRestaurants]);

    if (onlineStatus === false) {
        return <div><h1>Check your internet connection</h1></div>
    }
    return listRestaurants.length === 0 ? <Shimmer/> : (
        <div className="body">
            <div className="filter">
                <div className="search">
                    <input type="text" value={searchText} onChange={(e) => {
                        setSearchText(e.target.value)
                    }}/>
                    <button className="btn-search" onClick={() => {
                        const filteredRestaurants = listRestaurants.filter((rest) => rest.info.name.toLowerCase().includes(searchText.toLowerCase()))
                        setFilteredRestaurants(filteredRestaurants);
                    }}>Search
                    </button>
                </div>
                <button className="filter-btn" onClick={() => {
                    const filteredRestaurants = listRestaurants.filter((rest) => rest.info.avgRating > 4);
                    setFilteredRestaurants(filteredRestaurants);
                }}>Top Rated Restaurants
                </button>
            </div>
            <div className="res-container">
                {filteredRestaurants.map(restaurant =>
                    <Link key={restaurant.info.id} to={"/restaurant/" + restaurant.info.id}>
                        <RestaurantCard restObj={restaurant}/>
                    </Link>
                )}
            </div>
        </div>
    )
}

export default Body;