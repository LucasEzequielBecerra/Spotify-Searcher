import { useContext } from 'react'
import CategoriesListContainer from '../Categories/CategoriesListContainer'
import HomeHeader from './HomeHeader'
import ResultsScreen from '../ResultsViews/ResultsScreen'
import { SearchContext } from '../../context/SearchContext'
import { CategorySelector } from '../Categories/CategorySelector'

const Home = () => {
  // const [loading, setLoading] = useState(true)
  const { searchResults } = useContext(SearchContext)

  return (
    <div className='overflow-x-hidden'>
      <HomeHeader/>
      <CategorySelector/>
      {Object.keys(searchResults).length === 0
        ? (<CategoriesListContainer />)
        : (<ResultsScreen />)
      }
    </div>
  )
}

export default Home
