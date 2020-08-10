import React, {Component} from 'react';
import '../App.css';
import {
  Agenda,
  Day,
  Inject,
  Month,
  MonthAgenda,
  ResourceDirective,
  ResourcesDirective,
  ScheduleComponent,
  TimelineMonth,
  TimelineViews,
  ViewDirective,
  ViewsDirective,
  Week,
} from '@syncfusion/ej2-react-schedule'
import {fetchAllEvents} from '../api/calendarAPI'

const mapApiData = (data) => {
  let seeding = []; let transplanting = []; let planting = []; let harvesting = [];
  let events = [];
  for (let i = 0; i < data.length; i++) {
    const slotdata = data[i];
    let id = slotdata.id
    let slot = slotdata.slot
    let plant = slotdata.plant_zone.plant
    let category = {text: slot.name, id: slot.id, color: slot.color}
    let event ={Id: id, Subject: plant.common_name, IsAllDay: true, TaskId: slot.id, Location: slot.location_description, Description: `${plant.sowing} ${plant.spacing}`}
    if (slotdata.requires_seeding === true && (slotdata.date_seeded == null || slotdata.date_seeded === "")) {
      category.groupId = 1
      seeding.push(category)
      event.StartTime = new Date(slotdata.created_at)
      let endDate = new Date(slotdata.created_at)
      event.EndTime = new Date(endDate.setDate(endDate.getDate() + 14))
      event.ProjectId = 1
      events.push(event)
    } else if (slotdata.requires_seeding === true && (slotdata.date_planted == null || slotdata.date_planted === "")) {
      category.groupId = 2
      transplanting.push(category)
      let startDate = new Date(slotdata.created_at)
      event.StartTime = new Date(startDate.setDate(startDate.getDate() + 28))
      let endDate = new Date(slotdata.date_seeded)
      event.EndTime = new Date(endDate.setDate(endDate.getDate() + 42))
      event.ProjectId = 2
      events.push(event)
    } else if (slotdata.requires_seeding === true) {
      category.groupId = 4
      harvesting.push(category)
      event.StartTime = new Date(slotdata.harvest_date_min)
      event.EndTime = new Date(slotdata.harvest_date_max)
      event.ProjectId = 4
      events.push(event)
    } else if (slotdata.requires_seeding === false && (slotdata.date_planted == null || slotdata.date_planted === "")) {
      category.groupId = 3
      planting.push(category)
      event.StartTime = new Date(slotdata.created_at)
      let endDate = new Date(slotdata.created_at)
      event.EndTime = new Date(endDate.setDate(endDate.getDate() + 14))
      event.ProjectId = 3
      events.push(event)
    } else {
      category.groupId = 4
      harvesting.push(category)
      event.StartTime = new Date(slotdata.harvest_date_min)
      event.EndTime = new Date(slotdata.harvest_date_max)
      events.push(event)
    }
  }
  let toBeSeeded = new Set(seeding)
  let toBeTransplanted = new Set(transplanting)
  let toBePlanted = new Set(planting)
  let toBeHarvested = new Set(harvesting)
  let categorySets = new Set([...toBeSeeded, ...toBeTransplanted, ...toBePlanted, ...toBeHarvested])
  let categories = Array.from(categorySets)
  return { categories:categories, events:events}
}

class Calendar extends Component {
  constructor(props) {
    super(props)
    let projectData = [
      { text: "To be Seeded", id: 1, color: "#EA9A8A" },
      { text: "To be Transplanted", id: 2, color: "#C84A31" },
      { text: "To be Planted", id: 3, color: "#C08BD7C" },
      { text: "To be Harvested", id: 4, color: "#CB563E" }
    ]
    this.state = { events: [], categories: [], projectData: projectData}
  }

async componentDidMount() {
    let data = await fetchAllEvents()
    let apiData = mapApiData(data)
    this.setState({categories: apiData.categories, events: apiData.events})
  }

  render() {
    return (
      <div>
        <ScheduleComponent
          width='100%'
          height='650px'
          currentView='Month'
          timeScale={{ enable: false }}
          rowAutoHeight={true}
          agendaDaysCount={31}
          hideEmptyAgendaDays={true}
          eventSettings={{dataSource: this.state.events}}
          group={{resources: ['Projects', 'Categories']}}
        >
          <ResourcesDirective>
            <ResourceDirective
              field='ProjectId'
              title='Activity'
              name='Projects'
              allowMultiple={false}
              dataSource={this.state.projectData}
              textField='text'
              idField='id'
              colorField='color'
            ></ResourceDirective>
            <ResourcesDirective
              field='TaskId'
              title='Plot Name'
              name='Categories'
              allowMultiple={true}
              dataSource={this.state.categories}
              textField='text'
              idField='id'
              colorField='color'
            ></ResourcesDirective>
          </ResourcesDirective>
          <ViewsDirective>
            <ViewDirective option='Day' />
            <ViewDirective option="TimelineDay" interval={4} displayName="4-Days" />
            <ViewDirective option="TimelineWeek" displayName="1-Week" />
            <ViewDirective option="Week" interval={2} displayName="2-Weeks" />
            <ViewDirective option="TimelineMonth" displayName="4-Weeks" />
            <ViewDirective option="Agenda" />
            <ViewDirective option="Month" />
          </ViewsDirective>
          <Inject services={[Day, Week, Month, MonthAgenda, Agenda, TimelineViews, TimelineMonth,]} />
        </ScheduleComponent>
      </div>
    )
  }
}

export default Calendar;
