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
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]
  return (
    <>
      <Header course={course} />
      <Content
        p1={parts[0].name} ex1={parts[0].exercises}
        p2={parts[1].name} ex2={parts[1].exercises}
        p3={parts[2].name} ex3={parts[2].exercises}
      />
      <Total total={parts[0].exercises + parts[1].exercises + parts[2].exercises} />
    </>
  )
}

export default App