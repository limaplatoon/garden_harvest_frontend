import React, { useState, useEffect, Component } from "react";
import dashboardAPI from '../api/dashboardAPI.js'
import PlantCard from './PlantCard'

export default function MyPlants() {
  
  let [myPlants, setMyPlants] = useState([]);

  useEffect(()=> {
    dashboardAPI.fetchMyPlants()
      .then((apiResponseJSON) => {
        let data = apiResponseJSON;
        setMyPlants(data);
      })
    },[]);
  let plants = myPlants.reverse().map((plant, i) => <PlantCard key={i} props={plant}/> );

  return (
    <div className="cardHolder myPlants">
      {plants}
    </div>
  )

}