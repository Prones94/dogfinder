import React, { useState } from 'react';
import './App.css';
import { Routes, Route, Navigate } from "react-router-dom"
import ColorList from './component/ColorList';
import NewColorForm from './component/NewColorForm';
import ColorDetail from './component/ColorDetail';
import { v4 as uuid } from "uuid"
// import DogList from './component/DogList';
// import DogDetails from './component/DogDetails';
// import whiskeyImg from "./whiskey.jpg"
// import dukeImg from "./duke.jpg"
// import perryImg from "./perry.jpg"
// import tubbyImg from "./tubby.jpg"

// const defaultDogs = [
//   {
//     name: "Whiskey",
//     age: 5,
//     src: whiskeyImg,
//     facts: [
//       "Whiskey loves eating popcorn.",
//       "Whiskey is a terrible guard dog.",
//       "Whiskey wants to cuddle with you!"
//     ]
//   },
//   {
//     name: "Duke",
//     age: 3,
//     src: dukeImg,
//     facts: [
//       "Duke believes that ball is life.",
//       "Duke likes snow.",
//       "Duke enjoys pawing other dogs."
//     ]
//   },
//   {
//     name: "Perry",
//     age: 4,
//     src: perryImg,
//     facts: [
//       "Perry loves all humans.",
//       "Perry demolishes all snacks.",
//       "Perry hates the rain."
//     ]
//   },
//   {
//     name: "Tubby",
//     age: 4,
//     src: tubbyImg,
//     facts: [
//       "Tubby is really stupid.",
//       "Tubby does not like walks.",
//       "Angelina used to hate Tubby, but claims not to anymore."
//     ]
//   }
// ]

function App() {
  const [colors, setColors] = useState([
    {name: "red", value: "#ff0000"},
    {name: "blue", value: "#0000ff"},
    {name: "green", value: "#00ff00"},
  ])

  const addColor = (newColor) => {
    setColors((prevColors) => [{ id: uuid(), newColor}, ...prevColors])
  }
  return (
    <div>
      <Routes>
        {/* <Route path="/dogs" element={<DogList dogs={defaultDogs} />}/>
        <Route path="/dogs/:name" element={<DogDetails dogs={defaultDogs} />}/>
        <Route path="*" element={<Navigate to="/dogs" replace/>}/> */}
        <Route path="colors" element={<ColorList colors={colors} />} />
        <Route path="colors/new" element={<NewColorForm addColor={addColor} />} />
        <Route path="colors/:color" element={<ColorDetail colors={colors} />} />
        <Route path="*" element={<Navigate to="/colors" replace />} />
      </Routes>
    </div>
  );
}

export default App;
