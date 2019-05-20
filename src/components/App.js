import React from "react";
import Tile from "./Tile";
import Separator from "./Separator";
import DayButton from "./DayButton";
import "./scss/App.scss";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { currentDate: null };
  }

  render() {
    return (
      <div className="App">
        <div className="d-flex justify-content-between align-items-center">
          <DayButton day="yesterday" />
          <DayButton day="today" />
          <DayButton day="tomorrow" />
        </div>
        <div className="temporary-spots">
          <Separator spotsType="Miejsca tymczasowe:" />
          <div className="container-fluid">
            <div className="row justify-content-center">
              <Tile car="1." />
              <Tile car="2." />
              <Tile car="3." />
            </div>
          </div>
        </div>
        <div className="permanent-spots">
          <Separator spotsType="Miejsca stałe:" />
          <div className="container-fluid">
            <div className="row justify-content-center">
              <Tile car="4." />
              <Tile car="5." />
              <Tile car="6." />
              <Tile car="7." />
              <Tile car="8." />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default App;
