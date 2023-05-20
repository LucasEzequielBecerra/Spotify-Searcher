import requestsAccess from './requestsAccess'

export async function searchArtists (searchInput, type) {
  let limit = 100
  if (type.includes(',')) limit = 10
  try {
    const searchParameters = await requestsAccess()
    const artists = await fetch('https://api.spotify.com/v1/search?q=' + searchInput + '&type=' + type + '&limit=' + limit, searchParameters)
      .then(response => response.json())
      .then(data => data.artists.items)
    return artists
  } catch (error) {
    console.log(error)
  }
}
