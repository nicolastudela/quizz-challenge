// FILL ACTIONS CREATORS AND EXPORT THEM

const CREATE = "user/CREATE";


const createUser = (user) => ({ type: CREATE, payload: { user }})

export const userSignIn = name => {
  const user = { name, results: []}
  localStorage.setItem("user", JSON.stringify(user))
  return createUser(user)
};

const user = JSON.parse(localStorage.getItem("user"));
const initialState = {
  user
};

export default (state = initialState, action) => {
  switch (action.type) {
    // do reducer stuff
    case CREATE: {
      const { user } = action.payload;
      debugger
      return { ...state, user }
    }
    default:
      return state;
  }
};
