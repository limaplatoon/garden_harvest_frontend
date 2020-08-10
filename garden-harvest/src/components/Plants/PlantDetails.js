import React, {useEffect, useState} from 'react'
import {fetchPlantDetails} from '../../api/plantAPI'

function PlantDetail(props) {

  const [plant, setPlant] = useState(null)

  useEffect(() => {
    const fetchAPI = async (id) => {
      fetchPlantDetails(id).then(res => res.json()).then(data => setPlant(data))
    }
    fetchAPI(props.match['params']['plant_id'])
  }, [props])

  if (plant === null) {
    return <h1>Loading</h1>
  }
  return (
    <div>
      <div>
        <h1>{plant['common_name']}</h1>
      </div>
      <div>
        <p>{plant.description}</p>
        <br></br>
        <br></br>
        <h3>Sowing the Seeds</h3>
        <p>{plant.sowing}</p>
        <br></br>
        <h4>Harvest Date</h4>
        <p>{plant.harvest_min}</p>
        <p>{plant.harvest_max}</p>
        <br></br>
        <p>Plant alongside: {plant.companions}</p>
      </div>
    </div>
  )
};

export default PlantDetail;

/*
Goal: as a user I want to see details about a plant such as care and watering instructions, how tall it may grow, how much sun-light it needs, how much room it need from side to side, what will it look like when ready to harvest, the number of days I should expect between planting and harvesting, any special instructions to perform on the seeds before planting them; so that i can determine whether i want to add this plant to my garden or allow me to lookup care information in case i forgot.

-assume that the list view is already complete
-includes: picture, name-common, name-scientific, growth-days, sowing-details, lighting-requirements, watering requirements, expected max height,

Technical considerations:

each plant should/could have its own url

acceptance Criteria:
any and all information displayed
picture
link to add to my garden
*/

