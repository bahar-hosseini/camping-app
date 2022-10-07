import "../pages/styles/Package.scss";

export function ProductGrid() {
  return (
    <div className="product-grid-container">
      <div className="product-grid">
        {/* tent */}
        <div className="product-card">
          <div className="product-img-box">
            <img
              src="https://m.media-amazon.com/images/I/71Bx8R5IUSL._AC_UL640_FMwebp_QL65_.jpg"
              alt="tent"
            ></img>
          </div>
          <p>Azarxis Backpacking Tent</p>
        </div>
        {/* lantern */}
        <div className="product-card">
          <div className="product-img-box">
            <img
              src="https://m.media-amazon.com/images/I/71t1Y2qRDeL._AC_UL640_FMwebp_QL65_.jpg"
              alt="stove"
            ></img>
          </div>
          <p>StarLight LED Camping Lantern</p>
        </div>
        {/* cooking range */}
        <div className="product-card">
          <div className="product-img-box">
            <img
              src="https://m.media-amazon.com/images/I/71kb+4yKmcL._AC_UL640_FMwebp_QL65_.jpg"
              alt="stove"
            ></img>
          </div>
          <p>Martin 2 Burner Propane Stove Grill</p>
        </div>
        {/* cooking pot */}
        <div className="product-card">
          <div className="product-img-box">
            <img
              src="https://m.media-amazon.com/images/I/610paxAP0BL._AC_UL640_FMwebp_QL65_.jpg"
              alt="tent"
            ></img>
          </div>
          <p>GSI Outdoors Glacier Stainless Lightweight Bottle Cup</p>
        </div>
        {/* sleeping bag */}
        <div className="product-card">
          <div className="product-img-box">
            <img
              src="https://m.media-amazon.com/images/I/81MqU8qbjeL._AC_UL640_FMwebp_QL65_.jpg"
              alt="stove"
            ></img>
          </div>
          <p>Coleman Brazos Cold Weather Sleeping Bag</p>
        </div>
        {/* sleeping bag */}
        <div className="product-card">
          <div className="product-img-box">
            <img
              src="https://m.media-amazon.com/images/I/61ub4B-hIbL._AC_UL640_FMwebp_QL65_.jpg"
              alt="stove"
            ></img>
          </div>
          <p>Coleman Heritage Big and Tall Sleeping Bag</p>
        </div>
      </div>
    </div>
  );
}
