import React from "react";
import { ListGroup, ListGroupItem } from "reactstrap";
import { FaCheckDouble } from "react-icons/fa";
const Todos = ({ todos, markComplect }) => {
  return (
    <ListGroup className="mt-5 mb-2 item">
      {todos.map((todo) => (
        <ListGroupItem key={todo.id}>
          {todo.todoString}
          <span>
            <FaCheckDouble
              className="float-right"
              onClick={() => markComplect(todo.id)}
            ></FaCheckDouble>
          </span>
        </ListGroupItem>
      ))}
    </ListGroup>
  );
};

export default Todos;
