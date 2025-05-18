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
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }
  return (
    <>
      <Header course={course} />
      <Content
        p1={part1.name} ex1={part1.exercises}
        p2={part2.name} ex2={part2.exercises}
        p3={part3.name} ex3={part3.exercises}
      />
      <Total total={part1.exercises + part2.exercises + part3.exercises} />
    </>
  )
}

export default App