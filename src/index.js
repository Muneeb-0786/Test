import React from "react";
import ReactDOM from "react-dom/client"; // Importing the ReactDOM.createRoot method
import App from "./App"; // Importing the main App component
import TodoState from "./Context/TodoState"; // Importing the TodoState context provider

// Creating a root element using ReactDOM.createRoot and rendering the app
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* Wrapping the App component with the TodoState context provider */}
    <TodoState>
      {/* Rendering the main App component */}
      <App />
    </TodoState>
  </React.StrictMode>
);
