import { useContext } from 'react'
import { SearchContext } from '../../context/SearchContext'

const CategorySelector = () => {
  const { setCategory } = useContext(SearchContext)
  const handleClick = (e) => {
    setCategory(e.target.name.toLowerCase())
  }

  const categoriesNames = ['All', 'Artist', 'Album', 'Track', 'Playlist', 'Show', 'Episode']

  return (
    <section className='flex gap-1 m-2'>
      {categoriesNames.map((categoryName, index) => {
        return <button key={index} className='btn' name={categoryName} onClick={handleClick}>{categoryName}</button>
      })}
    </section>
  )
}

export default CategorySelector
