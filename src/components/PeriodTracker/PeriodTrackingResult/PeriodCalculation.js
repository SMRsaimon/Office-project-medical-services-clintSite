
export  const periodCalculation=(DuraTion, cycleLong ,date )=>{

    console.log(DuraTion, cycleLong)
    const periodCycleDays =cycleLong;
  const bleedingDays = DuraTion;
  const fertilePhaseStart = periodCycleDays - 20;
  const fertilePhaseEnd = periodCycleDays - 11;
  const ovulation = (fertilePhaseStart-1) + (fertilePhaseEnd - fertilePhaseStart)/2;

  
  const periodStartDate = new Date(date);

  function createEventsForDate(date){
    const timeBetween = Math.abs(date.getTime() - periodStartDate.getTime());
    const daysBetween = Math.ceil(timeBetween / (1000 * 3600 * 24)); 
    const cyclesBetween = Math.floor((daysBetween / periodCycleDays));
    const events = [];
    // Create next two events to handle multiple sets within one month
    for(let i=0;i<2;i++){
      const cycleDaysBetween = periodCycleDays * (cyclesBetween + i);
      const p = addDays(periodStartDate, cycleDaysBetween);
      const bleedingEnd = addDays(p, bleedingDays);
      const fertilePhaseStartDate = addDays(p, fertilePhaseStart);
      const fertilePhaseEndDate = addDays(p, fertilePhaseEnd);
      const ovulationDayStart = addDays(p, ovulation)
      const ovulationDayEnd = new Date(new Date(ovulationDayStart).setHours(23,59,59,999));
      events.push({
        "summary": "Period",
        "begin": p,
        "end": bleedingEnd 
      });
      events.push({
        "summary": "Fertile",
        "begin": fertilePhaseStartDate,
        "end": fertilePhaseEndDate 
      });
      events.push({
        "summary": "Ovulation",
        "begin": ovulationDayStart,
        "end": ovulationDayEnd
      });
    }
    return events;
  }
  
  const InitialEvents = createEventsForDate(periodStartDate);


   
function addDays(date, days){
let d = new Date(date.valueOf());
d.setDate(d.getDate() + days)
d.setHours(0,0,0,0);  // set to start of day
console.log(d)
return d;
}



return InitialEvents
}

