import { APIActions } from "../actions";
import {
  entityTypes,
  operationTypes,
  uiPerOperationType,
  dataOperationTypes,
  sliceTypes,
} from "../types";

const getMappedUiOperationTypes = () => {
  return Object.values(operationTypes).reduce((acc, value) => {
    acc[value] = uiPerOperationType;

    return acc;
  }, {});
};

const getMappedEntityTypes = (object) => {
  return Object.values(entityTypes).reduce((acc, value) => {
    acc[value] = object;

    return acc;
  }, {});
};

const initialDataState = {
  ...getMappedEntityTypes(dataOperationTypes),
};

const initialUiState = {
  ...getMappedEntityTypes(getMappedUiOperationTypes()),
};

const initialMetaDataState = {};

const initialState = {
  [sliceTypes.DATA]: initialDataState,
  [sliceTypes.UI]: initialUiState,
  [sliceTypes.METADATA]: initialMetaDataState,
};

const apiRequest = (state, { entityType }) => ({
  ...state,
  [sliceTypes.UI]: {
    ...state[sliceTypes.UI],
    [entityType]: {
      ...state[sliceTypes.UI][entityType],
      loading: true,
      error: null,
    },
  },
});

const apiError = (state, { entityType, error }) => ({
  ...state,
  [sliceTypes.UI]: {
    ...state[sliceTypes.UI],
    [entityType]: {
      ...state[sliceTypes.UI][entityType],
      loading: false,
      error,
    },
  },
});

const apiResponse = (state, action) => state;

const api = (state = initialState, action) => {
  switch (action.type) {
    case APIActions.API_REQUEST:
      return apiRequest(state, action);
    case APIActions.API_ERROR:
      return apiError(state, action);
    case APIActions.API_RESPONSE:
      return apiResponse(state, action);
    default:
      return state;
  }
};

export default api;
