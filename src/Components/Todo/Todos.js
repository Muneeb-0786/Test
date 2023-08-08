import React, { useContext } from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Todolistitems from "./Todolistitems";
import todoContext from "../../Context/todoContext";

// Component to display the list of pending todos
const Todos = () => {
  // Accessing the todos array from the context
  const { todos } = useContext(todoContext);

  return (
    <Box sx={todoStyle}>
      {/* Heading for the pending todos */}
      <Typography variant="h5" component="div" padding="15px" color="#212121">
        Pending Todos
      </Typography>
      <br />

      {/* Map through todos and render each todo item */}
      {todos.map((todo) => (
        <div key={todo.id}>
          <Todolistitems todo={todo} />
        </div>
      ))}
    </Box>
  );
};

// Styling for the Todos component
const todoStyle = {
  width: "420px",
  backgroundColor: "#ffffff",
  margin: "25px auto",
  overflow: "auto",
  border: "4px solid black",
  borderRadius: "20px",
  height: { xs: "75vh", sm: "75vh", md: "100%" },
};

// Export the Todos component
export default Todos;
