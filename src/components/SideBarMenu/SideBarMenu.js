import React from 'react'

import SearchItem from '../SearchItem/SearchItem'
import NavigationItem from '../NavigationItem/NavigationItem'
import Projects from '../Projects/Projects'

import './SideBarMenu.css'
import BurgerIcon from '../../images/BurgerIcon.svg'
import Logo from '../../images/Logo.svg'
import HomeIcon from '../../images/HomeIcon.svg'
import InboxIcon from '../../images/InboxIcon.svg'
import ListIcon from '../../images/ListIcon.svg'
import ActivityIcon from '../../images/ActivityIcon.svg'
import TeamIcon from '../../images/TeamIcon.svg'
import UserZone from '../UserZone/UserZone'

const navItemsArr = [
  {icon: HomeIcon, text: 'Главная'},
  {icon: InboxIcon, text: 'Входящие'},
  {icon: ListIcon, text: 'Задачи'},
  {icon: ActivityIcon, text: 'Активность'},
  {icon: TeamIcon, text: 'Команда'},
]

function SideBarMenu() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)

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
    <div className={`sideBarMenu ${!isMenuOpen ? 'sideBarMenuClose' : ''}`}>
      <div className='sideBarMenu__burger'>
        <button className='sideBarMenu__burgerButton' onClick={() => {setIsMenuOpen(!isMenuOpen)}}>
          <img src={BurgerIcon} alt='menu button icon' className='sideBarMenu__burgerImg' />
        </button>
        {isOpened && <img src={Logo} alt='' className='sideBarMenu__logoImg' />}
      </div>
      <div className='sideBarMenu__searchWrapper'>
        <SearchItem isOpened={isOpened}/>
      </div>
      <ul className='sideBarMenu__optionList'>
        {navItemsArr.map((item, index) => 
          <NavigationItem key={item.text} icon={item.icon} text={item.text} isOpened={isOpened}/>
        )}
      </ul>
      <hr className='sideBarMenu__divider' />
      <Projects isOpened={isOpened} />
      <UserZone isOpened={isOpened} />
    </div>
  )
}

export default SideBarMenu