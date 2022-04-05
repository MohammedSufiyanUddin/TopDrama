import React from "react";
import "./App.css";
import Card from "./Card";
import Navbar from "./Navbar";
import Random from "./Random";



function App() {
  return (
    <div className="UperParent">
      <Navbar />

      <div className="upparent">
        {Random.map((random) => {
          return (
            <Card
      imgUrl={random.imgUrl}
      title={random.title}
      cast={random.cast}
      link={random.link}
    />
          );
        })}
      </div>
    </div>
  );
}

export default App;
