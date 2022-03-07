import React from "react";
import { Link } from "react-router-dom";
import allBeers from "../../assets/beers.png";

function AllBeers() {
  return (
    <div>
      <Link className="links" to={"/beers"}>
        <img src={allBeers} alt="beer" />
        <h3>All Beers</h3>
        <p> Check all of our beers!</p>
      </Link>
    </div>
  );
}

export default AllBeers;
