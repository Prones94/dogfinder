import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function NewColorForm({ addColor }) {
  const [formData, setFormData] = useState({ name: "", value: "#000000" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((data) => ({ ...data, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addColor(formData);
    navigate("/colors");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Color Name:
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Color Value:
        <input
          type="color"
          name="value"
          value={formData.value}
          onChange={handleChange}
          required
        />
      </label>
      <button>Add Color</button>
    </form>
  );
}

export default NewColorForm;
