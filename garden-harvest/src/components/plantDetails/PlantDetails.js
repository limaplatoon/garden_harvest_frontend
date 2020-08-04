import React, { useState, useEffect } from 'react'

//<Link to={{ pathname:`${guide.hero}/guides/${i}/edit/`, props:{guide} }}><Button className='btn-secondary'>Edit</Button></Link>

function PlantDetail(props) {

  const [plant, setPlant] = useState()
  //and others...will utilize unpacking method most likely....

  // useEffect(() => {
  //   GardenAPI.fetchPlantById(props.id)
  //   .then((response) => {
  //     console.log("plant_detail:\n\n", response)
  //   })
  // })s

  return (
    <div>
      <div>
      <h1>{props['common_name']}</h1>
      </div>
      <div>
        <p>{props.description}</p>
        <br></br>
        <br></br>
        <h3>Sowing the Seeds</h3>
        <p>{props.sowing}</p>
        <br></br>
        <h4>Harvest Date</h4>
        <p>{props.harvest.from}</p>
        <p>{props.harvest.to}</p>
        <br></br>
        <p>Plant alongside: {props.companions}</p>
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

