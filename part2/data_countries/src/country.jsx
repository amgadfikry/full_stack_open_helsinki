import axios from 'axios'
import Detail from './detail.jsx'
import CountryList from './countryList.jsx'

const Country = ({filtered}) => {

  if (filtered.length === 0) {
    return
  }
  return (
    <>
      {
        filtered.length > 1
          ? filtered.map(el => <CountryList key={el.population} country={el} />)
          : <Detail country={filtered[0]} />
      }
    </>
  )
}

export default Country;
