import requestsAccess from './requestAccess'

export default async id => {
  try {
    const searchParameters = await requestsAccess()
    const res = await fetch('https://api.spotify.com/v1/browse/categories?country=US' + (id ? '/' + id : ''), searchParameters)
    console.log(res)
    return res.json()
  } catch (error) {
    return error
  }
}
