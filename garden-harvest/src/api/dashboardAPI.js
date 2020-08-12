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
  return axiosInstance.get('encyclopedia/')
    .then((response) => response.data)
}

const fetchPlantingOptions = (plantZoneID) => {
  return axiosInstance.get(`planting-options/${plantZoneID}/`)
    .then((response) => response.data)
}

const sendPlantingChoice = (plantZoneID, slotID, date) => {
  const data = {
    plant_zone_id: plantZoneID,
    slot_id: slotID,
    earliest_date: date
  }
  return axiosInstance.post(`addplant/${plantZoneID}/`, data)
    .then((response) => response.data)
}

const removeMyPlant = (plantSlotID) => {
  return axiosInstance.delete(`deleteplant/${plantSlotID}/`)
    .then((response) => response.data)
}

export default {
  fetchSuggestedPlants,
  fetchPlantDetails,
  fetchAllPlants,
  fetchMyPlants,
  fetchPlantingOptions,
  sendPlantingChoice,
  removeMyPlant
}