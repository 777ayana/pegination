import React, { useEffect, useState } from 'react';
import axios from 'axios'
import { GET_ALL_COUNTRIES } from './API';
import Countries from './Components/Countries/index';
import Pagination from './Components/Pagination';

const App = () => {
  const [loading, setLOading] = useState(false)
  const [countries, setCountries] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [countriesPerpage] = useState(10)




  useEffect(() => {
    setLOading(true)
    axios.get(GET_ALL_COUNTRIES)
      .then(response => setCountries(response?.data))
      .catch(err => console.error(err))
      .finally(() => setLOading(false))

  }, [])

  const lastCountryIndex = currentPage * countriesPerpage
  const firstCountryIndex = lastCountryIndex - countriesPerpage
  const currentCountries = countries.slice(firstCountryIndex, lastCountryIndex)

  const nextPage = () => setCurrentPage(prev => prev + 1)
  const prevPage = () => setCurrentPage(prev => prev - 1)


  return (
    <div>
      <h1>Countries</h1>
      <Countries countries={currentCountries} loading={loading} />
      <Pagination countriesPerpage={countriesPerpage} totalCountries={countries.length} setCurrentPage={setCurrentPage} />
      <button onClick={nextPage}>Next</button>
    </div>
  );
};

export default App;