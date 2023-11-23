import {useState} from "react";

const User = (props) => {
    const [count1] = useState(0);
    const [count2] = useState(2);
    const {name, location} = props;
    return (
        <div className="user-card">
            <h2>name: {name}</h2>
            <h3>location: {location}</h3>
            <h3>count1: {count1}</h3>
            <h3>count2: {count2}</h3>
        </div>
    )
}
export default User;