import React from 'react';
import About from './About/About';

import "./Home.css"
import HomeBannerSlider from './HomeBannerSlider/HomeBannerSlider';

const Home = () => {
    return (
        <div className="container mt-2"> 
           <HomeBannerSlider/>
           <About/>
            
        </div>
    );
};

export default Home;