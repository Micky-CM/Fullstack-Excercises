import { useState } from 'react'

const Button = ({onClick, text})=> <button onClick={onClick}>{text}</button>

const StatisticParagraph = ({text, value})=> <div>{text} {value}</div>

const App = ()=> {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const total = good + neutral + bad
  const average = total === 0 ? 0 : (good - bad) / total
  const positive = total === 0 ? 0 : (good * 100) / total

  return (
    <>
      <h1>Give feedback</h1>
      <Button onClick={()=> setGood(good + 1)} text="good" />
      <Button onClick={()=> setNeutral(neutral + 1)} text="neutral" />
      <Button onClick={()=> setBad(bad + 1)} text="bad" />

      <h2>Statistics</h2>
      <StatisticParagraph text="Good: " value={good} />
      <StatisticParagraph text="Neutral: " value={neutral} />
      <StatisticParagraph text="Bad: " value={bad} />

      <StatisticParagraph text="Average: " value={average} />
      <StatisticParagraph text="Positive: " value={positive + ' %'} />
    </>
  )
}

export default App
