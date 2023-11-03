import { useRef } from 'react'
import { CiSearch } from 'react-icons/ci'
import { searchItems } from '../../services/searchtItems'
import { useScreenSize } from '../../Hooks/useScreenSize'

const Searcher = ({ setLoading, setSearchResults }) => {
  const { quantity } = useScreenSize()
  const searchInput = useRef(null)

  const submitHandler = e => {
    e.preventDefault()
  }

  const searchHandler = () => {
    if (!searchInput.current.value) setSearchResults([])
    else {
      setLoading(true)
      setTimeout(() => {
        searchItems(searchInput.current.value, ['track', 'artist', 'album', 'playlist', 'episode', 'show'], quantity)
          .then(res => {
            setSearchResults(res)
          })
          .catch(err => console.log(err)) // TODO: error msg
          .finally(() => setLoading(false))
      }, 500)
    }
  }

  return (
        <form onSubmit={submitHandler} className='flex items-center me-4 rounded-full ms-4 p-2 bg-dark-bg-hover sm:w-80'>
            <CiSearch className='mx-1' size='1.2em' />
            <input ref={searchInput} onChange={searchHandler} className="bg-[#2a2a2a] w-full ms-1" placeholder="What do you want to listen to?" />
        </form>
  )
}

export default Searcher
