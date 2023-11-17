import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {RESTAURANT_URL} from "../Utils/constants";
import Shimmer from "./Shimmer";

const Restaurant = () => {
    const [resInfo, setResInfo] = useState(null)
    const {resId} = useParams();
    useEffect(() => {
        fetchMenu();
    }, [])
    const fetchMenu = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=13.0322825&lng=80.1561238&restaurantId=" + resId)
        const json = await data.json();
        setResInfo(json.data);
    }

    if (resInfo === null) return <Shimmer/>;
    const {name, costForTwoMessage, cuisines, avgRating} = resInfo?.cards[0]?.card?.card?.info;
    const {itemCards} = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
    return (
        <div>
            <h3>{name}</h3>
            <h3>{costForTwoMessage}</h3>
            <h3>{cuisines.join(", ")}</h3>
            <h3>{avgRating}</h3>
            <ul>
                {itemCards.map(
                    menu => <li key={menu?.card?.info?.id}>{menu?.card?.info?.name} -
                        Rs.{menu?.card?.info?.price / 100}</li>
                )}
            </ul>
        </div>
    )
}
export default Restaurant;