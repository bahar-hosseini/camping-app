import React from "react";
// import classnames as 'classnames';

export default function PackageListItem(props) {
  // key={packageItem.id}
  // image={packageItem.image}
  // id={packageItem.id}
  // userID={packageItem.user_id}
  // price={packageItem.price}
  // category={packageItem.category}
  // location={packageItem.location}
  console.log(props, "test here");
  return (
    <a href="userDash" >
      {/* ^ link to each indv. id product  */}
    <div>
       
        
      
      {/* <div classNames='card'> */}
      <img src={props.image} alt="img" />
      <h2>category {props.category}</h2>
      <h4>location {props.location}</h4>
      <h4>availability {props.availability}</h4>
      <h4>price: {props.price}</h4>
    </div>

    </a>
   
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
