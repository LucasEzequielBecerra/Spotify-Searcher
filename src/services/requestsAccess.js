const requestsAccess = async () => {
  const clientId = import.meta.env.VITE_CLIENT_ID
  const clientSecret = import.meta.env.VITE_CLIENT_SECRET

  const authParameters = {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: `grant_type=client_credentials&client_id=${clientId}&client_secret=${clientSecret}`
  }

  try {
    const req = await fetch('https://accounts.spotify.com/api/token', authParameters)
    // eslint-disable-next-line camelcase
    const { access_token } = await req.json()
    console.log(access_token)
    const searchParameters = {
      method: 'GET',
      headers: { 'Content-Type': 'application/json', Authorization: 'Bearer ' + access_token }
    }
    return searchParameters
  } catch (err) {
    console.log(err)
  }
}

export default requestsAccess
