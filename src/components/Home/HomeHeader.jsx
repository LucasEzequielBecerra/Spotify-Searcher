import { useState } from 'react'
import NavigationArrow from '../NavigationArrow/NavigationArrow'
import Searcher from '../Searcher/Searcher'
import { AiOutlineUser } from 'react-icons/ai'

const HomeHeader = (props) => {
  const [category, setCategory] = useState('all')
  const handleClick = (e) => {
    setCategory(e.target.name.toLowerCase())
  }

  const categoriesNames = ['All', 'Artist', 'Album', 'Track', 'Playlist', 'Show', 'Episode']
  return (
    <>
    <header className="flex items-center place-content-between h-16 bg-dark-bg">
        <div className='flex items-center '>
            <NavigationArrow direction='left'/>
            <NavigationArrow direction='right'/>
            <Searcher {...props} category={category}/>
        </div>
        <button className='circular-btn me-4'><AiOutlineUser size='1.2rem'/></button>
    </header>
    <section className='flex gap-1 m-2'>
      {categoriesNames.map((categoryName, index) => {
        return <button key={index} className='btn' name={categoryName} onClick={handleClick}>{categoryName}</button>
      })}
    </section>
    </>
  )
}

export default HomeHeader
