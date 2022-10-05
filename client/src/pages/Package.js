import './styles/Package.scss'
import { useParams } from 'react-router-dom'
// import { packages } from '../mock_data/packages'
import packageImg from '../assets/product_page.png'
import { ReactCalendar } from '../components/Calendar'
import { BookingBox } from '../components/BookingBox'
import { PackageInfoCard } from '../components/PackageInfoCard'
import 'react-calendar/dist/Calendar.css'
import { useState, useEffect } from 'react'
import axios from 'axios'

export function Package() {
  const { id } = useParams()
  // const currentPackage = packages.filter((pack) => pack.id === Number(id))

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

  const [packageItem, setPackageItem] = useState({})
  useEffect(() => {
    axios.get(`/api/package/${id}`).then((res) => {
      setPackageItem(res.data.data.rows[0])
    })
  }, [id])
  
  return (
    <div className='Package'>
      <div className='package-top'>
        <div>
          {/* <img src={packageImg} alt='img' className='package-img' /> */}
          {packageItem.package_img && <img src={require(`../assets/package_imgs/${packageItem.package_img}.png`)} alt='img' className='package-img' />}
        </div>
        <div className='card'>
          <PackageInfoCard
            package_img={packageItem.package_img}
            tent={packageItem.tent_description}
            bags={packageItem.bags_description}
            lantern={packageItem.lantern_description}
            cooking={packageItem.cooking_description}
          />
        </div>
      </div>
      <div className='package-bottom'>
        <div>
          <h2>
            {packageItem.category} Person Package
            <br />
            Gear owned by user {packageItem.user_id}
          </h2>
          <p className='description-box'>{packageItem.description}</p>
        </div>
        
      {/* <BookingBox
        startDate={startDate}
        endDate={endDate}
        setStartDate={setStartDate}
        setEndDate={setEndDate}
        price={currentPackage[0].price}
        packageID={currentPackage[0].id}
      /> */}
      {/* <ReactCalendar /> */}
      {/* availability calendar left here (stretch) */}

        <BookingBox price={packageItem.price} packageID={packageItem.id} />

        {/* <ReactCalendar /> */}
        {/* availability calendar left here (stretch) */}
      </div>
    </div>
  )
}
