import React, { Component } from "react";
import { connect } from "react-redux";

class Filter extends Component {
  active = e => {
    e.preventDefault();
    this.props.dispatch({ type: "ACTIVE_TODO" });
  };

  all = e => {
    e.preventDefault();
    this.props.dispatch({ type: "ALL_TODO" });
  };

  completed = e => {
    e.preventDefault();
    this.props.dispatch({ type: "COMPLETED_TODO" });
  };

  render() {
    return (
      <div>
        <fieldset>
          <legend>
            <b>show :</b>
          </legend>
          <button onClick={this.all}>All</button>{" "}
          <button onClick={this.active}>Active</button>{" "}
          <button onClick={this.completed}>Completed</button>
        </fieldset>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    todo: state
  };
}

export default connect(mapStateToProps)(Filter);
