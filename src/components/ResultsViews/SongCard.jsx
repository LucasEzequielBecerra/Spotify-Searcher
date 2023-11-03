import { FaPlay, FaRegHeart } from 'react-icons/fa'
import { FiMoreHorizontal } from 'react-icons/fi'

const SongCard = ({ song }) => {
  function songDurationConverter (ms) {
    const minutes = Math.floor(ms / 60000)
    const segundos = ((ms % 60000) / 1000).toFixed(0)

    return `${minutes}:${segundos}`
  }
  return (
    <article className="rounded w-full h-12 ms-1 px-2 py-1 flex justify-between items-center group hover:bg-dark-bg-hover">
        <div className="flex items-center gap-5">
            <picture className="relative w-10 ">
                <img className="rounded-sm group-hover:brightness-50" src={song.album.images[0].url} alt="" />
                <button className="flex justify-center items-center w-full h-full absolute p-0 top-0 left-0 opacity-0 group-hover:opacity-100">
                    <FaPlay size='1.2em'/>
                </button>
            </picture>
            <div className="flex flex-col">
                <a href='#' className="text-lg font-normal hover:underline">{song.name}</a>
                <div href='#' className="text-sm text-dark-text-lite ">
                    {song.artists.map((a, index) => {
                      return (
                        song.artists.length > 1
                          ? <a key={index} href='#' className='hover:underline'> {a.name},  </a>
                          : <a key={index} href='#' className='hover:underline'>{a.name} </a>
                      )
                    })}
                </div>
            </div>
        </div>
        <div className="flex gap-3">
            <button className="w-4 text-white opacity-100 group-hover:opacity-100 sm:opacity-0">
                <FaRegHeart className="fill-dark-text-lite hover:fill-white hover:scale-105 delay-75"/>
            </button>
            <div className="text-base cursor-default">{songDurationConverter(song.duration_ms)}</div>
            <button className="w-4 hover:scale-105 opacity-100 group-hover:opacity-100 sm:opacity-0">
                <FiMoreHorizontal size='1.2em'/>
            </button>
        </div>
    </article>
  )
}

export default SongCard
