import requestsAccess from './requestsAccess'

export async function searchArtists (searchInput) {
  try {
    const searchParameters = await requestsAccess()
    console.log(searchParameters)
    const artists = await fetch('https://api.spotify.com/v1/search?q=' + searchInput + '&type=artist', {...searchParameters})
      .then(response => response.json())
      .then(data => console.log(data))
    return artists
  } catch (error) {
    console.log(error)
  }
}
