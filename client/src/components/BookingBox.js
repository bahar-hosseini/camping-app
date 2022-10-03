export function BookingBox(props) {
  // lives inside of pages/Package.js

  // this box should be able to create a new object in our
  // bookings mock data array
  // will need the id passed down as a prop

  // here's how the code looked before breaking this out if you're curious:
  // <div>
  //   <ul>
  //     <li>Price: ${currentPackage[0].price}</li>
  //     <li>Booking tool stuff (start date end date party size)</li>
  //     <button>BOOK</button>
  //   </ul>
  // </div>;

  return (
    <div>
      <ul>
        {/* pass price down as a prop */}
        <li>Price:</li>
        <li>Booking tool stuff (start date end date party size)</li>
        <button>BOOK</button>
      </ul>
    </div>
  );
}
