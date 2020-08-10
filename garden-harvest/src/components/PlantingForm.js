import React, { useState, useEffect, Component } from "react";
import { Form, Button } from 'react-bootstrap';
import './PlantingForm.css'

export default function PlantingForm() {
  return(

  <div className='PlantingForm'>
    <Form.Check 
      type='radio'
      id='default-radio'
      label='description of Slot 1'
    />
    <Form.Check 
      type='radio'
      id='default-radio'
      label='description of Slot 2'
    />
    <Form.Check 
      type='radio'
      id='default-radio'
      label='description of Slot 3'
    />
    <Form.Check 
      type='radio'
      id='default-radio'
      label='description of Slot 4'
    />
    <Button type="submit" className="mb-2" variant="outline-secondary">
        Plant Here
    </Button>
  </div>
  );
}