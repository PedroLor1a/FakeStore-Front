import { Link } from "react-router-dom";
import "./Landing.css";

const Landing = () => {
  return (
    <div className="container">
      <h1 className="title">LANDING DE FAKE STORE</h1>
      <h3 className="subtitle">BIENVENIDO</h3>
      <Link to="/home">
        <button className="button">To home</button>
      </Link>
    </div>
  );
};

export default Landing;
