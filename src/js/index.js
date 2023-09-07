//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import PropTypes from 'prop-types';

// include your styles into the webpack bundle
import "../styles/index.css";
import Home from "./component/home.jsx";

function SimpleCounter(props) {
    return (<div className="bigCounter">
        <div className="calendar">
            <i class="far fa-clock"></i>
        </div>
        <div className="four">{props.digitFour % 10}</div>
        <div className="three">{props.digitThree % 10}</div>
        <div className="two">{props.digitTwo % 10}</div>
        <div className="one">{props.digitOne % 10}</div>
    </div>);
}
SimpleCounter.PropTypes = {
    digitFour: PropTypes.number,
    digitThree: PropTypes.number,
    digitTwo: PropTypes.number,
    digitOne: PropTypes.number,


};


let counter = 0;
setInterval(function () {
    const four = Math.floor(counter / 1000);
    const three = Math.floor(counter / 100);
    const two = Math.floor(counter / 10);
    const one = Math.floor(counter / 1);
    console.log(four, three, two, one);
    counter++;
}, 1000);

console.log(counter)
//render your react application
ReactDOM.render(
    <SimpleCounter digitOne={counter} digitTwo={counter} digitThree={counter} digitFour={counter} />,
    document.querySelector("#app")
);
