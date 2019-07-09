import React from 'react';
import { Label } from 'semantic-ui-react';

import ActionModal from './ActionModal';
import ConfirmationModal from './ConfirmationModal';
import './scss/Tile.scss';

class Tile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      openModal: false
    };
  }

  showModal = () => {
    this.setState({ ...this.state, openModal: true });
  };

  hideModal = () => {
    this.setState({ ...this.state, openModal: false });
  };

  render() {
    return (
      <div className="parking-spot">
        <div className="spot-number">{this.props.car}</div>
        <img
          onClick={this.showModal}
          className={this.props.className}
          src={require('./tile.svg')}
          alt="parking-place"
        />

        {this.props.className === 'parking-place-free' ? (
          <ActionModal
            open={this.state.openModal}
            handleClose={this.hideModal}
            car={this.props.car}
          />
        ) : (
          <div>
            <Label
              onClick={this.showModal}
              className="spot-occupant"
              size="big"
            >
              {this.props.name.join('')}
            </Label>
            <ConfirmationModal
              open={this.state.openModal}
              handleClose={this.hideModal}
              car={this.props.car}
              name={this.props.name.join('')}
            />
          </div>
        )}
      </div>
    );
  }
}

export default Tile;
