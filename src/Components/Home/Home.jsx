import Card from "../Card/Card";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { allProducts } from "../../redux/actions";
import Pagination from "../Pagination/Pagination";
import "./Home.css";

const Home = () => {
  const [pagina, setPagina] = useState(1);
  const [porPagina, setPorPagina] = useState(5);
  const products = useSelector((state) => state.allProducts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(allProducts());
  }, [dispatch]);

  const maximo = products.length / porPagina;
  return (
    <div>
      <div className="card-container">
        {products
          .slice((pagina - 1) * porPagina, (pagina - 1) * porPagina + porPagina)
          .map((e) => {
            return (
              <Card
                key={e.id}
                title={e.title}
                price={e.price}
                category={e.category}
                image={e.image}
              />
            );
          })}
      </div>
      <Pagination pagina={pagina} setPagina={setPagina} maximo={maximo} />
    </div>
  );
};

export default Home;
