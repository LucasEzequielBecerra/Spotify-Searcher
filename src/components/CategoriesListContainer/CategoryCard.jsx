import { Link } from 'react-router-dom'

const CategoryCard = ({ title, color }) => {
  return (
    <>
        <Link to="" className="flex bg-slate-200 w-52 h-52 p-2 m-2 rounded shadow-2xl hover:scale-105 duration-200" style={{ backgroundColor: `${color}` }}>
            <div >
                <span className="max-w-full h-auto p-2 text-2xl">{title}</span>
            </div>
        </Link>
    </>

  )
}

export default CategoryCard
