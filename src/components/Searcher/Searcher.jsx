import { CiSearch } from 'react-icons/ci'
import { useContext } from 'react'
import { SearchContext } from '../../context/SearchContext'

const Searcher = () => {
  const { handleChange } = useContext(SearchContext)

  const submitHandler = e => {
    e.preventDefault()
  }

  return (
    <form onSubmit={submitHandler} className='flex items-center me-4 rounded-full ms-4 p-2 bg-dark-bg-hover sm:w-80'>
      <CiSearch className='mx-1' size='1.2em' />
      <input onChange={handleChange} className="bg-[#2a2a2a] w-full ms-1" placeholder="What do you want to listen to?" />
    </form>
  )
}

export default Searcher
