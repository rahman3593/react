import {useParams} from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestaurantInfo from "../Utils/useRestaurantInfo";

const Restaurant = () => {
    const {resId} = useParams();
    const resInfo = useRestaurantInfo(resId);
    
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