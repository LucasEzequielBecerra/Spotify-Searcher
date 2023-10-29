import SongCard from './SongCard'

const ResultsScreen = () => {
  return (
    <main className="flex flex-col items-center m-auto mt-6 gap-5">
        <section className="flex flex-col sm:flex-row w-full" >
            <div className='sm:mx-6 mx-auto mt-1 sm:w-1/3'>
                <h2 className="title">Top result</h2>
                <article className="bg-dark-bg-lite py-3 mb-4 rounded w-72 sm:w-full">
                    <picture className="relative w-28 ml-3 block">
                        <img className="rounded-md shadow" src="https://i.scdn.co/image/ab67616d00001e029f96ce0d84b2214a87f72f6e" alt="" />
                    </picture>
                    <div className="mt-5 mx-3 m-auto">
                        <p className="font-bold text-xl">NO SOY DE ACÁ</p>
                        <footer className="flex justify-between items-center">
                            <h6 className="text-dark-text-lite inline-block">Sullivan, Piña de Say Ocean</h6>
                            <p className="inline-block btn bg-dark-bg-lite p-1 ml-8 rounded-full text-base">Song</p>
                        </footer>
                    </div>
                </article>
            </div>
            <div className='mx-auto sm:w-2/3 sm:mx-6 gap-3'>
                <h2 className="title">Songs</h2>
                <SongCard/>
                <SongCard/>
                <SongCard/>
                <SongCard/>
            </div>
        </section>
        {/* <section>
            <h2 className="title">Albums</h2>
            <article>
                <div>
                    <img src="https://i.scdn.co/image/ab67616d00001e029f96ce0d84b2214a87f72f6e" alt="" />
                </div>
                <div>
                    <p>CUANDO TODO CAE</p>
                    <div>
                        <p>
                            2022
                            °
                        </p>
                        <p>Sullivan</p>
                    </div>
                </div>
            </article>
        </section> */}

    </main>

  )
}

export default ResultsScreen
