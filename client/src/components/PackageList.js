//var packages = require('./db/mockData/packages.js')
import { packages } from "../mock_data/packages";

export function PackageList() {
  console.log(packages);
  return (
    <>
      <h1>This is my list of Packages</h1>
      {/* <div>{JSON.stringify(packages[0])}</div> */}
      <div>
        <ul>
          {packages.map((pack) => (
            <li>{JSON.stringify(pack)}</li>




            
          ))}
        </ul>
      </div>
    </>
  );

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
}
