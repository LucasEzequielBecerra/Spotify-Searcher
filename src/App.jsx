import CategoryDetail from './Components/Categories/CategoryDetail'
import Home from './Components/Home/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { SearchProvider } from './context/SearchContext'

const App = () => {
  return (
    <>
      <SearchProvider>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/categories/:id' element={<CategoryDetail/>}></Route>
          </Routes>
        </BrowserRouter>
      </SearchProvider>
    </>
  )
}

export default App
