import React from "react";
import './Cd.css';

function Card(props){
    return (
      <>
        <div className="cards">
          <div className="card">
            <img src={props.imgUrl} alt="imgs" className="card_img" />
            <div className="card_description">
              <h3 className="card_title">{props.title}</h3>
              <h5 className="card_cast">{props.cast}</h5>
              <p className="card_content"></p>
              <a href={props.link} className="card_link" target="_blank">
                <button>Visit Page</button>
              </a>
            </div>
          </div>

        
        </div>
      </>
    );
}
export default Card