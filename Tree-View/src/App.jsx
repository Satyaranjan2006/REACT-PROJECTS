import React from 'react'
import TreeView from './components'
import menus from './assets/data'

const App = () => {
  return (
    <div className='App'>
      <TreeView menus={menus}/>
    </div>
  )
}

export default App
