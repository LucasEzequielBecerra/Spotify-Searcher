<<<<<<< HEAD
import Searcher from '../Searcher/Searcher'

const Home = () => {
  return (
    <>
      <Searcher/>
    </>
=======
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
>>>>>>> 3431c8139f32c87d6442f04b52be923737dc10e2
  )
}

export default Home
