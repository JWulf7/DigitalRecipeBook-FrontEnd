import React, { useState } from 'react'

const RecipeComponent = () => {

    const [recipeName, setRecipeName] = useState('')
    const [recipeDescription, setRecipeDescription] = useState('')
    const ingredient = {
        ingredientName : ''
    }
    const [recipeIngredients, setRecipeIngredients] = useState([ingredient])
    const [recipeMethods, setRecipeMethods] = useState([''])
    const [recipeServings, setRecipeServings] = useState(0)
    const [recipePrepTime, setRecipePrepTime] = useState('') // might need to make this recipePrepTimeTotal... and add subvalues... ???
    const [recipeActiveTime, setRecipeActiveTime] = useState('')
    const [recipeTotalTime, setRecipeTotalTime] = useState('')


    function handleRecipeName(eventObject) {
        setRecipeName(eventObject.target.value);
    }

    function handleRecipeDescription(eventObject) {
        setRecipeDescription(eventObject.target.value);
    }

    function handleRecipeIngredients(eventObject) {
        setRecipeIngredients(eventObject.target.value);
    }

    function handleRecipeMethods(eventObject) {
        setRecipeMethods(eventObject.target.value);
    }

    function handleRecipeServings(eventObject) {
        setRecipeServings(eventObject.target.value);
    }

    function handleRecipePrepTime(eventObject) {
        setRecipePrepTime(eventObject.target.value);
    }

    function handleRecipeActiveTime(eventObject) {
        setRecipeActiveTime(eventObject.target.value);
    }

    function handleRecipeTotalTime(eventObject) {
        setRecipeTotalTime(eventObject.target.value);
    }

    function saveRecipe(e) {
        e.preventDefault();
        const recipe = {recipeName, recipeDescription, recipeIngredients, recipeMethods, recipeServings, recipePrepTime, recipeActiveTime, recipeTotalTime}
        console.log(recipe)
    }

  return (
    <div className='container'>
        <br/> <br/>
        <div className='row'>
            <div className='card col-md-6 offset-md-3 offset-md-3'>
                <h2 className='text-center'>Add Recipe</h2>
                <div className='card-body'>
                    <form>
                        <div className='form-group mb-2'>
                            <label className='form-label'>Recipe Name:</label>
                            <input
                                type='text'
                                placeholder='EnterRecipe Name'
                                name='recipeName'
                                value={recipeName}
                                className='form-control'
                                onChange={handleRecipeName}
                            >
                            </input>
                        </div>

                        <div className='form-group mb-2'>
                            <label className='form-label'>Recipe Description:</label>
                            <input
                                type='text'
                                placeholder='Enter Recipe Description'
                                name='recipeDescription'
                                value={recipeDescription}
                                className='form-control'
                                onChange={handleRecipeDescription}
                            >
                            </input>
                        </div>

                        {/* // can input recipe ingredients div here */}
                        <div className='form-group mb-2'>
                            <label className='form-label'>Recipe Ingredients:</label>
                            <input
                                type='text'
                                placeholder='Enter an ingredient'
                                name='recipeIngredients'
                                value={recipeIngredients}
                                className='form-control'
                                onChange={handleRecipeIngredients}
                                multiple
                            >
                            </input>
                        </div>

                        <div className='form-group mb-2'>
                            <label className='form-label'>Recipe Methods:</label>
                            <input
                                type='text'
                                placeholder='Enter Recipe Methods'
                                name='recipeMethods'
                                value={recipeMethods}
                                className='form-control'
                                onChange={handleRecipeMethods}
                            >
                            </input>
                        </div>

                        <div className='form-group mb-2'>
                            <label className='form-label'>Recipe Servings:</label>
                            <input
                                type='number'
                                min='1'
                                max='100'
                                placeholder='Enter Recipe Servings'
                                name='recipeServings'
                                value={recipeServings}
                                className='form-control'
                                onChange={handleRecipeServings}
                            >
                            </input>
                        </div>

                        <div className='form-group mb-2'>
                            <label className='form-label'>Recipe Prep Time:</label>
                            <input
                                type='number'
                                min='0'
                                max='100'
                                placeholder='Days'
                                name='recipePrepTimeDays'
                                value={recipePrepTime}
                                className='form-control'
                                onChange={handleRecipePrepTime}
                            >
                            </input>
                            <input
                                type='number'
                                min='0'
                                max='23'
                                placeholder='Hours'
                                name='recipePrepTimeHours'
                                value={recipePrepTime}
                                className='form-control'
                                onChange={handleRecipePrepTime}
                            >
                            </input>
                            <input
                                type='number'
                                min='0'
                                max='59'
                                placeholder='Minutes'
                                name='recipePrepTimeMinutes'
                                value={recipePrepTime}
                                className='form-control'
                                onChange={handleRecipePrepTime}
                            >
                            </input>
                        </div>

                        <div className='form-group mb-2'>
                            <label className='form-label'>Recipe Active Time:</label>
                            <input
                                type='number'
                                min='0'
                                max='23'
                                placeholder='Hours'
                                name='recipeActiveTimeHours'
                                value={recipeActiveTime}
                                className='form-control'
                                onChange={handleRecipeActiveTime}
                            >
                            </input>
                            <input
                                type='number'
                                min='0'
                                max='59'
                                placeholder='Minutes'
                                name='recipeActiveTimeMinutes'
                                value={recipeActiveTime}
                                className='form-control'
                                onChange={handleRecipeActiveTime}
                            >
                            </input>
                        </div>

                        <div className='form-group mb-2'>
                            <label className='form-label'>Recipe Total Time:</label>
                            <input
                                type='number'
                                min='0'
                                max='100'
                                placeholder='Days'
                                name='recipeTotalTimeDays'
                                value={recipeTotalTime}
                                className='form-control'
                                onChange={handleRecipeTotalTime}
                            >
                            </input>
                            <input
                                type='number'
                                min='0'
                                max='23'
                                placeholder='Hours'
                                name='recipeTotalTimeHours'
                                value={recipeTotalTime}
                                className='form-control'
                                onChange={handleRecipeTotalTime}
                            >
                            </input>
                            <input
                                type='number'
                                min='0'
                                max='59'
                                placeholder='Minutes'
                                name='recipeTotalTimeMinutes'
                                value={recipeTotalTime}
                                className='form-control'
                                onChange={handleRecipeTotalTime}
                            >
                            </input>
                        </div>

                        <button className='btn btn-success' onClick={saveRecipe}>Submit</button>
                    </form>
                </div>
            </div>

        </div>
        <br/> <br/> <br/> <br/>
    </div>
  )
}

export default RecipeComponent