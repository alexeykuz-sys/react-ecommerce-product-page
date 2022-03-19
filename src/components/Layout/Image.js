import { Fragment, useState } from 'react';
import classes from './Image.module.css';
import SliderData from './SliderData';

const Image = () => {

    console.log(SliderData[1].image)
    const [current, setCurrent] = useState(0);

    
    
    const currentImage = (e) => {
        const currentImageIndex = e.target.getAttribute('index')
        setCurrent(currentImageIndex)

    };

    const thumbnails = SliderData.map((thumbnail, i) => { return (
        <li className={'classes.slide'} key={i} >
            
            {<img src={thumbnail.thumbnail}  className={classes.thumbnailimage} index={i} alt='thumbnail images' onClick={currentImage}  />
            }
        </li>
        )
    })

    return(
        <Fragment className={classes.imagewrapper}>
            {<img src={SliderData[current].image}  className={classes.productimage} alt='product images'/>}
            <ul className={classes.thumbnaillist}>{thumbnails}</ul>
        </Fragment>
    )

}

export default Image;
