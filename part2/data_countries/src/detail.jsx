import { useEffect, useState } from "react"
import axios from 'axios'

const Detail = ({country}) => {
	const [weather, setWeather] = useState({})

	const apiKey = import.meta.env.VITE_API_KEY
	const [lat, lon] = country.capitalInfo.latlng
	const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`

	useEffect(() => {
    axios.get(url)
      .then(res => setWeather(res.data));
  }, [url]);

	return (
		<div>
      <h1>{country.name.official}</h1>
      <p>Capital: {country.capital}</p>
      <p>Area: {country.area}</p>
      <div>
      Languages
        <ul>
        {
          Object.keys(country.languages).map((el, index) => <li key={index}>{country.languages[el]}</li>)
        }
        </ul>
      </div>
      <h1>{country.flag}</h1>
      <h2>Weather in {country.capital}</h2>
      <p>Temperature is {weather.main ? `${weather.main.temp}` : 'N/A'} F</p>
      {weather.weather && <img src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt='' />}
      <p>Wind is {weather.wind ? `${weather.wind.speed}` : 'N/A'} m/s</p>
    </div>
	)

}

export default Detail