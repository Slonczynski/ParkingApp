import React from 'react';
import { connect } from 'react-redux';
import 'semantic-ui-css/semantic.min.css';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';

import './scss/App.scss';
import NavigationBar from './NavigationBar';
import Weekday from './Weekday';
import SpotsCounter from './SpotsCounter';
import ParkingSpots from './ParkingSpots';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <NavigationBar />
        <Weekday />
        <SpotsCounter />
        <ParkingSpots />
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  return state;
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: 'spots-collection' }])
)(App);
