import React, { useEffect, useState } from "react";
import todoContext from "./todoContext";
import axios from "axios";

// Component to manage the state of todos and related actions
const TodoState = ({ children }) => {
  // URL for fetching and posting todo data
  //   const url = "https://jsonplaceholder.typicode.com/users/1/todos";
  const url = "http://localhost:5000/data/";
  // State variables for todos and text input
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState("");

  // State variable for counting pending todos
  const [pendingTodosCount, setPendingTodosCount] = useState([]);

  // Fetch todos from the API when the component mounts
  const fetchData = () => {
    axios
      .get(url)
      .then((response) => {
        if (response) {
          setTodos(response.data);
        }
      })
      .catch((error) => {
        console.error("Error fetching todos:", error);
      });
  };
  useEffect(() => {
    fetchData();
  }, []);

  // Calculate and update the count of pending todos whenever todos change
  useEffect(() => {
    const pendingTodos = todos.filter((todo) => todo.completed === false);
    setPendingTodosCount(pendingTodos);
  }, [todos]);

  // Function to add a new todo
  const addTodo = async (todo) => {
    const res = await axios.post(url, todo);
    if (res) {
      fetchData();
    }
  };

  // Function to delete a todo
  const deleteTodo = async (id) => {
    const res = await axios.delete(`${url}/${id}`);
    if (res) {
      fetchData();
    }
  };

  // Provide the context with state and functions to children components
  return (
    <todoContext.Provider
      value={{ todos, addTodo, deleteTodo, pendingTodosCount, text, setText }}
    >
      {children}
    </todoContext.Provider>
  );
};

// Export the TodoState component
export default TodoState;
