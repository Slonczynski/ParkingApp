import React from 'react';
import { Button, Header, Input, Modal } from 'semantic-ui-react';

class ActionModal extends React.Component {
  state = {
    isParentOpen: false,
    isChildOpen: false
  };

  handleClick = () => {
    this.setState({
      isParentOpen: !this.state.isOpen
    });
  };

  handleFocus = () => {
    this.setState({
      isChildOpen: true
    });
  };

  render() {
    return (
      <div>
        <Modal open={this.state.isParentOpen} size="large">
          ...
          <Input onFocus={this.handleFocus} />
        </Modal>
        <Modal open={this.state.isChildOpen} size="small">
          ...
        </Modal>
        <Button onClick={this.handleClick} />
      </div>
    );
  }
}
export default ActionModal;
