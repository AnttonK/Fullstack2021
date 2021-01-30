import React, { useState } from 'react'
import ReactDOM from 'react-dom'


const StatisticLine = (props) => {
  return (
    <tr><td>{props.text}: </td>
    <td>{props.value}</td>
    </tr>
    
  )
}

const Statistics = (props) => {
  console.log(props)
  const allFeedbacks = props.good+props.neutral+props.bad
  const positive = (props.good/allFeedbacks) *100 + " %"

  if (allFeedbacks === 0) {
    return (
      <div>
        No feedback given!
      </div>
    )
  }
  return (
      <table>
        <tbody>
          <StatisticLine text="Good" value ={props.good}/>
          <StatisticLine text="Neutral" value ={props.neutral}/>
          <StatisticLine text="Bad" value ={props.bad}/>
          <StatisticLine text="All" value ={allFeedbacks}/>
          <StatisticLine text="Average" value ={props.points/allFeedbacks}/>
          <StatisticLine text="Positive" value ={positive}/>
        </tbody>
      </table>

    
  )
}

const Button = ({ onClick, text }) => (
  <button onClick={onClick}>
    {text}
  </button>
)

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [points, setPoints] =useState(0)


  const handleGood = () => {
    setGood(good +1)
    setPoints(points +1)
  }

  const handleNeutral = () => {
    setNeutral(neutral +1)
  }

  const handleBad = () => {
    setBad(bad +1)
    setPoints(points -1)
  }

  return (
    <div>
      <h1>Give feedback:</h1> 
    <div> 
        
        <Button onClick={handleGood} text = 'Good' />
        <Button onClick={handleNeutral} text = 'Neutral' />
        <Button onClick={handleBad} text = 'Bad' />
    </div>
      <div>
      </div>
      <h2>statistics</h2>
      <Statistics good={good} neutral={neutral} bad={bad} points={points} />
    </div>
  )
}



ReactDOM.render(<App />, 
  document.getElementById('root')
)