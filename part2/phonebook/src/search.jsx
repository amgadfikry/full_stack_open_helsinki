import { useState } from 'react'

const Search = ({persons, setFilterList}) => {
	const [search, setSearch] = useState('')

	const handleSearch = (e) => {
	  const searchTerm = e.target.value;
	  setSearch(searchTerm);
	  const filteredPersons = persons.filter((person) =>
	    person.name.toLowerCase().includes(searchTerm.toLowerCase())
	  );
	  setFilterList(filteredPersons);
	}

	return (
		<div>
        Filter by name: <input value={search} onChange={handleSearch} placeholder='Enter name' />
    </div>
	)
}

export default Search
