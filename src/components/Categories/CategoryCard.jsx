const CategoryCard = ({ category, color }) => {
  return (
    <>
      <a href='https://open.spotify.com/search' target="_blank"
    rel="noreferrer" className="flex w-52 h-52 m-2 rounded-xl shadow-2xl" style={{ backgroundColor: `${color}` }}>
        <h4 className="w-52 p-1 ms-1.5 text-2xl absolute">{category.name}</h4>
        <img src={category.icons[0].url} className='rounded-lg' alt={category.name} />
      </a>
    </>

  )
}

export default CategoryCard
