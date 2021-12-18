import { useState } from 'react';
import classes from './Slider.module.css';
import SliderData from '../Layout/SliderData';
import previous from '../../source/images/icon-previous.svg';
import next from '../../source/images/icon-next.svg';


const Slider = (props)=>{

    const [current, setCurrent] = useState(0);

    const length = props.slides.length;

    const prevSlide = ()=>{
        setCurrent(current === 0 ? length -1 : current -1)

    };

    const nextSlide = () =>{
        setCurrent(current === length-1? 0 : current + 1)
    };


    if(!Array.isArray(props.slides) || props.slides.length<=0){
        return null;
    }

    const slides = SliderData.map((slide, index) => { return (
        <div className={index === current ? 'classes.slideactive' : 'classes.slide'}>
            {index === current && (<img src={slide.image}  className={classes.productimage} alt='product images'/>
)}
        </div>
        
    )
    })


    return (
        <div >
            <img className={classes.previous} src={previous} alt='icon previos' onClick={prevSlide}/>
            {slides}
            <img className={classes.next} src={next} alt='icon next' onClick={nextSlide}/>
        </div>
    )
};

export default Slider;