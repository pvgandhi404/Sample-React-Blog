import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
    return ( 
        <nav className='navbar'>
            <h1>Sample Blog</h1>
            <div className='links'>
                <Link to="/">Home</Link>
                <Link to="/create">New Blog</Link> 
                {/* inner braces {} rep JavaScript object */}
            </div>
        </nav>
     );
}
 
export default Navbar;