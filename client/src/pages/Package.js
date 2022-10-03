import { useParams } from "react-router-dom";
import { packages } from "../mock_data/packages";
import packageImg from "../assets/product_page.png";
import { ReactCalendar } from "../components/Calendar";
import { PackageInfoCard } from "../components/PackageInfoCard";
import "react-calendar/dist/Calendar.css";

export function Package() {
  const { id } = useParams();
  const currentPackage = packages.filter((pack) => pack.id === Number(id));

  // <PackageListItem
  //       key={packageItem.id}
  //       image={packageItem.image}
  //       id={packageItem.id}
  //       userID={packageItem.user_id}
  //       price={packageItem.price}
  //       category={packageItem.category}
  //       location={packageItem.location}
  //       availability={packageItem.availability}
  //     />

  return (
    <>
      <h1>This package type is: {id}</h1>

      <div>
        <img src={packageImg} alt="img" width="100px" />
        {/* this should be a component */}
        <PackageInfoCard
          tent={currentPackage[0].tent_description}
          bags={currentPackage[0].bags_description}
          lantern={currentPackage[0].lantern_description}
          cooking={currentPackage[0].cooking_description}
        />
        {/* <ul>
          <li>{currentPackage[0].tent_description}</li>
          <li>{currentPackage[0].bags_description}</li>
          <li>{currentPackage[0].lantern_description}</li>
          <li>{currentPackage[0].cooking_description}</li>
        </ul> */}
      </div>
      <div>
        THIS CATEGORY IS: {currentPackage[0].category}
        <br />
        THIS OWNER IS: {currentPackage[0].user_id}
        <br />
        {currentPackage[0].description}
      </div>
      {/* make booking widget component */}
      <div>
        <ul>
          <li>Price: ${currentPackage[0].price}</li>
          <li>Booking tool stuff (start date end date party size)</li>
          <button>BOOK</button>
        </ul>
      </div>

      {/* <ReactCalendar /> */}
      {/* availability calendar left here (stretch) */}
    </>
  );
}
