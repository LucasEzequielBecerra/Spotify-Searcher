import { useState, useRef, useEffect } from 'react'
import { Input, CircularProgress } from '@mui/joy'
import { Search } from '@mui/icons-material'
import NavCategories from '../NavCategories/NavCategories'
import ItemCardContainer from '../ItemCard/ItemCardContainer'
import { searchItems } from '../../services/requestsItems'
import './Searcher.css'

const Searcher = () => {
  const [results, setResults] = useState([])
  const [category, setCategory] = useState([])
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
    console.log(categories.length === 1)
    return categories.map(cat => <ItemCardContainer categories={categories} key={cat} items={results[cat + 's']?.items} title={cat} />)
  }

  useEffect(() => {
    handleChange()
  }, [category])

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
  )
}

export default Searcher
