const FETCH_QUESTIONNAIRE = 'questionnaire/FETCH'


// FILL ACTIONS CREATORS AND EXPORT THEM

const initialState = {
  items: [],
  isFetching: false,
}
export default (state = initialState, action = {}) => {
  switch (action.type) {
    // do reducer stuff
    default: return state;
  }
}