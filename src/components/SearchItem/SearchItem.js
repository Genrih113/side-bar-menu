import './SearchItem.css'
import SearchIcon from '../../images/SearchIcon.svg'

function SearchItem() {
  return (
    <div className='searchItem'>
      <img src={SearchIcon} alt='' className='searchItem__img' />
      <input className='searchItem__input' placeholder='Search' />
    </div>
  )
}

export default SearchItem
