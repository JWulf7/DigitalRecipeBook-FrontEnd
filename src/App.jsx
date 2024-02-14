import './App.css'
import FooterComponent from './components/FooterComponent'
import HeaderComponent from './components/HeaderComponent'
import ListRecipeComponent from './components/ListRecipeComponent'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import CreateRecipeComponent from './components/CreateRecipeComponent'

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
            {/* // http://localhost:3000/add-recipe */}
            <Route path='/add-recipe' element = {<CreateRecipeComponent/>}></Route>
          </Routes>
        <br/><br/>
        <FooterComponent/>
      </BrowserRouter>
    </>
  )
}

export default App
