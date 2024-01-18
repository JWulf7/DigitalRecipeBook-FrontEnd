import './App.css'
import FooterComponent from './components/FooterComponent'
import HeaderComponent from './components/HeaderComponent'
import ListRecipeComponent from './components/ListRecipeComponent'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {

  return (
    <>
      <BrowserRouter>
        <HeaderComponent/>
          <Routes>
            {/* // http://localhost:3000 */}
            <Route path='/' element = {<ListRecipeComponent/>}></Route>
            {/* // http://localhost:3000/recipes */}
            <Route path='/recipes' element = {<ListRecipeComponent/>}></Route>
          </Routes>
        
        <FooterComponent/>
      </BrowserRouter>
    </>
  )
}

export default App
