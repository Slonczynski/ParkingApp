import { connect } from 'react-redux';
import Weekday from './Weekday';

const mapStateToProps = (state: any) => ({
  switcherReducer: state.switcherReducer
});

export default connect(mapStateToProps, null)(Weekday);
