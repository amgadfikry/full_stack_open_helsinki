import Detail from './detail.jsx'
import {useState} from 'react'

const CountryList = ({country}) => {
	const [seeDetail, setSeeDetail] = useState(false)

	const handleDetail = () => {
		setSeeDetail(!seeDetail)
	}

	return (
		<div>
			<span>{country.name.common}</span>
			<input value={seeDetail ? 'Hide' : 'Show'} type='submit' onClick={handleDetail} />
			{
				seeDetail && <Detail country={country} />
			}
		</div>
	)
}

export default CountryList