import React from 'react'
import NavBar from "../Components/NavBar/NavBar";
import { useState, useEffect } from 'react';
import axios from 'axios';


function RandomBeerPage() {
    const [beers, setBeers] = useState([]);

    const fetchData = async () => {
      try {
        let response = await axios.get(
          "https://ih-beers-api2.herokuapp.com/beers/random"
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
      <img src={beers.image_url} alt="beer" />
      <h3>{beers.name}</h3>
      <p>{beers.tagline}</p>
      <p>{beers.contributed_by}</p>
    </div>
  );
}

export default RandomBeerPage