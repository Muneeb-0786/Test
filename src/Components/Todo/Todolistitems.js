import React, { useContext } from "react";
import Checkbox from "@mui/material/Checkbox";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import todoContext from "../../Context/todoContext";

// Component to display a single todo item
const Todolistitems = ({ todo }) => {
  // Accessing the deleteTodo function from the context
  const { deleteTodo } = useContext(todoContext);

  return (
    <Stack
      key={todo?.id}
      flexDirection="row"
      alignItems="center"
      justifyContent="space-between"
      margin="0 30px"
    >
      {/* Checkbox to mark the completion status of the todo */}
      <Checkbox
        checked={todo.completed}
        // onChange={handleChange}
        // sx={checkboxStyle}
        sx={{ flex: 1 }}
        inputProps={{ "aria-label": "controlled" }}
      />

      {/* Display the title of the todo */}
      <Typography variant="subtitle1" component="div" sx={{ width: "70%" }}>
        {todo?.title}
      </Typography>

      {/* Delete icon to remove the todo */}
      <DeleteOutlineOutlinedIcon
        style={{ flex: 1, cursor: "pointer" }}
        onClick={() => deleteTodo(todo?.id)}
      />
    </Stack>
  );
};

// Export the Todolistitems component
export default Todolistitems;
