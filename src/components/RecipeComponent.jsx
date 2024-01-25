import React, { useState } from 'react'

const RecipeComponent = () => {

    const [recipeName, setRecipeName] = useState('')
    const [recipeDescription, setRecipeDescription] = useState('')
    const ingredient = {
        ingredientName : ''
    }
    const [recipeIngredients, setRecipeIngredients] = useState(Array.of(ingredient)) // might need to change the starting/default value to something else...?
    const [recipeMethods, setRecipeMethods] = useState([''])
    const [recipeServings, setRecipeServings] = useState(0)
    const [recipePrepTime, setRecipePrepTime] = useState('') // might need to make this recipePrepTimeTotal... and add subvalues... ???
    const [recipeActiveTime, setRecipeActiveTime] = useState('')
    const [recipeTotalTime, setRecipeTotalTime] = useState('')
    // var ingredientsIndex = 0;
    var [ingredientsIndex, setIngredientsIndex] = useState(0)  // might change back to const???.... 

    function handleRecipeName(eventObject) {
        setRecipeName(eventObject.target.value);
    }

    function handleRecipeDescription(eventObject) {
        setRecipeDescription(eventObject.target.value);
    }

    // function getObjectById(id) {
    //     for (var i = 0; i < array.length; i++) {
    //       if(array[i].id === id){
    //         return array[i];
    //       }
    //     }
    //   };

    function getIndextById(id, array) {
        for (var i = 0; i < array.length; i++) {
          if(array[i].ingredientName === id){
            return i;
          }
        }
      };

    function handleRecipeIngredients(eventObject) {
        console.log("in handleRecipeIngredients()")
        let oldRecipeIngredients = recipeIngredients.slice()
        let newIngredient = {
            ingredientName : eventObject.target.value
        }

        let indexFromFunction = getIndextById(eventObject.target.attributes.ind.value, oldRecipeIngredients)
        console.log("indexFromFunction = ")
        console.log(indexFromFunction)
        // console.log("eventObject.target.getAttribute('ind') = ")
        // console.log(eventObject.target.getAttribute('ind'))
        // console.log("eventObject.target.getAttribute('ind').value = ")
        // console.log(eventObject.target.getAttribute('ind').value)
        // console.log("eventObject.target.attributes.('ind').value = ")
        console.log(eventObject.target.attributes.ind.value)
        //eventObject.target.key
        //oldRecipeIngredients.indexOf
        let newIngredientIndex = {
            ingredientName : eventObject.target.attributes.ind.value
        }
        console.log("newIngredientIndex = ")
        console.log(newIngredientIndex)

        //let ingredientInd = oldRecipeIngredients.indexOf(newIngredientIndex)
        oldRecipeIngredients[indexFromFunction] = newIngredient
        //oldRecipeIngredients[ingredientsIndex] = newIngredient;// maybe find a way to point to the recipeIngredient that has that name...


        console.log(oldRecipeIngredients)
        setRecipeIngredients([...oldRecipeIngredients]);
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

    const addIngredient = (e) => {
        e.preventDefault();
        // when clicking on add another ingredient button, it should....
        // render another add ingredient input??
        // return (
        //     <div>Added Something</div>
        // );
        console.log("in addIngredient()")
        console.log("ingredientsIndex before reassign= " + ingredientsIndex)
        let newIndex = ingredientsIndex + 1;
        console.log("newIndex = " + newIndex)
        setIngredientsIndex(newIndex)
        console.log("ingredientsIndex after reassign = " + ingredientsIndex)
        let newIngredient = {
            ingredientName : ''
        }
        setRecipeIngredients([...recipeIngredients, newIngredient]);
        console.log("after adding ingredient... recipeIngredients: ")
        console.log(recipeIngredients)
        
    }

    
    function ingredientsDiv() {
        //e.preventDefault();
        // when clicking on add another ingredient button, it should....
        // render another add ingredient input??
        
        return (
            <>
            {/* {(recipeIngredients || []).map((recipeIngredients, index) => { */}
            {/* {(recipeIngredients).map((recipeIngredients) => { */}
            {(recipeIngredients).map((recipeIngredients) => {
                return(
                    
                    <div className='form-group mb-2' key={recipeIngredients.ingredientName}>
                <label className='form-label'>Recipe Ingredients:</label>
                <input
                    ind={recipeIngredients.ingredientName}
                    type='text'
                    placeholder='Enter an ingredient'
                    name='recipeIngredients'
                    //value={recipeIngredients[(recipeIngredients.length-1)].recipeName}
                    value={recipeIngredients.ingredientName}
                    className='form-control'
                    // onChange={() => handleRecipeIngredients()}
                    onChange={handleRecipeIngredients}
                    
                >
                </input>
                
                <button className='btn btn-success' onClick={addIngredient}>Add Another Ingredient</button>
            </div>
                )
                })}
            
            </>
        );
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
                        {/* <div className='form-group mb-2'>
                            <label className='form-label'>Recipe Ingredients:</label>
                            <input
                                type='text'
                                placeholder='Enter an ingredient'
                                name='recipeIngredients'
                                value={recipeIngredients}
                                className='form-control'
                                onChange={handleRecipeIngredients}
                            >
                            </input>
                            
                            <button className='btn btn-success' onClick={addIngredient()}>Add Another Ingredient</button>
                        </div> */}
                        {ingredientsDiv()}

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

function AddAnotherIngredient() {
    return (
        <input
                            type='text'
                            placeholder='Enter an ingredient'
                            name='recipeIngredients'
                            value={recipeIngredients}
                            className='form-control'
                            onChange={handleRecipeIngredients}
                        >
                        </input>
    );
}

export default RecipeComponent