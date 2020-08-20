import React, { useReducer } from "react";
import { Container } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import { TodoContext } from "./Context/TodoContext";
import todoReducers from "./Context/reducer";
import TodoForm from "./Components/TodoForm";
import Todos from "./Components/Todos";

const App = () => {
  const [todos, dispatch] = useReducer(todoReducers, []);

  return (
    <TodoContext.Provider value={{ todos, dispatch }}>
      <Container fluid>
        <img src="https://img.icons8.com/bubbles/100/000000/checklist.png" />
        <h1>Todo App with context API</h1>
        <Todos />
        <TodoForm />
      </Container>
    </TodoContext.Provider>
  );
};

export default App;
