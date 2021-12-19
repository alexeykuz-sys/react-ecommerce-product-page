import { Fragment, useState } from 'react';
import classes from './Image.module.css';
import SliderData from './SliderData';

const Image = (props) => {

    const [current, setCurrent] = useState(0);

    const length = props.thumbnails.length;

    const currentImage = ()=>{
        setCurrent(current === length-1? 0 : current + 1)

    };
console.log(props.image)

    if(!Array.isArray(props.thumbnails) || props.thumbnails.length<=0){
        return null;
    }

    const thumbnails = SliderData.map((thumbnail, index) => { return (
        <li className={index===current ? 'classes.slideactive' : 'classes.slide'} onClick={currentImage}>
            { (<img src={thumbnail.thumbnail}  className={classes.thumbnailimage}  alt='thumbnail images'/>
            )}
        </li>
        
        )
    })
    console.log(SliderData[current].image)

    return(
        <Fragment className={classes.imagewrapper}>
            {<img src={SliderData[current].image}  className={classes.productimage} alt='product images'/>}
            <ul>{thumbnails}</ul>
        </Fragment>
    )

}

export default Image;
