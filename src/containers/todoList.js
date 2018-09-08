import React, { Component } from "react";
import { connect } from "react-redux";
import { complete } from "../actions";

class TodoList extends Component {
  changeStatus = e => {
    this.props.dispatch(complete(e.target.id));
  };

  //   incomplete = e => {
  //     this.props.dispatch(incomplete(e.target.id));
  //   };

  render() {
    return (
      <div>
        <h1>TODO</h1>
        <ul>
          {this.props.todo.map(
            todos =>
              !todos.completed ? (
                <li key={todos.id}>
                  <input
                    type="checkbox"
                    id={todos.id}
                    onChange={this.changeStatus}
                  />
                  {todos.text}
                </li>
              ) : (
                <li key={todos.id}>
                  <input
                    type="checkbox"
                    defaultChecked
                    id={todos.id}
                    key={todos.id}
                    onChange={this.changeStatus}
                  />
                  <strike>{todos.text}</strike>
                </li>
              )
          )}
        </ul>
      </div>

      //<div>{console.log(this.props.todo)} hi!!</div>
    );
  }
}

function mapStateToProps(state) {
  console.log(state);
  return {
    todo: state
  };
}

export default connect(mapStateToProps)(TodoList);
