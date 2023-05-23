import { useState, useRef } from 'react'
import { Input } from '@mui/joy'
import { Search } from '@mui/icons-material'
import NavCategories from '../NavCategories/NavCategories'
import ItemCardContainer from '../ItemCard/ItemCardContainer'
import { searchItems } from '../../services/requestsItems'
import './Searcher.css'

const Searcher = () => {
  const [results, setResults] = useState([])
  const [category, setCategory] = useState(['artist', 'album', 'track'])
  const inputRef = useRef(null)

  async function handleChange () {
    const value = inputRef.current.childNodes[1].value || 'a'
    setResults(await searchItems(value, category))
  }
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
      {results.length === 0
        ? ''
        : category?.map(cat => <ItemCardContainer key={cat} items={results[cat + 's']?.items} title={cat} />)}
    </div>
  )
}

export default Searcher
