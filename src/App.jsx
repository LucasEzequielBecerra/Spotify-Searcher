// import Searcher from './components/Searcher/Searcher'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home/Home'

const App = () => {
  return (
    <>
    <BrowserRouter>
    <Routes>

      <Route path='/' element={<Home />}/>
      {/* <Route path='/searcher' element={ <Searcher />}/> */}

    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
