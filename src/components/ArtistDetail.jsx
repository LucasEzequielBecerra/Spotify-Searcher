import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const ArtistDetail = () => {
  const { id } = useParams()

  const [artist, setArtist] = useState({})

  useEffect(() => {
    // fetch with id and setArtist of response
  }, [])

  return (
    <div></div>
  )
}

export default ArtistDetail
