import "./App.css";
import Home from "./Components/Home/Home";
import Landing from "./Components/Landing/Landing";
import NavBar from "./Components/NavBar/NavBar";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
