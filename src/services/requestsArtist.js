import requestsAccess from './requestsAccess'

export async function searchArtists (searchInput) {
  try {
    const searchParameters = await requestsAccess()
    const artists = await fetch('https://api.spotify.com/v1/search?q=' + searchInput + '&type=artist', searchParameters)
      .then(response => response.json())
      .then(data => data.artists.items)
    return artists
  } catch (error) {
    console.log(error)
  }
}
