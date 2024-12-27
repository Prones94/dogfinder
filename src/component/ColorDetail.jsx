import React from 'react'
import { useParams, Navigate, NavLink } from "react-router-dom"

function ColorDetail({ colors }){
  const {color} = useParams()
  const selectedColor = colors.find((c) => c.name === color)

  if (!selectedColor){
    return <Navigate to="/colors" replace />
  }

  return (
    <div style={{ backgroundColor: selectedColor.value, height: "100vh", color: "#fff" }}>
      <h1>{selectedColor.name}</h1>
      <p>This is the color {selectedColor.name}!</p>
      <NavLink to="/colors">Go Back</NavLink>
    </div>
  )
}

export default ColorDetail