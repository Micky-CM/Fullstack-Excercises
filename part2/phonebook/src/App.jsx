import { useState, useEffect } from 'react'
import contactService from './services/contacts'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filterName, setFilterName] = useState('')

  useEffect(()=> {
    contactService.getAll().then(initialPerson=> {
      setPersons(initialPerson)
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

      contactService.create(newPerson).then(returnedPerson => {
        setPersons([...persons, returnedPerson])
        setNewName('')
        setNewNumber('')
      })
    }
  }

  const deletePerson = (id, name) => {
    if (window.confirm(`Delete ${name}?`)) {
      contactService
        .remove(id)
        .then(() => {
          setPersons(persons.filter(person => person.id !== id))
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
      <Persons
        filteredPersons={filteredPersons}
        deletePerson={deletePerson}
      />
    </div>
  )
}

export default App