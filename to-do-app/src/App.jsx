import React from 'react'
import Header from './Components/Header'
import Form from './Components/Form'
import Todos from './Components/Todos'

const App = () => {
  return (
    <div>
      <Header  headerTitle="TODO" />
      <Form/>
      <br />
      <br />
      <br />
      <br />
      <Todos/>
    </div>
  )
}

export default App