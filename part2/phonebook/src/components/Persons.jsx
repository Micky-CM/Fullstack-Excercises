import Person from "./Person"

const Persons = ({filteredPersons, deletePerson})=> {
  return (
    <ul>
      {
        filteredPersons.map(person => (
          <Person
            key={person.id}
            person={person}
            deletePerson={deletePerson}
          />
        ))
      }
    </ul>
  )
}

export default Persons