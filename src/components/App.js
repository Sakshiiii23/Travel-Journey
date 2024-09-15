
import './App.css';
import React from "react";
import Navbar from '../Navbar';
import data from "../Data.js";
import Card from "../Card.js";

function App(){
    const cards = data.map(item =>{
           return(<Card 
                    img = {item.imageUrl}
                    title = {item.title}
                    loc = {item.location}
                    Maps = {item.googleMapsUrl}
                    startDate = {item.startDate}
                    endDate = {item.endDate}
                    description = {item.description}
                    />
                )
    })
           
        
    return(
        <div>
          <Navbar />
          <section className="cards-list">
            {cards}
          </section>
        </div>
    )
}

export default App;
