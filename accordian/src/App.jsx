import React from 'react'
import './App.css';
import Accordian from './components/accordian';
import RandomColor from './components/random-color-generation';
import StarRating from './components/Star-Rating';

const App = () => {
  return (
    <div className='App'>
      {/* <Accordian/>
      <RandomColor/> */}
      <StarRating/>
    </div>
  )
}

export default App
