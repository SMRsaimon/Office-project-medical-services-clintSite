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

 const periodCalculateData=periodCalculation(periodData.DuraTion, periodData.cycleLong, periodData.date )
 console.log(periodCalculateData)


  const modifiers = {
    thursdays: { daysOfWeek: [1,4] },
    birthday: new Date(),
  };
  const modifiersStyles = {
    birthday: {
      color: "white",
      backgroundColor: "#ffc107",
    },
  
    thursdays: {
      color: "#ffc107",
      backgroundColor: "#3f51b5ab",
    },
   
  };

  return (
    <>
      <div className="container mb-5" id="DayPicker-custom-style"  >
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
