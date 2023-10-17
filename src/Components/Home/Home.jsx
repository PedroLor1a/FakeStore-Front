import Card from "../Card/Card";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { allProducts } from "../../redux/actions";
import "./Home.css";

const Home = () => {
  const products = useSelector((state) => state.allProducts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(allProducts());
  }, [dispatch]);

  return (
    <div>
      <h1>BIENVENIDO A HOME </h1>
      <div className="card-container">
        {products.length ? (
          products.map((e) => {
            return (
              <Card
                key={e.id}
                title={e.title}
                price={e.price}
                category={e.category}
                image={e.image}
              />
            );
          })
        ) : (
          <h1>Loading...</h1>
        )}
      </div>
      <Card />
    </div>
  );
};

export default Home;
