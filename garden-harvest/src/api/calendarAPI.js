//this is where Api calls to the backend specificly for the calendar.
//it will eventually be merged with the other api calls.

const BASE_URL = 'http://127.0.0.1:8000/api/'

export const fetchAllEvents = async () => {
  let response = await fetch(`${BASE_URL}calendarEvents/`, {
    headers: {'Content-Type': 'application/json'},
    method: 'GET',
  })
  let data = await response.json()
  console.log(data)
  return data
}