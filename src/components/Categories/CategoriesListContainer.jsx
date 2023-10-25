import { useEffect, useState } from 'react'
import requestCategories from '../../services/requestCategories'
import CategoryCard from './CategoryCard'
import Loader from '../Loader/Loader'

const CategoriesListContainer = () => {
  const [categories, setCategories] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    requestCategories()
      .then(res => {
        console.log(res)
        setCategories(res.categories.items)
      })
      .catch(err => console.log(err)) // TODO: error msg
      .finally(() => setLoading(false))
  }, [])

  return (
    <div className='flex flex-col w-fit items-center m-auto mt-6'>
      <h2 className='w-full text-2xl ms-3 mb-4 font-bold'>Browse all</h2>
      <div className='grid grid-cols-1 gap-4 justify-items-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
      {loading
        ? <Loader/>
        : categories.map((category, index) => <CategoryCard key={index} category={category}/>)
    }
      </div>

    </div>
  )
}

export default CategoriesListContainer
