import { useState } from 'react'
import requestsArtist from '../../services/requestsArtist'
import { Input, Card, CardCover, CardContent, Typography } from '@mui/joy'
import { Search } from '@mui/icons-material'

const Home = async () => {
  const [searchInput, setSearchInput] = useState('')
  const searchSongs = await requestsArtist(searchInput)

  return (
    <>
    <div>Home</div>
    <Input onKeyDown={ async e => { if (e.key === 'Enter') { await searchSongs() } }} onChange={e => setSearchInput(e.target.value)} value={searchInput} placeholder='Search' startDecorator={<Search />}>Searcher</Input>
    <div className='containerCards'></div>
    </>
  )
}

export default Home
