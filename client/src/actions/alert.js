import uuid from "uuid";
import { SET_ALERT, REMOVE_ALERT } from "./types";

// Able to dispatch more than one action using thunk middleware after defined parameters
export const setAlert = (msg, alertType, timeout = 5000) => dispatch => {
  // Get random universal ID
  const id = uuid.v4();

  // Dispatch alert action when mismatched password is fired off
  dispatch({
    type: SET_ALERT,
    payload: { msg, alertType, id }
  });

  // Remove alert after 5 seconds
  setTimeout(
    () =>
      dispatch({
        type: REMOVE_ALERT,
        payload: id
      }),
    timeout
  );
};
