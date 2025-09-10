
const Header = ({ name }) => {
  console.log(name)
  return (
      <p>{ name }</p>
  )  
}

const Content = ({ parts }) => {
  console.log(parts)
  return (
    <div>
        <Part part={parts} />
    </div>
  )
}
const Part = ({ part }) => {
   console.log(part)
   return (
        <p>{part.name} {part.exercises}</p> 
   )
}

const Total = ({ part1, part2, part3 }) => {
  console.log(part1)
  console.log(part2)
  console.log(part3)
  const total = part1.exercises + part2.exercises + part3.exercises;
   return (
      <p>no of exercises is {total} </p>
   )
}

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
       <Header name={course}/>
       <Content parts={part1}/>
       <Content parts={part2}/>
       <Content parts={part3}/>
       <Total part1={part1} part2={part2} part3={part3}/>
       
    </div>
  )
}




export default App
