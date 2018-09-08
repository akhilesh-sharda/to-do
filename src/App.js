import React, { Component } from "react";
import "./App.css";
import AddTodo from "./components/addToDo";
import Todolist from "./containers/todoList";
import Filter from "./containers/filter";

class App extends Component {
  render() {
    return (
      <div>
        <header className="App-header">
          <h1 className="App-title">
            <AddTodo />
          </h1>
        </header>
        <Todolist />
        <footer className="App-footer">
          <Filter />
        </footer>
      </div>
    );
  }
}

export default App;
