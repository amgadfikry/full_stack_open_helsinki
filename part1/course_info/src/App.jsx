const Header = ({name}) => {
  return (
    <h1>{name}</h1>
  )
}

const Part = ({parts: {name, exercises}}) => {
  return (
    <p>
      {name} {exercises}
    </p>
  )
}

const Content = ({content}) => {
  return (
    <>
      <Part parts={content[0]} />
      <Part parts={content[1]} />
      <Part parts={content[2]} />
    </>
  )
}

const Total = ({content}) => {
  const sum = content.reduce((acc, el) => acc + el.exercises, 0)
  return (
    <p>Number of exercises {sum}</p>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
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
  }

  return (
    <div>
      <Header name={course.name} />
      <Content content={course.parts} />
      <Total content={course.parts} />
    </div>
  )
}

export default App
