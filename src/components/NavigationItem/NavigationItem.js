import React from 'react'
import './NavigationItem.css'

function NavigationItem({ icon = {}, text = '', isMenuOpen }) {
  const [isOpened, setIsOpened] = React.useState(isMenuOpen)

  React.useEffect(() => {
    if (isMenuOpen === false) {
      const timer = setTimeout(() => {
        setIsOpened(false);
        clearInterval(timer);
      }, 500);
    } else if (isMenuOpen === true) {
      setIsOpened(true);
    }
  }, [isMenuOpen]);

  return (
    <li className='navigationItem'>
      <a href='#' className='navigationItem__link'>
        <img src={icon} alt='' className='navigationItem__img' />
        {isOpened && <span className='navigationItem__span'>{text}</span>}
      </a>
    </li>
  )
}

export default NavigationItem
