import React from 'react'
import { NavLink } from 'react-router-dom'

function ColorList({ colors }) {
  return (
    <div>
      <h1>Welcome to the Color Factory</h1>
      <NavLink to="/colors/new">Add a New Color</NavLink>
      <ul>
        {colors.map((color) =>
          color.name ? (
            <li key={color.id}>
              <NavLink to={`/colors/${color.name}`}>{color.name}</NavLink>
            </li>
          ) : null
        )}
      </ul>
    </div>
  )
}

export default ColorList