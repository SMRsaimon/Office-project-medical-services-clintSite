import React from 'react';
import Blog from '../Blog/Blog';
import About from './About/About';

import "./Home.css"
import HomeBannerSlider from './HomeBannerSlider/HomeBannerSlider';

const Home = () => {
    return (
        <div className="container mt-2"> 
           <HomeBannerSlider/>
           <About/>
           <Blog/>
            
        </div>
    );
};

export default Home;