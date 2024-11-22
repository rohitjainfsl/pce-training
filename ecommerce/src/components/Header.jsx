import { Link } from "react-router-dom";
import { useAppContext } from "../context/AppContext";

function Header() {
  const { cart } = useAppContext();
  return (
    <nav>
      <h1>
        <Link to="/">Ecommerce</Link>
      </h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/blog">Blog</Link>
        </li>
        <li>
          <Link to="/cart">Cart({cart.length})</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Header;
