import ResultsCards from './ResultsCards'
import SongCard from './SongCard'
import { useScreenSize } from '../../Hooks/useScreenSize'
import Loader from '../Loader/Loader'
import { useContext } from 'react'
import { SearchContext } from '../../context/SearchContext'
import TopResultCard from './TopResultCard'
import { categoriesNames } from '../Categories/CategorySelector'

const ResultsScreen = () => {
  const { searchResults, loading } = useContext(SearchContext)

  const type = searchResults.artists.total > 0 && searchResults.artists.items[0].type
  const songs = searchResults.tracks.total > 0 && searchResults.tracks.items.slice(0, 4)
  let existResults

  const { quantity } = useScreenSize()

  // console.log(searchResults)

  function mappingCards (arr) {
    if (arr.length > 0) {
      const arrToFilter = arr.slice(0, quantity)
      const arrToMap = arrToFilter.filter(item => item)
      return arrToMap.map((item) => (<ResultsCards key={item.id} info={item} typeCard={item.type}/>)
      )
    } else return console.error('Invalid search')
  }

  return (
    loading
      ? <Loader/>
      : <main className="flex flex-col items-center m-auto mt-6 gap-14">
          <section className="flex flex-col sm:flex-row w-full" >
            {type && <TopResultCard item={searchResults.artists.items[0]} type={type} />}
            {songs &&
              <div className='mx-auto w-5/6 sm:w-2/3 flex flex-col gap-3'>
                <h2 className="title">Songs</h2>
                {songs.map((song) => <SongCard key={song.id} song={song}/>)}
              </div>}
          </section>
        {categoriesNames.slice(1).map((categoryName, index) => {
          const category = categoryName.toLowerCase() + 's'
          if (searchResults[category].total === 0) {
            existResults === true
              ? existResults = true
              : existResults = false
            return null
          } else {
            existResults = true
          }
          if (categoryName === 'Track') return null
          else {
            return <section key={index} className='flex flex-col w-5/6 sm:w-full'>
            <div className='sm:mx-6'>
              <h2 className="title flex flex-row">{categoryName}</h2>
              <div className='flex flex-row  justify-start gap-5'>
                {mappingCards(searchResults[category].items)}
              </div>
            </div>
          </section>
          }
        })}
    </main>

  )
}

export default ResultsScreen
