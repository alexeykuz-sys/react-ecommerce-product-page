import { Fragment, useState } from 'react';
import Header from './components/Layout/Header';
import Cart from './components/Cart/Cart';

import classes from './App.module.css';
import ProductDescription from './components/UI/ProductDescription';
import Slider from './components/Layout/Slider';
import Image from './components/Layout/Image';
import SliderData from './components/Layout/SliderData';

function App() {

  const [CartIsShown, setCartIsShown] = useState(false);

  const showCartHandler =()=>{
    setCartIsShown(true);
  };

  const hideCartHandler =()=>{
    setCartIsShown(false);

  };

  return (
    <Fragment>
      {CartIsShown && <Cart onClose={hideCartHandler} />}
      <Header onOpen={showCartHandler}/>
      <main>
        <div className={classes.slider}>
        <Slider slides={SliderData} />
        </div>
        <div className={classes.image}  >
        <Image />
        </div>
        <ProductDescription/>
      </main>
    </Fragment>
  );
}

export default App;
