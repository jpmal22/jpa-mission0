import React from "react";

function Card({ title, text, image }) {
    return (
      <div className="card">
        <img src={image} alt={title} />
        <div className="text-background"> 
            <h3>{title}</h3>
            <p>{text}</p>
        </div>
      </div>
    );
  }
  
  export default Card;