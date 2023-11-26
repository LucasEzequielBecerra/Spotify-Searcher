import { FaPlay } from 'react-icons/fa'

const PlayButton = () => {
  return (
    <button className='rounded-full bg-green-500 p-4 absolute opacity-0 group-hover:opacity-100 group-hover:-translate-y-2 duration-300 ease-in-out bottom-0 right-2'>
      <span ><FaPlay className='fill-black'/></span>
    </button>
  )
}

export default PlayButton
