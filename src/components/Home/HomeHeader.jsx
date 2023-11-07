import { useState } from 'react'
import NavigationArrow from '../NavigationArrow/NavigationArrow'
import Searcher from '../Searcher/Searcher'
import { AiOutlineUser } from 'react-icons/ai'

const HomeHeader = (props) => {
  const [category, setCategory] = useState('all')
  const handleClick = (e) => {
    setCategory(e.target.name)
  }
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
    <section className=' flex gap-5'>
      <button name='all' onClick={handleClick}>All</button>
      <button name='artist' onClick={handleClick}>Artists</button>
      <button name='album' onClick={handleClick}>Albums</button>
      <button name='track' onClick={handleClick}>Songs</button>
      <button name='playlist' onClick={handleClick}>Playlists</button>
      <button name='show' onClick={handleClick}>Podcasts</button>
      <button name='episode' onClick={handleClick}>Episodes</button>
    </section>
    </>
  )
}

export default HomeHeader
