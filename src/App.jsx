import Home from './components/Home/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ArtistDetail from './Components/ArtistDetail'
import TrackDetail from './Components/TrackDetail'
import AlbumDetail from './Components/AlbumDetail'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Home />
        <Routes>
          <Route path='/artists/:id' element={<ArtistDetail/>} ></Route>
          <Route path='/albums/:id' element={<AlbumDetail/>} ></Route>
          <Route path='/tracks/:id' element={<TrackDetail/>} ></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
