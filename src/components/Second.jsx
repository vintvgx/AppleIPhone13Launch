import React from 'react';
import fadedIphone from "./pics/fadediphone13.png";

function Second() {
    return (
        <div className="Second">
            <div className="sech1">
                <h1 style={{marginBottom: "50px"}}>The New and Improved</h1>
                <h4>iPhone 13 Pro and iPhone 13 Pro Max</h4>
                <p>From $41.62/mo. or $999 before trade‑in.</p>
                <button type="button" class="btn btn-primary" href="#S2">Buy</button>
                </div>
            <div>
                 <img className="fadedPic" src={fadedIphone} alt="FadedIphone13"/>
                 
             </div>
        </div>
    )
}

export default Second;