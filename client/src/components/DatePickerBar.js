import React, { useContext } from "react";
import DatePicker from "react-date-picker";

import "./styles/DatePicker.scss";

import { searchContext } from "../providers/SearchProvider";

export function DatePickerBar(props) {
  const { startDate, endDate, setStartDate, setEndDate } =
    useContext(searchContext);

  

//console.log('startDate:',startDate, 'endDate: ',endDate)
  
  return (
    <div className="search-box">
    <div className="start-date">
      <h5>From</h5>
      <DatePicker onChange={setStartDate} value={startDate} />
    </div>
    <div className="end-date">
      <h5>Until</h5>
      <DatePicker onChange={setEndDate}  value={endDate} minDate={startDate}/>
    </div>
  </div>
);
}
//   return (
//     <div className="search-box">
      
//       <div className="start-date">
//         <h5>From</h5>
//         <DatePicker onChange={e => setStartDate(e.target.value)} value={startDate} minDate={today} />
//       </div>
//       <div className="end-date">
//         <h5>Until</h5>
//         <DatePicker onChange={e => setEndDate(e.target.value)} value={endDate} minDate={tomorrow}/>
//       </div>
//     </div>
//   );
// }