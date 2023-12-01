import { useParams } from 'react-router-dom'
import requestCategories from '../../services/requestCategories'
import { useEffect } from 'react'

const CategoryDetail = () => {
  const { id } = useParams()

  useEffect(() => {
    requestCategories(id)
      .then(res => console.log(res))
      .catch(err => console.error(err))
  }, [id])

  return (
    <div>CategoryDetail</div>
  )
}

export default CategoryDetail
