import React from 'react';
import '../App.css';
import { 
  ResourcesDirective, 
  ResourceDirective, 
  ScheduleComponent, 
  ViewsDirective, 
  TimelineMonth, 
  TimelineViews, 
  ViewDirective, 
  MonthAgenda, 
  Agenda, 
  Inject, 
  Month, 
  Week, 
  Day, 
} from '@syncfusion/ej2-react-schedule'

//remove below when api calls are complete or passed in as state
import {plant_slot_data, slots} from '../SampleData/sampleData'


//takes imported data or data passed in from api call and converts it eventSettings required format.
//this is necessary as it needs a date object, and passing date through api call converts it to a string, so this converts the date components back to a date object
let events = plant_slot_data.map((slotData) => {
  let eventData = {}
  eventData.StartTime = new Date(slotData.S_year, slotData.S_month, slotData.S_day)
  eventData.EndTime = new Date(slotData.S_year, slotData.S_month, slotData.S_day)
  eventData.ResourceId = slotData.slot_id
  //eventData.ResourceName = slotData.slot_name
  eventData.Id = `${slotData.slot_id}-${slotData.plant_name}-${slotData.S_year}-${slotData.S_month}-${slotData.S_day}`
  eventData.Subject = slotData.plant_name
  eventData.Location = slotData.location_description
  eventData.Description = slotData.sowing_instructions
  eventData.isAllDay = "true"
  eventData.RecurrenceRule = `FREQ=DAILY;INTERVAL=1;COUNT=${slotData.duration}`
  eventData.Status = "Completed"
  return eventData
})

/*
let resources = [
  { Name: "My first Plot", ID: 1, Color: "#ea7a57" },
  { Name: "plot 2", ID: 2, Color: "#357cd27" },
  { Name: "Relax, it is just a variable", ID: 3, Color: "#7fa900" },
  { Name: "the last plot", ID: 4, Color: "#33aced" }
]
*/
let resources = slots.map((slot) => {
  return {Name: slot.slot_name, ID: slot.slot_id, Color: slot.color}
})




function Calendar(props) {
  //sets the default view
  //<ScheduleComponent currentView=['Month', 'Week', 'Day', 'WorkWeek', 'Agenda']/>

  //sets the default Date to have highlighted...if omitted it displays/highlights the current date
  //note that the month field is 0 indexed i.e. Jan = 0, but the day of the month is not...first = 1
  //August 1, 2020 = Date(2020,07,1)
  //<ScheduleComponent selectedDate={new Date(2020,07,1)} />


  return (
    <div>
      <h1>Data used:</h1>
      <table>
        <tr>
          <th>slot_id</th>
          <th>color</th>
          <th>slot_name</th>
          <th>location_description</th>
          <th>plant_name</th>
          <th>sowing_instructions</th>
          <th>S_year</th>
          <th>S_month</th>
          <th>S_day</th>
          <th>duration (in days)</th>
        </tr>
        {plant_slot_data.map((slot, index) => {
          return (
            <tr key={index}>
              <td>{slot.slot_id}</td>
              <td>{slot.color}</td>
              <td>{slot.slot_name}</td>
              <td>{slot.location_description}</td>
              <td>{slot.plant_name}</td>
              <td>{slot.sowing_instructions}</td>
              <td>{slot.S_year}</td>
              <td>{slot.S_month}</td>
              <td>{slot.S_day}</td>
              <td>{slot.duration}</td>
            </tr>)
        })}
      </table>

      <ScheduleComponent
        width='100%'
        height='800px'
        currentView='Agenda'
        selectedDate={new Date(2020, 7, 1)}
        timeScale={{ enable: false }}
        rowAutoHeight={true}
        agendaDaysCount={31}
        hideEmptyAgendaDays={true}
        eventSettings={{
          dataSource: events,

        }}
      >
        <ResourcesDirective>
          <ResourceDirective
            field='ResourceId'
            title='Plot used'
            name='Resources'
            textField="Name"
            idField='ID'
            colorField='Color'
            dataSource={resources}
          ></ResourceDirective>

        </ResourcesDirective>
        <ViewsDirective>
          <ViewDirective
            option='Day' />

          <ViewDirective option="TimelineDay"
            interval={4}
            startHour='08:00'
            endHour='17:00'
            displayName="4-Days" />

          <ViewDirective
            option="TimelineWeek"
            startHour='07:00'
            endHour='12:00'
            displayName="1-Week" />

          <ViewDirective
            option="Week"
            interval={2}
            startHour='07:30'
            endHour='09:30'
            displayName="2-Weeks" />

          <ViewDirective
            option="TimelineMonth"
            displayName="4-Weeks" />

          <ViewDirective
            option="Agenda"
            displayName={"1-Tom"} />

          <ViewDirective
            option="Month" />

          

        </ViewsDirective>


        <Inject services={[Day, Week, Month, MonthAgenda, Agenda, TimelineViews, TimelineMonth,]} />
      </ScheduleComponent>
    </div>
  );
}

export default Calendar;
