import React, { Component } from "react";
import { connect } from "react-redux";
import { Add } from "../actions";

class AddToDo extends Component {
  state = {
    text: ""
  };

  handleChange = e => {
    this.setState({ text: e.target.value });
  };

  handleClick = e => {
    e.preventDefault();
    this.props.dispatch(Add(this.state.text, this.props.todo.length));
    this.setState({ text: "" });
  };

  render() {
    return (
      <div>
        <form>
          <fieldset>
            <legend>ADD TODO</legend>
            <input
              value={this.state.text}
              type="text"
              placeholder="Write your todo here"
              onChange={this.handleChange}
            />{" "}
            <button onClick={this.handleClick}>ADD</button>
          </fieldset>
        </form>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    todo: state
  };
}

export default connect(mapStateToProps)(AddToDo);
