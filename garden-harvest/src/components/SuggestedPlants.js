import React, { useState, useEffect, Component } from "react";
import dashboardAPI from '../api/dashboardAPI.js'
import PlantCard from './PlantCard'

export default function SuggestedPlants() {
  
  let [suggestedPlants, setSuggestedPlants] = useState([]);

  useEffect(()=> {
    dashboardAPI.fetchSuggestedPlants()
      .then((apiResponseJSON) => {
        let data = apiResponseJSON;
        setSuggestedPlants(data);
      })
    },[]);
  
  let plants = suggestedPlants.reverse().map(plant => <PlantCard props={plant}/> );


  return (
    <div className="cardHolder suggestedPlants">
      {plants}
    </div>
  )

}