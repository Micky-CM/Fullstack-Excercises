const Filter = ({ search, handleChange }) => {
  return (
    <div>
      Find countries:
      <input value={search} onChange={handleChange} placeholder='Enter country name' />
    </div>
  )
}

export default Filter