import axios from 'axios'
import { useEffect, useState } from 'react'
import Country from './country.jsx'

const App = () => {
  const [search, setSearch] = useState('')
  const [countries, setCountries] = useState([])
  const [filtered, setFiltered] = useState([])

  const handleSearch = (e) => {
    const val = e.target.value
    setSearch(val)
    if (!val) {
      setFiltered([])
    } else {
      setFiltered(countries.filter(el => el.name.common.toLowerCase().includes(val.toLowerCase())))
    }
  }

  useEffect(() => {
    axios.get('https://studies.cs.helsinki.fi/restcountries/api/all')
      .then(res => setCountries(res.data))
  }, [])

  return (
    <div>
      find Countries: <input value={search} onChange={handleSearch} placeholder='search for countries' />
      {filtered.length > 10
        ? <p> Too many match, filter more </p>
        : <Country filtered={filtered} />
      }
    </div>
  )
}

export default App
