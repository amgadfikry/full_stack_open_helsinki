import server from "./server"

const Numbers = ({filterList, persons, setPersons, setFilterList, setErrMessage}) => {
  const handleDelete = async(e) => {
    const confirm = window.confirm("Are you sure delete this name?")
    if (confirm) {
      const id = e.target.name
      const res = await server.deleteName(id)
      if (res === 200) {
        setPersons(persons.filter(el => el.id !== id))
        setFilterList(persons.filter(el => el.id !== id))  
      }
      else {
        setErrMessage('Information already removed')
        setTimeout(() => {
          setErrMessage('')
        }, 3000)
      }
    }
  }

	return (
		<div>
      {
        filterList.map(el => {
          return (<div key={el.id}>
            <span>{el.name} {el.number}</span>
            <input type="submit" value='Delete' onClick={handleDelete}  name={el.id}/>
          </div>)
        })
      }
    </div>
	)
}

export default Numbers
