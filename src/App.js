import { useState } from 'react';
import Header from './components/Layout/Header';
import Cart from './components/Cart/Cart';

import classes from './App.module.css';
import ProductDescription from './components/UI/ProductDescription';
import Slider from './components/Layout/Slider';
import Image from './components/Layout/Image';
import SliderData from './components/Layout/SliderData';
import CartProvider from './store/CartProvider';

function App(index) {

  const [CartIsShown, setCartIsShown] = useState(false);

  const showCartHandler =()=>{
    setCartIsShown(true);
  };

  const hideCartHandler =()=>{
    setCartIsShown(false);

  };

  return (
    <CartProvider>
      {CartIsShown && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler}/>
      <main>
        <div className={classes.slider}>
        <Slider slides={SliderData} />
        </div>
        <section className={classes.productwrapper}>
          <div className={classes.image}  >
          <Image thumbnails={SliderData} data-index={index} images={SliderData.image}/>
          </div>
          <ProductDescription/>
        </section>
      </main>
    </CartProvider>
  );
}

export default App;
