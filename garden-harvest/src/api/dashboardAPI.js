import axiosInstance from './axiosAPI';

const fetchSuggestedPlants = () => {
  return axiosInstance.get('suggested/')
    .then((response) => response.data)
}

const fetchPlantDetails = (pk) => {
  return axiosInstance.get('plants/' + pk + '/')
    .then((response) => response.data)
}

const fetchMyPlants = () => {
  return axiosInstance.get('myplants/')
    .then((response) => response.data)
}

const fetchAllPlants = () => {
  return axiosInstance.get('plants/')
    .then((response) => response.data)
}


export default {
  fetchSuggestedPlants,
  fetchPlantDetails,
  fetchAllPlants,
  fetchMyPlants
}