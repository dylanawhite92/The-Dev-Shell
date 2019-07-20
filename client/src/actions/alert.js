import uuid from "uuid";
import { SET_ALERT, REMOVE_ALERT } from "./types";

// Able to dispatch more than one action using thunk middleware after defined parameters
export const setAlert = (msg, alertType) => dispatch => {
  // Get random universal ID
  const id = uuid.v4();

  dispatch({
    type: SET_ALERT,
    payload: { msg, alertType, id }
  });
};
