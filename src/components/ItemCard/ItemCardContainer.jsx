import ItemCard from './ItemCard'
import { Typography } from '@mui/joy'
import './ItemCard.css'
import { useRef, useEffect } from 'react'

const ItemCardContainer = ({ items, title }) => {
  // Scroll para el container
  const containerRef = useRef(null)
  useEffect(() => {
    const container = containerRef.current
    const handleWheel = (event) => {
      const delta = Math.max(-1, Math.min(1, event.deltaY))
      container.scrollLeft += delta * 50
      event.preventDefault()
    }

    container.addEventListener('wheel', handleWheel)

    return () => {
      container.removeEventListener('wheel', handleWheel)
    }
  }, [])

  // Paso la primer letra a mayus para los títulos de las categorías

  const capitalizeFirstLetter = string => string.charAt(0).toUpperCase() + string.slice(1)

  return (
    <>
      <Typography level='h4'>{capitalizeFirstLetter(title + 's')}</Typography>
      <div ref={containerRef} className='results'>
        {items?.length === 0
          ? 'Not Found'
          : items?.map(item => <ItemCard key={item.id} name={item.name}
            img={title === 'track'
              ? item.album.images[0]
              : item.images[0]} />)}
      </div>
    </>
  )
}

export default ItemCardContainer
