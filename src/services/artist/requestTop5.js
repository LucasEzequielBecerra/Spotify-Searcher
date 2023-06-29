import requestsAccess from '../requestsAccess'

const requestTop5 = async (artistId) => {
  try {
    const searchParameters = await requestsAccess()
    const req = await fetch(`https://api.spotify.com/v1/artists/${artistId}/albums`, searchParameters)
    const res = await req.json()
    return res
  } catch (error) {
    console.log(error)
  }
}

export default requestTop5
