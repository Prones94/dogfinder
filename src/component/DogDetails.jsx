import React from "react";
import { useParams, Navigate, useNavigate } from "react-router-dom";

function DogDetails({ dogs }) {
  const { name } = useParams();
  const navigate = useNavigate()
  const dog = dogs.find((d) => d.name.toLowerCase() === name);

  if (!dog) {
    return <Navigate to="/dogs" replace />;
  }

  return (
    <div>
      <h1>{dog.name}</h1>
      <img src={dog.src} alt={dog.name} />
      <p>Age: {dog.age}</p>
      <ul>
        {dog.facts.map((fact, idx) => (
          <li key={idx}>{fact}</li>
        ))}
      </ul>
      <button onClick={() => navigate("/dogs")}>Back to Dog List</button>
    </div>
  );
}

export default DogDetails;
