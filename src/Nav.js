import React from 'react';
import { NavLink } from 'react-router-dom';
import './Nav.css';

function Nav() {
  return (
    <ul>
      <li><NavLink to='/surprise-book'>mystery book</NavLink></li>
      <li><NavLink to='/surprise-steak'>mystery steak</NavLink></li>
      <li><NavLink to='/surprise-tool'>mystery tool</NavLink></li>
    </ul>
  );
}

export default Nav;