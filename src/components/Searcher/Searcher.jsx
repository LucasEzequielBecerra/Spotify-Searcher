import { useState } from 'react'
import { Input } from '@mui/joy'
import { Search } from '@mui/icons-material'
import NavCategories from '../NavCategories/NavCategories'
import ItemCardContainer from '../ItemCard/ItemCardContainer'
import { searchArtists } from '../../services/requestsArtist'

const Searcher = () => {
  const [results, setResults] = useState([])
  const [category, setCategory] = useState('artists,albums,tracks')

  async function handleChange (e) {
    const value = e.target.value
    setResults(await searchArtists(value, category))
    console.log(category)
  }
  return (
    <>
      <Input onChange={e => handleChange(e)} placeholder='Search' startDecorator={<Search />}>Searcher</Input>
      <NavCategories setCategory={setCategory}/>
      <ItemCardContainer items={results}/>
    </>
  )
}

export default Searcher
