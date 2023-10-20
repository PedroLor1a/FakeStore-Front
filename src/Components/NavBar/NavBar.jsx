import "./NavBar.css";
import Filter from "../Filter/Filter";
import SearchBar from "../SearchBar/SearchBar";
const NavBar = () => {
  return (
    <div className="navbar">
      <Filter />
      <SearchBar />
    </div>
  );
};

export default NavBar;
