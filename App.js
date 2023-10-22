import React from "react";
import ReactDOM from "react-dom/client";


const element = React.createElement("div", {"className": "title"}, [
    React.createElement("h1", {}, "Heading 1"),
    React.createElement("h2", {}, "Heading 2"),
    React.createElement("h3", {}, "Heading 3")
]);

const TitleComponent = () => <h1>This it Title</h1>

const heading1 = "Welcome to Heading1";
const heading2 = "Welcome to Heading2";
const heading3 = "Welcome to Heading3";
const JsxElement = () => (
    <div className="title">
        {TitleComponent()}
        <TitleComponent/>
        <TitleComponent></TitleComponent>
        <h1>{heading1}</h1>
        <h2>{heading2}</h2>
        <h3>{heading3}</h3>
    </div>);
// const TitleComponent = () => {
//     return <h1 className="head" tabIndex="5">React Heading Component</h1>
// }
//
// const BodyComponent = () => (
//     <div id="container">
//         <TitleComponent/>
//         <h1 className="Body" tabIndex="6">React Body Component</h1>
//     </div>
// )
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<JsxElement/>);