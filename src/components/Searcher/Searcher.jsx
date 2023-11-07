import { useEffect, useRef, useState } from 'react'
import { CiSearch } from 'react-icons/ci'
import { searchItems } from '../../services/searchtItems'
import { useScreenSize } from '../../Hooks/useScreenSize'

export function useSearch (query, category, quantity) {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (!query || query === '') setData([])
    else {
      setLoading(true)
      searchItems(query, category, quantity)
        .then(res => {
          setData(res)
          console.log(data)
        })
        .catch(err => console.log(err)) // TODO: error msg
        .finally(() => setLoading(false))
    }
  }, [query, category])

  return { data, loading }
}

const Searcher = ({ setLoading, setSearchResults, category }) => {
  const { quantity } = useScreenSize()
  const searchInput = useRef(null)
  const [query, setQuery] = useState('')
  const { data } = useSearch(query, category, quantity, category)
  const submitHandler = e => {
    e.preventDefault()
  }
  const searchHandler = () => {
    setQuery(searchInput.current.value)
  }
  useEffect(() => {
    setLoading(true)
    setSearchResults(data)
    setLoading(false)
  }, [searchHandler, category])

  return (
        <form onSubmit={submitHandler} className='flex items-center me-4 rounded-full ms-4 p-2 bg-dark-bg-hover sm:w-80'>
            <CiSearch className='mx-1' size='1.2em' />
            <input ref={searchInput} onChange={searchHandler} className="bg-[#2a2a2a] w-full ms-1" placeholder="What do you want to listen to?" />
        </form>
  )
}

export default Searcher
