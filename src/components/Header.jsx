import { NavLink } from 'react-router-dom';
import '../styles/Header.css';

const Header = () => {
  return (
    <header className="header" role="banner">
      <div className="logo" aria-label="Dental Clinic Logo">Dental Clinic</div>
      <nav aria-label="Main navigation">
        <ul>
          <li><NavLink exact to="/" activeClassName="active">Home</NavLink></li>
          <li><NavLink to="/about" activeClassName="active">About</NavLink></li>
          <li><NavLink to="/services" activeClassName="active">Services</NavLink></li>
          <li><NavLink to="/contact" activeClassName="active">Contact</NavLink></li>
          <li><NavLink to="/faq" activeClassName="active">FAQ</NavLink></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;