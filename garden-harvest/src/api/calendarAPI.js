import axiosInstance from './axiosAPI';

export const fetchAllEvents = async () => {
  return await axiosInstance.get('calendarEvents/').then(res => res.data)
}
