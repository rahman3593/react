import React from "react";

class UserClass extends React.Component {
    constructor(props) {
        super(props);
        this.state =
            {
                count: 0,
            }
    }

    render() {
        const {name, location} = this.props;
        const {count} = this.state;
        return (
            <div className="user-card">
                <button onClick={() => {
                    this.setState({
                        count: this.state.count + 1
                    })
                }}>Increase counter
                </button>
                <h2>name: {name}</h2>
                <h3>location: {location}</h3>
                <h3>count: {count}</h3>
            </div>
        )
    }
}

export default UserClass;