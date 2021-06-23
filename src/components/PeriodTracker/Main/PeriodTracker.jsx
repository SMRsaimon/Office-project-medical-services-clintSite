import React from 'react';
import PeriodBanner from '../PeriodBanner/PeriodBanner';
import { UserPeriodData } from '../UserPeriodData/UserPeriodData';

import "./PeriodTracker.css"

const PeriodTracker = () => {
    return (
       <div className="container">
           <PeriodBanner/>
           <UserPeriodData/>
       </div>
    );
};

export default PeriodTracker;