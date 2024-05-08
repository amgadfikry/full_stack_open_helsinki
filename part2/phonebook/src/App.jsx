import { useState, useEffect } from 'react'
import Search from './search'
import AddNew from './addNew'
import Numbers from './numbers'
import server from './server'
import './style.css'

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [filterList, setFilterList] = useState(persons)
  const [message, setMessage] = useState('')
  const [errMessage, setErrMessage] = useState('')

  useEffect(() => {
    const fetch = async () => {
      const res = await server.getAll()  
      setPersons(res)
      setFilterList(res)
    }
    fetch()
  }, [])

  return (
    <div>
      <h1>Phonebook</h1>
        {errMessage && <p className='errMsg' >{message}</p>}
        {message && <p className='msg' >{message}</p>}
        <Search persons={persons} setFilterList={setFilterList} />
      <h2>Add new</h2>
        <AddNew persons={persons} setPersons={setPersons} setFilterList={setFilterList} setMessage={setMessage}/>
      <h2>Numbers</h2>
        <Numbers filterList={filterList} setFilterList={setFilterList} persons={persons} setPersons={setPersons}/>
    </div>
  )
}

export default App
