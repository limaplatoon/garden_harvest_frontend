import React, { useState, useEffect, Component } from "react";
import dashboardAPI from '../api/dashboardAPI.js'
import PlantCard from './PlantCard'

export default function AllPlants() {
  
  let [allPlants, setAllPlants] = useState([]);

  useEffect(()=> {
    dashboardAPI.fetchAllPlants()
      .then((apiResponseJSON) => {
        let data = apiResponseJSON;
        setAllPlants(data);
      })
    },[]);

  let plants = allPlants.reverse().map((plant, i) => <PlantCard key={i} props={{plant}}/> );

  return (
    <div className="cardHolder allPlants">
      {plants}
    </div>
  )

}