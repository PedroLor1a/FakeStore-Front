import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { allProducts, category, filterProducts } from "../../redux/actions";
import "./Filter.css";

const Filter = () => {
  const categories = useSelector((state) => state.category);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(category());
  }, [dispatch]);

  const handleFilter = (e) => {
    if (e.target.value === "") {
      dispatch(allProducts());
    } else {
      dispatch(filterProducts(e.target.value));
    }
  };
  return (
    <div>
      <select onChange={handleFilter} className="allSelects">
        <option value="">Filter By Category</option>
        <option value="men's clothing">men's clothing</option>
        <option value="women's clothing">women's clothing</option>
        <option value="jewelery">jewelery</option>
        <option value="electronics">electronics</option>
      </select>
    </div>
  );
};

export default Filter;
