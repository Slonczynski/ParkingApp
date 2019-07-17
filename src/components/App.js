import React from 'react';
import { connect } from 'react-redux';
import 'semantic-ui-css/semantic.min.css';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';

import './scss/App.scss';
import NavigationBar from './NavigationBar';
import ParkingSpots from './ParkingSpots';

class App extends React.Component {
  render() {
    console.log(this.props);
    return (
      <div className="App">
        <NavigationBar />
        <ParkingSpots />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return state;
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: 'spots-collection' }])
)(App);
