import requestsAccess from './requestsAccess'

export async function searchItems (searchInput, categories) {
  // Declaro el tipo de búsqueda y su límite
  if (categories.length === 0) categories = ['artist', 'album', 'track']
  const type = '&type=' + categories.join('%2C')
  let limit = 50
  if (type.includes('%')) limit = 10

  // Genero la url y realizo la petición
  try {
    const searchParameters = await requestsAccess()
    if (searchInput === '') return []
    const data = await fetch('https://api.spotify.com/v1/search?q=' + searchInput + type + `&limit=${limit}`, searchParameters)
      .then(response => response.json())
      .then(data => data)
    return data
  } catch (error) {
    console.log(error)
  }
}
