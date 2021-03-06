import './UserZone.css'
import Avatar from '../../images/Avatar.jpg'
import UserStatus from '../../images/UserStatus.svg'
import UserMenuIcon from '../../images/UserMenuIcon'

function UserZone({ isOpened, isLight }) {
  return(
    <div className={`userZone ${isLight ? 'userZone_light' : ''}`}>
      <div className='userZone__avaZone'>
        <div className='userZone__avaWrapper'>
          <img src={Avatar} alt='' className='userZone__ava' />
          <img src={UserStatus} alt='' className='userZone__userStatus' />
        </div>
      </div>
      {isOpened &&
        <>
          <div className='userZone__about'>
            <div className='userZone__userName'>Михаил Воробьев</div>
            <div className='userZone__userRank'>Разработчик</div>
          </div>
          <button className={`userZone__menuButton ${isLight ? 'userZone__menuButton_light' : ''}`}>
            {/* <img src={UserMenuIcon} alt='' className='userZone__menuIcon'/> */}
            <UserMenuIcon ccn='userZone__menuIcon' />
          </button>
        </>
      }
    </div>
  )
}

export default UserZone
