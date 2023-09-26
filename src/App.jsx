import React, { useState } from "react";

const App = () => {
  //set selected color:
  const [selectedColor, setSelectedColor] = useState(null);

  // Write your Color component here
  const Color = ({ color, setSelectedColor }) => {
    // Add the "selected" class if the color is clicked
    const colorClass = selectedColor === color ? "selected " + color : color;

    return (
      <div className={colorClass} onClick={() => setSelectedColor(color)}></div>
    );
  };

  return (
    <div id="container">
      <div id="navbar">
        <div>Currently selected: </div>
        <div className={selectedColor}>{selectedColor}</div>
      </div>

      <div id="colors-list">
        <Color color="red" setSelectedColor={setSelectedColor} />
        <Color color="blue" setSelectedColor={setSelectedColor} />
        <Color color="green" setSelectedColor={setSelectedColor} />
      </div>
    </div>
  );
};

export default App;
