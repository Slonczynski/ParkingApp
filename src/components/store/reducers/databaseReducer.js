// ------------------------------------
// Initial state
// ------------------------------------
const initialState = {
  data: []
};

// ------------------------------------
// Reducer
// ------------------------------------
export default (state = initialState, action) => {
  switch (action.type) {
    case 'SEND_DATA':
      console.log('data was send', action.data);
      return state;
    case 'SEND_DATA_ERROR':
      console.log('send data error', action.err);
      return state;
    default:
      return state;
  }
};
