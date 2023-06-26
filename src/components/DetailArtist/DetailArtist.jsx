import { useEffect, useState } from 'react'
import { requestsArtists } from '../../services/requestsArtists'

const DetailArtist = async (name) => {
  console.log(name)
  const [artists, setArtists] = useState('')
  useEffect(async () => {
    const data = await requestsArtists(name)
    console.log(data)
    setArtists(data)
  }, [])
  return (
    <div>
        {artists.map((item) => <div key={item.id}> {item.name} </div>)}
    </div>
  )
}

export default DetailArtist
