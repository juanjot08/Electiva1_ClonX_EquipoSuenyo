import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Main } from './page/main/main'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' ></Route>
        <Route path='/main' element={<Main />}>
        </Route>
      </Routes>
    </BrowserRouter >
  )
}

export default App
