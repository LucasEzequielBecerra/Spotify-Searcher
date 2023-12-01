import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import getTracksByCategory from '../../services/getTracksByCategory'

const GenreDetails = () => {
  const { id } = useParams()
  useEffect(() => {
    getTracksByCategory(id)
      .then((tracks) => console.log(tracks))
      .catch((err) => console.error(err))
  }, [id])
  return (
    <div>GenreDetails</div>
  )
}

export default GenreDetails
