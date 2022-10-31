import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import FastFood from "./Components/Pages/FastFood/FastFood";
import HotDeals from "./Components/Pages/HotDeals/HotDeals";
import Order from "./Components/Pages/Order/Order";
import SideBar from "./Components/Sidebar/SideBar";

function App() {
  return (
    <BrowserRouter>
      <SideBar>
        <Routes>
          <Route exact path="/" element={<FastFood />} />
          <Route exact path="/hot-deals" element={<HotDeals />} />
          
        </Routes>
      </SideBar>
    </BrowserRouter>
  );
}

export default App;
