import React from 'react';
import "./PeriodInputValue.css"

const PeriodInputValue = ({Value,hendelDecrement,hendelIncrement  }) => {
    return (
        <>
             <div className="spinner-Container  ">
          <button  onClick={hendelDecrement} className="btn decrement-btn">-</button>

          <button  className="periodStayCount" type="button">
            <input type="button"   value={Value}   id="" />
          </button>
          <button onClick={hendelIncrement} className="btn increment-btn">+</button>
        </div>
        </>
    );
};

export default PeriodInputValue;