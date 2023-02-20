import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Navbar from './Navbar'
import Page from './Page'
import data from './img'

function App() {
  const cards = data.map(data => {
    return (
    <Page
        key={data.id}
        data={data}
      />
      )
  })
  return (
    <div className="App">
      <Navbar />
      <h1 style={{textAlign: 'center'}}>Fun facts about React</h1>
        <div className="main--section">
          {cards}
        </div>
    </div>
  )
}

export default App
