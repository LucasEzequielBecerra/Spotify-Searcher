import SongCard from './SongCard'
import { FaClock } from 'react-icons/fa'

const SongsResults = ({ songs }) => {
  const songsResult = true
  return (
    <section className='w-11/12 '>
      <div className='flex relative justify-between px-2 ms-1 py-1 border-b border-dark-bg-hover mb-4'>
        <div className='absolute left-0'>#</div>
        <div className='pl-7'>Title</div>
        <div className='absolute left-1/2'>Album</div>
        <div className='w-20 flex justify-center'><FaClock/></div>
      </div>
      {songs.map((track, index) => <SongCard key={track.id} song={track} coming={songsResult} numberList={index}/>)}
    </section>

  )
}

export default SongsResults
