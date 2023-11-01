import { useState } from 'react'
import CategoriesListContainer from '../Categories/CategoriesListContainer'
import HomeHeader from './HomeHeader'
import ResultsScreen from '../ResultsViews/ResultsScreen'

const Home = () => {
  const [loading, setLoading] = useState(true)
  const [searchResults, setSearchResults] = useState(['a'])

  return (
    <div className='overflow-x-hidden'>
      <HomeHeader setSearchResults={setSearchResults} setLoading={setLoading} />
      {searchResults.length === 0
        ? (<CategoriesListContainer loading={loading} setLoading={setLoading} />)
        : (<ResultsScreen />)
      }
    </div>
  )
}

export default Home
