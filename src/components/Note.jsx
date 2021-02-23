import React from "react";

//5. Create a Note.jsx component to show a <div> element with a
//<h1> for a title and a <p> for the content.

function Note() {
  return (
    <div className="pageTitle container-fluid">
      <h1>iPhone 13</h1>
      <h4 style={{marginBottom: "15px"}}>"Full Screen. that you can feel"</h4>
      <p>From $41.62/mo. or $999 before trade-in.</p>
      <p style={{marginBottom: "15px"}}>Buy directly from Apple with special carrier offers.</p>
      <a href="apple.com">Learn More >  </a>
      <a href="apple.com">Buy ></a>
      <div>
        <img className="iPic" src="./pics/iphone13.png" alt="IPHONE!#"/>
      </div>
    </div>
  );
}

export default Note;
