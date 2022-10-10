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

  const redirectToPackage = () => {
    return (window.location = `/package/${props.id}`)
  }

  return (
    <Link to={'/package/' + props.id} className='home-package-item'>
    {/* <div className='home-package-item'> */}
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
    {/* </div> */}
    </Link>
  )
}
