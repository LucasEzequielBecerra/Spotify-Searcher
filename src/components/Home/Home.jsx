import { useEffect, useState } from 'react'
import { Input } from '@mui/joy'
import { Search } from '@mui/icons-material'
import ItemCardContainer from '../ItemCard/ItemCardContainer'

const Home = () => {
  const clientId = import.meta.env.VITE_CLIENT_ID
  const clientSecret = import.meta.env.VITE_CLIENT_SECRET

  const [accessToken, setAccessToken] = useState('')

  const authParameters = {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: `grant_type=client_credentials&client_id=${clientId}&client_secret=${clientSecret}`
  }

  async function getAccessToken () {
    try {
      const req = await fetch('https://accounts.spotify.com/api/token', authParameters)
      // eslint-disable-next-line camelcase
      const { access_token } = await req.json()
      setAccessToken(access_token)
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    getAccessToken()
  }, [])

  async function searchForArtists (value) {
    try {
      const searchParameters = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json', Authorization: 'Bearer ' + accessToken }
      }

      const artists = await fetch('https://api.spotify.com/v1/search?q=' + value + '&type=artist', searchParameters)
        .then(response => response.json())
        .then(data => data?.artists?.items)
      return artists
    } catch (error) {
      console.log(error)
    }
  }

  const [results, setResults] = useState([])

  const handleChange = async e => {
    try {
      const value = e.target.value
      setResults(await searchForArtists(value))
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
    <Input onChange={e => handleChange(e)} placeholder='Search' startDecorator={<Search />}>Searcher</Input>
    <ItemCardContainer items={results}/>
    </>
  )
}

export default Home
