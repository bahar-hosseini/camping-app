//var packages = require('./db/mockData/packages.js')
import { useState, useContext } from 'react'
// import { packages } from '../mock_data/packages'
import { searchContext } from '../providers/SearchProvider'

/**
 *Internal modules
 **/

import PackageListItem from './PackageListItem'
import './styles/PackageList.scss'

export function PackageList() {
  // const [packages, setPackages] = useState([])
  const { packages } = useContext(searchContext)
  console.log(packages)

  const packageGallery = packages.map((packageItem, index) => {
    return (
      <PackageListItem
        key={index}
        home_img={packageItem.home_img}
        id={packageItem.id}
        userID={packageItem.user_id}
        price={packageItem.price}
        category={packageItem.category}
        location={packageItem.location}
        availability={packageItem.availability}
        name={packageItem.name}
      />
    )
  })

  return (
    <div className='gallery-container'>
      <div className='package-gallery'>{packageGallery}</div>
    </div>
  )
}
