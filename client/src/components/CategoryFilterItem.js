import React from "react";
import { packages } from "../mock_data/packages";
// import classnames as 'classnames';
//import { CategoryFilter } from "./CategoryFilter";
import PackageListItem from "./PackageListItem";
import { CategoryLinksBar } from "./CategoryLinksBar";
import { DatePickerBar } from "./DatePickerBar";
export default function CategoryFilterItem(props) {
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

export function PackageList() {
  const packageGallery = packages.map((packageItem) => {
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
    <div className="gallery-container">
      <div className="package-gallery">{packageGallery}</div>
    </div>
  );
}
