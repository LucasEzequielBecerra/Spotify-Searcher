import { useContext } from 'react'
import CategoriesListContainer from '../Categories/CategoriesListContainer'
import HomeHeader from './HomeHeader'
import ResultsScreen from '../ResultsViews/ResultsScreen'
import { SearchContext } from '../../context/SearchContext'

const Home = () => {
  const { searchResults } = useContext(SearchContext)

  return (
    <div className='overflow-x-hidden overflow-y-hidden'>
      <HomeHeader/>
      {Object.keys(searchResults).length === 0
        ? (<CategoriesListContainer />)
        : (<ResultsScreen />)
      }
    </div>
  )
}

export default Home
