import { useState } from 'react';
import classes from './Hamburger.module.css';
import closebutton from '../../source/images/icon-close.svg';


const Hamburger = ()=> {

    const [open, setOpen] = useState(true)

    const leftMenuHandler = () =>{
        setOpen(false);
    }

    
    const closeIconHandler = () =>{
        setOpen(true)
        
    }

    return(
        open ? (<div className={classes.hamburger} onClick={leftMenuHandler} open={open}>
            <svg width="16" height="15" xmlns="http://www.w3.org/2000/svg"><path d="M16 12v3H0v-3h16Zm0-6v3H0V6h16Zm0-6v3H0V0h16Z" fill="#69707D" fill-rule="evenodd"/></svg>
        </div>)
        :
        (<div className={open? classes.leftmenuwrapper : classes.leftmenuwrapperactive} open={open}>
            <img onClick={closeIconHandler}  src={closebutton} alt='close button cross'/>
            <ul className={classes.leftmenu}>
                    <li>Collections</li>
                    <li>Men</li>
                    <li>Women</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
        </div>)
    )

}

export default Hamburger;