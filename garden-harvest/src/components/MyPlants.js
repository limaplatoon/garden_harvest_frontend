import React, { useState, useEffect } from "react";
import dashboardAPI from '../api/dashboardAPI.js'
import PlantCard from './PlantCard'

export default function MyPlants() {

  let [myPlants, setMyPlants] = useState([]);

  useEffect(() => {
    dashboardAPI.fetchMyPlants()
      .then((apiResponseJSON) => {
        let data = apiResponseJSON;
        setMyPlants(data);
      })
  }, []);

  let plants = myPlants.reverse().map((plant, i) => <PlantCard key={i} {...plant} canDelete={true}/>);

  if (plants.length === 0) {
    plants = <h4>You haven't added any plants to your garden yet.</h4>
  }

  return (
    <div className="cardHolder myPlants">
      {plants}
    </div>
  )

}