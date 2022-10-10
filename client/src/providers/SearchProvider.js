import { createContext, useState, useEffect, useRef, useContext } from "react";
// import DatePicker from "react-date-picker";
// Create a Context
import axios from "axios";
export const searchContext = createContext();
// Create a Component wrapper from Context.Provider

//hook for other files to use
export const useSearch = () => useContext(searchContext);
//todo:change file name to dataprovider

export default function SearchProvider(props) {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [category, setCategories] = useState(0);
  // const [dateRange, setDateRange] = useState(startDate, endDate )
<<<<<<< HEAD
  const [packages, setPackages] = useState([]);
  const [isLogin, setIsLogin] = useState(false);

  const [loading, setLoading] = useState(false);
  const isLoadedRef = useRef(false);
  const [loadMap, setLoadMap] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

=======
  const [packages, setPackages] = useState([])
  const [isLogin, setIsLogin] = useState(false)

  const [loading, setLoading] = useState(false)
  const isLoadedRef = useRef(false)
  const [loadMap, setLoadMap] = useState(false)

>>>>>>> main
  // load 4 (first row )
  //
  //
  //
  //
  //

  // on page load
  // useEffect(() => {
  //   // const abortCont = new AbortController();
  //   axios
  //     .get("/api/packages")
  //     // .then(()=> setDateRange(startDate, endDate))
  //     .then((res) => {
  //       setPackages(res.data.data.rows);
  //       isLoadedRef.current = true;
  //     });
  //   return () => setPackages([]);
  // }, []);

  /*
  INPUT: scroll data
  - when scroll data is greater than a certain number, make axios call for 4 more packages
  OUTPUT: 4 more packages are added to the packages on screen
  */

  const handleScroll = (e) => {
<<<<<<< HEAD
    // console.log(window.pageYOffset);
    if (window.innerHeight + e.target.documentElement.scrollTop + 1 >= e.target.documentElement.scrollHeight) {
      // console.log('hi');
      loadPackage();
=======
    if (
      window.innerHeight + e.target.documentElement.scrollTop + 1 >=
      e.target.documentElement.scrollHeight
    ) {
      console.log('teeest')
      loadPackage()
>>>>>>> main
    }
  };

  let offset = 8;

  const loadPackage = () => {
    axios.get(`/api/packages/`, { params: { offset } }).then((res) => {
<<<<<<< HEAD
      setPackages((prev) => [...res.data.data.rows]);
      isLoadedRef.current = true;
    });
    return (offset += 4);
  };

  // useEffect(() => {
  //   if (window.innerHeight + scrollPosition >= document.body.offsetHeight) {
  //     console.log("GETTTT");
  //     axios.get(`/api/packages/`, { params: { limit: 2, loadedPackages: packages.length } }, {timeout: 2000 }).then((res) => {
  //       console.log(res.data.data.rows);
  //       setPackages((prev) => [...prev, res.data.data.rows[0], res.data.data.rows[1]]);
  //     });
  //   }
  // }, [scrollPosition, packages.length]);

  // useEffect(() => {
  //   // loadPackage();
  //   const updatePostion = () => {
  //     setScrollPosition(window.scrollY);
  //   };
  //   window.addEventListener("scroll", updatePostion);
  //   updatePostion();
  //   return () => window.removeEventListener("scroll", updatePostion);
  // }, []);

  // OLD CODE:
  useEffect(() => {
    loadPackage();
    window.addEventListener("scroll", handleScroll);
    return () => console.log("check");
  }, []);
=======
      setPackages((prev) => [...prev, ...res.data.data.rows])
      isLoadedRef.current = true
    })

    return (offset += 12)
  }
  useEffect(() => {
    loadPackage()
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
>>>>>>> main

  ////////////////////////////////////
  // useEffect(() => {
  //   // const abortCont = new AbortController();
  //   axios
  //     .get('/api/packages')
  //     // .then(()=> setDateRange(startDate, endDate))
  //     .then((res) => {
  //       setPackages(res.data.data.rows)
  //       isLoadedRef.current = true
  //     })
  //   return () => setPackages([])
  // }, [])

  useEffect(() => {
    if (isLoadedRef.current === false) return;
    axios
      .get('/api/packages')
      // .then(()=> setDateRange(startDate, endDate))
      .then((res) => {
<<<<<<< HEAD
        setPackages(res.data.data.rows);
        isLoadedRef.current = true;
        setLoadMap(true);
      });
    return () => setPackages([]);
  }, []);
=======
        setPackages(res.data.data.rows)
        isLoadedRef.current = true
        setLoadMap(true)
      })
    return () => setPackages([])
  }, [])
>>>>>>> main

  useEffect(() => {
    if (isLoadedRef.current === false) return
    axios
<<<<<<< HEAD
      .get("/api/packages/filter/", {
=======
      .get('/api/packages/filter/', {
>>>>>>> main
        params: { category, endDate, startDate },
      })
      // .then((res) => console.log(res.data.data))
      .then((res) => {
        setPackages(res.data.data);
        setLoading(false);
      });
    // return ()=>console.log('cleanup')
    return () => setPackages([]);
  }, [category, startDate, endDate]);
  // useEffect(() => {
  //   // const abortCont = new AbortController();
  //   setLoading(true)
  //   axios
  //     .get('/api/packages')
  //     // .then(()=> setDateRange(startDate, endDate))
  //     .then((res) => {
  //       setPackages(res.data.data.rows)
  //     })
  //   return () => setPackages([])
  // }, [])

  useEffect(() => {
    axios.get("/api/login").then((res) => {
      // checks to see if response reveals that a user is logged in
      // runs every time we refresh the app
      if (res.data === "in") {
        return setIsLogin(true);
      } else if (res.data === "out") {
        return setIsLogin(false);
      }
<<<<<<< HEAD
    }, []);
=======
    }, [])
>>>>>>> main
    // this is the old way we were doing it, if the current way breaks
    // roll back to this:
    // if (res.status == 200 || 304) {
    //   return setIsLogin(true)
    //   // console.log(isLogin)
    // } else {
    //   return setIsLogin(false)
    // }
<<<<<<< HEAD
  });
=======
  })
>>>>>>> main

  // axios.get('/api/login').then((res) => {
  //   // console.log('This is cookie from back-->front', res.status)

  //   if (res.status == 200 || 304) {
  //     setIsLogin(true)
  //     // console.log(isLogin)
  //   }
  // })

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
    isLogin,
    setIsLogin,
    setPackages,
    setLoading,
    loadMap,
<<<<<<< HEAD
  };
=======
  }
>>>>>>> main
  // We can now use this as a component to wrap anything
  // that needs our state
  return (
    <searchContext.Provider value={providerData}>
      {props.children}
    </searchContext.Provider>
  );
}
