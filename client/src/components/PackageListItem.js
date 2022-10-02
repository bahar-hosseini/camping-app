import React from "react";
// import homeImg from "../assets/home_square.png"
import { Link } from "react-router-dom";
import "./styles/PackageListItem.scss";
// import classnames as 'classnames';

export default function PackageListItem(props) {
  // key={packageItem.id}
  // image={packageItem.image}
  // id={packageItem.id}
  // userID={packageItem.user_id}
  // price={packageItem.price}
  // category={packageItem.category}
  // location={packageItem.location}
  // console.log(props, "test here");
  return (
    <Link to={"/package/" + props.id} className="home-package-item">
      <div>
        {/* <div classNames='card'> */}
        <img
          className="home-img"
          src={require(`../assets/${props.image}.png`)}
          alt="img"
          width="300px"
        />
        <h2>Package Category {props.category}</h2>
        <h4>{props.location}km away</h4>
        <h4>Availability Range {props.availability}</h4>
        <h4>${props.price}/day</h4>
      </div>
    </Link>
  );
}

// <li
//   className={dayClass}
//   onClick={() => props.setDay(props.name)}
//   data-testid="day"
// >
//   <h2 className="text--regular">{props.name}</h2>
//   <h3 className="text--light">
//     {props.spots > 1 && <>{props.spots} spots remaining</>}
//     {props.spots === 1 && <>1 spot remaining</>}
//     {!props.spots && <>no spots remaining</>}
//   </h3>
// </li>
// );
// }

//var packages = require('./db/mockData/packages.js')

// export function PackageListItem(props) {
//   console.log(props);

//   return (
//     <>

//     </>
//   );

// return (
//   <>
//     {packages.length ? (
//       <div>
//         <h1>Packages</h1>
//         <ul>
//           {packages.map((item) => (
//             <li>{item}</li>
//           ))}
//         </ul>
//       </div>
//     ) : (
//       <h1>No Packages</h1>
//     )}
//   </>
// );
// }
