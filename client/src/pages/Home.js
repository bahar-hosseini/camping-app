import {React, useState} from 'react'
import { CategoryLinksBar } from '../components/CategoryLinksBar'
import { PackageList } from '../components/PackageList'
import { DatePickerBar } from '../components/DatePickerBar'
// import CategoryFilterItem from "../components/CategoryFilterItem";
import { useContext } from 'react'
// import SearchProvider from "../providers/SearchProvider";
import { searchContext } from "../providers/SearchProvider";
import { HomePackages } from '../components/HomePackages'
import CategoryFilterItem from '../components/CategoryFilterItem'

export function Home() {
  const { startDate, endDate,} = useContext(searchContext);
  const [category, setCategory] = useState(0);

  // const [category, setCategory] = useState(0);
  // console.log(startDate)
  // console.log(endDate)

  const sdedSame = function (sd, ed) {
    if (sd.getTime() === ed.getTime()) {
      return true;
    }else {
      return false;
    }
    
  };

  return (
    <>
      <DatePickerBar />
      <CategoryLinksBar />
      {/* {category === 0 && <PackageList />} */}
      {/* {category !== 0 && <CategoryFilterItem category={category} />} */}
      
      
   
      {category===0 && <PackageList />}
      {category>0 && <CategoryFilterItem category={1}  />} 
    </>
  )
}
