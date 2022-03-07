import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import NavBar from "../Components/NavBar/NavBar";

function BeersPage() {
  const [beers, setBeers] = useState([]);

  const fetchData = async () => {
    try {
      let response = await axios.get(
        "https://ih-beers-api2.herokuapp.com/beers"
      );

      let beersFromAPI = response.data;
      console.log(beersFromAPI);
      setBeers(beersFromAPI);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <NavBar />
      <h3>List of beers</h3>
      {beers.map((beer) => {
        return (
          <div key={beer._id}>
            <Link className="links" to={`/beer/${beer._id}`}>
              <img src={beer.image_url} alt="beer" />
              <h3>{beer.name}</h3>
              <p>{beer.tagline}</p>
              <p> Created By: {beer.contributed_by}</p>
            </Link>
          </div>
        );
      })}
    </div>
  );
}

export default BeersPage;
