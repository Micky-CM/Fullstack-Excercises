const Person = ({person, deletePerson}) => {
  return (
    <li>
      {person.name}: {person.number}
      <button onClick={() => deletePerson(person.id, person.name)}>
        Delete
      </button>
    </li>
  )
}

export default Person