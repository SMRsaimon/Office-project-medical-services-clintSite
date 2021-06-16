import React, { useState } from "react";
import "date-fns";
import "./UserPeriodData.css";
import DataTitle from "./DataTitle";
import PeriodInputValue from "./PeriodInputValue";
import { Link, useHistory } from "react-router-dom";
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';

export const UserPeriodData = () => {
  const [date, setDate] = useState(new Date().toLocaleDateString());

  const [DuraTion, setDuraTion] = useState(4);
  const [cycleLong, setCycleLong] = useState(28);
  const [periodData, setPeriodData] = useState({})

  const history=useHistory()


//   Hendel Date change 
  // const handelDateChange = (e) => {
  //   setDate(e.target.value);
    
  // };

//   Hendel Duration Increment decrement 
  const hendelDuraTionIncrement = () => {
    setDuraTion((DuraTion) => {
      const newCount = DuraTion >= 1 && DuraTion < 10 ? DuraTion + 1 : DuraTion;
      return newCount;
    });

}
const hendelDuraTionDecrement = () => {
    setDuraTion((DuraTion) => {
      const newCount = DuraTion >= 2 && DuraTion <= 10 ? DuraTion - 1 : DuraTion;
      return newCount;
    });

}

// Hendel Cycle increment decrement 
    const hendelCycleIncrement = () => {
      setCycleLong((cycleLong) => {
        const newCount =
          cycleLong >= 15 && cycleLong < 35 ? cycleLong + 1 : cycleLong;
        return newCount;
      });
    };



  const hendelCycleDeccrement = () => {
    setCycleLong((cycleLong) => {
        const newCount =
          cycleLong >= 16 && cycleLong <= 35 ? cycleLong - 1 : cycleLong;
        return newCount;
      });


  };

//   hendel User PeriodData
  const hendelUserPeriodData=()=>{

      let data={date, DuraTion,cycleLong }
      setPeriodData(data)
      localStorage.setItem("data",  JSON.stringify(data) )
    
      history.push("/periodTrackerResult")
  }

  return (
    <div className="row my-5 py-5" id="UserData">
      <div className="col-md-4  period-date-picker">
        <DataTitle
          number={1}
          heading="When was the first day of your last period?"
        />

        <div className="input-group d-flex justify-content-center">
        <DayPickerInput onDayChange={day =>setDate(day.toLocaleDateString())} />
        </div>
      </div>
      <div className="col-md-4">
        <DataTitle number={2} heading="How long did it last?" />
        <PeriodInputValue
          Value={DuraTion}
          hendelDecrement={hendelDuraTionDecrement}
          hendelIncrement={hendelDuraTionIncrement}
        />
      </div>
      <div className="col-md-4">
        <DataTitle number={3} heading="How long is your menstrual cycle?" />
        <PeriodInputValue
          Value={cycleLong}
          hendelDecrement={hendelCycleDeccrement}
          hendelIncrement={hendelCycleIncrement}
        />
      </div>
      <div  onClick={hendelUserPeriodData} className="col-12 d-flex justify-content-center mt-5 ">
          <button className="btn btn-getResult"  type="button"> Get Result </button>
      </div>
    </div>
  );
};
