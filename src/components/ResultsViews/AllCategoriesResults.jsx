import { useContext } from 'react'
import { categoriesNames } from '../Categories/CategorySelector'
import ResultsHeader from './ResultsHeader'
import { SearchContext } from '../../context/SearchContext'

const AllCategoriesResults = ({ mappingCards }) => {
  const { searchResults } = useContext(SearchContext)
  let existResults
  return (
    <>
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
  )
}

export default AllCategoriesResults
