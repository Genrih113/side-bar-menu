import './UserZone.css'
import Avatar from '../../images/Avatar.jpg'
import UserStatus from '../../images/UserStatus.svg'
import UserMenuIcon from '../../images/UserMenuIcon.svg'

function UserZone({ isMenuOpen }) {
  return(
    <div className='userZone'>
      <div className='userZone__avaZone'>
        <div className='userZone__avaWrapper'>
          <img src={Avatar} alt='' className='userZone__ava' />
          <img src={UserStatus} alt='' className='userZone__userStatus' />
        </div>
      </div>
      {isMenuOpen &&
        <>
          <div className='userZone__about'>
            <div className='userZone__userName'>Михаил Воробьев</div>
            <div className='userZone__userRank'>Разработчик</div>
          </div>
          <button className='userZone__menuButton'>
            <img src={UserMenuIcon} alt='' className='userZone__menuIcon'/>
          </button>
        </>
      }
    </div>
  )
}

export default UserZone
