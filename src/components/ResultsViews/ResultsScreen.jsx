import ResultsCards from './ResultsCards'
import { useScreenSize } from '../../Hooks/useScreenSize'
import Loader from '../Loader/Loader'
import { useContext } from 'react'
import { SearchContext } from '../../context/SearchContext'
import { categoriesNames } from '../Categories/CategorySelector'
import ResultsHeader from './ResultsHeader'
import SongsResults from './SongsResults'

const ResultsScreen = () => {
  const { searchResults, loading, category } = useContext(SearchContext)

  let existResults

  let { quantity } = useScreenSize()

  if (category !== 'all') quantity = 30

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
          {category === 'all'
            ? <>
            <ResultsHeader/>
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
            </>
            : category === 'track'
              ? <>
              <SongsResults songs={searchResults.tracks.items} quantity={quantity}/>
            </>
              : <>
            { <section key={searchResults[category + 's'].id} className='flex flex-col w-5/6 sm:w-full'>
              <div className='sm:mx-6'>
                <h2 className="title flex flex-row">{category.charAt(0).toUpperCase() + category.slice(1) + 's'}</h2>
                <div className='flex flex-wrap gap-6'>
                  {mappingCards(searchResults[category + 's'].items)}
                </div>
              </div>
            </section>}

            </>
          }
    </main>

  )
}

export default ResultsScreen
