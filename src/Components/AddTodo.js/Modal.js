import React, { useContext } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import todoContext from "../../Context/todoContext";

// Component for adding a new todo using a modal
export default function AddTodoModal({ setOpen, open }) {
  // Function to close the modal
  const handleClose = () => setOpen(false);

  // Accessing the addTodo, setText, and text values from context
  const { addTodo, setText, text } = useContext(todoContext);

  // Function to handle adding a new todo
  const handleAddTodo = () => {
    if (text !== "") {
      console.log(text);
      const newTodo = { userId: 1, title: text, completed: false };
      addTodo(newTodo);
      setText("");
      handleClose();
    }
  };

  return (
    <div>
      {/* Modal component */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        {/* Content inside the modal */}
        <Box sx={modalStyle.main}>
          <Typography id="modal-modal-title" variant="subtitle1">
            Add a new todo
          </Typography>
          {/* Form inside the modal */}
          <Box
            component="form"
            noValidate
            sx={modalStyle.formStyle}
            autoComplete="off"
          >
            {/* Input field for entering new todo */}
            <TextField
              id="standard-basic"
              label="Todo"
              onChange={(e) => setText(e.target.value)}
              variant="standard"
              sx={modalStyle.input}
            />
            {/* Button to add the new todo */}
            <Button onClick={handleAddTodo} sx={modalStyle.button}>
              Add
            </Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}

// Styles for the modal and its components
const modalStyle = {
  main: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 365,
    bgcolor: "background.paper",
    border: "4px solid #000",
    boxShadow: 24,
    borderRadius: "25px",
    p: 3,
  },
  formStyle: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    gap: "20px",
  },
  input: {
    flex: 1,
  },
  button: {
    backgroundColor: "#b2e4fb",
    border: "2px solid black",
    color: "black",
    padding: 0,
    borderRadius: "10px",
    marginBottom: "-20px",
    fontWeight: "600",
  },
};
