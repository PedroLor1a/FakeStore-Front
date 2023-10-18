import { useState, useEffect } from "react";
import "./NavBar.css";

const NavBar = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`navbar ${isSticky ? "sticky" : ""}`}>
      <select className="select">
        <option>Select a Category</option>
      </select>
    </div>
  );
};

export default NavBar;
