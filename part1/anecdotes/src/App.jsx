import { useState } from 'react'

const Button = ({onClick, text})=> <button onClick={onClick}>{text}</button>

const MostVotedAnecdote = ({anecdotes, votes}) => {
  const maxVotes = Math.max(...votes)

  if (maxVotes === 0) {
    return <div>No votes given</div>
  }

  const mostVotedIndex = votes.indexOf(maxVotes)

  return <div>{anecdotes[mostVotedIndex]}</div>
}

const App = ()=> {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0))

  const getRandomAnecdote = ()=> {
    const randomIndex = Math.floor(Math.random() * anecdotes.length)
    setSelected(randomIndex)
  }

  const addVote = ()=> {
    const newVotes = [...votes]
    newVotes[selected] += 1
    setVotes(newVotes)
  }

  return (
    <>
      <h1>Anecdote of the day</h1>
      <div>{anecdotes[selected]}</div>
      <div>Has {votes[selected]} votes</div>
      <Button onClick={addVote} text="Vote" />
      <Button onClick={getRandomAnecdote} text="Next anecdote" />

      <h2>Anecdote with most votes</h2>
      <MostVotedAnecdote anecdotes={anecdotes} votes={votes} />
    </>
  )
}

export default App
