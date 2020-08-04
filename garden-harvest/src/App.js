import React, { useState } from 'react';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import PlantDetails from './components/plantDetails/PlantDetails'



function App(){
  const [plant, setPlant] = useState({
    "common_name": "Zucchini",
    "scientific_name": "Cucurbita pepo",
    "sowing": "Grow in seed trays, and plant out in 4-6 weeks. Sow seed at a depth approximately three times the diameter of the seed. Best planted at soil temperatures between 70\u00b0F and 95\u00b0F.",
    "spacing": "20 - 35 inches apart",
    "harvest": {
      "interval": "days",
      "from": 42,
      "to": 63
    },
    "companions": "Corn, beans, nasturtiums, parsley, Silverbeet, Tomatoes",
    "description": "Plant into a slightly raised, well composted bed and mulch. Needs regular plentiful water.\nProduces large leaves with a spread of about 1.5m x 1.5m. Some varieties trail a bit but don't climb. The yellow (or gold) variety is more resistant to mould damage in humid areas and remains productive even when the leaves have mildew on them. The yellow varieties sometimes have yellow patches on their leaves but it is just colour not disease.",
    "zone_calendars": {
      "9b": {
        "1": "",
        "2": "S",
        "3": "P",
        "4": "P",
        "5": "",
        "6": "",
        "7": "",
        "8": "",
        "9": "",
        "10": "",
        "11": "",
        "12": ""
      },
      "9a": {
        "1": "",
        "2": "S",
        "3": "P",
        "4": "P",
        "5": "",
        "6": "",
        "7": "",
        "8": "",
        "9": "",
        "10": "",
        "11": "",
        "12": ""
      },
      "7b": {
        "1": "",
        "2": "",
        "3": "S",
        "4": "P",
        "5": "P",
        "6": "P",
        "7": "",
        "8": "",
        "9": "",
        "10": "",
        "11": "",
        "12": ""
      },
      "6b": {
        "1": "",
        "2": "",
        "3": "S",
        "4": "P",
        "5": "P",
        "6": "P",
        "7": "",
        "8": "",
        "9": "",
        "10": "",
        "11": "",
        "12": ""
      },
      "4b": {
        "1": "",
        "2": "",
        "3": "",
        "4": "S",
        "5": "S",
        "6": "P",
        "7": "",
        "8": "",
        "9": "",
        "10": "",
        "11": "",
        "12": ""
      },
      "4a": {
        "1": "",
        "2": "",
        "3": "",
        "4": "S",
        "5": "S",
        "6": "P",
        "7": "",
        "8": "",
        "9": "",
        "10": "",
        "11": "",
        "12": ""
      },
      "3b": {
        "1": "",
        "2": "",
        "3": "S",
        "4": "P",
        "5": "P",
        "6": "P",
        "7": "",
        "8": "",
        "9": "",
        "10": "",
        "11": "",
        "12": ""
      },
      "3a": {
        "1": "",
        "2": "",
        "3": "",
        "4": "S",
        "5": "P",
        "6": "P",
        "7": "",
        "8": "",
        "9": "",
        "10": "",
        "11": "",
        "12": ""
      },
      "2b": {
        "1": "",
        "2": "",
        "3": "",
        "4": "S",
        "5": "T",
        "6": "",
        "7": "",
        "8": "",
        "9": "",
        "10": "",
        "11": "",
        "12": ""
      },
      "13a": {
        "1": "",
        "2": "",
        "3": "",
        "4": "",
        "5": "",
        "6": "",
        "7": "",
        "8": "",
        "9": "",
        "10": "",
        "11": "",
        "12": ""
      },
      "12b": {
        "1": "",
        "2": "",
        "3": "",
        "4": "",
        "5": "",
        "6": "",
        "7": "",
        "8": "",
        "9": "",
        "10": "",
        "11": "",
        "12": ""
      },
      "12a": {
        "1": "P",
        "2": "",
        "3": "",
        "4": "",
        "5": "",
        "6": "",
        "7": "",
        "8": "",
        "9": "",
        "10": "",
        "11": "",
        "12": "P"
      },
      "11b": {
        "1": "P",
        "2": "P",
        "3": "",
        "4": "",
        "5": "",
        "6": "",
        "7": "",
        "8": "",
        "9": "",
        "10": "",
        "11": "",
        "12": ""
      },
      "10b": {
        "1": "",
        "2": "P",
        "3": "P",
        "4": "",
        "5": "",
        "6": "",
        "7": "",
        "8": "",
        "9": "",
        "10": "",
        "11": "",
        "12": ""
      },
      "6a": {
        "1": "",
        "2": "",
        "3": "S",
        "4": "P",
        "5": "P",
        "6": "P",
        "7": "",
        "8": "",
        "9": "",
        "10": "",
        "11": "",
        "12": ""
      },
      "10a": {
        "1": "",
        "2": "P",
        "3": "P",
        "4": "",
        "5": "",
        "6": "",
        "7": "",
        "8": "",
        "9": "",
        "10": "",
        "11": "",
        "12": ""
      },
      "8a": {
        "1": "",
        "2": "S",
        "3": "P",
        "4": "P",
        "5": "P",
        "6": "",
        "7": "",
        "8": "",
        "9": "",
        "10": "",
        "11": "",
        "12": ""
      },
      "5b": {
        "1": "",
        "2": "",
        "3": "S",
        "4": "P",
        "5": "P",
        "6": "P",
        "7": "",
        "8": "",
        "9": "",
        "10": "",
        "11": "",
        "12": ""
      },
      "8b": {
        "1": "",
        "2": "S",
        "3": "P",
        "4": "P",
        "5": "P",
        "6": "",
        "7": "",
        "8": "",
        "9": "",
        "10": "",
        "11": "",
        "12": ""
      },
      "2a": {
        "1": "",
        "2": "",
        "3": "S",
        "4": "P",
        "5": "P",
        "6": "P",
        "7": "",
        "8": "",
        "9": "",
        "10": "",
        "11": "",
        "12": ""
      }
    }
  }) 

    return (
      <Router>
        <h2>This is a start</h2>
        <PlantDetails {...plant} />
      </Router>
  );

}

export default App;
