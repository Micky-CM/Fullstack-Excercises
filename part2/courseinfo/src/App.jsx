const Header = ({course})=> <h1>{course.name}</h1>

const Part = ({part})=> <li>{part.name}: {part.exercises}</li>

const Content = ({course})=> {
  return (
    <ul>
      {course.parts.map(part =>
        <Part key={part.id} part={part} />
      )}
    </ul>
  )
}

const Course = ({course})=> {
  return (
    <>
      <Header course={course} />
      <Content course={course} />
    </>
  )
}

const App = ()=> {
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      },
      {
        name: 'Redux',
        exercises: 11,
        id: 4
      }
    ]
  }

  const total = course.parts[0].exercises + course.parts[1].exercises + course.parts[2].exercises + course.parts[3].exercises

  return (
    <>
      <Course course={course} />
      <p><strong>Total of {total} exercises</strong></p>
    </>
  )
}

export default App
