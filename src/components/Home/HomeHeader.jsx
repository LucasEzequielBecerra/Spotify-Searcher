import NavigationArrow from '../NavigationArrow/NavigationArrow'
import Searcher from '../Searcher/Searcher'
import { AiOutlineUser } from 'react-icons/ai'

const HomeHeader = (props) => {
  return (
    <header className="flex items-center place-content-between h-16 bg-dark-bg">
        <div className='flex items-center '>
            <NavigationArrow direction='left'/>
            <NavigationArrow direction='right'/>
            <Searcher {...props}/>
        </div>
        <button className='circular-btn me-4'><AiOutlineUser size='1.2rem'/></button>
    </header>
  )
}

export default HomeHeader
