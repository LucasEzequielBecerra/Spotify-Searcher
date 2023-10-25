import CategoryCard from './CategoryCard'

const CategoriesListContainer = () => {
  const categories = ['Podcast', 'Rock', 'Pop', 'Radio', 'Folk', 'Worship', 'Latina', 'Cumbia', 'Reggae', 'Bachata']
  const colors = [
    '#FF5733',
    '#33FFC7',
    '#FF33A1',
    '#3377FF',
    '#FFBF33',
    '#33FFA2',
    '#E233FF',
    '#33B0FF',
    '#FFC3E0'
  ]
  return (
    <div className='flex flex-col w-auto items-center m-auto mt-6 '>
      <div className='w-6/12 pl-1 text-2xl mb-4'>
        <h2 className=' font-bold'>Explorar todo</h2>
      </div>
      <div className='grid grid-cols-4 gap-4 w-6/12 justify-items-center'>
        {categories.map((category, index) => {
          const indexFinal = index >= 9 ? index - 9 : index
          return <CategoryCard key={index} title={category} color={colors[indexFinal]}/>
        })}
      </div>
    </div>
  )
}

export default CategoriesListContainer
