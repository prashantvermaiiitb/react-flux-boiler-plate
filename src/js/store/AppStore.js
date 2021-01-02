import { EventEmitter } from "events";
import {
  CHANGE_EVENT,
  CLICK_ACTION,
  CLEAR_ACTION,
  LOAD_END_ACTION,
  LOAD_START_ACTION,
} from "../utils/AppConstants";
import { AppDispatcher } from "../dispatcher/AppDispatcher";
/**
 * App Store to be used for the Flux.
 * This will provide the initial data.
 * This will emit the changes to which view should be listening.
 * This will register with Dispatcher for listening to the actions generated and their data received.
 * @todo Store is doing more in terms of emitting and adding 'actionListener'
 * @todo Store is also providing the data as well to the Application
 */

let data = { number: Math.random() };

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
  generateData: () => {
    return { number: Math.random() };
  },
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
    let prefix = data.number !== "" ? " / " : "";
    data.number += prefix + text;
  },
  /**
   * Clearing whatever data that has been put in the store
   */
  clearItem: function () {
    // data.number = "";
    data = {};
  },
  /**
   * Emitting the change
   */
  emitChange: function () {
    this.emit(CHANGE_EVENT);
  },
  /**
   * Adding loader in the the data-set
   */
  addLoader: function () {
    data.loader = true;
    delete data.users;
  },
  /**
   * removing the data-loader key to indicate loading has been done
   */
  removeLoader: function () {
    delete data.loader;
  },
  /**
   * adding users in the store
   * @param {*} users
   */
  addUsers: function (users) {
    data.users = users;
  },
});

/**
 * For the dispatcher to know what we are going to dispatch from the actions.
 * @todo : This is similar to what is being happening in the Reducer part ?
 */
AppDispatcher.register(function (data) {
  //   console.log("Inside register ..", data);

  let action = data.action;

  switch (action.actionType) {
    case CLICK_ACTION:
      AppStore.addItem(data.action.payload.number);
      AppStore.emitChange();
      break;
    case CLEAR_ACTION:
      AppStore.clearItem();
      AppStore.emitChange();
      break;
    case LOAD_START_ACTION:
      AppStore.addLoader();
      AppStore.emitChange();
      break;
    case LOAD_END_ACTION:
      AppStore.addUsers(data.action.payload.users);
      AppStore.removeLoader();
      AppStore.emitChange();
      break;
  }

  return true;
});
