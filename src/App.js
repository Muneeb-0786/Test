import React from "react";
import "./App.css"; // Importing a CSS file
import FAB from "./Components/FAB"; // Importing the FAB component
import Navbar from "./Components/Navbar"; // Importing the Navbar component
import Todos from "./Components/Todo/Todos"; // Importing the Todos component

// Main component for the application
const App = () => {
  return (
    <div>
      {/* Render the Navbar */}
      <Navbar />

      {/* Render the Todos */}
      <Todos />

      {/* Render the FAB */}
      <FAB />
    </div>
  );
};

// Export the App component
export default App;
