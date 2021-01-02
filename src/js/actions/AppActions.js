import { AppDispatcher } from "../dispatcher/AppDispatcher";
import {
  CLICK_ACTION,
  CLEAR_ACTION,
  LOAD_START_ACTION,
  LOAD_END_ACTION,
} from "../utils/AppConstants";
/**
 * Action Creator function for the Clicking event handling
 * @param {*} payload
 */
export const AppActions = {
  /**
   * Handle button click action method for generating Action object.
   * @param {*} payload
   */
  handleClickAction(payload) {
    AppDispatcher.handleClickAction({
      actionType: CLICK_ACTION,
      payload,
    });
  },
  /**
   * Handle Async click action
   * @param {*} payload
   */
  handleAsyncClickAction(payload) {
    AppDispatcher.handleAsyncLoadStartAction({
      actionType: LOAD_START_ACTION,
      payload: { ...payload, loading: true },
    });
    setTimeout(function () {
      // alert("Triggering async action now");
      // AppDispatcher.handleAsyncLoadEndAction({
      //   actionType: LOAD_END_ACTION,
      //   payload: { ...payload, loading: false },
      // });
      fetch("https://jsonplaceholder.typicode.com/users")
        .then((response) => response.json())
        .then((json) => {
          console.log({ ...payload, loading: false, users: json });
          AppDispatcher.handleAsyncLoadEndAction({
            actionType: LOAD_END_ACTION,
            payload: { ...payload, loading: false, users: json },
          });
        });
    }, 5000);
  },
  /**
   * Clearing whatever has been written in the span on the UI
   * @param {*} payload - will be blank string
   */
  handleClearAction(payload = "") {
    AppDispatcher.handleClickAction({
      actionType: CLEAR_ACTION,
      payload,
    });
  },
};
