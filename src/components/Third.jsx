import React from 'react';
import iphoneDetailed from "./pics/iphone13.jpeg";

function Third() {
    return (
        <div className="third">
            <div className="row">
                <div className="col-lg-6">
                <img style={{width: "1000px", height: "600px"}} className="" src={iphoneDetailed} alt="FadedIphone13"/>
                </div>
                <div className="thirdText col-lg-6">
                    <h1>ENJOY THE EXPERIENCE OF THE ENTIRE SCREEN ON THE IPHONE 13.</h1>
                </div>
            </div>
        </div>
    )
}

export default Third;