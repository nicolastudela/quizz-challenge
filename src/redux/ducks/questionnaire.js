import api from "api";
import htmlEntities from "html-entities";

const entities = new htmlEntities.AllHtmlEntities();

const FETCH_QUESTIONNAIRE = "questionnaire/FETCH";

const start = resource => ({
  type: `${resource}_START`
});

const success = (resource, payload) => ({
  type: `${resource}_SUCCESS`,
  payload
});

const error = (resource, err) => ({
  type: `${resource}_ERROR`,
  error: err
});

// ACTION CREATOR
export function fetchQuestionnaire() {
  return async dispatch => {
    dispatch(start(FETCH_QUESTIONNAIRE));
    try {
      const resp = await api.request(
        `${process.env.REACT_APP_QUESTIONNAIRE_URL}`
      );

      if (resp.responseCode === 0) {
        dispatch(
          success(
            FETCH_QUESTIONNAIRE,
            resp.results.map(result => {
              // We are safe cause won't be using response obj after this
              // eslint-disable-next-line no-param-reassign
              result.question = entities.decode(result.question);
              return result;
            })
          )
        );
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
