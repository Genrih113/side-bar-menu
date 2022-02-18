import React from 'react'
import './App.css';

import SideBarMenu from '../SideBarMenu/SideBarMenu'

function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)

  return (
    <div className="App">
      <button className='switch' onClick={() => {setIsMenuOpen(!isMenuOpen)}}>
        Dark
      </button>
      <SideBarMenu isMenuOpen={isMenuOpen}/>
    </div>
  )
}

export default App;
