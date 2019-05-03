import React from "react";
import Tile from "./Tile";
import "./scss/App.scss";

function App() {
  return (
    <div className="App">
      <div className="d-flex justify-content-between align-items-center">
        <div className="previous-day">
          <div className="text-center">
            <i className="circular inverted teal large arrow left icon" />
            <div className="yesterday">
              Wczoraj
              <br />
              30.04.2019
            </div>
          </div>
        </div>
        <div className="text-center">
          <div className="today">
            Dzisiaj
            <br /> 01.05.2019
          </div>
        </div>
        <div className="next-day">
          <div className="text-center">
            <i className="circular inverted teal large arrow right icon" />
            <div className="tomorrow">
              Jutro
              <br />
              02.05.2019
            </div>
          </div>
        </div>
      </div>
      <div className="parking-spots">
        <Tile />
      </div>
    </div>
  );
}

export default App;
