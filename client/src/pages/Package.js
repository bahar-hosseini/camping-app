import { useParams } from "react-router-dom";
import { packages } from "../mock_data/packages";
import packageImg from "../assets/product_page.png";

export function Package() {
  const { id } = useParams();
  const currentPackage = packages.filter((pack) => pack.id === Number(id));
  console.log(currentPackage);

  /*
  input: an array of objects

  output: an object where the object.id is the param
  */

  return (
    <>
      <h1>This is my Package {id}</h1>

      <div>
        <img src={packageImg} alt="img" width="100px" />
        {/* this should be a component */}
        <ul>
          <li>{currentPackage[0].tent_description}</li>
          <li>{currentPackage[0].bags_description}</li>
          <li>{currentPackage[0].lantern_description}</li>
          <li>{currentPackage[0].cooking_description}</li>
        </ul>
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
    </>
  );
}