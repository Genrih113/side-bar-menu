import './NavigationItem.css'

function NavigationItem({ icon = {}, text = '' }) {
  return (
    <li className='navigationItem'>
      <a href='#' className='navigationItem__link'>
        <img src={icon} alt='' className='navigationItem__img' />
        <span className='navigationItem__span'>{text}</span>
      </a>
    </li>
  )
}

export default NavigationItem
