import requestsAccess from './requestAccess'

export async function requestOneItem (type, id) {
  try {
    const searchParameters = await requestsAccess()
    const res = await fetch(`https://api.spotify.com/v1/${type}/${id}`, searchParameters)
    return res.json()
  } catch (error) {
    return error
  }
}
