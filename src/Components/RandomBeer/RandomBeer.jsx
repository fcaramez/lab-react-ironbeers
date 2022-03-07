import React from 'react'
import { Link } from 'react-router-dom';
import randomBeer from '../../assets/random-beer.png'

function RandomBeer() {
  return (
    <div>
      <Link className='links' to={"/random-beer"}>
        <img src={randomBeer} alt="beer" />
        <h3>Get a Random Beer!</h3>
        <p> Check a Random Beer!</p>
      </Link>
    </div>
  );
}

export default RandomBeer