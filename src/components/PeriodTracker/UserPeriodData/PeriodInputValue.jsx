import React from 'react';

const PeriodInputValue = ({Value,hendelDecrement,hendelIncrement  }) => {
    return (
        <>
             <div className="spinner-Container  mx-auto">
          <button  onClick={hendelDecrement} className="btn decrement-btn">-</button>

          <button className="periodStayCount" type="button">
            <input type="button" value={Value}   name="periodStayCount" id="" />
          </button>
          <button onClick={hendelIncrement} className="btn increment-btn">+</button>
        </div>
        </>
    );
};

export default PeriodInputValue;