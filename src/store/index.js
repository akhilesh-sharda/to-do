import { createStore } from "redux";
import completeReducer from "../reducers/completeReducer";

const initialState = [
  {
    id: 0,
    text: "chores",
    completed: false
  },
  {
    id: 1,
    text: "test",
    completed: false
  },
  {
    id: 2,
    text: "random",
    completed: true
  },
  {
    id: 3,
    text: "ran",
    completed: true
  }
];
const store = createStore(completeReducer, initialState);

export default store;
