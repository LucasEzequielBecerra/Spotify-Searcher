import { useEffect, useState } from 'react'

const Home = () => {
  const clientId = import.meta.env.VITE_CLIENT_ID
  const clientSecret = import.meta.env.VITE_CLIENT_SECRET

  const [accessToken, setAccessToken] = useState('')
  console.log(accessToken)

  useEffect(() => {
    const authParameters = {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: `grant_type=client_credentials&client_id=${clientId}&client_secret=${clientSecret}`
    }

    const getAccessToken = async function () {
      try {
        const req = await fetch('https://accounts.spotify.com/api/token', authParameters)
        // eslint-disable-next-line camelcase
        const { access_token } = await req.json()
        setAccessToken(access_token)
      } catch (err) {
        console.log(err)
      }
    }

    getAccessToken()
  }, [])

  return (
    <div>Home</div>
  )
}

export default Home
