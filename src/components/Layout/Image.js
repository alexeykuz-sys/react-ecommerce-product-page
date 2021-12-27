import { Fragment, useState } from 'react';
import classes from './Image.module.css';
import SliderData from './SliderData';

const Image = (props) => {

    const [current, setCurrent] = useState(0);

    const length = props.thumbnails.length;

    console.log('L',length, 'C', current)
    const currentImage = ()=>{
        console.log(current)

    };

    if(!Array.isArray(props.thumbnails) || props.thumbnails.length<=0){
        return null;
    }
    console.log(Array(props.thumbnails[current].image))

    const thumbnails = SliderData.map((thumbnail, index) => { return (
        <li className={index===current ? 'classes.slideactive' : 'classes.slide'} >
            
            {<img src={thumbnail.thumbnail}  className={classes.thumbnailimage}  alt='thumbnail images' onClick={currentImage} key={index}/>
            }
        </li>
        )
    })
    console.log('CURRENT', current)
    console.log(thumbnails)

    return(
        <Fragment className={classes.imagewrapper}>
            {<img src={SliderData[current].image}  className={classes.productimage} alt='product images'/>}
            <ul className={classes.thumbnaillist}>{thumbnails}</ul>
        </Fragment>
    )

}

export default Image;
