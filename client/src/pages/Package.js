import "./styles/Package.scss";
import { useParams } from "react-router-dom";
// import { ReactCalendar } from "../components/Calendar";
import { formatDateTitles } from "../helpers/formatDateTitles";
import { BookingBox } from "../components/BookingBox";
import { PackageInfoCard } from "../components/PackageInfoCard";
import "react-calendar/dist/Calendar.css";
import { useState, useEffect } from "react";
import axios from "axios";


import { useSearch } from "../providers/SearchProvider";
import { Map } from "../components/Map"; // import the map here
import { ProductGrid } from "../components/ProductGrid";

import Message from "../components/Message";
import MessageArea from "../components/MessageArea";

export function Package() {
  const { id } = useParams();

  const { startDate, endDate, diff } = useSearch();

  const [packageItem, setPackageItem] = useState({});
  const [loading, setLoading] = useState(true);

  const fetchData = () => {
    if (isNaN(+id)) {
      setLoading(false);
      return setPackageItem({});
    } else {
      axios
        .get(`/api/packages/${id}`)
        .then((res) => {
          if (res.data.data.rows.length === 0) {
            setLoading(false);
            return setPackageItem({});
          } else {
            setPackageItem(res.data.data.rows[0]);
            setTimeout(() => {
              return setLoading(false);
            }, 200);
          }
        })
        .catch(function (error) {
          return setPackageItem({});
        });
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  // useEffect(() => {
  //   if (isNaN(+id)) {
  //     return setPackageItem({});
  //   } else {
  //     axios.get(`/api/packages/${id}`)
  //   // .then((res)=> console.log(res))
  //   .then((res) => {
  //     if (res.data.data.rows.length === 0) {
  //       return setPackageItem({})
  //     } else {
  //       return setPackageItem(res.data.data.rows[0])
  //     }
  //   })
  //   .catch(function (error) {
  //     // handle error
  //     console.log(error);
  //     return setPackageItem({});
  //   })
  //   return ()=>console.log('This is my cleanup')
  //   }
  // }, [id])
 
 

  let location = {
    address: packageItem.latitude,
    lat: packageItem.latitude, 
    lng: packageItem.longitude  
  };
  console.log(location)
 




  return (
    <div className="Package">
      {loading && <h1>Loading Page</h1>}
      {!packageItem.id && !loading && <h1>Package Not Found</h1>}
      {packageItem.id && !loading && (
        <>
          <div className="package-top">
            <div className="empty-div">
              {loading ? (
                <div></div>
              ) : (
                <img
                  src={require(`../assets/package_imgs/${packageItem.package_img}.png`)}
                  alt="img"
                  className="package-img"
                />
              )}
            </div>
            <div className="card">
              <PackageInfoCard
                package_img={packageItem.package_img}
                tent={packageItem.tent_description}
                bags={packageItem.bags_description}
                lantern={packageItem.lantern_description}
                cooking={packageItem.cooking_description}
              />
            </div>
          </div>
          <div className="package-bottom">
            <div>
              <h2>
                {formatDateTitles(packageItem.category)} Person Package
                <br />
                Gear owned by user {packageItem.user_id}
              </h2>
              <p className="description-box">{packageItem.description}</p>
              <h2>Check out the gear:</h2>
              <ProductGrid />
              <h2>Notes about the gear:</h2>
              <p className="description-box">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
                amet vestibulum sapien, ut porttitor est. In placerat odio erat,
                a rutrum elit ullamcorper sed. Cras auctor lectus eu felis
                fermentum mattis eget ac sem. Vestibulum eget ultricies quam.
                Sed nulla turpis, tempus vel mattis in, mollis at lacus. Quisque
                viverra augue libero, eget scelerisque mauris malesuada eu.
                Suspendisse at nibh elit. Etiam lacus justo, tempus eu egestas
                et, rhoncus ac elit.
              </p>
            </div>
            <BookingBox
              price={packageItem.price}
              packageID={packageItem.id}
              startDate={startDate}
              endDate={endDate}
              diff={diff}
            />
          </div>

          <div>
            <Map location={location} zoomLevel={12} /> include it here
          </div>
          <Message packageID={packageItem.id} />
          {/* <MessageArea packageID={packageItem.id} /> */}
        </>
      )}
    </div>
  );
}
