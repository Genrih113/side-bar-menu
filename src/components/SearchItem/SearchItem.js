import React from 'react'

import './SearchItem.css'
import SearchIcon from '../../images/SearchIcon.svg'

function SearchItem({ isOpened }) {
  const [value, setValue] = React.useState('')

  return (
    <div className='searchItem'>
      <img src={SearchIcon} alt='' className='searchItem__img' />
      <input className={`searchItem__input ${!isOpened ? ' searchItem__inputClose' : ''}`} placeholder='Search' 
      value={isOpened ? value : ''}
      onChange={(e) => setValue(e.target.value)}/>
    </div>
  )
}

export default SearchItem
