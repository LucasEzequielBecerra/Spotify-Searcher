import requestsAccess from './requestsAccess'

export async function requestsArtists (id) {
  try {
    const searchParameters = await requestsAccess()
    const data = await fetch('https://api.spotify.com/v1/search?q=' + id + '&type=artist', searchParameters)
      .then(response => response.json())
      .then(data => data)
    return data
  } catch (error) {

  }
}
