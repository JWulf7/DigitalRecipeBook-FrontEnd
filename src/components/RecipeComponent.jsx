import React, { useState } from 'react'

const RecipeComponent = () => {

    const [recipeName, setRecipeName] = useState('')
    const [recipeDescription, setRecipeDescription] = useState('')
    // ingredients
    const ingredient = {
        ingredientName : ''
    }
    const [recipeIngredients, setRecipeIngredients] = useState(Array.of(ingredient)) // might need to change the starting/default value to something else...?
    var [ingredientsIndex, setIngredientsIndex] = useState(0)  // might change back to const???.... 
    // methods
    const [recipeMethods, setRecipeMethods] = useState([''])
    const [methodsIndex, setMethodsIndex] = useState(0)

    const [recipeServings, setRecipeServings] = useState(0)
    // prep time
    // const [recipePrepTimeTotal, setRecipePrepTimeTotal] = useState('') // might need to make this recipePrepTimeTotal... and add subvalues... ???
    const [recipePrepTimeDays, setRecipePrepTimeDays] = useState('')
    const [recipePrepTimeHours, setRecipePrepTimeHours] = useState('')
    const [recipePrepTimeMinutes, setRecipePrepTimeMinutes] = useState('')
    // active time
    const [recipeActiveTimeHours, setRecipeActiveTimeHours] = useState('')
    const [recipeActiveTimeMinutes, setRecipeActiveTimeMinutes] = useState('')

    // total time
    // const [recipeTotalTime, setRecipeTotalTime] = useState('')
    // const [recipeTotalTimeDays, setRecipeTotalTimeDays] = useState('')
    // const [recipeTotalTimeHours, setRecipeTotalTimeHours] = useState('')
    // const [recipeTotalTimeMinutes, setRecipeTotalTimeMinutes] = useState('')
    const [recipeTotalTimeDays, setRecipeTotalTimeDays] = useState(recipePrepTimeDays)
    const [recipeTotalTimeHours, setRecipeTotalTimeHours] = useState((recipePrepTimeHours + recipeActiveTimeHours))
    const [recipeTotalTimeMinutes, setRecipeTotalTimeMinutes] = useState((recipePrepTimeMinutes + recipeActiveTimeMinutes))

    // equipment
    const equipment = {
        name : ''
    }
    const [recipeEquipment, setRecipeEquipment] = useState([equipment])
    // const [recipeEquipment, setRecipeEquipment] = useState(Array.of(equipment))
    const [equipmentIndex, setEquipmentIndex] = useState(0) // I don't think I even ever use these indexes...??? (not really....)

    // pairings
    const pairing = {
        name : ''
    }
    const [recipePairings, setRecipePairings] = useState([pairing])

    const [recipeNotes, setRecipeNotes] = useState([''])
    
    const [recipeRating, setRecipeRating] = useState()

    const [recipeAuthor, setRecipeAuthor] = useState('')

    const [recipeFoodOrDrink, setRecipeFoodOrDrink] = useState('FOOD')






    // Handler Methods
    var focusedElement = document.activeElement.id;

    function handleRecipeName(eventObject) {
        setRecipeName(eventObject.target.value);
    }

    function handleRecipeDescription(eventObject) {
        setRecipeDescription(eventObject.target.value);
    }


    
    
    

    // ingredients
    function handleRecipeIngredients(eventObject) {
        eventObject.preventDefault();
        // making a copy of current array of ingredient objects
        let oldRecipeIngredients = recipeIngredients.slice()
        // setting new ingredient to the value of input field of form
        let newIngredient = {
            ingredientName : eventObject.target.value
        }

        // getting the index of what was the value upon last rending from the copy of the array 
        let indexFromFunction = getIndextById(eventObject.target.attributes.ind.value, oldRecipeIngredients) // might change to attributes.name.value ???.. stay consistent

        //let ingredientInd = oldRecipeIngredients.indexOf(newIngredientIndex)
        oldRecipeIngredients[indexFromFunction] = newIngredient
        //oldRecipeIngredients[ingredientsIndex] = newIngredient;// maybe find a way to point to the recipeIngredient that has that name...

        setRecipeIngredients([...oldRecipeIngredients]);
    }
    const addIngredient = (e) => {
        e.preventDefault();

        let newIndex = ingredientsIndex + 1;
        setIngredientsIndex(newIndex)
        let newIngredient = {
            ingredientName : ''
        }
        setRecipeIngredients([...recipeIngredients, newIngredient]);
    }

    const removeIngredient = (ingredientName, e) => {
        e.preventDefault();

        let oldRecipeIngredients = recipeIngredients.slice();
        let indexRemove = getIndextById(ingredientName, recipeIngredients);
        oldRecipeIngredients.splice(indexRemove, 1);
        setRecipeIngredients([...oldRecipeIngredients]);
    }

    function getIndextById(ingName, array) {
        for (var i = 0; i < array.length; i++) {
          if(array[i].ingredientName === ingName){
            return i;
          }
        }
    }

    // handle Methods
    function handleRecipeMethods(eventObject) {
        eventObject.preventDefault();

        let oldRecipeMethods = recipeMethods.slice();
        let newMethod = eventObject.target.value;
        let indexFromFunction = getMethodIndexByName(eventObject.target.attributes.name.value, oldRecipeMethods);

        oldRecipeMethods[indexFromFunction] = newMethod;
        setRecipeMethods([...oldRecipeMethods]);
    }

    const addMethod = (e) => {
        e.preventDefault();

        let newIndex = methodsIndex + 1;

        setMethodsIndex(newIndex)

        let newMethod = '';
        setRecipeMethods([...recipeMethods, newMethod]);
        
    }

    const removeMethod = (methodName, e) => {
        e.preventDefault();

        let oldRecipeMethods = recipeMethods.slice();
        let indexRemove = getMethodIndexByName(methodName, oldRecipeMethods);
        oldRecipeMethods.splice(indexRemove, 1);
        setRecipeMethods([...oldRecipeMethods]);
    }

    function getMethodIndexByName(name, array) {
        for (var i = 0; i < array.length; i++) {
            if(array[i] === name) {
                return i;
            }
        }
    }

    function handleRecipeServings(eventObject) {
        setRecipeServings(eventObject.target.value);
    }

    // handle prep time
    function handleRecipePrepTimeTotal() {
        let total = 'P';
        if (recipePrepTimeDays !== 0) {
            total = total.concat(recipePrepTimeDays, 'D')
        }
        total = total.concat('T')
        if (recipePrepTimeHours !== 0) {
            total = total.concat(recipePrepTimeHours, 'H')
        }
        if (recipePrepTimeMinutes !== 0) {
            total = total.concat(recipePrepTimeMinutes, 'M')
        }
        return total;
    }
    function handleRecipePrepTimeDays(eventObject) {
        setRecipePrepTimeDays(eventObject.target.value);
        // move total time...
        setRecipeTotalTimeDays(eventObject.target.value);
    }
    function handleRecipePrepTimeHours(eventObject) {
        setRecipePrepTimeHours(eventObject.target.value);
        // move total time...
        let totalTime = Number(eventObject.target.value) + Number(recipeActiveTimeHours)
        setRecipeTotalTimeHours(totalTime)
    }
    function handleRecipePrepTimeMinutes(eventObject) {
        setRecipePrepTimeMinutes(eventObject.target.value);
        // move total time...
        setRecipeTotalTimeMinutes(Number(eventObject.target.value) + Number(recipeActiveTimeMinutes));
    }

    // handle active time
    function handleRecipeActiveTimeTotal() {
        let total = 'PT';
        if (recipeActiveTimeHours !== 0) {
            total = total.concat(recipeActiveTimeHours, 'H')
        }
        if (recipeActiveTimeMinutes !== 0) {
            total = total.concat(recipeActiveTimeMinutes, 'M')
        }
        return total;
    }
    function handleRecipeActiveTimeHours(eventObject) {
        setRecipeActiveTimeHours(eventObject.target.value);
        // move total time...
        let totalTime = Number(eventObject.target.value) + Number(recipePrepTimeHours)
        setRecipeTotalTimeHours(totalTime)
    }
    function handleRecipeActiveTimeMinutes(eventObject) {
        setRecipeActiveTimeMinutes(eventObject.target.value);
        // move total time...
        setRecipeTotalTimeMinutes(Number(eventObject.target.value) + Number(recipePrepTimeMinutes));
    }

    // handle total time
    // TODO: at some point... need to make sure prep time min + active time min < 60 or increment hours instead of only mins... etc....
    function handleRecipeTotalTime() {
        let total = 'P';
        if (recipeTotalTimeDays !== 0) {
            total = total.concat(recipeTotalTimeDays, 'D')
        }
        total = total.concat('T')
        if (recipeTotalTimeHours !== 0) {
            total = total.concat(recipeTotalTimeHours, 'H')
        }
        if (recipeTotalTimeMinutes !== 0) {
            total = total.concat(recipeTotalTimeMinutes, 'M')
        }
        return total;
    }
    function handleRecipeTotalTimeDays(eventObject) {
        setRecipeTotalTimeDays(eventObject.target.value);
    }
    function handleRecipeTotalTimeHours(eventObject) {
        setRecipeTotalTimeHours(eventObject.target.value);
    }
    function handleRecipeTotalTimeMinutes(eventObject) {
        setRecipeTotalTimeMinutes(eventObject.target.value);
    }

    // handle Equipment
    function handleRecipeEquipment(eventObject) {
        eventObject.preventDefault();
        console.log("in handleRecipeEquipment :: ")
        // making a copy of current array of equipment objects
        let oldRecipeEquipment = recipeEquipment.slice()
        console.log("in handleRecipeEquipment :: oldRecipeEquipment = ")
        console.log(oldRecipeEquipment)
        // setting new equipment to the value of input field of form
        let newEquipment = {
            name : eventObject.target.value
        }
        console.log("in handleRecipeEquipment :: newEquipment = ")
        console.log(newEquipment)

        console.log("in handleRecipeEquipment :: eventObject.target.attributes.name.value = ")
        console.log(eventObject.target.attributes.name.value)
        // getting the index of what was the value upon last rending from the copy of the array 
        let indexFromFunction = getEquipIndextByName(eventObject.target.attributes.name.value, oldRecipeEquipment)
        console.log("in handleRecipeEquipment :: indexFromFunction = ")
        console.log(indexFromFunction)

        oldRecipeEquipment[indexFromFunction] = newEquipment

        setRecipeEquipment([...oldRecipeEquipment]);
    }

    const addEquipment = (e) => {
        e.preventDefault();

        let newIndex = equipmentIndex + 1;
        setEquipmentIndex(newIndex)

        let newEquip = {
            name : ''
        }
        setRecipeEquipment([...recipeEquipment, newEquip]);
    }

    const removeEquipment = (equipName, e) => {
        e.preventDefault();

        let oldRecipeEquipment = recipeEquipment.slice();
        let indexRemove = getEquipIndextByName(equipName, recipeEquipment);
        oldRecipeEquipment.splice(indexRemove, 1);
        setRecipeEquipment([...oldRecipeEquipment]);
    }

    function getEquipIndextByName(equipName, array) {
        for (var i = 0; i < array.length; i++) {
          if(array[i].name === equipName){
            return i;
          }
        }
    }

    // handle Pairings
    function handleRecipePairings(eventObject) {
        eventObject.preventDefault();

        // making a copy of current array of equipment objects
        let oldRecipePairings = recipePairings.slice()
        // setting new pairings to the value of input field of form
        let newPairing = {
            name : eventObject.target.value
        }
        // getting the index of what was the value upon last rending from the copy of the array 
        let indexFromFunction = getPairingIndexByName(eventObject.target.attributes.name.value, oldRecipePairings)
        oldRecipePairings[indexFromFunction] = newPairing
        setRecipePairings([...oldRecipePairings]);
    }

    const addPairing = (e) => {
        e.preventDefault();

        let newPair = {
            name : ''
        }
        setRecipePairings([...recipePairings, newPair]);
    }

    const removePairing = (pairName, e) => {
        e.preventDefault();

        let oldRecipePairings = recipePairings.slice();
        let indexRemove = getPairingIndexByName(pairName, recipePairings);
        oldRecipePairings.splice(indexRemove, 1);
        setRecipePairings([...oldRecipePairings]);
    }

    function getPairingIndexByName(pairName, array) {
        for (var i = 0; i < array.length; i++) {
          if(array[i].name === pairName){
            return i;
          }
        }
    }

    // handle Notes
    function handleRecipeNotes(eventObject) {
        eventObject.preventDefault();

        let oldRecipeNotes = recipeNotes.slice();
        let newNote = eventObject.target.value;
        let indexFromFunction = getNoteIndexByName(eventObject.target.attributes.name.value, oldRecipeNotes);

        oldRecipeNotes[indexFromFunction] = newNote;
        setRecipeNotes([...oldRecipeNotes]);
    }

    const addNote = (e) => {
        e.preventDefault();

        let newNote = '';
        setRecipeNotes([...recipeNotes, newNote]);
        
    }

    const removeNote = (noteName, e) => {
        e.preventDefault();

        let oldRecipeNotes = recipeNotes.slice();
        let indexRemove = getNoteIndexByName(noteName, oldRecipeNotes);
        oldRecipeNotes.splice(indexRemove, 1);
        setRecipeNotes([...oldRecipeNotes]);
    }
    function getNoteIndexByName(name, array) {
        for (var i = 0; i < array.length; i++) {
            if(array[i] === name) {
                return i;
            }
        }
    }


    function handleRecipeRating(eventObject) {
        setRecipeRating(eventObject.target.value)
    }

    function handleRecipeAuthor(eventObject) {
        setRecipeAuthor(eventObject.target.value);
    }

    function handleRecipeFoodOrDrink(eventObject) {
        setRecipeFoodOrDrink(eventObject.target.value)
    }





    function saveRecipe(e) {
        e.preventDefault();
        let recipePrepTimeTotal = handleRecipePrepTimeTotal();
        let recipeActiveTimeTotal = handleRecipeActiveTimeTotal();
        let recipeTotalTimeTotal = handleRecipeTotalTime()
        const recipe = {recipeName, recipeDescription, recipeIngredients, recipeMethods, recipeServings, recipePrepTimeTotal, recipeActiveTimeTotal, 
                        recipeTotalTimeTotal, recipeEquipment, recipePairings, recipeNotes, recipeRating, recipeAuthor, recipeFoodOrDrink}
        console.log(recipe)
    }



    
    // TODO : need to add quantity values at some point....

    // this currently works... can try to move outside the block...
    function ingredientsDiv() { 
                // this functional component renders the ability to add multiple ingredients and delete said ingredients
        return (
            <>
            <label className='form-label'>Recipe Ingredients:</label>
            <br/>
            {/* <button className='btn btn-success btn-sm' onClick={addIngredient}>Add Ingredient</button> */}

            {/* can experiment to make buttons +'s and -'s on the left and right... from https://codepen.io/dartokloning/pen/ZEBjgWm */}
            {/* <button className='btn btn-success btn-sm' onClick={addIngredient}><span class="glyphicon glyphicon-plus"></span></button> */}
            can also experiment w/ this to move buttons to right
            <div className="d-grid gap-2 d-md-flex justify-content-md-end"><button className='btn btn-success btn-sm' onClick={addIngredient}>Add Ingredient</button></div>
            
            {(recipeIngredients).map((recipeIngredients) => {
                return(
                    
                    <div className='form-group mb-2' key={recipeIngredients.ingredientName}>
                        <input
                            key={recipeIngredients.ingredientName}
                            ind={recipeIngredients.ingredientName}
                            type='text'
                            placeholder='Enter an ingredient'
                            name='recipeIngredients'
                            value={recipeIngredients.ingredientName}
                            className='form-control'
                            onChange={handleRecipeIngredients}
                            autoFocus='autoFocus'
                            
                        >
                        </input>
                        <button className='btn btn-danger btn-sm' onClick={(e) => removeIngredient(recipeIngredients.ingredientName, e)}>Remove Ingredient</button>
                        {/* <button className='btn btn-danger btn-sm' onClick={(e) => removeIngredient(recipeIngredients.ingredientName, e)}><span class="glyphicon glyphicon-minus"></span></button> */}
                        
                    </div>
                )
                })}
            
            </>
        );
    }

    function methodsDiv() {
        // this functional component renders the ability to add multiple methods and delete said methods
        return (
            <>
            <label className='form-label'>Recipe Methods:</label>
            <br/>
            <button className='btn btn-success btn-sm' onClick={addMethod}>Additional Method</button>
            {(recipeMethods).map((recipeMethods) => {
                return(
                    
                    <div className='form-group mb-2' key={recipeMethods}>
                        <input
                            key={recipeMethods}
                            type='text'
                            placeholder='Enter recipe method'
                            name={recipeMethods}
                            value={recipeMethods}
                            className='form-control'
                            onChange={handleRecipeMethods}
                            autoFocus='autoFocus'
                            
                        >
                        </input>
                        <button className='btn btn-danger btn-sm' onClick={(e) => removeMethod(recipeMethods, e)}>Remove Method</button>
                    </div>
                )
                })}
            </>
        )
    }


    function equipmentDiv() {
        // this functional component renders the ability to add multiple equipment and delete said equipment
        return (
            <>
            <label className='form-label'>Recipe Equipment:</label>
            <br/>
            <button className='btn btn-success btn-sm' onClick={addEquipment}>Additional Equipment</button>
            {(recipeEquipment).map((recipeEquipment) => {
                return(
                    
                    <div className='form-group mb-2' key={recipeEquipment.name}>
                        <input
                            key={recipeEquipment.name}
                            type='text'
                            placeholder='Enter a piece of equipment'
                            name={recipeEquipment.name}
                            value={recipeEquipment.name}
                            className='form-control'
                            onChange={handleRecipeEquipment}
                            autoFocus='autoFocus'
                            
                        >
                        </input>
                        <button className='btn btn-danger btn-sm' onClick={(e) => removeEquipment(recipeEquipment.name, e)}>Remove Equipment</button>
                    </div>
                )
                })}
            
            </>
        );
    }

    function pairingsDiv() {
        // this functional component renders the ability to add multiple pairings and delete said pairings
        return (
            <>
            <label className='form-label'>Recipe Pairings:</label>
            <br/>
            <button className='btn btn-success btn-sm' onClick={addPairing}>Additional Pairing</button>
            {(recipePairings).map((recipePairings) => {
                return(
                    
                    <div className='form-group mb-2' key={recipePairings.name}>
                        <input
                            key={recipePairings.name}
                            type='text'
                            placeholder='Enter a pairing'
                            name={recipePairings.name}
                            value={recipePairings.name}
                            className='form-control'
                            onChange={handleRecipePairings}
                            autoFocus='autoFocus'
                            
                        >
                        </input>
                        <button className='btn btn-danger btn-sm' onClick={(e) => removePairing(recipePairings.name, e)}>Remove Pairing</button>
                    </div>
                )
                })}
            
            </>
        );
    }

    function notesDiv() {
        // this functional component renders the ability to add multiple notes and delete said notes
        return (
            <>
            <label className='form-label'>Recipe Notes:</label>
            <br/>
            <button className='btn btn-success btn-sm' onClick={addNote}>Additional Note</button>
            {(recipeNotes).map((recipeNotes) => {
                return(
                    
                    <div className='form-group mb-2' key={recipeNotes}>
                        <input
                            key={recipeNotes}
                            type='text'
                            placeholder='Enter recipe note'
                            name={recipeNotes}
                            value={recipeNotes}
                            className='form-control'
                            onChange={handleRecipeNotes}
                            autoFocus='autoFocus'
                            
                        >
                        </input>
                        <button className='btn btn-danger btn-sm' onClick={(e) => removeNote(recipeNotes, e)}>Remove Note</button>
                    </div>
                )
                })}
            </>
        )
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
                        {/* {ingredientsDivToo(recipeIngredients, handleRecipeIngredients, addIngredient, removeIngredient, getIndextById, focusedElement)} */}

                        {methodsDiv()}
                        {/* <div className='form-group mb-2'>
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
                        </div> */}

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

                        {/* prep time */}
                        <div className='form-group mb-2'>
                            <label className='form-label'>Recipe Prep Time:</label>
                            <input
                                type='number'
                                min='0'
                                max='100'
                                placeholder='Days'
                                name='recipePrepTimeDays'
                                value={recipePrepTimeDays}
                                className='form-control'
                                onChange={handleRecipePrepTimeDays}
                            >
                            </input>
                            <input
                                type='number'
                                min='0'
                                max='23'
                                placeholder='Hours'
                                name='recipePrepTimeHours'
                                value={recipePrepTimeHours}
                                className='form-control'
                                onChange={handleRecipePrepTimeHours}
                            >
                            </input>
                            <input
                                type='number'
                                min='0'
                                max='59'
                                placeholder='Minutes'
                                name='recipePrepTimeMinutes'
                                value={recipePrepTimeMinutes}
                                className='form-control'
                                onChange={handleRecipePrepTimeMinutes}
                            >
                            </input>
                        </div>

                        {/* active time */}
                        <div className='form-group mb-2'>
                            <label className='form-label'>Recipe Active Time:</label>
                            <input
                                type='number'
                                min='0'
                                max='23'
                                placeholder='Hours'
                                name='recipeActiveTimeHours'
                                value={recipeActiveTimeHours}
                                className='form-control'
                                onChange={handleRecipeActiveTimeHours}
                            >
                            </input>
                            <input
                                type='number'
                                min='0'
                                max='59'
                                placeholder='Minutes'
                                name='recipeActiveTimeMinutes'
                                value={recipeActiveTimeMinutes}
                                className='form-control'
                                onChange={handleRecipeActiveTimeMinutes}
                            >
                            </input>
                        </div>

                        {/* total time */}
                        <div className='form-group mb-2'>
                            <label className='form-label'>Recipe Total Time:</label>
                            <input
                                type='number'
                                min='0'
                                max='100'
                                placeholder='Days'
                                name='recipeTotalTimeDays'
                                value={recipeTotalTimeDays}
                                className='form-control'
                                onChange={handleRecipeTotalTimeDays}
                            >
                            </input>
                            <input
                                type='number'
                                min='0'
                                max='23'
                                placeholder='Hours'
                                name='recipeTotalTimeHours'
                                value={recipeTotalTimeHours}
                                className='form-control'
                                onChange={handleRecipeTotalTimeHours}
                            >
                            </input>
                            <input
                                type='number'
                                min='0'
                                max='59'
                                placeholder='Minutes'
                                name='recipeTotalTimeMinutes'
                                value={recipeTotalTimeMinutes}
                                className='form-control'
                                onChange={handleRecipeTotalTimeMinutes}
                            >
                            </input>
                        </div>
                        {equipmentDiv()}
                        {pairingsDiv()}
                        {notesDiv()}

                        {/* <div className='form-group mb-2'>
                            <label className='form-label' for="recipeRatingControlSelect">Recipe Rating:</label>
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
                        </div> */}
                        {/* <div class="form-group">
                            <label for="exampleFormControlSelect1">Example select</label>
                            <select class="form-control" id="exampleFormControlSelect1">
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </select>
                        </div> */}
                        {/* rating */}
                        <div className="form-floating">
                            <select className="form-select form-select-sm" aria-label="Small select example" id='recipeRatingControlSelect' onChange={handleRecipeRating}>
                                {/* <option selected>*****</option> */}
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                            </select>
                            {/* <label className='floatingSelect' for="recipeRatingControlSelect">Recipe Rating in Stars</label> */}
                            <label className='floatingSelect'>Recipe Rating in Stars</label>
                        </div>

                        {/* author */}
                        <div className='form-group mb-2'>
                            <label className='form-label'>Recipe Author:</label>
                            <input
                                type='text'
                                placeholder="Enter an Author's Name"
                                name='recipeAuthor'
                                value={recipeAuthor}
                                className='form-control'
                                onChange={handleRecipeAuthor}
                            >
                            </input>
                        </div>

                        <br/>
                        {/* food or drink */}
                        <div className="form-floating">
                            <select className="form-select form-select-sm" aria-label="Small select example" id='recipeFoodorDrinkControlSelect' onChange={handleRecipeFoodOrDrink}>
                                {/* <option selected>*****</option> */}
                                <option value="FOOD">Food</option>
                                <option value="DRINK">Drink</option>
                            </select>
                            {/* <label className='floatingSelect' for="recipeRatingControlSelect">Recipe Rating in Stars</label> */}
                            <label className='floatingSelect'>Food or Drink</label>
                        </div>

                        {/* pictures */}
                        <div className="form-floating">
                            <select className="form-select form-select-sm" aria-label="Small select example" id='recipeFoodorDrinkControlSelect' onChange={handleRecipeFoodOrDrink}>
                                {/* <option selected>*****</option> */}
                                <option value="FOOD">Food</option>
                                <option value="DRINK">Drink</option>
                            </select>
                            {/* <label className='floatingSelect' for="recipeRatingControlSelect">Recipe Rating in Stars</label> */}
                            <label className='floatingSelect'>Food or Drink</label>
                        </div>


                        <br/>
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