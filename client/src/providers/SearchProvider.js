import { createContext, useState } from "react";
// import DatePicker from "react-date-picker";
// Create a Context

export const searchContext = createContext();
// Create a Component wrapper from Context.Provider

export default function SearchProvider(props) {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  // const [dateRange, setDateRange] = useState(startDate, endDate )
  console.log("@@@@@@@@@@@")
  console.log("testhere start start", startDate)
  console.log("testhere end  start",endDate)
  console.log("@@@@@@@@@@@")
  // Functions to change  the counter state item
  



  // This list can get long with a lot of functions.  Reducer may be a better choice
  // const providerData = { counter, increment, decrement, clear };
  const providerData = { startDate, endDate, setStartDate, setEndDate   };
  // We can now use this as a component to wrap anything
  // that needs our state
  return (
    <searchContext.Provider value={providerData}>
      {props.children}
    </searchContext.Provider>
  );
}
