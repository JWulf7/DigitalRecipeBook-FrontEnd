import './App.css'
import FooterComponent from './components/FooterComponent'
import HeaderComponent from './components/HeaderComponent'
import ListRecipeComponent from './components/ListRecipeComponent'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import CreateRecipeComponent from './components/CreateRecipeComponent'
import RecipeComponent from './components/RecipeComponent'

function App() {

  let recipeName = ''

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
            {/* // http://localhost:3000/recipes/getRecipe/{name} */}
            {/* <Route path={('/recipe/').concat(recipeName)} element = {<RecipeComponent/>}></Route> */}

            {/* <Route path={('/recipe/').concat('Banana Bread')} element = {() => RecipeComponent('Banana Bread')}></Route> */}

            <Route path='/recipe/:name' element = {<RecipeComponent/>}></Route>


            {/* <Route path={('/recipe/').concat('Banana Bread')}>
              {RecipeComponent('Banana Bread')}
            </Route> */}
            
          </Routes>
        <br/><br/>
        <FooterComponent/>
      </BrowserRouter>
    </>
  )
}

export default App
