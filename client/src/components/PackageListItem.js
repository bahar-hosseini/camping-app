import React from 'react'
import { Link } from 'react-router-dom'
import './styles/PackageListItem.scss'
import { formatDateTitles } from '../helpers/formatDateTitles'
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
    <Link to={'/package/' + props.id} className='home-package-item'>
      <div>
        {/* <div classNames='card'> */}
        <img
          className='home-img'
          src={require(`../assets/home_imgs/${props.home_img}.png`)}
          alt='img'
          width='300px'
        />
        <h2 className='package-card-title'>
          {formatDateTitles(props.category)} Person Package
        </h2>
        <h4 className='package-card-text'>
          <span className='distance-packagelist'>{props.location}km away</span>
          <br />${props.price} per day
        </h4>
      </div>
    </Link>
  )
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
