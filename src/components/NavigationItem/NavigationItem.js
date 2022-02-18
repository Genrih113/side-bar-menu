import React from 'react'
import './NavigationItem.css'

function NavigationItem({ icon = {}, text = '', isOpened }) {
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
