import React, { useState } from "react";
import miceData from "../../miceMockData.json";

const SearchFilters = () => {
  const [gripType, setGripType] = useState("");
  const [shape, setShape] = useState("");
  const [weight, setWeight] = useState("");
  const [size, setSize] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = () => {
    let filteredMice = [...miceData];

    if (gripType) {
      filteredMice = filteredMice.filter(
        (mouse) => mouse.gripType === gripType
      );
    }

    if (shape) {
      filteredMice = filteredMice.filter((mouse) => mouse.shape === shape);
    }

    if (weight) {
      filteredMice = filteredMice.filter((mouse) => mouse.weight === weight);
    }

    if (size) {
      filteredMice = filteredMice.filter((mouse) => mouse.size === size);
    }


    setSearchResults(filteredMice);
  };

  return (
    <div>
      <select onChange={(e) => setGripType(e.target.value)}>
        <option value="">Grip Type</option>
        <option value="palm">Palm</option>
        <option value="claw">Claw</option>
        <option value="fingertip">Fingertip</option>
      </select>
      <select onChange={(e) => setShape(e.target.value)}>
        <option value="">Shape</option>
        <option value="ergonomic">Ergonomic</option>
        <option value="ambidextrous">Ambidextrous</option>
        <option value="right-handed">Right-Handed</option>
      </select>
      <select onChange={(e) => setWeight(e.target.value)}>
        <option value="">Weight</option>
        <option value="light">Light</option>
        <option value="medium">Medium</option>
        <option value="heavy">Heavy</option>
      </select>
      <select onChange={(e) => setSize(e.target.value)}>
        <option value="">Size</option>
        <option value="small">Small</option>
        <option value="medium">Medium</option>
        <option value="large">Large</option>
      </select>
      <button onClick={handleSearch}>Search</button>
      {searchResults.map((mouse) => (
        <div key={mouse.name}>
          <p>Name: {mouse.name}</p>
          <p>Brand: {mouse.brand}</p>
          <p>Grip Type: {mouse.gripType}</p>
          <p>Shape: {mouse.shape}</p>
          <p>Weight: {mouse.weight}</p>
          <p>Size: {mouse.size}</p>
        </div>
      ))}
    </div>
  );
};

export default SearchFilters;

