import React from 'react';
import Blog from '../Blog/Blog';
import About from './About/About';

import "./Home.css"
import HomeBannerSlider from './HomeBannerSlider/HomeBannerSlider';

const Home = () => {
    return (
        <div className="container-fluid">
              <HomeBannerSlider/>
       
        <div className="container mt-2"> 
         
           <About/>
           <Blog/>
            
        </div>
        </div>
    );
};

export default Home;