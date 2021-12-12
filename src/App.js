import { Fragment, useState } from 'react';
import Header from './components/Layout/Header';
import Cart from './components/Cart/Cart';

import './App.css';
import ProductDescription from './components/UI/ProductDescription';

function App() {

  const [CartIsShown, setCartIsShown] = useState(false);

  const showCartHandler =()=>{
    setCartIsShown(true);
    console.log('fdgdf')

  }

  const hideCartHandler =()=>{
    setCartIsShown(false);

  }

  return (
    <Fragment>
      {CartIsShown && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler}/>
      <main>
        <ProductDescription/>
      </main>
    </Fragment>
  );
}

export default App;
