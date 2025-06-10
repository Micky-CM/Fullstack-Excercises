import { useState } from 'react'

const Person = ({name})=> <li>{name}</li>

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ])
  const [newName, setNewName] = useState('')

  const addPerson = (event)=> {
    event.preventDefault()

    const nameExists = persons.some(
      person => person.name.toLowerCase() === newName.trim().toLowerCase()
    )

    if (nameExists) {
      alert(`${newName} is already added to phonebook`)
    }
    else {
      const newPerson = {
        name: newName
      }
      setPersons([...persons, newPerson])
    }
    setNewName('')
  }

  const handleNameChange = (event)=> {
    setNewName(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          Name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          <button>add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {
          persons.map(person => (
            <Person key={person.name} name={person.name} />
          ))
        }
      </ul>
    </div>
  )
}

export default App