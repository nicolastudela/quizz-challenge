// FILL ACTIONS CREATORS AND EXPORT THEM


const savedUser = JSON.parse(localStorage.getItem("user"));
const initialState = {
  name: savedUser.name,
  results: savedUser.results
};

export default (state = initialState, action) => {
  switch (action.type) {
    // do reducer stuff
    default: return state;
  }
};
