import React from 'react'
import { Country } from '../types'
import { Link } from 'react-router-dom';

const CountryComponent = ({country}: { country: Country }) => {
  return (
    <Link to={`/country-data/${country.id}/${country.title}`} className='country'>
        <p>{country.title}</p>
    </Link>
  )
}

export default CountryComponent;