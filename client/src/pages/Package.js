import "./styles/Package.scss";
import { useParams } from "react-router-dom";
import { packages } from "../mock_data/packages";
import packageImg from "../assets/product_page.png";
import { ReactCalendar } from "../components/Calendar";
import { BookingBox } from "../components/BookingBox";
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
    <div className="Package">
      <div className="package-top">
        <div>
          <img src={packageImg} alt="img" className="package-img" />
        </div>
        <div className="card">
          <PackageInfoCard
            tent={currentPackage[0].tent_description}
            bags={currentPackage[0].bags_description}
            lantern={currentPackage[0].lantern_description}
            cooking={currentPackage[0].cooking_description}
          />
        </div>
      </div>
      <div className="package-bottom">
        <div>
          <h2>
            {currentPackage[0].category} Person Package
            <br />
            Gear owned by user {currentPackage[0].user_id}
          </h2>
          {currentPackage[0].description}
        </div>
      <BookingBox
        price={currentPackage[0].price}
        packageID={currentPackage[0].id}
      />
      {/* <ReactCalendar /> */}
      {/* availability calendar left here (stretch) */}
      </div>
    </div>
  );
}
