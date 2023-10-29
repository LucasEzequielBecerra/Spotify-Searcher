import { FaPlay, FaRegHeart } from 'react-icons/fa'
import { FiMoreHorizontal } from 'react-icons/fi'

const SongCard = () => {
  return (
    <article className="w-72 rounded sm:w-full ms-1 px-2 py-1 flex justify-between items-center group hover:bg-dark-bg-hover">
        <div className="flex items-center gap-5">
            <picture className="relative w-12 hover:brightness-50">
                <img className="rounded-sm" src="https://i.scdn.co/image/ab67616d00001e029f96ce0d84b2214a87f72f6e" alt="" />
                <button className="flex justify-center items-center w-full h-full absolute p-0 top-0 left-0 ">
                    <FaPlay size='1.2em'/>
                </button>
            </picture>
            <div className="flex flex-col">
                <h6 className="text-lg font-bold">No soy de aca</h6>
                <p className="text-sm text-dark-text-lite">Sullivan, Piña de Say Ocean</p>
            </div>
        </div>
        <div className="flex gap-3">
            <button className="w-4 text-white opacity-100 group-hover:opacity-100 sm:opacity-0">
                <FaRegHeart className="fill-dark-text-lite hover:fill-white hover:scale-105 delay-75"/>
            </button>
            <div className="text-base cursor-default">2:45</div>
            <button className="w-4 hover:scale-105 opacity-100 group-hover:opacity-100 sm:opacity-0">
                <FiMoreHorizontal size='1.2em'/>
            </button>
        </div>
    </article>
  )
}

export default SongCard
