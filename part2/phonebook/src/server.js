import axios from "axios"

const getAll = () => {
  const req = axios.get('http://localhost:3001/persons')
  return req.then(res => res.data)
}

const addNew = (obj) => {
  const req= axios.post('http://localhost:3001/persons', obj)
  return req.then(res => res.data)
}

const deleteName = (id) => {
  try{
    axios.delete(`http://localhost:3001/persons/${id}`)
    console.log(200)
    return 200
  } catch {
    console.log(404)
    return 404
  }
}

const update = (id, obj) => {
  const req = axios.put(`http://localhost:3001/persons/${id}`, obj)
  return req.then(res => res.data)
}

export default {
  getAll,
  addNew,
  deleteName,
  update
}
