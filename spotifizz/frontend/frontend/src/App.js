import React from 'react';
import './App.css';
import NavbarC from './Components/Navbar.js'
import UpperNav from './Components/UpperNav.js'
import Body from './Components/Body.js'
import FetchProducts from './Components/FetchProducts.js';
function App() {
  // fetch('core/')
  // .then(response => response.json())
  // .then(data => console.log(data));

  return (
    <div className="App">
      <UpperNav />
    adding more content to this file
      <NavbarC />
      <Body />
      // <FetchProducts />
    </div>
  );
}

export default App;
