import React, { useState } from "react";
import "date-fns";
import "./UserPeriodData.css";
import DataTitle from "./DataTitle";
import PeriodInputValue from "./PeriodInputValue";

export const UserPeriodData = () => {
  const [date, setDate] = useState(new Date().toLocaleDateString());

  const handelDateChange = (e) => {
    setDate(e.target.value);
  };

  return (
    <div className="row my-5 py-5" id="UserData">
      <div className="col-md-4  period-date-picker">
        <DataTitle
          number={1}
          heading="When was the first day of your last period?"
        />

        <div className="input-group d-flex justify-content-center">
          <input type="date" name="date" id="" onChange={handelDateChange} />
        </div>
      </div>
      <div className="col-md-4">
        <DataTitle number={2} heading="How long did it last?" />
        <PeriodInputValue/>
       
      </div>
      <div className="col-md-4">
        <DataTitle number={3} heading="How long is your menstrual cycle?" />
        <PeriodInputValue/>
      </div>
    </div>
  );
};
