import { useContext } from 'react'
import { SearchContext } from '../../context/SearchContext'

const categoriesNames = ['All', 'Artist', 'Album', 'Track', 'Playlist', 'Show', 'Episode']

const CategorySelector = () => {
  const { setCategory, setLoading, category } = useContext(SearchContext)
  const handleClick = (e) => {
    if (category === e.target.name.toLowerCase()) return
    setLoading(true)
    setCategory(e.target.name.toLowerCase())
  }

  return (
    <section className='flex gap-1 m-2'>
      {categoriesNames.map((categoryName, index) => {
        return <button key={index} className='btn' name={categoryName} onClick={handleClick}>{categoryName}</button>
      })}
    </section>
  )
}

export { categoriesNames, CategorySelector }
