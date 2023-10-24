import { CiSearch } from 'react-icons/ci'

const Searcher = () => {
  const submitHandler = (e) => {
    e.preventDefaukt()
  }
  return (
    <form onSubmit={submitHandler} className='flex items-center rounded-full ms-4 p-2 bg-[#2a2a2a] w-80'>
        <CiSearch className='mx-1' size='1.2em' />
        <input className="bg-[#2a2a2a] w-full ms-1" placeholder="What do you want to listen to?"/>
    </form>
  )
}

export default Searcher
