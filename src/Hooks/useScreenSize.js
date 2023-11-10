import { useEffect, useState } from 'react'

export function useScreenSize () {
  const [quantity, setQuantity] = useState(9)

  function screenSize () {
    if (window.screen.width <= 640) return 2
    else if (window.screen.width > 640 && window.screen.width <= 870) return 3
    else if (window.screen.width > 870 && window.screen.width <= 1100) return 4
    else if (window.screen.width > 1100 && window.screen.width <= 1300) return 5
    else if (window.screen.width > 1300 && window.screen.width <= 1500) return 6
    else if (window.screen.width > 1500 && window.screen.width <= 1700) return 7
    else return 9
  }

  useEffect(() => {
    const handleResize = () => {
      const newQuantity = screenSize()
      setQuantity(newQuantity)
    }
    window.addEventListener('resize', handleResize)

    const initialQuantity = screenSize()
    setQuantity(initialQuantity)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return { quantity }
}
