import { useState } from "react";
import "./Pagination.css";

const Pagination = ({ pagina, setPagina, maximo }) => {
  const [input, setInput] = useState(1);

  const nextPage = () => {
    setInput(parseInt(input) + 1);
    setPagina(parseInt(pagina) + 1);
  };

  const previousPage = () => {
    setInput(parseInt(input) - 1);
    setPagina(parseInt(pagina) - 1);
  };

  return (
    <div className="container1">
      <button
        disabled={pagina === 1 || pagina < 1}
        onClick={previousPage}
        className="btn">
        🡸
      </button>
      <p className="p">{input} </p>
      <p className="p"> de {Math.ceil(maximo)}</p>
      <button
        disabled={pagina === Math.ceil(maximo) || pagina > Math.ceil(maximo)}
        onClick={nextPage}
        className="btn">
        🡺
      </button>
    </div>
  );
};

export default Pagination;
