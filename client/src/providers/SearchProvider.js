import { createContext, useState, useEffect, useRef } from 'react'
// import DatePicker from "react-date-picker";
// Create a Context
import { differenceInDays } from 'date-fns'
import CategoryFilterItem from '../components/CategoryFilterItem'
import axios from 'axios'
export const searchContext = createContext()
// Create a Component wrapper from Context.Provider

//todo:change name to data provider
export default function SearchProvider(props) {
  const [startDate, setStartDate] = useState(new Date())
  const [endDate, setEndDate] = useState(new Date())
  const [category, setCategories] = useState(0)
  // const [dateRange, setDateRange] = useState(startDate, endDate )
  const [packages, setPackages] = useState([])
  const [isLogin, setIsLogin] = useState(false)

  const [loading, setLoading] = useState(false)
  const isLoadedRef = useRef(false)
  useEffect(() => {
    // const abortCont = new AbortController();
    axios
      .get('/api/packages')
      // .then(()=> setDateRange(startDate, endDate))
      .then((res) => {
        setPackages(res.data.data.rows)
        isLoadedRef.current = true
      })
    return () => setPackages([])
  }, [])

  useEffect(() => {
    if (isLoadedRef.current === false) return
    axios
      .get('/api/packages/filter', { params: { category, endDate, startDate } })
      // .then((res) => console.log(res.data.data))
      .then((res) => {
        console.log(res.data.data, 'running@@@@@@')
        setPackages(res.data.data)
        setLoading(false)
      })
    // return ()=>console.log('cleanup')
    return () => setPackages([])
  }, [category])

  useEffect(() => {
    // const abortCont = new AbortController();
    setLoading(true)
    axios
      .get('/api/packages')
      // .then(()=> setDateRange(startDate, endDate))
      .then((res) => {
        setPackages(res.data.data.rows)
      })
    return () => setPackages([])
  }, [])

  axios.get('/api/login').then((res) => {
    console.log('This is cookie from back-->front', res.status)
  })

  const diff = differenceInDays(endDate, startDate)
  //todo: set diff as a state
  // This list can get long with a lot of functions.  Reducer may be a better choice
  // const providerData = { counter, increment, decrement, clear };
  const providerData = {
    startDate,
    endDate,
    setStartDate,
    setEndDate,
    setCategories,
    category,
    packages,
    diff,
    isLogin,
    setIsLogin,
    setPackages,
    setLoading,
  }
  // We can now use this as a component to wrap anything
  // that needs our state
  return (
    <searchContext.Provider value={providerData}>
      {props.children}
    </searchContext.Provider>
  )
}
