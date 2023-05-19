import { useState } from 'react'
import { Input } from '@mui/joy'
import { Search } from '@mui/icons-material'
import ItemCardContainer from '../ItemCard/ItemCardContainer'
import { searchArtists } from '../../services/requestsArtist'

const Searcher = () => {
  const [results, setResults] = useState([])

  async function handleChange (e) {
    const value = e.target.value
    setResults(await searchArtists(value))
  }
  return (
    <>
      <Input onChange={e => handleChange(e)} placeholder='Search' startDecorator={<Search />}>Searcher</Input>
      <ItemCardContainer items={results}/>
    </>
  )
}

export default Searcher
