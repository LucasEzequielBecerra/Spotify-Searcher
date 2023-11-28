import CategoryDetail from './Components/Categories/CategoryDetail'
import Home from './Components/Home/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { SearchProvider } from './context/SearchContext'
import ArtistDetail from './components/Details/ArtistDetail'

const App = () => {
  return (
    <>
      <SearchProvider>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/categories/:id' element={<CategoryDetail/>}></Route>
            <Route path='/artist/:id' element={<ArtistDetail/>}></Route>
          </Routes>
        </BrowserRouter>
      </SearchProvider>
    </>
  )
}

export default App
