import {useEffect, useState} from "react";
import {RESTAURANT_URL} from "./constants";

const UseRestaurantInfo = (resId) => {
    const [resInfo, setResInfo] = useState(null);
    useEffect(() => {
        fetchMenu();
    }, [])
    const fetchMenu = async () => {
        const data = await fetch(RESTAURANT_URL + resId)
        const json = await data.json();
        setResInfo(json.data);
    }
    return resInfo;
}

export default UseRestaurantInfo;