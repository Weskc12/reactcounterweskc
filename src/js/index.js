
import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import PropTypes from 'prop-types';

// include your styles into the webpack bundle
import "../styles/index.css";

function SimpleCounter(props) {
    const [counter, setCounter] = useState(0);
    const four = Math.floor(counter / 1000) ;
    const three = Math.floor((counter % 1000) / 100);
    const two = Math.floor((counter % 100)  / 10);
    const one = counter % 10;
    console.log(four, three, two, one);
    useEffect(() =>{
        const interval = setInterval(() => {
         setCounter((prevCounter) => prevCounter + 1)   
        }, 1000 );
        return () => clearInterval(interval);

    },[] );

    return (<div className="bigCounter">
        <div className="calendar">
            <i className="far fa-clock"></i>
        </div>
        <div className="four">{four % 10}</div>
        <div className="three">{three % 10}</div>
        <div className="two">{two % 10}</div>
        <div className="one">{one % 10}</div>
    </div>);
}

SimpleCounter.propTypes = {
    digitFour: PropTypes.number,
    digitThree: PropTypes.number,
    digitTwo: PropTypes.number,
    digitOne: PropTypes.number,


};


//render your react application
ReactDOM.render(
    <SimpleCounter  />,
    document.querySelector("#app")
);
