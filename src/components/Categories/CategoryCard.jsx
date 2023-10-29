import { Link } from 'react-router-dom'

const CategoryCard = ({ category, color }) => {
  return (
    <>
      <Link to={`/categories/${category.id}`} className="flex w-52 h-52 m-2 rounded-xl shadow-2xl" style={{ backgroundColor: `${color}` }}>
        <h4 className="w-52 p-1 ms-1.5 text-2xl absolute">{category.name}</h4>
        <img src={category.icons[0].url} className='rounded-lg' alt={category.name} />
      </Link>
    </>

  )
}

export default CategoryCard
