import react from 'react'


const Header = (props) => {
    console.log(props)
    return (
      <h1>{props.course}</h1>
    )
  }
  
  const Content = (props) => {
    console.log(props)
    return (
      <div>
        {props.parts.map( (part) => <Part key={part.id} part={part}/>)}
      </div>
    )
  }
  
  const Part = (props) => {
    console.log(props)
    return (
          <p>
          {props.part.name} {props.part.exercises}
        </p>    
      
    )
  }
  
  
  const Total = (props) => {
    const tot = props.parts.reduce( (s,p) => s + p.exercises, 0)
    console.log(props)
    return(
      <strong>Number of exercises {tot}</strong>
    ) 
  }
  
  
  
  
  const Course = ({course}) => {
    console.log(course)
      return (
        <div>
          <Header course={course.name} />
          <Content parts={course.parts} />
          <Total parts={course.parts} />
        </div>
      )
  } 
  
export default Course