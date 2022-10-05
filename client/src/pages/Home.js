import React from "react";
import './styles/Home.scss'
import { CategoryLinksBar } from "../components/CategoryLinksBar";
import { PackageList } from "../components/PackageList";
import { DatePickerBar } from "../components/DatePickerBar";
// import CategoryFilterItem from "../components/CategoryFilterItem";
import { useContext } from "react";
// import SearchProvider from "../providers/SearchProvider";
import { searchContext } from "../providers/SearchProvider";

export function Home() {
  const { startDate, endDate, category, filerByCategory } =
    useContext(searchContext);

  // const [category, setCategory] = useState(0);

  const sdedSame = function (sd, ed) {
    if (sd.getTime() === ed.getTime()) {
      return true;
    }
    return false;
  };

  return (
    <>
      {/* <div className="top-area"> */}
        <DatePickerBar />
      {/* </div> */}
      <CategoryLinksBar onChange={() => alert("test")} />
      {category === 0 && <PackageList />}
      {/* {category !== 0 && <CategoryFilterItem category={category} />} */}

      {/* <DateRangeFilterItem 
      startDate={startDate}
      endDate={endDate}
      /> */}
      {/* {sdedSame(startDate, endDate) && <PackageList />} */}
      {/* {sdedSame(startDate, endDate) && <DateRangeFilterItem  />} */}
    </>
  );
}
