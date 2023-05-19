import { useEffect, useState } from 'react'
import { Input } from '@mui/joy'
import { Search } from '@mui/icons-material'

const Home = () => {
  const clientId = import.meta.env.VITE_CLIENT_ID
  const clientSecret = import.meta.env.VITE_CLIENT_SECRET

  const [accessToken, setAccessToken] = useState('')
  const [searchInput, setSearchInput] = useState('')

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

  async function searchForArtistId () {
    try {
      const searchParameters = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json', Authorization: 'Bearer ' + accessToken }
      }

      const artistId = await fetch('https://api.spotify.com/v1/search?q=' + searchInput + '&type=artist', searchParameters)
        .then(response => response.json())
        .then(data => console.log(data.artists.items[0].id))
    } catch (error) {
      console.log(error)
    }
  }

  const handleChange = e => {
    const newInput = e.target.value
    setSearchInput(newInput)
    searchForArtistId()
  }

  return (
    <>
    <div>Home</div>
    <Input onChange={e => handleChange(e)} placeholder='Search' startDecorator={<Search />}>Searcher</Input>
    </>
  )
}

export default Home
