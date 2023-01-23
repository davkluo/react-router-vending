import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Book from './Book';
import Steak from './Steak';
import Tool from './Tool';

function RoutesList() {
  return (
    <Routes>
      <Route path='surprise-book' element={<Book />} />
      <Route path='surprise-steak' element={<Steak />} />
      <Route path='surprise-tool' element={<Tool />} />
    </Routes>
  )
}

export default RoutesList