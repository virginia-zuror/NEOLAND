import { useState } from 'react'
import reactLogo from './assets/react.svg'
import DigitalWatch from './components/DigitalWatch/DigitalWatch'
import CounterBack from './components/CounterBack/CounterBack'
import Chrono from './components/Chrono/Chrono'
import './App.css'

function App() {
  

  return (
    <div className="App">
      <nav></nav>
      <main>
        <DigitalWatch/>
        <CounterBack/>
        <Chrono/>
      </main>
      <footer></footer>

    </div>
  )
}

export default App
