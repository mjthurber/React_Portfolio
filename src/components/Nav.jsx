// import React from "react"; // Uncomment this line if you are using React version < 17
// Bring in accompanying css file
import { Link, useLocation } from 'react-router-dom';
import './Nav.css';

function Nav() {
  const currentPage = useLocation().pathname;

  return (
    <header>
      <nav>
        <ul>
          <li>

            <Link to="/about" className={currentPage === '/about' ? 'nav-link-active' : 'nav-link'}>
              About
            </Link>
          </li>
          <li>

            <Link to="/Portfolio" className={currentPage === '/Portfolio' ? 'nav-link-active' : 'nav-link'}>
              Portfolio
            </Link>
          </li>
          <li>

            <Link to="/contact" className={currentPage === '/contact' ? 'nav-link-active' : 'nav-link'}>
              Contact
            </Link>
          </li>
          <li>

            <Link to="/resume" className={currentPage === '/resume' ? 'nav-link-active' : 'nav-link'}>
              Resume
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
