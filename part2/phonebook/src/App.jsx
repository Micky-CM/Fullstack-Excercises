import { useState } from 'react'

const Person = ({name, number})=> <li>{name}: {number}</li>

const App = () => {
  const [persons, setPersons] = useState([
    {
      name: 'Arto Hellas',
      number: '040-1234567'
    }
  ])

  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

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

  const handleNameChange = (event)=> {
    setNewName(event.target.value)
  }
  const handleNumberChange = (event)=> {
    setNewNumber(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
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
      <h2>Numbers</h2>
      <ul>
        {
          persons.map(person => (
            <Person key={person.name} name={person.name} number={person.number} />
          ))
        }
      </ul>
    </div>
  )
}

export default App