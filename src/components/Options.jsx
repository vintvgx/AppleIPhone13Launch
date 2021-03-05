import React from "react";

function Options (props) {
    return (
        <div className="options">
            {/* image of the iphone (small) / specify that in css */}
            <img className="smPhone" src={props.img} alt="iphone"/>
            <h5 style={{marginTop: "20px", fontSize: "1.3rem"}}>IPhone {props.phone}</h5>
            <p>From {props.price}</p>
            {/* colors get inserted here */}
            
            {/* edit this so that the hr is short and just covering what is above it */}
            <hr className="shortLine"></hr>
            <p>{props.size}</p>
            <p>{props.display}</p>

            
            <button type="smbutton" class="btn btn-primary" href="#S2">Buy</button>

        </div>
    )
}

export default Options;