import axiosInstance from './axiosAPI';

export const fetchPlants = async () => {
  return axiosInstance.get('suggested/').then(res => res.data)
}

export const fetchPlantDetails = async (id) => {
  return axiosInstance.get(`plants/${id}/`).then(res => res.data)
}

export default {
  fetchPlants,
  fetchPlantDetails
}