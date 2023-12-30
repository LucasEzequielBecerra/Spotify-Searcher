<<<<<<< HEAD
import { useState, useRef, useEffect } from 'react'
import { Input, CircularProgress } from '@mui/joy'
import { Search } from '@mui/icons-material'
import NavCategories from '../NavCategories/NavCategories'
import ItemCardContainer from '../ItemCard/ItemCardContainer'
import { searchItems } from '../../services/requestsItems'
import './Searcher.css'

const Searcher = () => {
  const [results, setResults] = useState([])
  const [category, setCategory] = useState(['artist', 'album', 'track'])
  const [load, setLoad] = useState(true)
  const inputRef = useRef(null)

  async function handleChange () {
    try {
      setLoad(true)
      const value = inputRef.current.childNodes[1].value || '.'
      setResults(await searchItems(value, category))
    } catch (error) {
      console.log(error)
    } finally {
      setLoad(false)
    }
  }

  const showResults = (categories = ['artist', 'album', 'track']) => {
    return categories.map(cat => <ItemCardContainer key={cat} items={results[cat + 's']?.items} title={cat} />)
  }

  useEffect(() => {
    handleChange()
  }, [])

  return (
    <div className='searcher'>
      <Input ref={inputRef} onChange={() => handleChange()} placeholder='Search' startDecorator={<Search />}>Searcher</Input>
      <NavCategories
      onClick={e => {
        e.defaultMuiPrevented = false
        handleChange()
      }}
      updateCategory={ setCategory }
      category={ category }/>
      {load
        ? <CircularProgress color='primary'/>
        : results.length !== 0
          ? category.length === 0
            ? showResults()
            : showResults(category)
          : 'Not found'
        }
    </div>
=======
import { CiSearch } from 'react-icons/ci'
import { useContext } from 'react'
import { SearchContext } from '../../context/SearchContext'

const Searcher = () => {
  const { handleChange } = useContext(SearchContext)

  const submitHandler = e => {
    e.preventDefault()
  }

  return (
    <form onSubmit={submitHandler} className='flex items-center me-4 rounded-full ms-4 p-2 bg-dark-bg-hover sm:w-80'>
      <CiSearch className='mx-1' size='1.2em' />
      <input onChange={handleChange} className="bg-[#2a2a2a] w-full ms-1" placeholder="What do you want to listen to?" />
    </form>
>>>>>>> 3431c8139f32c87d6442f04b52be923737dc10e2
  )
}

export default Searcher
