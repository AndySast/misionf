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
      <Link to="/About">
        <button type="submit" className="dos">
          About
        </button>
      </Link>
    </div>
  );
}

export default Menu;
