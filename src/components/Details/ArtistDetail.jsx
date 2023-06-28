import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { requestsOneItem } from '../../services/requestsOneItem'
import { Box, CircularProgress, Typography, Button } from '@mui/joy'
import { ArrowBackIos } from '@mui/icons-material'
import { grey } from '@mui/material/colors'

function formatearCifra (cifra) {
  if (cifra >= 1000000) {
    const millones = cifra / 1000000
    return millones.toFixed(1) + ' M'
  } else if (cifra >= 1000) {
    const miles = cifra / 1000
    return miles.toFixed(1) + ' K'
  } else {
    return cifra.toLocaleString()
  }
}

const ArtistDetail = () => {
  const { id } = useParams()

  const [artist, setArtist] = useState({})
  const [load, setLoad] = useState(true)

  useEffect(() => {
    const requestArtist = async () => {
      try {
        setArtist(await requestsOneItem('artists', id))
      } catch (error) {
        console.log(error)
      } finally {
        setLoad(false)
      }
    }
    requestArtist()
  }, [])

  return (
    <>
    {console.log(artist)}
      {load
        ? <CircularProgress color='primary' />
        : <>
          <Box sx={{
            position: 'absolute',
            top: 0,
            zIndex: '-1',
            backgroundImage: `url('${artist.images[0].url}')`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            filter: 'brightness(60%)',
            height: '20vw',
            width: '100vw'
          }}>
          </Box>
          <Box sx={{
            background: 'linear-gradient(#000000a1, #000000f4)',
            height: '20vw',
            boxSizing: 'border-box',
            padding: '1rem 2rem',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between'
          }}>
            <Link to='/'>
              <Button sx={{ ':hover': { backgroundColor: '#ffffff00' }, padding: 0 }} variant='plain'>
                <ArrowBackIos sx={{ fill: grey[50] }} />
              </Button>
            </Link>
            <Box>
              <Typography variant='h1' fontWeight='900' fontSize='5rem' sx={{ color: grey[50], lineHeight: 1.2 }}>{artist.name}</Typography>
              <Typography sx={{ color: grey[50] }}>{formatearCifra(artist.followers.total)} followers</Typography>
            </Box>
          </Box>
        </>
      }
    </>
  )
}

export default ArtistDetail
