import { Package } from "./components/Package";
import { PackageList } from "./components/PackageList";
import { NewPackage } from "./components/NewPackage";
import { PackageLayout } from "./PackageLayout";
import { Routes, Route } from "react-router-dom";

export function PackageRoutes() {
  return ( 
    <>
    <PackageLayout /> 
    <Routes>
      <Route index element={<PackageList />} />
      <Route path=":id" element={<Package />} />
      <Route path="new" element={<NewPackage />} />
    </Routes>
    </>
  );
}
