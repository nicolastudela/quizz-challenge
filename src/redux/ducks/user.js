// FILL ACTIONS CREATORS AND EXPORT THEM

const CREATE = "user/CREATE";
const ADD_RESULT = "user/ADD_RESULT";

const createUser = createdUser => ({ type: CREATE, payload: { createdUser } });

export const userSignIn = name => {
  const user = { name, results: [] };
  localStorage.setItem("user", JSON.stringify(user));
  return createUser(user);
};

export const addResult = result => {
  const user = JSON.parse(localStorage.getItem("user"));
  user.results.push(result);
  localStorage.setItem("user", JSON.stringify(user));
  return { type: ADD_RESULT, payload: result };
};

const user = JSON.parse(localStorage.getItem("user"));
const initialState = user || {};

export default (state = initialState, action) => {
  switch (action.type) {
    // do reducer stuff
    case CREATE: {
      const { createdUser } = action.payload;
      return { ...state, ...createdUser };
    }
    case ADD_RESULT: {
      const result = action.payload;
      return { ...state, results: state.results.concat([result]) };
    }
    default:
      return state;
  }
};
