import React, { useState } from "react";
import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import AddTodoModal from "./AddTodo.js/Modal";

// Functional component to render the FloatingActionButton (FAB)
const FAB = () => {
  // State to manage the visibility of the modal
  const [open, setOpen] = useState(false);

  // Function to open the modal
  const handleOpen = () => setOpen(true);

  return (
    <Box>
      {/* The FloatingActionButton */}
      <Fab size="medium" sx={FabStyle} aria-label="add" onClick={handleOpen}>
        <AddIcon />
      </Fab>

      {/* Modal component to add a new todo */}
      <AddTodoModal setOpen={setOpen} open={open} />
    </Box>
  );
};

// Style for the FloatingActionButton
const FabStyle = {
  background: "#f2e4f5",
  color: "black",
  border: "4px solid black",
  position: "fixed",
  bottom: "15px",
  right: "15px",
};

// Export the FAB component
export default FAB;
