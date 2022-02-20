import React from 'react'
import './App.css';

import SideBarMenu from '../SideBarMenu/SideBarMenu'

function App() {
  const [isLight, setIsLight] = React.useState(false)

  return (
    <div className="App">
      <button className='switch' onClick={() => {setIsLight(!isLight)}}>
        Сменить тему
      </button>
      <SideBarMenu isLight={isLight} />
    </div>
  )
}

export default App;
