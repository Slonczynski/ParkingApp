import React from 'react';
import Tile from './Tile';
import './scss/App.scss';

function App() {
  return (
    <div className="App">
      <div className="d-flex">
        <div className="d-flex justify-content-start">
          <div className="previous-day">
            <i className="big arrow right icon" />
          </div>
        </div>
        <div className="d-flex justify-content-end">
          <div className="next-day">
            <i className="big arrow left icon" />
          </div>
        </div>
      </div>
      <div className="d-flex flex-row justify-content-center align-items-center">
        <div className="p-2">Flex item 1</div>
        <div className="p-2">Flex item 1</div>
      </div>
    </div>
  );
}

export default App;
