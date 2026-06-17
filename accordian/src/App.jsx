import React from 'react'
import './App.css';
import Accordian from './components/accordian';
import RandomColor from './components/random-color-generation';

const App = () => {
  return (
    <div className='App'>
      <Accordian/>
      <RandomColor/>
    </div>
  )
}

export default App
