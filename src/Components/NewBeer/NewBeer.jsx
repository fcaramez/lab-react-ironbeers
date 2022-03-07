import React from "react";
import newBeer from "../../assets/new-beer.png";
import { Link, NavLink } from "react-router-dom";

function NewBeer() {
  return (
    <div>
      <Link className="links" to={'/new-beer'}>
        <img src={newBeer} alt="beer" />
        <h3>New Beer</h3>
        <p>Create your own beer!</p>
      </Link>
    </div>
  );
}

export default NewBeer;
