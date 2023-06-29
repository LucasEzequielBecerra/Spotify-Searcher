import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { requestsOneItem } from '../../services/requestsOneItem'

const AlbumDetail = () => {
  const { id } = useParams()

  const [album, setAlbum] = useState({})
  const [load, setLoad] = useState(true)

  useEffect(() => {
    // fetch with id and setAlbum of response
    const requestArtist = async () => {
      try {
        setAlbum(await requestsOneItem('albums', id))
      } catch (error) {
        console.log(error)
      } finally {
        setLoad(false)
      }
    }
    requestArtist()
  }, [])

  return (
    console.log(album)
  )
}

export default AlbumDetail
