import { Fragment } from 'react';
import Header from './components/Layout/Header';

import './App.css';
import ProductDescription from './components/UI/ProductDescription';

function App() {
  return (
    <Fragment>
      <Header/>
      <ProductDescription/>
    </Fragment>
  );
}

export default App;
