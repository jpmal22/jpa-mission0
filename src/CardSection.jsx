import React from "react";
import Card from "./Card";
import './style.css';

const CardsSection = () => {
  const cardsData = [
    { id: 1, title: "Events", text: "Find out about upcoming events", image: "./jpa-mission0/events.jpg" },
    { id: 2, title: "Training", text: "Find out more about the programmes we offer", image: "./jpa-mission0/training.jpg" },
    { id: 3, title: "Resource Hub", text: "Access resources to bolster your learning", image: "./jpa-mission0/resources.jpg" }
  ];

  return (
    <section className = "cards-section">
      {cardsData.map(card => (
        <Card key={card.id} title={card.title} text={card.text} image={card.image} />
      ))}
    </section>
  );
}

export default CardsSection;
