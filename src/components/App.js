import React from "react";
import Tile from "./Tile";
import "./scss/App.scss";
import DayButton from "./DayButton";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="d-flex justify-content-between align-items-center">
          <DayButton day="yesterday" />
          <DayButton day="today" />
          <DayButton day="tomorrow" />
        </div>
        <div className="permanent-spots">
          <div className="container-fluid">
            <div className="row justify-content-center">
              <Tile car="1." />
              <Tile car="2." />
              <Tile car="Miejsce trzy" />
            </div>
          </div>
        </div>
        <div className="temporary-spots">
          <div className="container-fluid">
            <div className="row justify-content-center">
              <Tile car="Miejsce cztery" />
              <Tile car="Miejsce pięć" />
              <Tile car="Miejsce sześć" />
              <Tile car="Miejsce siedem" />
              <Tile car="Miejsce osiem" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default App;
