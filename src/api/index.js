import axios from "axios";
import { operationTypes } from "../types";

const POST = (url, body, headers, config) =>
  axios.post(url, body, { headers, ...config });

const PUT = (url, body, headers, config) =>
  axios.put(url, body, { headers, ...config });

const DELETE = (url, body, headers, config) =>
  axios.delete(url, { headers, ...config });

const GET = (url, body = {}, headers, config) =>
  axios.get(url, { headers, ...config });

const getAPIAction = (operationType) => {
  switch (operationType) {
    case operationTypes.CREATE:
      return POST;
    case operationTypes.EDIT:
      return PUT;
    case operationTypes.DELETE:
      return DELETE;
    default:
      return GET;
  }
};

const exports = { getAPIAction, POST, DELETE, PUT, GET };

export default exports;
