
const AlbumsCards = () => {
  return (
    <article className='w-48 flex flex-col p-3 bg-dark-bg-lite rounded-md gap-2 cursor-pointer hover:bg-dark-bg-hover h-64'>
                <picture >
                    <img className='rounded'src="https://i.scdn.co/image/ab67616d00001e029f96ce0d84b2214a87f72f6e" alt="" />
                </picture>
                <div>
                    <a href='' className=''>CUANDO TODO CAE</a>
                    <div className='flex gap-1 text-dark-text-lite text-sm'>
                        <p className='text-inherit'>
                            2022 •
                        </p>
                        <a href='' className='text-inherit hover:underline'>Sullivan</a>
                    </div>
                </div>
            </article>
  )
}

export default AlbumsCards
