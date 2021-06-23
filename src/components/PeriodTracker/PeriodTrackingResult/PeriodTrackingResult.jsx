/* eslint-disable no-extend-native */
import React, { useState } from "react";
import { useEffect } from "react";
import PeriodBanner from "../PeriodBanner/PeriodBanner";
import "./PeriodTrackingResult.css";
import DayPicker from "react-day-picker";
import "react-day-picker/lib/style.css";
import { periodCalculation } from "./PeriodCalculation";

const PeriodTrackingResult = () => {
  const [periodData, setPeriodData] = useState({});

  useEffect(() => {
    const data = localStorage.getItem("data");
    setPeriodData(JSON.parse(data));
  }, []);
  // date, DuraTion,cycleLong

  let periodCalculateData = periodCalculation(
    periodData.DuraTion,
    periodData.cycleLong,
    periodData.date
  );

  const [, , , target] = periodCalculateData;

  const { begin, end } = target;

  //  get array of dates between 2 dates
  Date.prototype.addDays = function (days) {
    let dat = new Date(this.valueOf());
    dat.setDate(dat.getDate() + days);
    return dat;
  };

  function getDates(startDate, stopDate) {
    const dateArray = [];
    let currentDate = startDate;
    while (currentDate <= stopDate) {
      dateArray.push(currentDate);
      currentDate = currentDate.addDays(1);
    }
    return dateArray;
  }

  const dateArray = getDates(new Date(begin), new Date(end));

  let modifiers = {};
  let modifiersStyles = {};

  for (let i = 0; i < dateArray.length; i++) {
    const element = dateArray[i];
    let id = Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);

    modifiers[id] = new Date(element);
    modifiersStyles[id] = {
      color: "black",
      backgroundColor: "#ffc107",
    };
  }

  // hendel month cheange
  const hendelMonthChnage = (CurrentMonth) => {
    // const lastDate = dateArray[dateArray.length - 1];
    // const newData ={  
    //   date:lastDate,
    //   DuraTion:  dateArray.length,
    //   cycleLong:  periodData.cycleLong,
      
    // }
    // localStorage.setItem("data",  JSON.stringify(newData) )
    
  };

  return (
    <>
      <div className="container mb-5" id="DayPicker-custom-style">
        <PeriodBanner />

        <div className="row d-flex mt-5 pt-5">
          <div className="col-md-12  d-flex  justify-content-center">
            <DayPicker
              onMonthChange={hendelMonthChnage}
              modifiers={modifiers}
              modifiersStyles={modifiersStyles}
              numberOfMonths={1}
              pagedNavigation
              month={dateArray[0]}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default PeriodTrackingResult;
