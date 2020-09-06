import { AppDispatcher } from "../dispatcher/AppDispatcher";
import { CLICK_ACTION } from "../utils/AppConstants";
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
};
