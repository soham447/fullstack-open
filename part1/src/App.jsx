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
    <div>
      <Header course={course}></Header>
      <Content parts={[part1, part2, part3]}></Content>
      <Total parts={[part1, part2, part3]}></Total>
    </div>
  )
}

let Header = (props) => {
  return (
    <h1>
      {props.course}
    </h1>
  )
}


let Content = (props) => {
  console.log(props)
  return (
    <>
      <Part part={props.parts[0]} />
      <Part part={props.parts[1]} />
      <Part part={props.parts[2]} />
    </>
  )
}

let Part = (props) => {
  return (
    <p>{props.part.name} {props.part.exercises} </p>
  )
}

let Total = (props) => {
  let sum = 0
  props.parts.forEach( (part) => {
    sum += part.exercises;
  });
  return (
    <p>Number of exercises {sum}</p>
  )
}
export default App