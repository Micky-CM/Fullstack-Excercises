import { useState } from 'react'

const Person = ({name, number})=> <li>{name}: {number}</li>

const App = ({contacts}) => {
  const [persons, setPersons] = useState(contacts)

  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filterName, setFilterName] = useState('')

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
      alert(`${newNumber} is already used by another contanct`)
    } else {
      const newPerson = {
        name: newName,
        number: newNumber
      }
      setPersons([...persons, newPerson])
    }
    setNewName('')
    setNewNumber('')
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
      <div>
        Filter shown with: <input value={filterName} onChange={handleFilterChange} />
      </div>
      <h2>Add a new contact</h2>
      <form onSubmit={addPerson}>
        <div>
          Name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          Number: <input value={newNumber} onChange={handleNumberChange} />
        </div>
        <div>
          <button>add</button>
        </div>
      </form>
      <h2>Contact numbers</h2>
      <ul>
        {
          filteredPersons.map(person => (
            <Person key={person.name} name={person.name} number={person.number} />
          ))
        }
      </ul>
    </div>
  )
}

export default App