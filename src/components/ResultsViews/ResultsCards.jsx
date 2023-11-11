import { FaPlay } from 'react-icons/fa'

const ResultsCards = ({ info, typeCard }) => {
  return (
    info.total === 0
      ? ''
      : <article className='w-48 flex flex-col  p-4 bg-dark-bg-lite rounded-md gap-2 cursor-pointer hover:bg-dark-bg-hover duration-200 h-62 group'>
          <picture className="w-full relative" >
            <img className={typeCard === 'artist' ? 'rounded-full' : 'rounded' }src={info.images[0].url} alt="" />
            {
            typeCard === 'podcast' || typeCard === 'episode'
              ? ''
              : <button className='rounded-full bg-green-500 p-4 absolute opacity-0 group-hover:opacity-100 group-hover:-translate-y-2 duration-300 ease-in-out bottom-0 right-4 '>
              <span ><FaPlay className='fill-black'/></span>
            </button>
            }
          </picture>
          <div>
            <p className='text-lg truncate'>{info.name}</p>
            <div className='flex flex-wrap truncate  text-dark-text-lite text-sm tracking-wide h-10'>
              <p className='text-inherit'>
                {typeCard === 'album' ? `${info.release_date.split('-')[0]}  •` : typeCard === 'playlist' ? 'De' : typeCard === 'episode' ? `${info.release_date.split('-')[0]} •` : ''}
              </p>
              {typeCard === 'album'
                ? info.artists.map((a, index) => {
                  return <p key={index} href='' className='text-inherit hover:underline ml-1'>{a.name},</p>
                })
                : <p className="text-inherit ml-1"> {typeCard === 'artist' ? 'Artist' : typeCard === 'episode' ? `${Math.floor(info.duration_ms / 60000)} min` : typeCard === 'playlist' ? `${info.owner.display_name}` : info.publisher}  </p>
                }
            </div>
          </div>
        </article>)
}

export default ResultsCards
