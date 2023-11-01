import { FaPlay } from 'react-icons/fa'

const ResultsCards = ({ type }) => {
  const typeCard = type

  return (
    <article className='w-48 flex flex-col items-center p-4 bg-dark-bg-lite rounded-md gap-2 cursor-pointer hover:bg-dark-bg-hover duration-200 h-full group'>
                <picture className="w-full relative" >
                    <img className={typeCard === 'Artist' ? 'rounded-full' : 'rounded' }src="https://i.scdn.co/image/ab676161000051745821b2ffd6f8495b032be0e1" alt="" />
                    {
                    typeCard === 'Podcast' || typeCard === 'Episode'
                      ? ''
                      : <button className='rounded-full bg-green-500 p-4 absolute opacity-0 group-hover:opacity-100 group-hover:-translate-y-2 duration-300 ease-in-out bottom-0 right-4 '>
                      <span ><FaPlay className='fill-black'/></span>
                    </button>
                    }
                </picture>
                <div>
                    <a href='' className=''>CUANDO TODO CAE</a>
                    <div className='flex gap-1 text-dark-text-lite text-sm tracking-wide h-10'>
                        <p className='text-inherit'>
                          {typeCard === 'Album' ? '2022 •' : typeCard === 'Playlist' ? 'De' : typeCard === 'Episode' ? 'ago 2018 -' : ''}
                        </p>
                        {typeCard === 'Album'
                          ? <a href='' className='text-inherit hover:underline'>Sullivan</a>
                          : <p className="text-inherit"> {typeCard === 'Artist' ? 'Artist' : typeCard === 'Episode' ? '80 min' : 'Sullivan'}  </p>
                        }
                    </div>
                </div>
            </article>
  )
}

export default ResultsCards
