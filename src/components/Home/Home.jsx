import { useState } from 'react'
import CategoriesListContainer from '../Categories/CategoriesListContainer'
import HomeHeader from './HomeHeader'

const Home = () => {
  const [loading, setLoading] = useState(true)
  const [searchResults, setSearchResults] = useState([])

  console.log(searchResults)

  return (
    <>
      <HomeHeader setSearchResults={setSearchResults} setLoading={setLoading}/>
      <CategoriesListContainer loading={loading} setLoading={setLoading} />
    </>
  )
}

export default Home
