import "./navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="left">
        <Link className="home-link" to="/">
          MSM
        </Link>
      </div>
      <div className="middle"></div>
      <div className="right"></div>
    </div>
  );
};

export default Navbar;
