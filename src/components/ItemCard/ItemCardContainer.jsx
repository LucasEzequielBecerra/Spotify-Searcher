import ItemCard from './ItemCard'
import './ItemCard.css'

const ItemCardContainer = ({ items }) => {
  return (
    <div className='results'>{items?.lenght !== 0 ? items?.map(item => <ItemCard key={item.id} name={item.name} img={item.images[0]} />) : 'Not Found'}</div>
  )
}

export default ItemCardContainer
