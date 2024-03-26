import './App.css'
import FooterComponent from './components/FooterComponent'
import HeaderComponent from './components/HeaderComponent'
import ListRecipeComponent from './components/ListRecipeComponent'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import CreateRecipeComponent from './components/CreateRecipeComponent'
import RecipeComponent from './components/RecipeComponent'
import UpdateRecipeComponent from './components/UpdateRecipeComponent'
import RecipeBookTableofContentsComponent from './components/RecipeBookTableofContentsComponent'
import CategoryComponent from './components/CategoryComponent'

function App() {

  let recipeName = ''

  return (
    <>
      <BrowserRouter>
        <HeaderComponent/>
          <Routes>
            {/* // http://localhost:3000
            <Route path='/' element = {<ListRecipeComponent/>}></Route> */}
            {/* // http://localhost:3000 */}
            <Route path='/' element = {<RecipeBookTableofContentsComponent/>}></Route>
            {/* // http://localhost:3000/recipes */}
            <Route path='/recipes' element = {<ListRecipeComponent/>}></Route>
            {/* // http://localhost:3000/add-recipe */}
            <Route path='/add-recipe' element = {<CreateRecipeComponent/>}></Route>
            {/* // http://localhost:3000/recipes/getRecipe/{name} */}
            <Route path='/recipe/:name' element = {<RecipeComponent/>}></Route>
            {/* // http://localhost:3000/recipes/getRecipe/{name} */}
            <Route path='/recipe/:name/update' element = {<UpdateRecipeComponent/>}></Route>
            {/* // http://localhost:3000/category/{name} */}
            <Route path='/category/:name' element = {<CategoryComponent/>}></Route>



            
          </Routes>
        <br/><br/>
        <FooterComponent/>
      </BrowserRouter>
    </>
  )
}

export default App
