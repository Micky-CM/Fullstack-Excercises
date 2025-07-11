import { useState, useEffect } from 'react'
import contactService from './services/contacts'
import Notification from './components/Notification'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filterName, setFilterName] = useState('')
  const [message, setMessage] = useState(null)

  useEffect(()=> {
    contactService.getAll()
      .then(initialPerson=> {
        setPersons(initialPerson)
      })
      .catch(error => {
        setMessage('Error loading contacts from server')
        setTimeout(() => {
          setMessage(null)
        }, 5000);
      })
  }, [])

  const showMessage = (msg) => {
    setMessage(msg)
    setTimeout(() => {
      setMessage(null)
    }, 4000);
  }

  const addPerson = (event)=> {
    event.preventDefault()

    const existingPerson = persons.find(
      person => person.name.toLowerCase() === newName.trim().toLowerCase()
    )
    const numberExist = persons.some(
      person => person.number === newNumber.trim()
    )

    if (existingPerson) {
      if (existingPerson.number !== newNumber.trim()){
        if (window.confirm(`'${newName}' is already added to phonebook, replace the old number with a new one?`)) {
          const updatedPerson = {
            ...existingPerson,
            number: newNumber.trim()
          }
          contactService.update(existingPerson.id, updatedPerson)
            .then(returnedPerson => {
              setPersons(persons.map(person =>
                person.id !== existingPerson.id ? person: returnedPerson
              ))
              showMessage(`Updated number for '${existingPerson.name}'`)
              setNewName('')
              setNewNumber('')
            })
            .catch(error => {
              showMessage(`Error updating contact '${existingPerson.name}'`)
            })
        }
      } else {
        showMessage(`'${newName}' with number '${newNumber}' is already added to phonebook`)
      }
    } else if (numberExist) {
      showMessage(`'${newNumber}' is already used by another contact`)
    }else {
      const newPerson = {
        name: newName.trim(),
        number: newNumber.trim()
      }
      contactService.create(newPerson)
        .then(returnedPerson => {
          showMessage(`${newPerson.name} was added successfully`)
          setPersons([...persons, returnedPerson])
          setNewName('')
          setNewNumber('')
        })
        .catch(error => {
          showMessage('Error adding contact')
        })
    }
  }

  const deletePerson = (id, name) => {
    if (window.confirm(`Delete ${name}?`)) {
      contactService
        .remove(id)
        .then(() => {
          showMessage(`${name} was deleted successfully`)
          setPersons(persons.filter(person => person.id !== id))
        })
        .catch(error => {
          setMessage(`Information of '${name}' has already been removed from server`)
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
      <Notification message={message} />
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