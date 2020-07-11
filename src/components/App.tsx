import React from 'react';
import { connect } from 'react-redux';
import 'semantic-ui-css/semantic.min.css';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';

import './scss/App.scss';
import NavigationBar from './NavigationBar';
import ParkingSpots from './ParkingSpots';
import { RootState } from './store/reducers/mainReducer';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <NavigationBar />
        <ParkingSpots />
      </div>
    );
  }
}

const mapStateToProps = (state: RootState) => {
  return state;
};

export default compose<any>(
  connect(mapStateToProps),
  firestoreConnect([{ collection: 'spots-collection' }])
)(App);
