import React, { useState, useEffect } from "react";
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
  
  let plants = suggestedPlants.reverse().map((plant, i) => <PlantCard key={i} {...plant}/> );

  return (
    <div className="cardHolder suggestedPlants">
      {plants}
    </div>
  )

}