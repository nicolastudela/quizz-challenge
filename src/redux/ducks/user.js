// FILL ACTIONS CREATORS AND EXPORT THEM

const CREATE = "user/CREATE";
const RESET = "user/RESET";
const ADD_RESULT = "user/ADD_RESULT";

const createUser = createdUser => ({ type: CREATE, payload: { createdUser } });

export const userSignIn = name => {
  const user = { name, results: [] };
  localStorage.setItem("user", JSON.stringify(user));
  return createUser(user);
};

export const reset = () => {
  localStorage.removeItem("user");
  return { type: RESET };
};

export const addResult = result => {
  const user = JSON.parse(localStorage.getItem("user"));
  user.results.unshift(result);
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
    case RESET: {
      return {};
    }
    case ADD_RESULT: {
      const result = action.payload;
      const updTresults = state.results.slice();
      updTresults.unshift(result);
      return { ...state, results: updTresults };
    }
    default:
      return state;
  }
};
