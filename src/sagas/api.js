import { call, put, takeEvery } from "redux-saga/effects";
import APICore from "../api";
import APIConstants from "../api/constants";

import APIActions, {
  apiResponse as apiResponseAction,
  apiError as apiErrorAction,
} from "../actions/api";

function* apiRequest({
  type,
  payload: { entityType, operationType, body = {}, headers = {}, config = {} },
}) {
  try {
    const { data } = yield call(
      APICore.getAPIAction(operationType),
      APIConstants[entityType][operationType],
      body,
      headers,
      config
    );
    yield put(
      apiResponseAction({
        entityType,
        operationType,
        data,
      })
    );
  } catch ({ message: error }) {
    yield put(
      apiErrorAction({
        entityType,
        operationType,
        error,
      })
    );
  }
}

const api = [takeEvery(APIActions.API_REQUEST, apiRequest)];

export default api;
