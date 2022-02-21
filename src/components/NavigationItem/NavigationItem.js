import React from 'react'
import './NavigationItem.css'

function NavigationItem({ icon = {}, text = '', isOpened = false, isBadge = false, isLight = false }) {
  return (
    <li className='navigationItem'>
      <a href='#' className={`navigationItem__link ${isLight ? 'navigationItem__link_light' : ''}`}>
        {/* <img src={icon} alt='' className='navigationItem__img' /> */}
        {/* <icon ccn='navigationItem__img' /> */}
        {icon}
        {isOpened && 
          <>
            <span className='navigationItem__span'>{text}</span>
            {isBadge && <span className='navigationItem__badge'>{isBadge}</span>}
          </>
        }
        {!isOpened && isBadge && <span className='navigationItem__miniBadge'></span>}
      </a>
    </li>
  )
}

export default NavigationItem
