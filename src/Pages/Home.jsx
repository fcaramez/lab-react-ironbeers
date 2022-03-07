import React from 'react'
import AllBeers from '../Components/AllBeers/AllBeers'
import RandomBeer from '../Components/RandomBeer/RandomBeer'
import NewBeer from '../Components/NewBeer/NewBeer'

function home() {
  return (
    <div>
        <AllBeers/>
        <RandomBeer />
        <NewBeer />
    </div>
  )
}

export default home