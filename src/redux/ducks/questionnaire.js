import api from "api";

const FETCH_QUESTIONNAIRE = "questionnaire/FETCH";

const start = resource => ({
  type: `${resource}_START`
});

const success = (resource, payload) => ({
  type: `${resource}_SUCCESS`,
  payload
});

const error = (resource, error) => ({
  type: `${resource}_ERROR`,
  error
});

// ACTION CREATOR
export function fetchQuestionnaire() {
  return async dispatch => {
    dispatch(start(FETCH_QUESTIONNAIRE));
    try {
      const resp = await api.request(
        `${process.env.REACT_APP_QUESTIONNAIRE_URL}`
      );

      if (resp.response_code === 0) {
        dispatch(success(FETCH_QUESTIONNAIRE, resp.results));
      } else {
        dispatch(
          error(
            FETCH_QUESTIONNAIRE,
            "Invalid response code from questionnaire request"
          )
        );
      }

      return resp;
    } catch (err) {
      dispatch(error(FETCH_QUESTIONNAIRE, err));
      throw err;
    }
  };
}

export const isQuestionnaireReady = (state) => {
  return !state.questionnaire.isFetching && state.questionnaire.items && state.questionnaire.items.length > 1
}

const initialState = {
  items: [],
  isFetching: false,
  error: null
};
export default (state = initialState, action = {}) => {
  switch (action.type) {
    case `${FETCH_QUESTIONNAIRE}_START`: {
      return { ...state, isFetching: true };
    }
    case `${FETCH_QUESTIONNAIRE}_SUCCESS`: {
      const results = action.payload;
      return { ...state, ...{ items: results, isFetching: false } };
    }
    case `${FETCH_QUESTIONNAIRE}_ERROR`: {
      return { ...state, ...{ error: action.error, isFetching: false } };
    }
    default:
      return state;
  }
};
