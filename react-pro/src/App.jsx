import React from 'react'
import Card from './components/card'

const App = (props) => {
  return (
  <Card name={props.name} price={props.price}/>
  )
}

export default App