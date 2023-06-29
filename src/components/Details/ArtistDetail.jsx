import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { requestsOneItem } from '../../services/requestsOneItem'
import requestTop5 from '../../services/artist/requestTop5'
import { Box, CircularProgress, Typography, Button, List, ListItem, IconButton, Avatar } from '@mui/joy'
import { ListItemAvatar, ListItemText } from '@mui/material'
import { ArrowBackIos } from '@mui/icons-material'
import { grey } from '@mui/material/colors'

function formatNumber(num) {
  if (num >= 1000000) {
    const million = num / 1000000
    return million.toFixed(1) + ' M'
  } else if (num >= 1000) {
    const thousand = num / 1000
    return thousand.toFixed(1) + ' K'
  } else {
    return num.toLocaleString()
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
        console.log(await requestTop5(id))
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
            height: '250px',
            width: '100vw'
          }}>
          </Box>
          <Box sx={{
            background: 'linear-gradient(#000000a1, #000000f4)',
            height: '250px',
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
              <Typography variant='h1' fontWeight='900' fontSize='3.5rem' sx={{ color: grey[50], lineHeight: 1.2 }}>{artist.name}</Typography>
              <Typography sx={{ color: grey[50] }}>{formatNumber(artist.followers.total)} followers</Typography>
            </Box>
          </Box>
          <List>
            <ListItem>
              <ListItemAvatar>
                <Avatar>
                  {/* <FolderIcon /> */}
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary="Single-line item"
              />
            </ListItem>
          </List>
        </>
      }
    </>
  )
}

export default ArtistDetail
