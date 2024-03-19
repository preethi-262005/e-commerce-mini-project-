import React from "react";
import Header2 from "./Header2";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";
import "./Home.css";
function Home() {
  let navigate = useNavigate();
  return (
    <div>
      <Header2 />
      <div className="container">
        <img
          src="https://img.bekiamoda.com/articulos/portada/68000/68464.jpg"
          id="Logo"
          className="w-100 "
        />
        <div className="text">
          <h2 className=" display-6">
            FALL for<br></br> FASHION
          </h2>
          <button
            type="button"
            className="btn btn-dark text-white  p-2 m-2"
            onClick={() => navigate("/product")}
          >
            Shop Now
          </button>
        </div>
      </div>
      <div className="h-2">
        <Footer />
      </div>
    </div>
  );
}

export default Home;
