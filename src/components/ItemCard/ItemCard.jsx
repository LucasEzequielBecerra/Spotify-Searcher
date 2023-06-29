import { Card, CardCover, CardContent, Typography } from '@mui/joy'
import { Link } from 'react-router-dom'

const ItemCard = ({ type, id, name, img }) => {
  const typeSearch = type + 's'
  return (
    <Link to={`/${typeSearch}/${id}`}>
    <Card sx={{
      minHeight: '210px',
      minWidth: '240px',
      maxWidth: '',
      transition: '.2s',
      '&:hover': {
        transform: 'translateY(-2px)',
        boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;',
        cursor: 'pointer'
      }
    } }>
    <CardCover>
      <img
        src={img?.url}
        srcSet={`${img?.url} 2x`}
        loading="lazy"
        alt={name}
      />
    </CardCover>
    <CardCover
      sx={{
        background:
          'linear-gradient(to top, rgba(0,0,0,0.4), rgba(0,0,0,0) 200px), linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0) 300px)'
      }}
    />
    <CardContent sx={{ justifyContent: 'flex-end' }}>
      <Typography level="h2" fontSize="lg" textColor="#fff" mb={1}>
        {name}
      </Typography>
    </CardContent>
  </Card>
    </Link>
  )
}

export default ItemCard
