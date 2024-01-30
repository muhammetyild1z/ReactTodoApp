// components/Header.js
import React from 'react';


const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/register">Register</Link></li>
          <li><Link to="/todos">Todo List</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
