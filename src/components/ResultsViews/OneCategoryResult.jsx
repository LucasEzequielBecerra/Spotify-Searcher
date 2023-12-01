import { useContext } from 'react'
import SongsResults from './SongsResults'
import { SearchContext } from '../../context/SearchContext'

const OneCategoryResult = ({ mappingCards, quantity }) => {
  const { category, searchResults } = useContext(SearchContext)
  return (
    category === 'track'
      ? <>
        <SongsResults songs={searchResults.tracks.items} quantity={quantity}/>
      </>
      : <>
        {<section key={searchResults[category + 's'].id} className='flex flex-col w-5/6 sm:w-full'>
          <div className='sm:mx-10'>
            <h2 className="title flex flex-row">{category.charAt(0).toUpperCase() + category.slice(1) + 's'}</h2>
            <div className='flex flex-wrap gap-8 justify-center'>
              {mappingCards(searchResults[category + 's'].items)}
            </div>
          </div>
        </section>}
      </>
  )
}

export default OneCategoryResult
