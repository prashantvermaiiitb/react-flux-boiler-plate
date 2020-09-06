import { EventEmitter } from "events";
import { CHANGE_EVENT, CLICK_ACTION } from "../utils/AppConstants";
import { AppDispatcher } from "../dispatcher/AppDispatcher";
/**
 * App Store to be used for the Flux.
 * This will provide the initial data.
 * This will emit the changes to which view should be listening.
 * This will register with Dispatcher for listening to the actions generated and their data received.
 */

let data = Math.random();

export const AppStore = Object.assign({}, EventEmitter.prototype, {
  /**
   * generating random data
   */
  getData: () => {
    return data;
  },
  /**
   * generating the random number
   */
  generateData: () => Math.random(),
  /**
   * Adding the Listener
   * @param {*} callback
   */
  addChangeListener: function (callback) {
    this.on(CHANGE_EVENT, callback);
  },
  /**
   * removing the listener
   * @param {*} callback
   */
  removeChangeListener: function (callback) {
    this.removeListener(CHANGE_EVENT, callback);
  },
  /**
   * Adding random data
   * @param {*} text
   */
  addItem: function (text) {
    data += ` / ` + text;
  },
  /**
   * Emitting the change
   */
  emitChange: function () {
    this.emit(CHANGE_EVENT);
  },
});

/**
 * For the dispatcher to know what we are going to dispatch from the actions.
 */
AppDispatcher.register(function (data) {
//   console.log("Inside register ..", data);

  let action = data.action;

  switch (action.actionType) {
    case CLICK_ACTION:
      AppStore.addItem(data.action.payload);
      AppStore.emitChange();
      break;
  }

  return true;
});
