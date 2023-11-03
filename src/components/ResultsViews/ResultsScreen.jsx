import ResultsCards from './ResultsCards'
import SongCard from './SongCard'
import { useScreenSize } from '../../Hooks/useScreenSize'

const ResultsScreen = ({ results }) => {
  const { quantity } = useScreenSize()
  const { type } = results.artists.items[0]
  console.log(results)
  const limitSong = results.tracks.items.slice(0, 4)
  const limitArtist = results.artists.items.slice(0, quantity)
  const limitAlbum = results.albums.items.slice(0, quantity)
  const limitPlaylist = results.playlists.items.slice(0, quantity)
  const limitPodcast = results.shows.items.slice(0, quantity)
  const limitEpisode = results.episodes.items.slice(0, quantity)

  return (
    <main className="flex flex-col items-center m-auto mt-6 gap-14">
        <section className="flex flex-col sm:flex-row w-full" >
            <div className='sm:mx-6 mx-auto mt-1 w-5/6 sm:w-1/3'>
                <h2 className="title">Top result</h2>
                <article className="bg-dark-bg-lite py-3 mb-4 rounded w-full hover:bg-dark-bg-hover cursor-pointer">
                    <picture className="relative w-32 ml-3 block">
                        <img className={type === 'artist' ? 'rounded-full w-full h-32' : 'rounded-md shadow'} src={results.artists.items[0].images[2]?.url} alt="" />
                    </picture>
                    <div className="mt-5 mx-3 m-auto">
                        <p className="font-bold text-xl">{results.artists.items[0].name}</p>
                        <footer className="flex mt-2 justify-start w-full items-center gap-3">
                          {type === 'artist'
                            ? ''
                            : <div className=" text-dark-text-lite ">
                                <a href="" className='hover:underline'>Sullivan,</a>
                                <a href="" className='hover:underline'> Piña de Say Ocean</a>
                              </div>
                          }
                            <p className="btn-dark p-1 rounded-full text-base">{type.charAt(0).toUpperCase() + type.slice(1)}</p>
                        </footer>
                    </div>
                </article>
            </div>
            <div className='mx-auto w-5/6 sm:w-2/3 flex flex-col gap-3'>
                <h2 className="title">Songs</h2>
                {limitSong.map((song, index) =>
                  <SongCard key={index} song={song}/>
                )}
            </div>
        </section>
        <section className='flex flex-col w-5/6 sm:w-full'>
            <div className=' sm:mx-6'>
            <h2 className="title flex flex-row ">Artists</h2>
            <div className='flex flex-row  justify-start gap-5'>
            {limitArtist.map((artist, index) => (<ResultsCards key={index} type={artist}/>))}
            </div>
            </div>
        </section>
         <section className='flex flex-col w-5/6 sm:w-full'>
            <div className=' sm:mx-6'>
            <h2 className="title flex flex-row ">Albums</h2>
            <div className='flex flex-row  justify-start gap-5'>
            {limitAlbum.map((album, index) => (<ResultsCards key={index} type={album}/>))}
            </div>
            </div>
        </section>
         <section className='flex flex-col w-5/6 sm:w-full'>
            <div className=' sm:mx-6'>
            <h2 className="title flex flex-row ">Playlists</h2>
            <div className='flex flex-row  justify-start gap-5'>
            {limitPlaylist.map((playlist, index) => (<ResultsCards key={index} type={playlist}/>))}
            </div>
            </div>
        </section>
         <section className='flex flex-col w-5/6 sm:w-full'>
            <div className=' sm:mx-6'>
            <h2 className="title flex flex-row ">Podcasts</h2>
            <div className='flex flex-row  justify-start gap-5'>
            {limitPodcast.map((podcast, index) => (<ResultsCards key={index} type={podcast}/>))}
            </div>
            </div>
        </section>
        <section className='flex flex-col w-5/6 sm:w-full'>
            <div className=' sm:mx-6'>
            <h2 className="title flex flex-row ">Episodes</h2>
            <div className='flex flex-row  justify-start gap-5'>
            {limitEpisode.map((episode, index) => (<ResultsCards key={index} type={episode}/>))}
            </div>
            </div>
        </section>

    </main>

  )
}

export default ResultsScreen
