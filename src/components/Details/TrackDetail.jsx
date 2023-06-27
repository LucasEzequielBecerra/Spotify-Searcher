import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const TrackDetail = () => {
  const { id } = useParams()

  const [track, setTrack] = useState({})

  useEffect(() => {
    // fetch with id and setTrack of response
  }, [])

  return (
    <div></div>
  )
}

export default TrackDetail