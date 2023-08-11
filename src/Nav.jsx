import { Link } from "react-router-dom";
const Nav = () => {
  return (
    <nav>
      <div className="left">
        <Link to="/">Home</Link>
        <Link to="/portfolio">portfolio</Link>
        <Link to="/pricing">Pricing</Link>
      </div>
      <div className="center">
        <Link to="/">
          <h1>Korado</h1>
        </Link>
      </div>
      <div className="right">
        <Link to="/about">About</Link>
        <Link className="contact" to="/contact">
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
