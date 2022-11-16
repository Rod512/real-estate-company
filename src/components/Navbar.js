import React, { Fragment,useState } from 'react';
import '../css/Navbar.css'

const Navbar = () => {
    const [showMenu , setShowMenu , ] = useState(false)



    return (
        <Fragment>
        <nav>
            <h1>Properties<span>.</span></h1>
            <div className={showMenu ? "menu mobile-menu": "menu"}>
                <ul>
                   <li><a href="/">Home</a></li>
                   <li><a href="/">Blog</a></li>
                   <li><a href="/">Agents</a></li>
                   <li><a href="/">About Us</a></li>
                </ul>
                <div className='btn'>
                    <a href="/">Add property</a>
                </div>
            </div>
            <i class="fa-solid fa-bars" onClick={()=> setShowMenu(!showMenu)}></i>
        </nav>
        </Fragment>
    );
};

export default Navbar;