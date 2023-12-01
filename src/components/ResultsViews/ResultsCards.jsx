import { useState } from 'react'
import PlayButton from '../PlayButton/PlayButton'

const ResultsCards = ({ info, typeCard }) => {
  const [loadingImage, setLoadingImage] = useState(false)

  const handleImageLoaded = () => {
    setLoadingImage(true)
  }
  return (
    <a href={info.external_urls.spotify} target="_blank"
      rel="noreferrer">
      <article className='w-44 flex flex-col p-4 bg-dark-bg-lite rounded-md gap-2 cursor-pointer hover:bg-dark-bg-hover duration-200 h-62 group'>
        <picture className={loadingImage ? 'w-full relative min-h-[160px]' : 'w-full relative bg-white'}>
          <img className={typeCard === 'artist' ? 'rounded-full h-[144px] w-[144px] object-cover' : 'rounded' && loadingImage ? 'opacity-100 rounded-lg' : 'opacity-0 h-40'} src={info?.images[0]?.url} alt={info.name} onLoad={handleImageLoaded} />
          {
            typeCard === 'podcast' || typeCard === 'episode'
              ? ''
              : <PlayButton />
          }
        </picture>
        <footer>
          <h6 className='text-lg truncate'>{info.name}</h6>
          <div className='flex flex-wrap truncate text-dark-text-lite text-sm tracking-wide h-10'>
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
        </footer>
      </article>
    </a>)
}

export default ResultsCards
