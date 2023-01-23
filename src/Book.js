import React from 'react';
import { Link } from 'react-router-dom';

function Book() {
  return (
    <div>
      <h2>The Fifth Season</h2>
      <li><Link to='/'>try again</Link></li>
    </div>
  );
}

export default Book;