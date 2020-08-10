import axiosInstance from './axiosAPI';

const fetchSuggestedPlants = () => {
  return axiosInstance.get('suggested/')
    .then((response) => response.data)
}

const fetchPlantDetails = (pk) => {
  return axiosInstance.get('plants/' + pk + '/')
    .then((response) => response.data)
}

export default {
  fetchSuggestedPlants,
  fetchPlantDetails
}