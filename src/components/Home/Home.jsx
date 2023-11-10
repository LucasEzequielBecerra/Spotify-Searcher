import { useContext } from 'react'
import CategoriesListContainer from '../Categories/CategoriesListContainer'
import HomeHeader from './HomeHeader'
import ResultsScreen from '../ResultsViews/ResultsScreen'

import { SearchContext } from '../../context/SearchContext'

const Home = () => {
  // const [loading, setLoading] = useState(true)
  const { searchResults } = useContext(SearchContext)

  return (
    <div className='overflow-x-hidden'>
      <HomeHeader/>
      {searchResults.length === 0
        ? (<CategoriesListContainer />)
        : (<ResultsScreen results={searchResults} />)
      }
    </div>
  )
}

export default Home
