import { Box, CircularProgress } from '@mui/joy'

const Loader = () => {
  return (
    <Box sx={{ justifyContent: 'center', display: 'flex', padding: '20vh 0' }}><CircularProgress color='primary'/></Box>
  )
}

export default Loader
