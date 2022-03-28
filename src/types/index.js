export const sliceTypes = {
  UI: "ui",
  DATA: "data",
  METADATA: "metadata",
};

export const entityTypes = {
  PRODUCT: "product",
  CART: "cart",
  REVIEW: "review",
  ORDER: "order",
};

export const operationTypes = {
  CREATE: "create",
  EDIT: "edit",
  DELETE: "delete",
  CURRENT: "current",
  LIST: "list",
};

export const dataOperationTypes = {
  [operationTypes.CREATE]: null,
  [operationTypes.EDIT]: null,
  [operationTypes.DELETE]: null,
  [operationTypes.CURRENT]: null,
  [operationTypes.LIST]: [],
};

export const uiPerOperationType = {
  loading: false,
  error: null,
};
