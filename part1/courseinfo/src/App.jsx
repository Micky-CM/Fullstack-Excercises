const Header = ({course})=> <h1>{course}</h1>

const Part = ({part, exercise})=> <p>{part} {exercise}</p>

const Content = ({p1, p2, p3, ex1, ex2, ex3})=> {
  return (
    <div>
      <Part part={p1} exercise={ex1} />
      <Part part={p2} exercise={ex2} />
      <Part part={p3} exercise={ex3} />
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