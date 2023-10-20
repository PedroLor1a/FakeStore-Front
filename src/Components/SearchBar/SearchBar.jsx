import { allProducts, findById } from "../../redux/actions";
import { useDispatch } from "react-redux";
import { useState } from "react";
import "./SearchBar.css";

const SearchBar = () => {
  const dispatch = useDispatch();

  const [id, setId] = useState();

  function changeHandler(event) {
    event.preventDefault();
    let input = event.target.value;

    setId(input);
  }

  function onSearch(id) {
    dispatch(findById(id));
    setId("");
  }

  return (
    <div className="cont">
      <input
        className="input"
        onChange={changeHandler}
        type="search"
        placeholder="Search By Id..."
        value={id}
      />
      <button onClick={() => onSearch(id)} className="button">
        <img
          src="https://cdn-icons-png.flaticon.com/128/57/57477.png"
          alt="lupa"
          className="imageLupa"
        />
      </button>
    </div>
  );
};

export default SearchBar;
