import ItemCard from './ItemCard'
import { Typography, Box } from '@mui/joy'
import './ItemCard.css'
import { useRef, useEffect } from 'react'

const capitalizeFirstLetter = string => string.charAt(0).toUpperCase() + string.slice(1)
const WithManyCategories = ({ items, title }) => {
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

  return (
    <>
      <Typography level='h4'>{capitalizeFirstLetter(title + 's')}</Typography>
      <Box ref={containerRef} sx={{
        display: 'flex',
        alignItems: 'center',
        overflowX: 'scroll',
        padding: '1.5rem .5rem',
        gap: '1rem'
      }}>
        {items?.length === 0
          ? 'Not Found'
          : items?.map(item => <ItemCard key={item.id} name={item.name}
            img={title === 'track'
              ? item.album.images[0]
              : item.images[0]} />)}
      </Box>
    </>
  )
}

const WithACategory = ({ items, title }) => {
  return (
    <>
      <Typography level='h4'>{capitalizeFirstLetter(title + 's')}</Typography>
      <Box sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexWrap: 'wrap',
        gap: '10px',
        margin: '1rem 0'
      }}>
        {items?.length === 0
          ? 'Not Found'
          : items?.map(item => <ItemCard key={item.id} name={item.name}
            img={title === 'track'
              ? item.album.images[0]
              : item.images[0]} />)}
      </Box>
    </>
  )
}

export default function ItemCardContainer ({ categories, items, title }) {
  const hasManyCategories = categories.length > 1
  return (hasManyCategories ? <WithManyCategories items={items} title={title} /> : <WithACategory items={items} title={title} />)
}
