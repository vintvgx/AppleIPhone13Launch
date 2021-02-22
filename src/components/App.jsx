import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import Page from "./Page";
import Second from "./Second";
import Third from "./Third";

function App() {
  return (
    <section>
      <div className="sticky-top">
      <Header />
      </div>
    
    <section id="S2">
        <div>
          <Note />
        </div>
        </section>
      <hr className= "line"></hr>

      <div className="second">
        <Second />
      </div>
      <hr className= "line2"></hr>
      <div>
      <Third />
      </div>

      <div>
        <Footer />
        </div>
    </section>
  );
}

export default App;
