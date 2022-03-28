export const API_REQUEST = "API_REQUEST";
export const API_RESPONSE = "API_RESPONSE";
export const API_ERROR = "API_RESPONSE";

const APIActions = {
  API_REQUEST,
  API_RESPONSE,
  API_ERROR,
};

export const apiRequest = (payload) => ({
  type: API_REQUEST,
  payload,
});

export const apiResponse = (payload) => ({
  type: API_RESPONSE,
  payload,
});

export const apiError = (payload) => ({
  type: API_ERROR,
  payload,
});

export default APIActions;
