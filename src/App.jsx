import Home from './components/Home/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ArtistDetail from './Components/Details/ArtistDetail'
import TrackDetail from './Components/Details/TrackDetail'
import AlbumDetail from './Components/Details/AlbumDetail'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/artists/:id' element={<ArtistDetail/>} ></Route>
          <Route path='/albums/:id' element={<AlbumDetail/>} ></Route>
          <Route path='/tracks/:id' element={<TrackDetail/>} ></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
