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
  return (
    <div className='sideBarMenu'>
      <div className='sideBarMenu__burger'>
        <button className='sideBarMenu__burgerButton'>
          <img src={BurgerIcon} alt='menu button icon' className='sideBarMenu__burgerImg' />
        </button>
        <img src={Logo} alt='' className='sideBarMenu__logoImg' />
      </div>
      <div className='sideBarMenu__searchWrapper'>
        <SearchItem />
      </div>
      <ul className='sideBarMenu__optionList'>
        {/* <li className='sideBarMenu__optionListItem'>
          <button className='sideBarMenu__optionListButton'>
            <img src={HomeIcon} alt='' className='sideBarMenu__optionImg' />
            <span className='sideBarMenu__optionSpan'>Главная</span>
          </button>
        </li> */}
        {navItemsArr.map((item, index) => 
          <NavigationItem key={item.text} icon={item.icon} text={item.text} />
        )}
      </ul>
      <hr className='sideBarMenu__divider' />
      <Projects />
      <UserZone />
    </div>
  )
}

export default SideBarMenu