import requestsAccess from './requestAccess'

export async function searchItems (searchInput, categories, limits) {
  if (categories.length === 0) categories = ['track', 'artist', 'album', 'playlist', 'episode', 'show']
  const type = '&type=' + categories.join('%2C')
  const limit = limits

  // Genero la url y realizo la petición
  try {
    const searchParameters = await requestsAccess()
    if (searchInput === '') return []
    const response = await fetch('https://api.spotify.com/v1/search?q=' + searchInput + type + `&limit=${limit}` + '&market=AR', searchParameters)
    const data = await response.json()
    return data
  } catch (error) {
    console.log(error)
  }
}
