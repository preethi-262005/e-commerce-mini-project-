import React from "react";
import Header2 from "./Header2";

function Header() {
  return (
    <div className="d-flex bg-dark justify-content-center ml-5">
      <Header2 />
      <div className="">
        <input
          type="text"
          placeholder="Search for more items"
          className="p-2 w-100 m-4"
        ></input>
      </div>
    </div>
  );
}

export default Header;
