import React, {useEffect, useState} from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import {Link} from "react-router-dom";


const Body = () => {
    const [listRestaurants, setListRestaurants] = useState([])
    const [filteredRestaurants, setFilteredRestaurants] = useState([])
    const [searchText, setSearchText] = useState("")

    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.0322825&lng=80.1561238&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        setListRestaurants(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        setFilteredRestaurants(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    }

    useEffect(() => {
        fetchData();
    }, []);

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