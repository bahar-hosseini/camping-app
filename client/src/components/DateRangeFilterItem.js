import React from "react";
import { packages } from "../mock_data/packages";
// import classnames as 'classnames';
//import { CategoryFilter } from "./CategoryFilter";
import PackageListItem from "./PackageListItem";
import { CategoryLinksBar } from "./CategoryLinksBar";
import { DatePickerBar } from "./DatePickerBar";
import avilableIDArry from "./AvailabilityFunc";

export default function DateRangeFilterItem(props) {
  // console.log(props)
  console.log(props.startDate)

  const searchRange = (start, end) => {
    let outputArry = []
    outputArry.push(start)
    outputArry.push(end)
    // console.log(outputArry)
    return outputArry
    
   };
  // console.log(searchRange(props.startDate, props.endDate))



  const currentPackage = packages.filter(
    (pack) => pack.category == props.category
  );

  const packageGallery = currentPackage.map((packageItem) => {
    return (
      <PackageListItem
        key={packageItem.id}
        image={packageItem.image}
        id={packageItem.id}
        userID={packageItem.user_id}
        price={packageItem.price}
        category={packageItem.category}
        location={packageItem.location}
        availability={packageItem.availability}
      />
    );
  });

  return (
    <>
      <DatePickerBar />
      <CategoryLinksBar />
      <div className="gallery-container">
        <div className="package-gallery">{packageGallery}</div>
      </div>
    </>
  );
}






















// import React from "react";
// import { packages } from "../mock_data/packages";
// // import classnames as 'classnames';
// import PackageListItem from "./PackageListItem";
// import { CategoryLinksBar } from "./CategoryLinksBar";
// import { DatePickerBar } from "./DatePickerBar";
// import avilableIDArry from "./AvailabilityFunc";

// export default function CategoryFilterItem(props) {
//   // console.log(avilableIDArry(props.dateRange))

//   // const currentPackage = packages.filter(
//   //   (pack) =>  .includes(pack.id)
//   // );

//   const packageGallery = currentPackage.map((packageItem) => {
//     return (
//       <PackageListItem
//         key={packageItem.id}
//         image={packageItem.image}
//         id={packageItem.id}
//         userID={packageItem.user_id}
//         price={packageItem.price}
//         category={packageItem.category}
//         location={packageItem.location}
//         availability={packageItem.availability}
//       />
//     );
//   });

//   return (
//     <>
//       <DatePickerBar />
//       <CategoryLinksBar />
//       <div className="gallery-container">
//         <div className="package-gallery">{packageGallery}</div>
//       </div>
//     </>
//   );
// }
