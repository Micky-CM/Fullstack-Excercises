import { useState } from 'react'

const Button = ({onClick, text})=> <button onClick={onClick}>{text}</button>

const StatisticLine = ({text, value})=> <div>{text} {value}</div>

const Statistics = ({good, neutral, bad})=> {
  const total = good + neutral + bad
  const average = total === 0 ? 0 : (good - bad) / total
  const positive = total === 0 ? 0 : (good * 100) / total

  if (total === 0) {
    return <p>No feedback given</p>
  }

  return (
    <>
      <StatisticLine text="Good: " value={good} />
      <StatisticLine text="Neutral: " value={neutral} />
      <StatisticLine text="Bad: " value={bad} />
      <br />
      <StatisticLine text="Average: " value={average.toFixed(2)} />
      <StatisticLine text="Positive: " value={positive.toFixed(2) + ' %'} />
    </>
  )
}

const App = ()=> {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)


  return (
    <>
      <h1>Give feedback</h1>
      <Button onClick={()=> setGood(good + 1)} text="good" />
      <Button onClick={()=> setNeutral(neutral + 1)} text="neutral" />
      <Button onClick={()=> setBad(bad + 1)} text="bad" />

      <h2>Statistics</h2>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </>
  )
}

export default App
