import { useState, useEffect } from "react";

import PackageListItem from "./PackageListItem";
import { CategoryLinksBar } from "./CategoryLinksBar";
import { DatePickerBar } from "./DatePickerBar";
import axios from "axios";

export default function CategoryFilterItem(props) {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    axios
      .get(`/api/categories/${props.category}`)
      .then((res) => setCategories(res.data.data.rows));
  }, [props.category]);

  // const currentPackage = packages.filter(
  //   (pack) => pack.category == props.category
  // );





  const packageGallery = categories.map((packageItem) => {
    return (
      <PackageListItem
        key={packageItem.id}
        image={packageItem.image}
        id={packageItem.id}
        userID={packageItem.user_id}
        price={packageItem.price}
        category={packageItem.category}
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
