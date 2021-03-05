import React from "react";
import Options from "./Options"
import iphones from "../iphones"
import iphoneOne from "./pics/FOURTHREG.webp";

function iphoneOptions(type) {
    return (
        <Options
            key = {type.id}
            img = {type.imgPath}
            phone= {type.title}
            price = {type.price}
            //colors go right here
            size = {type.size}
            display = {type.retina}
            firstElement = {type.element1}
            elem1Text = {type.element1Txt}
        />
    );
}

function Fourth() {
    return (
    <div className="fourth">
    
        <div className="row">

            <div className="col-md-3">
                < Options 
                    img = {iphoneOne}
                    phone = {iphones[0].title}
                    price = {iphones[0].price}
                    size = {iphones[0].size}
                    display = {iphones[0].retina}
                    firstElement = {iphones[0].element1}
                    elem1Text = {iphones[0].element1Txt}
                    
                />
                
            </div>
            <div className="col-md-3">
            < Options 
                    img = {iphoneOne}
                    phone = {iphones[1].title}
                    price = {iphones[1].price}
                    size = {iphones[1].size}
                    display = {iphones[1].retina}
                    firstElement = {iphones[1].element1}
                    elem1Text = {iphones[1].element1Txt}
                    
                />
            </div>
            <div className="col-md-3">
            < Options 
                    img = {iphoneOne}
                    phone = {iphones[1].title}
                    price = {iphones[1].price}
                    size = {iphones[1].size}
                    display = {iphones[1].retina}
                    firstElement = {iphones[1].element1}
                    elem1Text = {iphones[1].element1Txt}
                    
                />
            </div>
        </div>
    </div>
    );
}

export default Fourth;