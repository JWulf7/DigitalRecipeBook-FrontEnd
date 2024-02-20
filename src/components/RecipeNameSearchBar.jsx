import React, {useState} from 'react'
import './RecipeNameSearchBar.css'
import SearchIcon from '@material-ui/icons/Search'
import CloseIcon from '@material-ui/icons/Close'
import { Link, useNavigate } from 'react-router-dom'

function RecipeNameSearchBar({ placeholder, data }) {

    const [filteredRecipes, setFilteredRecipes] = useState([]);
    const [wordEntered, setWordEntered] = useState("");

    const handleFilter = (e) => {
        const searchWord = e.target.value;
        setWordEntered(searchWord);
        const newFilter = data.filter((value) => {
            return value.name.toLowerCase().includes(searchWord.toLowerCase());
        });

        if (searchWord === "") {
            setFilteredRecipes([]);
        } else {
            setFilteredRecipes(newFilter);
        }
        
    }

    // function gotoRecipe(name) {
    //     navigator('/recipe/:'+name)
    // }

    function gotoRecipe(e) {
        const name = e.target.value;
        navigator('/recipe/:'+name)
    }

    const clearInput = () => {
        setFilteredRecipes([]);
        setWordEntered("");
    }

  return (
    <div className='search'>
        <div className="searchInputs">
            <input type="text" placeholder={placeholder} value={wordEntered} onChange={handleFilter}/>
            <div className='searchIcon'>
                {filteredRecipes.length === 0 ? <SearchIcon/> : <CloseIcon id="clearBtn" onClick={clearInput}/>}
                
            </div>
        </div>

        {filteredRecipes.length != 0 && (
        <div className="dataResult">
            {filteredRecipes.slice(0, 15).map((recipe, index) => {
                return (
                    // <div>{recipe.name}</div>
                    <Link className="dataItem" to={'/recipe/'+recipe.name}><p>{recipe.name}</p></Link>
                    // <p>{recipe.name}</p>
                )}
            )}
        </div>
        )}
    </div>
  )
}

export default RecipeNameSearchBar