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
    case 'FETCH_DATA':
      console.log('data was fetched', action.data);
      return state;
    default:
      return state;
  }
};
