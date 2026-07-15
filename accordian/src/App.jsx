import React from 'react'
import './App.css';
import Accordian from './components/accordian';
import RandomColor from './components/random-color-generation';
import StarRating from './components/Star-Rating';
import ImageSlider from './components/image-slider';

const App = () => {
  return (
    <div className='App'>
      {/* <Accordian/>
      <RandomColor/> */}
      {/* <StarRating/> */}

      <ImageSlider url={"https://picsum.photos/v2/list"} page={"1"} limit={"7"} />
    </div>
  )
}

export default App
