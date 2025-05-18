const Header = ({course})=> <h1>{course}</h1>

const Content = ({p1, p2, p3, ex1, ex2, ex3})=> {
  return (
    <div>
      <p>{p1} {ex1}</p>
      <p>{p2} {ex2}</p>
      <p>{p3} {ex3}</p>
    </div>
  )
}

const Total = ({total})=> <p>Number of exercises {total}</p>

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14
  return (
    <>
      <Header course={course} />
      <Content
        p1={part1} ex1={exercises1}
        p2={part2} ex2={exercises2}
        p3={part3} ex3={exercises3}
      />
      <Total total={exercises1 + exercises2 + exercises3} />
    </>
  )
}

export default App