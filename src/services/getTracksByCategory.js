import requestsAccess from './requestAccess'

export default async (genre) => {
  try {
    const searchParameters = await requestsAccess()
    const res = await fetch(`https://api.spotify.com/v1/recommendations?seed_genres=${genre}`, searchParameters)
    return res.json()
  } catch (error) {
    return error
  }
}
