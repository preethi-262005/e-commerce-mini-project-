import React from "react";
import Header2 from "./Header2";
import { useLocation } from "react-router-dom";
import Footer from "./Footer";
function Shop() {
  let location = useLocation();
  let data = location.state;
  return (
    <div>
      <Header2 />
      <div className="card text-center m-auto border-4 w-50 mt-5 mb-3 p-4">
        <div className="d-flex justify-content-center">
          <img src={data.image} className="w-25" />
          <div className="info text-dark">
            <p
              className=" fs-5 p-2 display-5"
              style={{ color: "rgb(246,173,198)" }}
            >
              {data.title}
            </p>
            <p className=" fs-5 ">${data.price}</p>
            <p className="p-lead fs-6">{data.description}</p>
            <button className="btn btn-secondary text-white">Buy Now</button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Shop;
