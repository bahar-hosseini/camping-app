import { Link } from "react-router-dom";
// import { useState } from "react";
// import CategoryFilterItem from "./CategoryFilterItem"
// import { Routes, Route } from "react-router-dom";
import { useContext } from "react";

import { searchContext } from "../providers/SearchProvider";
export function CategoryLinksBar(props) {
  const { startDate, endDate, category, filerByCategory, setCategory } =
    useContext(searchContext);

  return (
    <>
      <div>
        <button onclick={(event) => props.onChange(event.target.value)} value={1} >Package for 1</button>
        <button onclick={(event) => props.onChange(event.target.value)} value={2} >Package for 2</button>
        <button onclick={(event) => props.onChange(event.target.value)} value={3} >Package for 4</button>
        <button onclick={(event) => props.onChange(event.target.value)} value={4} >Package for 3</button>
      </div>
    </>
  );
}
