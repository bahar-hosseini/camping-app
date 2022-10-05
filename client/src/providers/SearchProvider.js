import { createContext, useState, useEffect } from "react";
// import DatePicker from "react-date-picker";
// Create a Context
import CategoryFilterItem from '../components/CategoryFilterItem'
import axios from 'axios'
export const searchContext = createContext();
// Create a Component wrapper from Context.Provider

export default function SearchProvider(props) {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [category, setCategories] = useState(0)
  // const [dateRange, setDateRange] = useState(startDate, endDate )
  const [packages, setPackages] = useState([])

  useEffect(() => {
    axios.get('/api/packages').then((res) => setPackages(res.data.data.rows))
  }, [])


  // This list can get long with a lot of functions.  Reducer may be a better choice
  // const providerData = { counter, increment, decrement, clear };
  const providerData = {
    startDate,
    endDate,
    setStartDate,
    setEndDate,
    setCategories,
    category,
    packages
  
  };
  // We can now use this as a component to wrap anything
  // that needs our state
  return (
    <searchContext.Provider value={providerData}>
      {props.children}
    </searchContext.Provider>
  );
}
