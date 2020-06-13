import { connect } from 'react-redux'

import Weekday from './Weekday'

const mapStateToProps = (state: any) => {
    return state;
};

export default connect(mapStateToProps)(Weekday);