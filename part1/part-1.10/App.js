import React, { useState } from 'react'

const Button = ({ handleClick, text }) => {
  return (
    <button onClick={handleClick}>
      {text}
    </button>
  )
}

const Statistics = ({ low, medium, high, all, average, positive }) => {
  if (low === 0 & medium === 0 & high === 0) {
    return (
      <p>No feedback given</p>
    )
  }
  return (
    <table>
      <tbody>
        <tr><StatisticLine text="low" value={low} /></tr>
        <tr><StatisticLine text="medium" value={medium} /></tr>
        <tr><StatisticLine text="high" value={high} /></tr>
        <tr><StatisticLine text="all" value={all} /></tr>
        <tr><StatisticLine text="average" value={average} /></tr>
        <tr><StatisticLine text="positive" value={positive + '%'} /></tr>
      </tbody>
    </table>
  )
}

const StatisticLine = ({ text, value }) => {
  return (
  
    <td>{text}  {value} </td>
    
  )
}

const App = () => {
  const [low, setlow] = useState(0)
  const [medium, setmedium] = useState(0)
  const [high, sethigh] = useState(0)

  const handlelowClick = () =>
    setlow(low + 1)

  const handlemediumClick = () =>
    setmedium(medium + 1)

  const handlehighClick = () =>
    sethigh(high + 1)

    const all = low + medium + high
    const average = ((low - high) / all) 
    const positive = (low / all) * 100


  return (
    <>
      <h1>give feedback</h1>
      <Button handleClick={handlelowClick} text="low" />
      <Button handleClick={handlemediumClick} text="medium" />
      <Button handleClick={handlehighClick} text="high" />
      <h1>statistics</h1>
      <Statistics low={low} medium={medium} high={high} all={all} average={average} positive={positive} />
    </>
  )
}

export default App