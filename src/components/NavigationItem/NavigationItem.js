import React from 'react'
import './NavigationItem.css'

function NavigationItem({ icon = {}, text = '', isOpened = false, isBadge = false }) {
  return (
    <li className='navigationItem'>
      <a href='#' className='navigationItem__link'>
        <img src={icon} alt='' className='navigationItem__img' />
        {isOpened && 
          <>
            <span className='navigationItem__span'>{text}</span>
            {isBadge && <span className='navigationItem__badge'>{isBadge}</span>}
          </>
        }
      </a>
    </li>
  )
}

export default NavigationItem
