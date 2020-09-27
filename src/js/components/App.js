import React, { Component } from "react";
import { AppStore } from "../store/AppStore";
import { AppActions } from "../actions/AppActions";

/**
 * Main App component for the flux boiler plate.
 * This will be connected to APP Store and will listen to the events emitted by it.
 * Based on the events emitted from the store will update the state.
 */
class App extends Component {
  /**
   * constructor
   * @param {*} props
   */
  constructor(props) {
    super(props);
    // console.log(`1- Inside constructor...`);
    this.state = {
      data: AppStore.getData(),
    };
    this.performUIUpdate = this.performUIUpdate.bind(this); // This is being needed else this.setState() will not be working in the performUIUpdate()
    this.handleClearClick = this.handleClearClick.bind(this);
  }
  /**
   * Getting the derived states from props
   * @param {*} props
   * @param {*} state
   */
  static getDerivedStateFromProps(props, state) {
    // console.log(`2- Inside getDerivedStateFromProps..`);
    // console.log("props", props);
    // console.log("state", state);
    return state;
  }

  /**
   * Handler for the change Event
   * @param {*} data
   */
  performUIUpdate() {
    let data = AppStore.getData();
    // console.log(`App data `, data);
    this.setState({ data: data });
  }

  /**
   *Component did-mount
   */
  componentDidMount() {
    console.log("3- Inside component Did Mount.");
    AppStore.addListener("CHANGE_EVENT", this.performUIUpdate);
  }
  /**
   * Component will un-mount
   */
  componentWillUnmount() {
    console.log("3- Inside component Will Un-Mount.");
    AppStore.removeListener("CHANGE_EVENT", this.performUIUpdate);
  }

  /**
   * Trigger the Action based on the button click
   * @param {*} event
   */
  handleClick(event) {
    AppActions.handleClickAction(AppStore.generateData());
  }
  /**
   * Trigger Clear action on click of the clear button
   * @param {*} event
   */
  handleClearClick(event) {
    if (this.state.data === "") {
      alert("Please have data before clearing");
      return false;
    }
    AppActions.handleClearAction();
  }
  /**
   * rendering the APP
   */
  render() {
    let buttonStyle = {
        marginTop: 10,
        padding: 10,
        backgroundColor: "mediumspringgreen",
      },
      clearButtonStyle = {
        marginTop: 10,
        padding: 10,
        marginLeft: 10,
        backgroundColor: "aqua",
      };
    return (
      <div>
        <div
          style={{ textAlign: "center", fontFamily: "monospace", fontSize: 20 }}
        >
          My APP
        </div>
        <hr />
        <span
          style={{ backgroundColor: "lightblue", padding: 10, display: "flex" }}
        >
          {this.state.data}
        </span>
        <div>
          <button onClick={this.handleClick} style={buttonStyle}>
            Emit Event
          </button>
          <button onClick={this.handleClearClick} style={clearButtonStyle}>
            Clear
          </button>
        </div>
      </div>
    );
  }
}

export default App;
