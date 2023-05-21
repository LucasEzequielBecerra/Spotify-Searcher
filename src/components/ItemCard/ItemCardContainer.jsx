import ItemCard from './ItemCard'
import { Typography } from '@mui/joy'
import './ItemCard.css'

const ItemCardContainer = ({ items, title }) => {
  return (
    <>
      <Typography level='h4'>{title}</Typography>
      <div className='results'>{items?.lenght !== 0 ? items?.map(item => <ItemCard key={item.id} name={item.name} img={title === 'track' ? item.album.images[0] : item.images[0]} />) : 'Not Found'}</div>
    </>
  )
}

export default ItemCardContainer
