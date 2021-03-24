import React, { useState } from "react";

import "./styles.css";

function App() {
  const [name, setname] = useState("Abhi");
  return (
    <div className="App">
      <h1>{name}</h1>
      <h2>This is Final update</h2>
      <h3>Magic happened</h3>
      <p>Abhishek edited the fork</p>
      <p>Abhishek edited the fork another time...!!!!-----</p>
      <h3>Again Magic happened---33</h3>
    </div>
  );
}

export default App;
