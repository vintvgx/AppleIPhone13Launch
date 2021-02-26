import React from "react";

function Options (props) {
    return (
        <div className="options">
            {/* image of the iphone (small) / specify that in css */}
            <img className="smPhone" src={props.img} alt="iphone"/>
            <h2>{props.title}</h2>
            <h5>From {props.price}</h5>
            {/* colors get inserted here */}
            
            {/* edit this so that the hr is short and just covering what is above it */}
            <hr className="shortLine"></hr>
            <h4>{props.size}</h4>
            <h5>{props.retina}</h5>

            <i class="fas fa-{props.element1} fa-3x"></i>
            <h5>{props.element1Text}</h5>

            <button type="smbutton" class="btn btn-primary" href="#S2">Buy</button>

        </div>
    )
}

export default Options;