/* eslint-disable no-extend-native */
import React, { useState } from "react";
import { useEffect } from "react";
import PeriodBanner from "../PeriodBanner/PeriodBanner";
import "./PeriodTrackingResult.css";
import DayPicker from "react-day-picker";
import "react-day-picker/lib/style.css";
import { periodCalculation } from "./PeriodCalculation";
import { FaLessThanEqual } from "react-icons/fa";

const PeriodTrackingResult = () => {
  const [periodData, setPeriodData] = useState({});
  useEffect(() => {
    const data = localStorage.getItem("data");
    setPeriodData(JSON.parse(data));
  }, []);
  // date, DuraTion,cycleLong

  const periodCalculateData = periodCalculation(
    periodData.DuraTion,
    periodData.cycleLong,
    periodData.date
  );

  
  const [,,,target]=periodCalculateData

 const {begin, end }=target

//  get array of dates between 2 dates
Date.prototype.addDays = function(days) {
  let  dat = new Date(this.valueOf())
  dat.setDate(dat.getDate() + days);
  return dat;
}

function getDates(startDate, stopDate) {
 const  dateArray = [];
 let  currentDate = startDate;
 while (currentDate <= stopDate) {
   dateArray.push(currentDate)
   currentDate = currentDate.addDays(1);
 }
 return dateArray;
}


const  dateArray = getDates(new Date(begin), (new Date(end)));





 

  const modifiers = {
    thursdays: { daysOfWeek: [1, 4] },
    // birthday: new Date(),
    possible_period_dates_Begin:new Date(dateArray[0]),
    possible_period_dates_end: new Date(dateArray[1]),
    possible_period_dates3:new Date(dateArray[2]),
      

    
  };
  const modifiersStyles = {
    // birthday: {
    //   color: "white",
    //   backgroundColor: "#ffc107",
    // },
    possible_period_dates_Begin: {
      color: "white",
      backgroundColor: "#ffc107",
    },
    possible_period_dates_end:{
      color: "white",
      backgroundColor: "#ffc107",

    },
    possible_period_dates3:{
      color: "white",
      backgroundColor: "#ffc107",

    }

    // thursdays: {
    //   color: "#ffc107",
    //   backgroundColor: "#3f51b5ab",
    // },
  };

  return (
    <>
      <div className="container mb-5" id="DayPicker-custom-style">
        <PeriodBanner />

        <div className="row d-flex mt-5 pt-5">
          <div className="col-md-12  d-flex  justify-content-center">
            <DayPicker
              modifiers={modifiers}
              modifiersStyles={modifiersStyles}
              numberOfMonths={1}
              pagedNavigation
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default PeriodTrackingResult;
