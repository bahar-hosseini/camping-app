import { createContext, useState } from "react";
// import DatePicker from "react-date-picker";
// Create a Context

export const searchContext = createContext();
// Create a Component wrapper from Context.Provider

export default function SearchProvider(props) {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  
  const [category, setCategory] = useState(0);
  // const [dateRange, setDateRange] = useState(startDate, endDate )

  const filerByCategory = function(val) {
    setCategory(val)
  }

  // This list can get long with a lot of functions.  Reducer may be a better choice
  // const providerData = { counter, increment, decrement, clear };
  const providerData = {
    startDate,
    endDate,
    setStartDate,
    setEndDate,
    category,
    filerByCategory,
    setCategory
  };
  // We can now use this as a component to wrap anything
  // that needs our state
  return (
    <searchContext.Provider value={providerData}>
      {props.children}
    </searchContext.Provider>
  );
}
