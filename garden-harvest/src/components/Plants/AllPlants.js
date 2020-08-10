import React, {useEffect, useState} from 'react'
import {fetchPlants} from '../../api/plantAPI'
import {Link} from 'react-router-dom'


function AllPlants() {
  const [plants, setPlants] = useState([])
  useEffect(() => {
    async function fetchAPI() {
      let response = await fetchPlants()
      let data = await response.json()
      let list = []
      for (let i = 0; i < data.length; i++) {
        list.push(data[i]['plant'])
      }
      setPlants(list)
    }

    fetchAPI()
  }, [])

  return (
    <div>
      {plants.sort((a, b) => a.common_name.localeCompare(b.common_name)).map((plant) => {
        return (
          <div key={plant.pk}>
            <Link to={{pathname: `/plants/${plant.pk}/`, props: {plant}}}>{plant.common_name}</Link>
          </div>
        )
      })}
    </div>
  );

}

export default AllPlants