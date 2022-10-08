//var packages = require('./db/mockData/packages.js')
import { useState, useEffect } from 'react'
// import { packages } from '../mock_data/packages'
import axios from 'axios'

/**
 *Internal modules
 **/

import PackageListItem from './PackageListItem'
import './styles/PackageList.scss'

export function PackageList() {
  const [packages, setPackages] = useState([])
  useEffect(() => {
    axios.get('/api/packages').then((res) => setPackages(res.data.data.rows))
    return () => console.log('')
  }, [])

  const packageGallery = packages.map((packageItem) => {
    return (
      <PackageListItem
        key={packageItem.id}
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
