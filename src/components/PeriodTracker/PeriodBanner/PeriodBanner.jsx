import React from 'react';
import "./PeriodBanner.css"
import periodBanner from "../../../resurce/pariodBanner.jpg"

const PeriodBanner = () => {
    return (
       <div className="bannerContainer">


           <img  src={periodBanner} alt="" />
           <div className="banner-content">
               <h1>Plan for your vacation, or just next week, in 3 easy steps with our Period Calculator. &nbsp;&nbsp; </h1>
           </div>
       </div>
    );
};

export default PeriodBanner;