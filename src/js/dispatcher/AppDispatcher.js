import {
  CLICK_ACTION_DISPATCHER,
  CLEAR_ACTION_DISPATCHER,
  ASYNC_LOAD_END_ACTION_DISPATCHER,
  ASYNC_LOAD_START_ACTION_DISPATCHER,
} from "../utils/AppConstants";
import { Dispatcher } from "flux";

/**
 * Creating App dispatcher.
 * This will be responsible for having callback registry.
 * This will be connected to Actions and Store both.
 * Actions will put in data in Store via dispatcher.
 */
export const AppDispatcher = Object.assign(new Dispatcher(), {
  /**
   * Handling the click action
   * @param {*} action
   */
  handleClickAction: function (action) {
    this.dispatch({
      source: CLICK_ACTION_DISPATCHER,
      action,
    });
  },
  /**
   * Handling the clear action triggered by the view
   * @param {*} action
   */
  handleClearAction: function (action) {
    this.dispatch({
      source: CLEAR_ACTION_DISPATCHER,
      action,
    });
  },
  /**
   * Dispatching the Async load start action
   * @param {*} action : action object
   */
  handleAsyncLoadStartAction: function (action) {
    this.dispatch({
      source: ASYNC_LOAD_START_ACTION_DISPATCHER,
      action,
    });
  },
  /**
   * Dispatching the Async load end action
   * @param {*} action : action object
   */
  handleAsyncLoadEndAction: function (action) {
    this.dispatch({
      source: ASYNC_LOAD_END_ACTION_DISPATCHER,
      action,
    });
  },
});
