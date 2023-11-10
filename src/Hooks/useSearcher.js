import { useState } from 'react'
import { searchItems } from '../services/searchtItems'
import { useScreenSize } from './useScreenSize'

const useSearcher = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [searchResults, setSearchResults] = useState([])
  const [loading, setLoading] = useState(false)
  const [typingTimeout, setTypingTimeout] = useState(0)
  const [category, setCategory] = useState('all')
  const { quantity } = useScreenSize()

  const handleSearch = async (value) => {
    // Clear the previous timeout to avoid multiple API calls in quick succession
    clearTimeout(typingTimeout)

    setLoading(true)

    // Set a new timeout to wait for a certain period before making the API call
    const timeoutId = setTimeout(async () => {
      try {
        const res = await searchItems(value, category, quantity)
        console.log(res)
        setSearchResults(res)
      } catch (error) {
        console.error(error) // TODO: handle error
      }

      setLoading(false)
    }, 1000)

    // Save the timeout ID for potential cleanup during the next user input
    setTypingTimeout(timeoutId)
  }

  const handleChange = e => {
    const { value } = e.target
    setSearchTerm(value)
    handleSearch(value)
  }

  return {
    searchTerm,
    searchResults,
    loading,
    setCategory,
    handleChange
  }
}

export default useSearcher
