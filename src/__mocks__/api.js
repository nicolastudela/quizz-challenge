import booleanQuestResponse from "./booleanQuestionnaireResponse.mock";

const request = (url, options = {}) => {
  return Promise.resolve(booleanQuestResponse);
};

export default {
  request
};
