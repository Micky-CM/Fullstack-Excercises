import { useState, useEffect } from 'react'
import axios from 'axios'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filterName, setFilterName] = useState('')

  useEffect(()=> {
    axios
    .get('http://localhost:3001/persons')
    .then(response=> {
      setPersons(response.data)
    })
  }, [])

  const addPerson = (event)=> {
    event.preventDefault()

    const nameExists = persons.some(
      person => person.name.toLowerCase() === newName.trim().toLowerCase()
    )
    const numberExist = persons.some(
      person => person.number === newNumber.trim()
    )

    if (nameExists) {
      alert(`${newName} is already added to phonebook`)
    } else if (numberExist) {
      alert(`${newNumber} is already used by another contact`)
    } else {
      const newPerson = {
        name: newName,
        number: newNumber
      }
      axios
      .post('http://localhost:3001/persons', newPerson)
      .then(response => {
        setPersons([...persons, response.data])
        setNewName('')
        setNewNumber('')
      })
    }
  }

  const filteredPersons = persons.filter(
    person => person.name.toLowerCase().includes(filterName.trim().toLowerCase())
  )


  const handleNameChange = (event)=> {
    setNewName(event.target.value)
  }
  const handleNumberChange = (event)=> {
    setNewNumber(event.target.value)
  }
  const handleFilterChange = (event)=> {
    setFilterName(event.target.value)
  }

  return (
    <div>
      <h1>Phonebook</h1>
      <Filter filterName={filterName} handleFilterChange={handleFilterChange} />
      <h2>Add a new contact</h2>
      <PersonForm
        newName={newName}
        newNumber={newNumber}
        handleNameChange={handleNameChange}
        handleNumberChange={handleNumberChange}
        addPerson={addPerson}
      />
      <h2>Contact numbers</h2>
      <Persons filteredPersons={filteredPersons} />
    </div>
  )
}

export default App