import './Projects.css'
import ProjectsIcon from '../../images/ProjectsIcon.svg'
import PlusIcon from '../../images/PlusIcon.svg'

const projects = [
  {name: 'Дизайн', color: '#A855F7'},
  {name: 'Веб', color: '#84CC16'},
  {name: 'Редактура', color: '#EC4899'},
]

function Projects({ isOpened }) {
  return (
    <div className='projects'>
      <div className='projects__titleDiv'>
        <a href='#' className='projects__titleLink'>
          <img src={ProjectsIcon} alt='' className='projects__titleImg' />
          {isOpened && <span className='projects__titleSpan'>Проекты</span>}
        </a>
      </div>
      {/* <ul className={`projects__list ${!isOpened ? 'projects__list_unvisible' : ''}`}> */}
      {isOpened &&
        <ul className='projects__list'>
          {projects.map((item, index) => {
            return (
              <li className='projects__listItem' key={item.name}>
                <a href='#' className='projects__listItemLink'>
                  <div className='projects__listItemImg' style={{backgroundColor:`${item.color}`}}></div>
                  <span className='projects__listItemSpan'>{item.name}</span>
                </a>
              </li>
            )
          })}
        </ul>
      }
      <button className='projects__createButton'>
        <div>
          <img src={PlusIcon} alt='' className='projects__createImg'/>
          {isOpened && <span className='projects__createSpan'>Создать проект</span>}
        </div>
      </button>
    </div>
  )
}

export default Projects
