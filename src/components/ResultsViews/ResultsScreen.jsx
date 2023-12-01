import ResultsCards from './ResultsCards'
import { useScreenSize } from '../../Hooks/useScreenSize'
import Loader from '../Loader/Loader'
import { useContext } from 'react'
import { SearchContext } from '../../context/SearchContext'
import AllCategoriesResults from './AllCategoriesResults'
import OneCategoryResult from './OneCategoryResult'
import { CategorySelector } from '../Categories/CategorySelector'

const ResultsScreen = () => {
  const { loading, category } = useContext(SearchContext)

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
      : <>
        <CategorySelector/>
        <main className="flex flex-col items-center m-auto mt-6 gap-14">
          {category === 'all'
            ? <AllCategoriesResults mappingCards={mappingCards}/>
            : <OneCategoryResult mappingCards={mappingCards} quantity={quantity}/>
          }
        </main>
      </>

  )
}

export default ResultsScreen
