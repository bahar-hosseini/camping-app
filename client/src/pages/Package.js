import './styles/Package.scss'
import { useParams } from 'react-router-dom'
// import { packages } from '../mock_data/packages'
import { ReactCalendar } from '../components/Calendar'
import { formatDateTitles } from '../helpers/formatDateTitles'
import { BookingBox } from '../components/BookingBox'
import { PackageInfoCard } from '../components/PackageInfoCard'
import 'react-calendar/dist/Calendar.css'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { searchContext } from "../providers/SearchProvider";
import useContext from "../providers/SearchProvider";
// import NotFound from "./NotFound.js"

export function Package() {
  const { id } = useParams()
  const { startDate, endDate, diff } = useContext(searchContext);
  const [packageItem, setPackageItem] = useState({})


 
  useEffect(() => {
    axios.get(`/api/packages/${id}`)
    // .then((res)=> console.log(res))
    .then((res) => {
      setPackageItem(res.data.data.rows[0])
    })
    return ()=>console.log('This is my cleanup')
  }, [id])

  console.log(packageItem);
  
  return (
    <div className='Package'>
    {!packageItem ? <h1>Package Not Found</h1> : <><div className='package-top'>
        <div>
          {packageItem.package_img ? <img src={require(`../assets/package_imgs/${packageItem.package_img}.png`)} alt='img' className='package-img' /> : <div width="2556px" height="1648px"/>}
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
            {formatDateTitles(packageItem.category)} Person Package
            <br />
            Gear owned by user {packageItem.user_id}
          </h2>
          <p className='description-box'>{packageItem.description}</p>
        </div>
<<<<<<< HEAD
        <BookingBox price={packageItem.price} packageID={packageItem.id} startDate={startDate} endDate={endDate} diff={diff} />
      </div></>}
      
=======
        
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

        <BookingBox price={packageItem.price} packageID={packageItem.id}  />

        {/* <ReactCalendar /> */}
        {/* availability calendar left here (stretch) */}
      </div>
>>>>>>> 7db2dca (packageID routes adjusted)
    </div>
  )
}
