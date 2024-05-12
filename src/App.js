import React from "react";
import Header from "./header.jsx";
import SearchSection from "./SearchSection.jsx";
import CardsSection from "./CardSection.jsx";
import './style.css';

function App() {
  return (
    <div className="main-container">
      <Header />
      <SearchSection />
      <CardsSection />     
    </div>
  );
}

export default App;
