import React from "react";
import {CDN_URL} from "../Utils/constants";

const RestaurantCard = (props) => {
    const {restObj} = props;
    const {name, cloudinaryImageId, avgRating, cuisines, costForTwo}
        = restObj.info;
    return (
        <div className="res-card">
            <img className="res-logo" alt="res-logo"
                 src={CDN_URL + cloudinaryImageId}></img>
            <h3>{name}</h3>
            <h3>{avgRating} stars</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{costForTwo}</h4>
        </div>
    )
}

export default RestaurantCard;