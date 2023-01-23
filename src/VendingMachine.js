import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Nav from './Nav';
import RoutesList from './RoutesList';

function VendingMachine() {
  return (
    <div>
      <BrowserRouter>
        <h1>Mystery Vending Machine</h1>
        <Nav />
        <RoutesList />
      </BrowserRouter>
    </div>
  )
}

export default VendingMachine