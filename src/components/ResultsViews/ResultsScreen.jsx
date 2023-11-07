import ResultsCards from './ResultsCards'
import SongCard from './SongCard'
import { useScreenSize } from '../../Hooks/useScreenSize'
import Loader from '../Loader/Loader'

const ResultsScreen = ({ results, loading }) => {
  const type = results.artists?.items[0].type
  const songs = results.tracks?.items.slice(0, 4)

  const { quantity } = useScreenSize()

  function mappingCards (arr) {
    if (arr.length > 0) {
      const arrToMap = arr.slice(0, quantity)
      return arrToMap.map((item) => {
        return (<ResultsCards key={item.id} info={item} typeCard={item.type}/>)
      })
    } else return console.error('Invalid search')
  }

  return (
    loading
      ? <Loader/>
      : <main className="flex flex-col items-center m-auto mt-6 gap-14">
        <section className="flex flex-col sm:flex-row w-full" >
                {type
                  ? <div className='sm:mx-6 mx-auto mt-1 w-5/6 sm:w-1/3'>
                <h2 className="title">Top result</h2>
                <article className="bg-dark-bg-lite py-3 mb-4 rounded w-full hover:bg-dark-bg-hover cursor-pointer">
                    <picture className="relative w-32 ml-3 block">
                        <img className={type === 'artist' ? 'rounded-full w-full h-32' : 'rounded-md shadow'} src={results.artists.items[0].images[2]?.url} alt="" />
                    </picture>
                    <div className="mt-5 mx-3 m-auto">
                        <p className="font-bold text-xl">{results.artists.items[0].name}</p>
                        <footer className="flex mt-2 justify-start w-full items-center gap-3">
                            <p className="btn-dark p-1 rounded-full text-base">{type.charAt(0).toUpperCase() + type.slice(1)}</p>
                        </footer>
                    </div>
                </article>
                </div>
                  : <p>no hay resultados</p>

                }
            <div className='mx-auto w-5/6 sm:w-2/3 flex flex-col gap-3'>
                <h2 className="title">Songs</h2>
                {songs
                  ? songs.map((song) =>
                  <SongCard key={song.id} song={song}/>
                  )
                  : <p>no hay resultados</p>}
            </div>
        </section>
        <section className='flex flex-col w-5/6 sm:w-full'>
            <div className=' sm:mx-6'>
            <h2 className="title flex flex-row ">Artists</h2>
            <div className='flex flex-row  justify-start gap-5'>
                {results.artists
                  ? mappingCards(results.artists.items)
                  : <p>no hay resultado</p>}
            </div>
            </div>
        </section>
         <section className='flex flex-col w-5/6 sm:w-full'>
            <div className=' sm:mx-6'>
            <h2 className="title flex flex-row ">Albums</h2>
            <div className='flex flex-row  justify-start gap-5'>
            {results.albums
              ? mappingCards(results.albums.items)
              : <p>no hay resultasdos</p>}</div>
            </div>
        </section>
         <section className='flex flex-col w-5/6 sm:w-full'>
            <div className=' sm:mx-6'>
            <h2 className="title flex flex-row ">Playlists</h2>
            <div className='flex flex-row  justify-start gap-5'>
            {results.playlists
              ? mappingCards(results.playlists.items)
              : <p>no hay resultasdos</p>}           </div>
            </div>
        </section>
         <section className='flex flex-col w-5/6 sm:w-full'>
            <div className=' sm:mx-6'>
            <h2 className="title flex flex-row ">Podcasts</h2>
            <div className='flex flex-row  justify-start gap-5'>
            {results.shows
              ? mappingCards(results.shows.items)
              : <p>no hay resultasdos</p>}          </div>
            </div>
        </section>
        <section className='flex flex-col w-5/6 sm:w-full'>
            <div className=' sm:mx-6'>
            <h2 className="title flex flex-row ">Episodes</h2>
            <div className='flex flex-row  justify-start gap-5'>
            {results.episodes
              ? mappingCards(results.episodes.items)
              : <p>no hay resultasdos</p>}         </div>
            </div>
        </section>

    </main>

  )
}

export default ResultsScreen
