import React from 'react';
import './LandingPage.css';

//core compoents
import Blog from "../Blog/Blog";

const landingpage = () => {
    return(
        <div className={"Section"}>
            <h1 className={"Title"}>Welcome to the Blog Posts</h1>
            <Blog/>
        </div>

    );
}



export default landingpage;
