import { useContext } from 'react'
import SongCard from './SongCard'
import TopResultCard from './TopResultCard'
import { SearchContext } from '../../context/SearchContext'

const ResultsHeader = () => {
  const { searchResults } = useContext(SearchContext)

  const type = searchResults.artists.total > 0 && searchResults.artists.items[0].type
  const songs = searchResults.tracks.total > 0 && searchResults.tracks.items.slice(0, 4)

  return (
    <section className="flex flex-col sm:flex-row w-full" >
      {type && <TopResultCard item={searchResults.artists.items[0]} type={type} />}
      {songs &&
        <div className='mx-auto w-5/6 sm:w-2/3 flex flex-col gap-3'>
          <h2 className="title">Songs</h2>
          {songs.map((song) => <SongCard key={song.id} song={song}/>)}
        </div>}
    </section>
  )
}

export default ResultsHeader
