import React, { Component } from 'react';
import '../App.css';
import {
  ResourcesDirective,
  ResourceDirective,
  ScheduleComponent,
  ViewsDirective,
  TimelineViews,
  ViewDirective,
  Inject,
  Month,
  Day,
} from '@syncfusion/ej2-react-schedule'
import { fetchAllEvents } from '../api/calendarAPI'

const mapApiData = (data) => {
  let seeding = []; let transplanting = []; let planting = []; let harvesting = [];
  let events = [];
  for (let i = 0; i < data.length; i++) {
    const slotdata = data[i];
    let id = slotdata.id
    let slot = slotdata.slot
    let plant = slotdata.plant_zone.plant
    let category = {text: slot.name, id: slot.id, color: slot.color}
    let event = {
      Id: id,
      Subject: plant.common_name,
      IsAllDay: true,
      isReadOnly: true,
      TaskId: slot.id,
      Location: slot.location_description,
      Description: `${plant.sowing} ${plant.spacing}`
    }
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
      event.ProjectId = 4
      events.push(event)
    }
  }
  //let toBeScheduled = new Set(scheduling)
  let toBeSeeded = new Set(seeding)
  let toBeTransplanted = new Set(transplanting)
  let toBePlanted = new Set(planting)
  let toBeHarvested = new Set(harvesting)
  let categorySets = new Set([...toBeSeeded, ...toBeTransplanted, ...toBePlanted, ...toBeHarvested])
  let categories = Array.from(categorySets)
  return { categories: categories, events: events }
}

class Calendar extends Component {
  _isMounted = false;


  constructor(props) {
    super(props)
    let projectData = [
      {text: "To be Seeded", id: 1, color: "#EA9A8A"},
      {text: "To be Transplanted", id: 2, color: "#C84A31"},
      {text: "To be Planted", id: 3, color: "#C0BD7C"},
      {text: "To be Harvested", id: 4, color: "#CB563E"}
    ]
    this.state = {events: [], categories: [], projectData: projectData}
  }

  async componentDidMount() {
    this._isMounted = true;

    let data = await fetchAllEvents()
    let apiData = mapApiData(data)
    if (this._isMounted) {
      this.setState({categories: apiData.categories, events: apiData.events})
    }
  }

  async componentWillUnmount() {
    this._isMounted = false;
  }
  onPopupOpen(args) {
    if ((!args.target.classList.contains('e-appointment') && (args.type === 'QuickInfo')) || (args.type === 'Editor')) {
      args.cancel = this.onEventCheck(args);
    }
  }
  onActionBegin(args) {
    if ((args.requestType === 'eventCreate') || args.requestType === 'eventChange') {
      args.cancel = this.onEventCheck(args);
    }
  }
  onDragStop(args) {
    args.cancel = this.onEventCheck(args);
  }
  onResizeStop(args) {
    args.cancel = this.onEventCheck(args);
  }
  onEventCheck(args) {
    let eventObj = args.data instanceof Array ? args.data[0] : args.data;
    return (eventObj.StartTime < new Date());
  }

  onPopupOpen(args) {
    if ((!args.target.classList.contains('e-appointment') && (args.type === 'QuickInfo')) || (args.type === 'Editor')) {
      args.cancel = this.onEventCheck(args);
    }
  }

  onActionBegin(args) {
    if ((args.requestType === 'eventCreate') || args.requestType === 'eventChange') {
      args.cancel = this.onEventCheck(args);
    }
  }

  onDragStop(args) {
    args.cancel = this.onEventCheck(args);
  }

  onResizeStop(args) {
    args.cancel = this.onEventCheck(args);
  }

  onEventCheck(args) {
    let eventObj = args.data instanceof Array ? args.data[0] : args.data;
    return (eventObj.StartTime < new Date());
  }

  render() {
    return (
      <ScheduleComponent
        width='auto'
        height='calc(78vh - 53px)'
        currentView='TimelineDay'
        timeScale={{enable: false}}
        rowAutoHeight={true}
        agendaDaysCount={31}
        hideEmptyAgendaDays={true}
        eventSettings={{dataSource: this.state.events}}
        group={{resources: ['Projects', 'Categories']}}
        popupOpen={this.onPopupOpen.bind(this)}
        actionBegin={this.onActionBegin.bind(this)}
        dragStop={this.onDragStop.bind(this)}
        resizeStop={this.onResizeStop.bind(this)}
      >
        <ResourcesDirective>
          <ResourceDirective
            field='ProjectId'
            title='Activity'
            name='Projects'
            allowMultiple={true}
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
          <ViewDirective option="Day" displayName="1-day"/>
          <ViewDirective option="TimelineDay" interval={4} displayName="4-Days"/>
          <ViewDirective option="TimelineWeek" displayName="1-Week"/>
          <ViewDirective option="Month" displayName="1-month"/>
        </ViewsDirective>
        <Inject services={[Day, Month, TimelineViews,]}/>
      </ScheduleComponent>
    )
  }
}

export default Calendar;
