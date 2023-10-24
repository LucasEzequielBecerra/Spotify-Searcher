import requestsAccess from './requestsAccess'

export async function requestsOneItem (type, id) {
  try {
    const searchParameters = await requestsAccess()
    const data = await fetch(`https://api.spotify.com/v1/${type}/${id}`, searchParameters)
      .then(response => response.json())
      .then(data => data)
    return data
  } catch (error) {

  }
}
