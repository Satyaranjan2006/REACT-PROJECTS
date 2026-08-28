import React from 'react'
import './index.css'
import { useState } from 'react'
import { useMemo } from 'react'

const App = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const items = ["Apple🍎", "Banana🍌", "Mango🥭", "Orange🍊", "Grapes🍇", "Strawberry 🍓", "Watermelon 🍉", "Pineapple 🍍", "Peach🍑", "Cherry🍒"]

  const filteredItems = useMemo(() => {
    return items.filter((item) => 
      item.toLowerCase().includes(searchTerm.toLowerCase())
    )
  }, [searchTerm])

  return (
    <>
      <div className='container'>
        <div className='contain'>
          <h2> 🍉🍊🍐🍐🍌 Fruit Filter</h2>
          <input
            onChange={(e) => { setSearchTerm(e.target.value) }}
            type="text" name=""
            value={searchTerm}
            placeholder='Search Term' />

          <ul>
            {
              filteredItems.map((item, index) => (
                <li className='li' key={index}>{item}</li>
              ))
            }
          </ul>
        </div>
      </div>

    </>
  )
}

export default App
