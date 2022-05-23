import { Link } from 'react-router-dom';
import './style.scss';

function Menu() {
  return (
    <div className="menu">
      <Link to="/">
        <button type="submit" className="uno">
          Home
        </button>
      </Link>
      <Link to="/about">
        <button type="submit" className="dos">
          About
        </button>
      </Link>
      <Link to="/ProductDetail">
        <button type="submit" className="tres">
          ProductDetail
        </button>
      </Link>
    </div>
  );
}

export default Menu;
