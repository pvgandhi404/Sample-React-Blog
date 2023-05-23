import React from 'react';
import {useState, useEffect} from 'react';
import BlogList from './BlogList';
import useFetch from './useFetch';

const Home = () => {
    let opening = 'Hello everyone and welcome! Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut' +
    'labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex' 
    + 'ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore' + 
    'eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia' 
    + 'deserunt mollit anim id est laborum.';
    const[name, setOpening] = useState(opening);
    const handleClick = () => {
        setOpening('You clicked the button!');
    }

    const { data: blogs, isLoading, error } = useFetch('http://localhost:8000/blogs');

    return ( 
        <div className="home">

            <h2>Homepage</h2>
            <p>{name} </p>
            <button onClick={handleClick}>Click me</button>

            {error && <div>{ error }</div>}
            {isLoading && <div>Loading...</div>}

            {blogs && <BlogList blogs={blogs} title="ALL BLOGS!" />}
            <p></p>
            {blogs && <BlogList blogs={blogs.filter((blog) => blog.author === 'John Doe')} 
                          title="John Doe's Blogs:" className="john"/>}

        </div>
     );
}
 
export default Home;