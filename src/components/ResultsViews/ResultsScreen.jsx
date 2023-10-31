import AlbumsCards from './AlbumsCards'
import SongCard from './SongCard'

const ResultsScreen = () => {
  window.addEventListener('resize', screnSize)

  const quantity = screnSize()

  function screnSize () {
    if (window.screen.width <= 640) {
      return 2
    } else return 8
  }
  return (
    <main className="flex flex-col items-center m-auto mt-6 gap-5">
        <section className="flex flex-col sm:flex-row w-full" >
            <div className='sm:mx-6 mx-auto mt-1 w-5/6 sm:w-1/3'>
                <h2 className="title">Top result</h2>
                <article className="bg-dark-bg-lite py-3 mb-4 rounded w-full hover:bg-dark-bg-hover cursor-pointer">
                    <picture className="relative w-28 ml-3 block">
                        <img className="rounded-md shadow" src="https://i.scdn.co/image/ab67616d00001e029f96ce0d84b2214a87f72f6e" alt="" />
                    </picture>
                    <div className="mt-5 mx-3 m-auto">
                        <p className="font-bold text-xl">NO SOY DE ACÁ</p>
                        <footer className="flex justify-between items-center">
                        <div className=" text-dark-text-lite "> <a href="" className='hover:underline'>Sullivan,</a><a href="" className='hover:underline'> Piña de Say Ocean</a></div>
                            <p className="inline-block btn bg-dark-bg-lite p-1 ml-8 rounded-full text-base opacity-75">Song</p>
                        </footer>
                    </div>
                </article>
            </div>
            <div className='mx-auto w-5/6 sm:w-2/3 flex flex-col gap-3'>
                <h2 className="title">Songs</h2>
                <SongCard/>
                <SongCard/>
                <SongCard/>
                <SongCard/>
            </div>
        </section>
        <section className='flex flex-col w-5/6 sm:w-full'>
            <div className=' sm:mx-6'>
            <h2 className="title flex flex-row ">Albums</h2>
            <div className='flex flex-row  justify-start gap-5'>
            {Array.from({ length: quantity }).map((_, index) => (<AlbumsCards key={index}/>))}
            </div>
            </div>
        </section>

    </main>

  )
}

export default ResultsScreen
