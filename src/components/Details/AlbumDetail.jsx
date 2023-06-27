import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { requestsOneItem } from '../../services/requestsOneItem'

const AlbumDetail = () => {
	const { id } = useParams()

  const [album, setAlbum] = useState({})

  useEffect(() => {
    // fetch with id and setArtist of response
  }, [])

  return (
    <div>AlbumDetail</div>
  )
}

export default AlbumDetail
