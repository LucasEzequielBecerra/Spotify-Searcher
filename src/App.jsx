import CategoryDetail from './Components/Categories/CategoryDetail'
import Home from './components/Home/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/categories/:id' element={<CategoryDetail/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
