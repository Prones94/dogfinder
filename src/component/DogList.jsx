import React from 'react'
import {NavLink} from "react-router-dom"

const DogList= ({ dogs }) => {
  console.log(dogs);
  return (
    <div>
      <h1>Dog List</h1>
      <ul>
        {dogs.map((dog) => (
          <li key={dog.name}>
            <NavLink to={`/dogs/${dog.name.toLowerCase()}`}>{dog.name}</NavLink>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default DogList