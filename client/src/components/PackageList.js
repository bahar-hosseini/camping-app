//var packages = require('./db/mockData/packages.js')
import { useState } from 'react'
// import { packages } from '../mock_data/packages'

/**
 *Internal modules
 **/

import PackageListItem from './PackageListItem'
import './styles/PackageList.scss'

export function PackageList() {
  const [packages, setPackages] = useState([])

  // let offset = 0

  // const loadPackage = () => {
  //   axios.get(`/api/packages/`, { params: { offset } }).then((res) => {
  //     setPackages((prevValue) => [...prevValue, ...res.data.data.rows])
  //     offset += 1
  //   })
  // }

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
      />
    )
  })

  return (
    <div className='gallery-container'>
      <div className='package-gallery'>{packageGallery}</div>
    </div>
  )
}
