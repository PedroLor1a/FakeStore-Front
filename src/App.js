import "./App.css";
import Home from "./Components/Home/Home";
import Landing from "./Components/Landing/Landing";
import NavBar from "./Components/NavBar/NavBar";
import { Route, Routes, useLocation } from "react-router-dom";
import Footer from "./Components/Footer/Footer";

function App() {
  const { pathname } = useLocation();

  return (
    <div>
      {pathname === "/home" && <NavBar />}
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
      </Routes>
      {pathname !== "/" && <Footer />}
    </div>
  );
}

export default App;
