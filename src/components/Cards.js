import React from "react";
import "./Cards.css";
import CardItem from "./CardItem";

const Cards = () => {
  return (
    <div className="cards">
      <h1>Check Out These EPIC Destinations!</h1>
      <div className="cards-container">
        <div className="cards-wrapper">
          <ul className="card-items">
            <CardItem
              src="/images/img-9.jpg"
              text="Explore The Hidden Waterfall Deep Inside The Amazon Jungle"
              label="Adventure"
              path="/services"
            />
             <CardItem
              src="/images/img-2.jpg"
              text="Travel through the Islands of Bali in a Private Cruise"
              label="Luxury"
              path="/services"
            />
          </ul>
           <ul className="card-items">
            <CardItem
              src="/images/img-3.jpg"
              text="Set Sail in the Atlantic Ocean visiting Uncharted Waters"
              label="Mystery"
              path="/services"
            />
             <CardItem
              src="/images/img-4.jpg"
              text="Experience Football on the Top of the Himalayan Mountains"
              label="Adventure"
              path="/products"
            />
            <CardItem
              src="/images/img-8.jpg"
              text="Ride through the Sahara Desert on a guided camel tour"
              label="Adrenaline"
              path="/signup"
            />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Cards;
