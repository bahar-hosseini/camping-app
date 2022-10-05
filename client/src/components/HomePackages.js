import { useState, useEffect } from 'react'
import axios from 'axios'

/**
 *Internal modules
 **/

import PackageListItem from './PackageListItem'
import './styles/PackageList.scss'

export function HomePackages(props) {

  // const [categories, setCategories] = useState([])
  // const [packageItem, setPackageItem] = useState({})

  // useEffect(() => {
  //   axios.get(`/api/categories/${props.category}`).then((res) => setCategories(res.data.data.rows))
  // }, [])
  const [packages, setPackages] = useState([])
  useEffect(() => {
    axios.get('/api/packages').then((res) => setPackages(res.data.data.rows))
  }, [])

   
  // useEffect(() => {
  //   axios.get(`/api/package/${id}`).then((res) => {
  //     setPackageItem(res.data.data.rows[0])
  //   })
  // }, [])

  const packageGallery = packages.map((packageItem) => {
    return (
      <PackageListItem
        key={packageItem.id}
        image={packageItem.image}
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



