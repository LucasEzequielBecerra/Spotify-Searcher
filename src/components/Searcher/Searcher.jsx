import { useState, useRef } from 'react'
import { Input } from '@mui/joy'
import { Search } from '@mui/icons-material'
import NavCategories from '../NavCategories/NavCategories'
import ItemCardContainer from '../ItemCard/ItemCardContainer'
import { searchItems } from '../../services/requestsItems'

const Searcher = () => {
  const [results, setResults] = useState([])
  const [category, setCategory] = useState([])
  const inputRef = useRef(null)

  async function handleChange () {
    const value = inputRef.current.childNodes[1].value || ''
    setResults(await searchItems(value, category))
  }
  return (
    <>
      <Input ref={inputRef} onChange={() => handleChange()} placeholder='Search' startDecorator={<Search />}>Searcher</Input>
      <NavCategories
      onClick={e => {
        e.defaultMuiPrevented = false
        handleChange()
      }}
      updateCategory={ setCategory }
      category={ category }/>
      {results && category.length === 0 ? ['artist', 'album', 'track'].map(cat => <ItemCardContainer key={cat} items={results[cat + 's']?.items} title={cat}/>) : category.map(cat => <ItemCardContainer key={cat} items={results[cat + 's']?.items} title={cat} />)}
    </>
  )
}

export default Searcher
