const fetchSuggestedPlants = () => {
  return fetch('http://localhost:8000/api/suggested/')
    .then((response) => response.json())
}

const fetchPlantDetails = (pk) => {
  return fetch('http://localhost:8000/api/plants/' + pk + '/')
    .then((response) => response.json())
}

const fetchAllPlants = () => {
  return fetch('http://localhost:8000/api/plants/')
    .then((response) => response.json())
}


export default {
  fetchSuggestedPlants,
  fetchPlantDetails,
  fetchAllPlants
}