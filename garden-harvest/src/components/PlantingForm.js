import React, { useState, useEffect } from "react";
import { Form, Button } from 'react-bootstrap';
import './PlantingForm.css'
import dashboardAPI from '../api/dashboardAPI.js'


export default function PlantingForm(props) {
  const {pk, plant} = props
  const [ slotOptions, setSlotOptions ] = useState([])
  const [ slotIdx, setSlotIdx ] = useState(null)

  useEffect(() => {
    // axiosFetch that fills in form slot options for user.
    // http://localhost:8000/api/scheduleplant/2/
    
    dashboardAPI.fetchPlantingOptions(pk)
      .then(resp => setSlotOptions(resp))
  }, [])
  
  const onChange = (idx) => {
    setSlotIdx(idx)
  }

  const onSubmit = (e) => {
    e.preventDefault();
    const selectedSlot = slotOptions[slotIdx]
    dashboardAPI.sendPlantingChoice(pk, selectedSlot.id, selectedSlot.earliest_date)
    
    // For now easy/lazy way to refresh all components just to see updates.
    // TODO: Might replace this with a state setter func passed through props.
    window.location.reload()
  };

  let optionFields = slotOptions.map((option, i) => {
    let {location_description} = option
    let location = (location_description ? location_description : option.name)
    return <Form.Check key={i}
                       type='radio'
                       id='default-radio'
                       label={`${location} - ${new Date(option.earliest_date).toDateString()}`}
                       name="slot"
                       value={option.id}
                       onChange={() => onChange(i)}/>
  })

  return(
    <div className='PlantingForm'>
      <Form method="POST" className="form" onSubmit={(e) => onSubmit(e)}>
      <h6 className="choose">Choose a Location &amp; Date</h6>
        {optionFields}
        <Button type="submit" className="mb-2" variant="outline-secondary">
            Plant Here
        </Button>
      </Form>
    </div>
  );
}