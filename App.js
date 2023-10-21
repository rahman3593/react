import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement("div", {id: "parent"}, [
    React.createElement("div", {id: "child1"}, [
        React.createElement("h1", {}, "This is abdul"),
        React.createElement("h2", {}, "Hello World from React! h2")
    ]),
    React.createElement("div", {id: "child2"}, [
        React.createElement("h1", {}, "Hello World from React! h1"),
        React.createElement("h2", {}, "Hello World from React! h2")
    ])
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);