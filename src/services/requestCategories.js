import requestsAccess from './requestAccess'

export default async id => {
  try {
    const searchParameters = await requestsAccess()
    const res = await fetch('https://api.spotify.com/v1/browse/categories' + (id ? '/' + id : ''), searchParameters)
    return res.json()
  } catch (error) {
    return error
  }
}
