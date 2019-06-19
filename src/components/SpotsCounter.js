import React from 'react';
import { connect } from 'react-redux';
import { DateTime } from 'luxon';

import '../components/scss/SpotsCounter.scss';

class SpotsCounter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      occupiedSpotsNumber: ''
    };
  }
  componentDidUpdate() {
    const currentData = DateTime.fromISO(
      this.props.switcherReducer.currentDay.timestamp
    ).toFormat('dd-MM-yyyy');

    if (
      this.props.firestoreReducer.ordered['spots-collection']['0'][
        currentData
      ] !== undefined ||
      null
    ) {
      if (
        this.state.occupiedSpotsNumber !==
        Object.keys(
          this.props.firestoreReducer.ordered['spots-collection']['0'][
            currentData
          ]
        ).length
      ) {
        this.setState({
          occupiedSpotsNumber: Object.keys(
            this.props.firestoreReducer.ordered['spots-collection']['0'][
              currentData
            ]
          ).length
        });
      }
    }
    // TODO:
    // return else with div => all spots avaiable!
  }

  // if (this.occupiedSpotsNumber < 8) {
  //   return 'Wolnych miejsc: {occupiedSpotsNumber - 8}';
  // } else return 'Brak wolnych miejsc';}

  render() {
    console.log(this.state.occupiedSpotsNumber);
    return (
      <div className="text-center">
        {this.state.occupiedSpotsNumber < 8 ? (
          <div className="free-spots">
            <span>
              Ilość wolnych miejsc: {8 - this.state.occupiedSpotsNumber}
            </span>
          </div>
        ) : (
          <div className="no-free-spots">
            Na ten dzień nie ma już wolnych miejsc
          </div>
        )}
      </div>
    );
  }
}
const mapStateToProps = state => {
  return state;
};

export default connect(mapStateToProps)(SpotsCounter);
