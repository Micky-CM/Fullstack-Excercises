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

const Total = ({course})=> {
  const total = course.parts.reduce((sum, part)=> sum + part.exercises, 0)
  return <p><strong>Total of {total} exercises</strong></p>
}

const Course = ({course})=> {
  return (
    <section>
      <Header course={course} />
      <Content course={course} />
      <Total course={course} />
    </section>
  )
}

export default Course