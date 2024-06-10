import React from 'react';

import NavBarComponent from './components/NavBarComponent/NavBarComponent';
import ItemListContainerComponent from './components/ItemListContainerComponent/ItemListContainerComponent';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <NavBarComponent />
      <ItemListContainerComponent greeting="Bienvenidos a la tienda de computadores del sur del mundo Weisser Pc Store" />
    </>
  );
}

export default App;