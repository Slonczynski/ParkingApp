import React from "react";
import Tile from "./Tile";
import "./scss/App.scss";

function App() {
  return (
    <div className="App">
      <div className="previous-day">
        <i className="big arrow right icon" />
      </div>
      <div className="next-day">ASDASD </div>
      <div className="d-flex flex-row justify-content-center align-items-center">
        <div className="p-2">Flex item 1</div>
        <div className="p-2">Flex item 1</div>
      </div>
    </div>
  );
}

export default App;
