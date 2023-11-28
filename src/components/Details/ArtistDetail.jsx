import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { requestOneItem } from '../../services/requestOneItem'

const ArtistDetail = () => {
  const { id } = useParams()
  useEffect(() => {
    requestOneItem('artists', id)
      .then(res => console.log(res))
      .catch(err => console.error(err))
  }, [id])

  return (
    <div>ArtistDetail</div>
  )
}

export default ArtistDetail
