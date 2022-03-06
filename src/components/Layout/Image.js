import { Fragment, useState } from 'react';
import classes from './Image.module.css';
import SliderData from './SliderData';

const Image = (props) => {

    const [current, setCurrent] = useState(0);

    const length = props.thumbnails.length;
    console.log('L',length, 'C', current)
    
    const currentImage = (e, SliderData ) => {
        setCurrent(e.target)
        console.log(SliderData)
        

    };

    if(!Array.isArray(props.thumbnails) || props.thumbnails.length<=0){
        return null;
    }

    const thumbnails = SliderData.map((thumbnail, i) => { return (
        <li className={i ? 'classes.slideactive' : 'classes.slide'} key={thumbnail.thumbnail} onClick={currentImage}>
            
            {<img src={thumbnail.thumbnail}  className={classes.thumbnailimage} index={i}    alt='thumbnail images'  />
            }
        </li>
        )
    })
    // console.log(SliderData[current])
    // console.log('CURRENT', current)

    return(
        <Fragment className={classes.imagewrapper}>
            {<img src={SliderData[current].image}  className={classes.productimage} alt='product images'/>}
            <ul className={classes.thumbnaillist}>{thumbnails}</ul>
        </Fragment>
    )

}

export default Image;
