<<<<<<< HEAD
import Home from './components/Home/Home'
=======
import Home from './Components/Home/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { SearchProvider } from './context/SearchContext'
// import GenreDetails from './components/Details/GenreDetails'
>>>>>>> 3431c8139f32c87d6442f04b52be923737dc10e2

const App = () => {
  return (
    <>
<<<<<<< HEAD
      <Home />
=======
      <SearchProvider>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home/>}></Route>
            {/* <Route path='/genre/:id' element={<GenreDetails/>}></Route> */}
          </Routes>
        </BrowserRouter>
      </SearchProvider>
>>>>>>> 3431c8139f32c87d6442f04b52be923737dc10e2
    </>
  )
}

export default App
