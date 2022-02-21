import React from 'react'

import './SearchItem.css'
import SearchIcon from '../../images/SearchIcon'

function SearchItem({ isOpened, isLight }) {
  const [value, setValue] = React.useState('')

  return (
    <div className={`searchItem ${isLight ? 'searchItem_light' : ''}`}>
      {/* <img src={SearchIcon} alt='' className='searchItem__img' /> */}
      <input className={`searchItem__input ${!isOpened ? ' searchItem__inputClose' : ''} ${isLight ? 'searchItem__input_light' : ''}`} placeholder='Search' 
      value={isOpened ? value : ''}
      onChange={isOpened ? ((e) => setValue(e.target.value)) : undefined}
      readOnly={isOpened ? false : true} />
      <SearchIcon ccn='searchItem__img' />
    </div>
  )
}

export default SearchItem
