import React from 'react'

import SearchItem from '../SearchItem/SearchItem'
import NavigationItem from '../NavigationItem/NavigationItem'
import Projects from '../Projects/Projects'

import './SideBarMenu.css'
import BurgerIcon from '../../images/BurgerIcon.svg'
import Logo from '../../images/Logo'
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

function SideBarMenu({ isLight = false }) {
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

  // фикс проблемы отсутствия надписей при быстром 2-ом клике (скрыть/открыть) по кнопке меню
  React.useEffect (() => {
    if (isOpened !== isMenuOpen) setIsOpened(isMenuOpen);
  }, [isOpened]);

  return (
    <div className={`sideBarMenu ${isLight ? 'sideBarMenu_light' : ''} ${!isMenuOpen ? 'sideBarMenuClose' : ''}`}>
      <div className={`sideBarMenu__burger ${isLight ? 'sideBarMenu__burger_light' : ''}`}>
        <button className={`sideBarMenu__burgerButton ${isLight ? 'sideBarMenu__burgerButton_light' : ''}`} onClick={() => {setIsMenuOpen(!isMenuOpen)}}>
          <img src={BurgerIcon} alt='menu button icon' className='sideBarMenu__burgerImg' />
        </button>
        {/* {isOpened && <img src={Logo} alt='' className='sideBarMenu__logoImg' />} */}
        {isOpened && <Logo ccn={`sideBarMenu__logoImg ${isLight ? 'sideBarMenu__logoImg_light' : ''}`} />}
      </div>
      <div className='sideBarMenu__searchWrapper'>
        <SearchItem isOpened={isOpened} isLight={isLight} />
      </div>
      <ul className={`sideBarMenu__optionList ${isLight ? 'sideBarMenu__optionList_light' : ''}`}>
        {navItemsArr.map((item, index) => 
          <NavigationItem key={item.text} icon={item.icon} text={item.text} isOpened={isOpened} isBadge={index === 1 ? '12' : ''} isLight={isLight} />
        )}
      </ul>
      <hr className='sideBarMenu__divider' />
      <Projects isOpened={isOpened} isLight={isLight} />
      <UserZone isOpened={isOpened} isLight={isLight} />
    </div>
  )
}

export default SideBarMenu