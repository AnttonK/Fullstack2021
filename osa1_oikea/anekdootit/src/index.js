import React, { useState } from 'react'
import ReactDOM from 'react-dom'



const Button = ({ onClick, text }) => (
  <button onClick={onClick}>
    {text}
  </button>
)


const App = (props) => {

  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0))

  const handleNext = () => {
    const random = Math.floor(Math.random() * anecdotes.length)
    setSelected(random)
  }


  const handleVote = () => {
    const copy = [...votes]
      copy[selected] += 1
      setVotes(copy)
      console.log(copy)
  }

  const mostVotes = votes.indexOf(Math.max(...votes))

  return (
    <div>
      <h1>Anecdote of the day</h1>
      {props.anecdotes[selected]}
      <p>has {votes[selected]} votes </p>
      <p>
        <Button onClick={handleVote} text = 'Vote' /> 
        <Button onClick={handleNext} text = 'Next anecdote' />
        </p>
      <h2>Anecdote wtih most votes</h2>
      <p>{props.anecdotes[mostVotes]}</p>
      <p>Has {votes[mostVotes]} votes</p>
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]


ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)