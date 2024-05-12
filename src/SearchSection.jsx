import React from "react";
import './style.css';

const SearchSection = () => {
    return (
      <section className="SearchSection">
        <div className="search-display">
        <h1 className="slogan">We help marketers<br/>be BRILLIANT!</h1>
          <img src="/marketing.jpg" alt="Marketing"/>
        </div>
        <div className="search-container">
          <input type="text" placeholder="Search..." style={{ width: "300px" }} />
          <button className="Searchbutton">Search</button>
        </div>
      </section>
    );
  }
  
  export default SearchSection;