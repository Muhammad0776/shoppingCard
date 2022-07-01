import { ActionType } from "../contants/action-type";

const initialSatate = {
  product: [],
};

export const productReducer = (state = initialSatate, { type, payload }) => {
  switch (type) {
    case ActionType.SET_PRODUCTS:
      return { ...state, product: payload };
    default:
      return state;
  }
};

export const selectedProductReducer = (
  state = initialSatate,
  { type, payload }
) => {
  switch (type) {
    case ActionType.SELECTED_PRODUCT:
      return { ...state, ...payload };
    case ActionType.REMOVE_SELECTED_PRODUCT:
      return {};
    default:
      return state;
  }
};
