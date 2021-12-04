import { Fragment } from 'react';
import avatarImage from '../../source/images/image-avatar.png'
import Hamburger from './Hamburger';
import classes from './Header.module.css'
import HeaderCartButton from './HeaderCartButton';



const Header = () =>{
    

    const cartHandler = () =>{
        console.log('clock')
        
    }

    return (
        <Fragment>
            <header className={classes.header}>
                <Hamburger/>
                
                <h1 className={classes.logo}>Sneakers</h1>
                <ul className={classes.menu}>
                    <li>Collections</li>
                    <li>Men</li>
                    <li>Women</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
                <HeaderCartButton onclick={cartHandler}/>
                <div className={classes.avatarimage}>
                <img src={avatarImage} alt='user face'/>
                </div>
            </header>
        </Fragment>
    );
};

export default Header;