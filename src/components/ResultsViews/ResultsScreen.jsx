
const ResultsScreen = () => {
  return (
    <section className="flex flex-col w-fit items-center m-auto mt-6 gap-5">
        <section className="flex flex-col" >
        <h2 className="w-full text-2xl ms-3 mb-4 font-bold">Resultado mas relevante</h2>
        <div className="bg-dark-bg w-96 h-60 rounded">
            <div className="relative w-28 mt-3 ml-3 ">
                <img className="rounded-md shadow" src="https://i.scdn.co/image/ab67616d00001e029f96ce0d84b2214a87f72f6e" alt="" />
            </div>
            <div className="mt-5 w-11/12 m-auto">
                <p className="font-bold">NO SOY DE ACÁ</p>
                <div>
                    <span className="text-dark-text-lite">Sullivan, Piña de Say Ocean</span>
                    <span className="inline-block bg-dark-bg-lite p-1 ml-8 rounded-full text-base">Cancion</span>
                </div>
            </div>
        </div>
        </section>
        <section className="flex flex-col w-full">
        <h2 className="w-full text-2xl ms-3 mb-4 font-bold">Canciones</h2>
        <div>
            <div className="flex justify-between items-center">
                <div className="flex items-center gap-5">
                    <div className="relative w-12 hover:brightness-50">
                        <img className="rounded-md  " src="https://i.scdn.co/image/ab67616d00001e029f96ce0d84b2214a87f72f6e" alt="" />
                        <button className="flex justify-center items-center w-full h-full absolute p-0 top-0 left-0 ">
                            <svg data-encore-id="icon" role="img" aria-hidden="true" className="fill-white w-7" viewBox="0 0 24 24"><path d="m7.05 3.606 13.49 7.788a.7.7 0 0 1 0 1.212L7.05 20.394A.7.7 0 0 1 6 19.788V4.212a.7.7 0 0 1 1.05-.606z"></path></svg>
                        </button>
                    </div>
                    <div className="flex flex-col">
                        <p className="text-lg font-bold">No soy de aca</p>
                        <span className="text-sm text-dark-text-lite">Sullivan, Piña de Say Ocean</span>
                    </div>
                </div>
                <div className="flex  gap-3">
                    <button className="opacity-1 w-4 text-white">
                        <svg className="fill-dark-text-lite hover:fill-white hover:scale-105 delay-75" data-encore-id="icon" role="img" aria-hidden="true" viewBox="0 0 16 16" ><path d="M1.69 2A4.582 4.582 0 0 1 8 2.023 4.583 4.583 0 0 1 11.88.817h.002a4.618 4.618 0 0 1 3.782 3.65v.003a4.543 4.543 0 0 1-1.011 3.84L9.35 14.629a1.765 1.765 0 0 1-2.093.464 1.762 1.762 0 0 1-.605-.463L1.348 8.309A4.582 4.582 0 0 1 1.689 2zm3.158.252A3.082 3.082 0 0 0 2.49 7.337l.005.005L7.8 13.664a.264.264 0 0 0 .311.069.262.262 0 0 0 .09-.069l5.312-6.33a3.043 3.043 0 0 0 .68-2.573 3.118 3.118 0 0 0-2.551-2.463 3.079 3.079 0 0 0-2.612.816l-.007.007a1.501 1.501 0 0 1-2.045 0l-.009-.008a3.082 3.082 0 0 0-2.121-.861z" ></path></svg>
                    </button>
                    <div className="text-base cursor-default">2:45</div>
                    <button className="opacity-1 w-4 hover:scale-105 delay-75">
                        <svg data-encore-id="icon" role="img" aria-hidden="true" viewBox="0 0 16 16" className="fill-white"><path d="M3 8a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm6.5 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zM16 8a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"></path></svg>
                    </button>
                </div>
            </div>
        </div>
        </section>
        <section>
        <h2 className="w-full text-2xl ms-3 mb-4 font-bold">Albumes</h2>
        <div>
            <div>
                <div><img src="https://i.scdn.co/image/ab67616d00001e029f96ce0d84b2214a87f72f6e" alt="" /></div>
                <div></div>
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
        </div>
        </section>

    </section>

  )
}

export default ResultsScreen
