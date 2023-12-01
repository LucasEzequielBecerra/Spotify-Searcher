import requestsAccess from './requestAccess'

export async function searchItems (searchInput, categories, limits) {
  if (categories === 'all') categories = ['track', 'artist', 'album', 'playlist', 'episode', 'show']
  let type = '&type='
  if (Array.isArray(categories)) {
    type = type + categories.join('%2C')
  } else { type = type + categories }
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
