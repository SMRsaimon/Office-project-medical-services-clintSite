import React from 'react';

const PeriodInputValue = () => {
    return (
        <>
             <div className="spinner-Container  mx-auto">
          <button className="btn decrement-btn">-</button>

          <button className="periodStayCount" type="button">
            <input type="button" value="1" name="periodStayCount" id="" />
          </button>
          <button className="btn increment-btn">+</button>
        </div>
        </>
    );
};

export default PeriodInputValue;