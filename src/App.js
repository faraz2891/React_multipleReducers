import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { connect } from "react-redux";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="col">
          <div>
            <span>A :</span>
            <span>{this.props.a}</span>
          </div>
          <button onClick={() => this.props.updateA(this.props.b)}>
            Update A
          </button>
        </div>
        <div className="col">
          <div>
            <span>B :</span>
            <span>{this.props.b}</span>
          </div>
          <button onClick={() => this.props.updateB(this.props.a)}>
            Update B
          </button>
        </div>
      </div>
    );
  }
}

const mapStoreToProps = store => {
  return {
    a: store.rA.a,
    b: store.rB.b
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updateA: valB => dispatch({ type: "UPDATE_A", b: valB }),
    updateB: valA => dispatch({ type: "UPDATE_B", a: valA })
  };
};

export default connect(
  mapStoreToProps,
  mapDispatchToProps
)(App);
