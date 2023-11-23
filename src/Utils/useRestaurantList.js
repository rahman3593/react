import {useEffect, useState} from "react";
import {RESTAURANT_LIST} from "./constants";

const UseRestaurantList = () => {
    const [resList, setResList] = useState([]);
    const fetchData = async () => {
        const data = await fetch(RESTAURANT_LIST);
        const json = await data.json();
        setResList(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }
    useEffect(() => {
        fetchData();
    }, []);
    return resList;
}

export default UseRestaurantList;