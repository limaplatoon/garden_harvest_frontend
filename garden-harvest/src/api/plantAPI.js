export const fetchPlants = async () => {
  return fetch('http://localhost:8000/api/suggested/', {
    headers: {
      'Content-Type': 'application/json',
    }
  }).then(res => res)
}

export const fetchPlantDetails = async (id) => {
  return fetch(`http://localhost:8000/api/plants/${id}/`, {
    headers: {
      'Content-Type': 'application/json',
    }
  }).then(res => res)
}

export default {
  fetchPlants,
  fetchPlantDetails
}