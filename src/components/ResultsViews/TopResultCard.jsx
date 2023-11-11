const TopResultCard = ({ item, type }) => {
  return (
    <div className='mx-auto mt-1 w-5/6 sm:mx-6 sm:w-1/3'>
      <h2 className="title">Top result</h2>
      <article className="bg-dark-bg-lite py-3 mb-4 rounded w-full hover:bg-dark-bg-hover cursor-pointer">
        <picture className="relative w-32 ml-3 block">
          <img className={type === 'artist' ? 'rounded-full w-full h-32' : 'rounded-md shadow'} src={item.images[2]?.url} alt="" />
        </picture>
        <div className="mt-5 mx-3 m-auto">
          <p className="font-bold text-xl">{item.name}</p>
          <footer className="flex mt-2 justify-start w-full items-center gap-3">
            <p className="btn-dark p-1 rounded-full text-base">{type.charAt(0).toUpperCase() + type.slice(1)}</p>
          </footer>
        </div>
      </article>
    </div>
  )
}

export default TopResultCard
