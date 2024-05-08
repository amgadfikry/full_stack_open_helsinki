import { useState } from 'react'
import server from './server'

const AddNew = ({persons, setFilterList, setPersons, setMessage}) => {
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  const handleName = (e) => {
    setNewName(e.target.value)
  }

  const handleNumber = (e) => {
    setNewNumber(e.target.value)
  }

  const handleAddNewPerson = async (e) => {
    e.preventDefault();
    const newPerson = {
      name: newName,
      number: newNumber
    }
    const nameExist = persons.find(el => el.name === newName)
    if (nameExist && nameExist.number === newNumber) {
      alert(`${newName} is already added to phonebook`)
      
    }
    else if (nameExist) {
      const confirm = window.confirm(`${newName} is exist do you want replace phone number?`)
      if (confirm) {
        const res = await server.update(nameExist.id, {...nameExist, number: newNumber})
        setPersons(persons.map(el => el.id !== nameExist.id ? el : res))
        setFilterList(persons.map(el => el.id !== nameExist.id ? el : res))
        setMessage('Number changed successful')
      }
    }
    else {
      const res = await server.addNew(newPerson)
      setPersons(persons.concat(res))
      setFilterList(persons.concat(res))
      setMessage('Add new name and number successful')
    }
    setNewName('')
    setNewNumber('')
    setTimeout(() => {
      setMessage('')
    }, 3000)
  }

	return(
		<form>
      <div>
        Name: <input value={newName} onChange={handleName} placeholder='Enter Name' />
      </div>
      <div>
        Number: <input value={newNumber} onChange={handleNumber} placeholder='Enter Phone' />
      </div>
      <div>
        <button type="submit" onClick={handleAddNewPerson} >add</button>
      </div>
    </form>
	)
}

export default AddNew
