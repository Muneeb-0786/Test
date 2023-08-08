import React, { useContext } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import todoContext from "../Context/todoContext";

// Functional component for the Navbar
export default function Navbar() {
  // Accessing the pendingTodosCount from the context using useContext hook
  const { pendingTodosCount } = useContext(todoContext);

  return (
    <Box sx={{ flexGrow: 1 }}>
      {/* AppBar component for the Navbar */}
      <AppBar position="static" sx={NavStyle}>
        <Toolbar>
          {/* Display the count of pending todos */}
          <Typography variant="h6" component="div">
            {pendingTodosCount?.length ? pendingTodosCount?.length : 0}
          </Typography>
          &nbsp;
          {/* Display "pending todos" text */}
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            pending todos
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

// Style for the Navbar
const NavStyle = {
  backgroundColor: "#b2e4fb",
  color: "black",
  borderRadius: "10px",
  border: "4px solid black",
  boxShadow: "10px 10px 0px 0px rgba(0,0,0,1)",
};
