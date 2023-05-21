import requestsAccess from './requestsAccess'

export async function searchItems (searchInput, categories) {
  // Declaro el tipo de búsqueda y su límite
  let type = '&type='
  categories.forEach((cat, index) => {
    type = type + cat
    if (index !== categories.length - 1) {
      type = type + '%2C'
    }
  })
  let limit = 50
  if (type.includes('%')) limit = 10

  // Genero la url y realizo la petición
  try {
    const searchParameters = await requestsAccess()
    const data = await fetch('https://api.spotify.com/v1/search?q=' + searchInput + type + `&limit=${limit}`, searchParameters)
      .then(response => response.json())
      .then(data => data)
    return data
  } catch (error) {
    console.log(error)
  }
}
