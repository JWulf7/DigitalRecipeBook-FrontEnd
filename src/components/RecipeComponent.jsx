import React, { useState } from 'react'
import { createRecipe } from '../services/RecipeService'
import { useNavigate } from 'react-router-dom'

const RecipeComponent = () => {

    const [recipeName, setRecipeName] = useState('')
    const [recipeDescription, setRecipeDescription] = useState('')
    // ingredients
    const ingredient = {
        ingredientName : '',
        ingredientQty : ''

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

    const [recipePictures, setRecipePictures] = useState([])

    const MAX_COUNT = 5;

    const [fileLimit, setFileLimit] = useState(false)

    // alongside
    const alongside = {
        name : ''
    }
    const [recipeOftenMadeAlongside, setrecipeOftenMadeAlongside] = useState([alongside])

    const [recipeSeasonality, setRecipeSeasonality] = useState('ANY')

    const [recipeTags, setRecipeTags] = useState([''])

    const [recipePairsWith, setRecipePairsWith] = useState([pairing])

    const [recipeOrigin, setRecipeOrigin] = useState('')

    const [recipeEaseLevel, setRecipeEaseLevel] = useState('EASELEVEL')

    const [recipeMeal, setRecipeMeal] = useState([])

    const [recipeCategory, setRecipeCategory] = useState([''])

    const [recipeHowToStore, setRecipeHowToStore] = useState('')

    const [recipeHowToReheat, setRecipeHowToReheat] = useState('')

    const [recipeHowToFreeze, setRecipeHowToFreeze] = useState('')

    const [recipeHowToUseRepurposeLeftoversIdeas, setRecipeHowToUseRepurposeLeftoversIdeas] = useState([''])

    const [recipeDishesThatAlsoUseLeftoverIngredients, setRecipeDishesThatAlsoUseLeftoverIngredients] = useState([pairing])

    const [recipeMealAffinities, setRecipeMealAffinities] = useState([pairing])


    const navigator = useNavigate();




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
            ingredientName : eventObject.target.value,
            ingredientQty : ''
        }

        // getting the index of what was the value upon last rending from the copy of the array 
        let indexFromFunction = getIndextById(eventObject.target.attributes.ind.value, oldRecipeIngredients) // might change to attributes.name.value ???.. stay consistent

        //let ingredientInd = oldRecipeIngredients.indexOf(newIngredientIndex)
        oldRecipeIngredients[indexFromFunction] = newIngredient
        //oldRecipeIngredients[ingredientsIndex] = newIngredient;// maybe find a way to point to the recipeIngredient that has that name...

        setRecipeIngredients([...oldRecipeIngredients]);
    }
    function handleRecipeIngredientsQty(eventObject) {
        eventObject.preventDefault();
        // making a copy of current array of ingredient objects
        let oldRecipeIngredients = recipeIngredients.slice()
        // setting new ingredient to the value of input field of form
        let newIngredient = {
            ingredientName : eventObject.target.attributes.ingname.value,
            ingredientQty : eventObject.target.value
        }

        // getting the index of what was the value upon last rending from the copy of the array 
        let indexFromFunction = getIndextById(eventObject.target.attributes.ingname.value, oldRecipeIngredients) // might change to attributes.name.value ???.. stay consistent

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
            ingredientName : '', 
            ingredientQty : ''
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

    // Handle Pictures
    // function handleRecipePictures(eventObject) {
    //     eventObject.preventDefault();

    //     let oldRecipePictures = recipePictures.slice();
    //     let newPicture = eventObject.target.value;
    //     let indexFromFunction = getPictureIndexByName(eventObject.target.attributes.name.value, oldRecipePictures);

    //     oldRecipePictures[indexFromFunction] = newPicture;
    //     setRecipePictures([...oldRecipeNotes]);

    //     setRecipePictures(eventObject.target.value)
    // }

    function handleRecipePictures(eventObject) {
        const chosenFiles = Array.prototype.slice.call(eventObject.target.files)
        handleUploadedFiles(chosenFiles);
    }

    const handleUploadedFiles = files => {
        const uploaded = [...recipePictures];
        let limitExceeded = false;
        files.some((file) => {
            if (uploaded.findIndex((f) => f.name === file.name) === -1) {
                uploaded.push(file);
                if (uploaded.length === MAX_COUNT) setFileLimit(true);
                if (uploaded.length > MAX_COUNT) {
                    alert('You can only add a maximum of ${MAX_COUNT} files');
                    setFileLimit(false);
                    limitExceeded = true;
                    return true;
                }
            }
        })
        if (!limitExceeded) setRecipePictures(uploaded)
    }

    // handle OftenMadeAlongside
    function handleRecipeOftenMadeAlongside(eventObject) {
        eventObject.preventDefault();

        // making a copy of current array of equipment objects
        let oldRecipeOftenMadeAlongside = recipeOftenMadeAlongside.slice()
        // setting new pairings to the value of input field of form
        let newAlongside = {
            name : eventObject.target.value
        }
        // getting the index of what was the value upon last rending from the copy of the array 
        let indexFromFunction = getPairingIndexByName(eventObject.target.attributes.name.value, oldRecipeOftenMadeAlongside)
        oldRecipeOftenMadeAlongside[indexFromFunction] = newAlongside
        setrecipeOftenMadeAlongside([...oldRecipeOftenMadeAlongside]);
    }

    const addOftenMadeAlongside = (e) => {
        e.preventDefault();

        let newAlongside = {
            name : ''
        }
        setrecipeOftenMadeAlongside([...recipeOftenMadeAlongside, newAlongside]);
    }

    const removeOftenMadeAlongside = (alongsideName, e) => {
        e.preventDefault();

        let oldRecipeOftenMadeAlongside = recipeOftenMadeAlongside.slice();
        let indexRemove = getPairingIndexByName(alongsideName, recipeOftenMadeAlongside);
        oldRecipeOftenMadeAlongside.splice(indexRemove, 1);
        setrecipeOftenMadeAlongside([...oldRecipeOftenMadeAlongside]);
    }

    function handleRecipeSeasonality(eventObject) {
        setRecipeSeasonality(eventObject.target.value)
    }


    // handle Tags
    function handleRecipeTags(eventObject) {
        eventObject.preventDefault();

        let oldRecipeTags = recipeTags.slice();
        let newTag = eventObject.target.value;
        let indexFromFunction = getNoteIndexByName(eventObject.target.attributes.name.value, oldRecipeTags);

        oldRecipeTags[indexFromFunction] = newTag;
        setRecipeTags([...oldRecipeTags]);
    }

    const addTag = (e) => {
        e.preventDefault();

        let newTag = '';
        setRecipeTags([...recipeTags, newTag]);
        
    }

    const removeTag = (tagName, e) => {
        e.preventDefault();

        let oldRecipeTags = recipeTags.slice();
        let indexRemove = getTagIndexByName(tagName, oldRecipeTags);
        oldRecipeTags.splice(indexRemove, 1);
        setRecipeTags([...oldRecipeTags]);
    }
    function getTagIndexByName(name, array) {
        for (var i = 0; i < array.length; i++) {
            if(array[i] === name) {
                return i;
            }
        }
    }


    // handle Pairs With
    function handleRecipePairsWith(eventObject) {
        eventObject.preventDefault();

        // making a copy of current array of equipment objects
        let oldRecipePairsWith = recipePairsWith.slice()
        // setting new pairings to the value of input field of form
        let newPairsWith = {
            name : eventObject.target.value
        }
        // getting the index of what was the value upon last rending from the copy of the array 
        let indexFromFunction = getPairingIndexByName(eventObject.target.attributes.name.value, oldRecipePairsWith)
        oldRecipePairsWith[indexFromFunction] = newPairsWith
        setRecipePairsWith([...oldRecipePairsWith]);
    }

    const addPairsWith = (e) => {
        e.preventDefault();

        let newPair = {
            name : ''
        }
        setRecipePairsWith([...recipePairsWith, newPair]);
    }

    const removePairsWith = (pairName, e) => {
        e.preventDefault();

        let oldRecipePairsWith = recipePairsWith.slice();
        let indexRemove = getPairingIndexByName(pairName, recipePairsWith);
        oldRecipePairsWith.splice(indexRemove, 1);
        setRecipePairsWith([...oldRecipePairsWith]);
    }

    function handleRecipeOrigin(eventObject) {
        setRecipeOrigin(eventObject.target.value);
    }

    function handleRecipeEaseLevel(eventObject) {
        setRecipeEaseLevel(eventObject.target.value)
    }

    function handleRecipeMeal(eventObject) {
        let oldRecipeMeal = recipeMeal.slice();
        let v = eventObject.target.value

        
        if (oldRecipeMeal.includes(v)) {
            oldRecipeMeal.splice(oldRecipeMeal.indexOf(v), 1);
        }
        else {
            oldRecipeMeal.push(v)
        }

        setRecipeMeal([...oldRecipeMeal]);
    }

    // handle Category
    function handleRecipeCategories(eventObject) {
        eventObject.preventDefault();

        let oldRecipeCategories = recipeCategory.slice();
        let newCategory = eventObject.target.value;
        let indexFromFunction = getCategoryIndexByName(eventObject.target.attributes.name.value, oldRecipeCategories);

        oldRecipeCategories[indexFromFunction] = newCategory;
        setRecipeCategory([...oldRecipeCategories]);
    }

    const addCategory = (e) => {
        e.preventDefault();

        let newCategory = '';
        setRecipeCategory([...recipeCategory, newCategory]);
        
    }

    const removeCategory = (catName, e) => {
        e.preventDefault();

        let oldRecipeCategories = recipeCategory.slice();
        let indexRemove = getCategoryIndexByName(catName, oldRecipeCategories);
        oldRecipeCategories.splice(indexRemove, 1);
        setRecipeCategory([...oldRecipeCategories]);
    }
    function getCategoryIndexByName(name, array) {
        for (var i = 0; i < array.length; i++) {
            if(array[i] === name) {
                return i;
            }
        }
    }


    function handleRecipeHowToStore(eventObject) {
        eventObject.preventDefault();
        setRecipeHowToStore(eventObject.target.value);
    }

    function handleRecipeHowToReheat(eventObject) {
        eventObject.preventDefault();
        setRecipeHowToReheat(eventObject.target.value);
    }

    function handleRecipeHowToFreeze(eventObject) {
        eventObject.preventDefault();
        setRecipeHowToFreeze(eventObject.target.value);
    }


    // handle How To Use/Repurpose Leftovers Ideas
    function handleRecipeHowToUseRepurposeLeftoversIdeas(eventObject) {
        eventObject.preventDefault();

        let oldRecipeHowToUseRepurposeLeftoversIdeas = recipeHowToUseRepurposeLeftoversIdeas.slice();
        let newIdea = eventObject.target.value;
        let indexFromFunction = getNoteIndexByName(eventObject.target.attributes.name.value, oldRecipeHowToUseRepurposeLeftoversIdeas);

        oldRecipeHowToUseRepurposeLeftoversIdeas[indexFromFunction] = newIdea;
        setRecipeHowToUseRepurposeLeftoversIdeas([...oldRecipeHowToUseRepurposeLeftoversIdeas]);
    }

    const addIdea = (e) => {
        e.preventDefault();

        let newIdea = '';
        setRecipeHowToUseRepurposeLeftoversIdeas([...recipeHowToUseRepurposeLeftoversIdeas, newIdea]);
        
    }

    const removeIdea = (ideaName, e) => {
        e.preventDefault();

        let oldRecipeHowToUseRepurposeLeftoversIdeas = recipeHoldRecipeHowToUseRepurposeLeftoversIdeas.slice();
        let indexRemove = getNoteIndexByName(ideaName, oldRecipeHowToUseRepurposeLeftoversIdeas);
        oldRecipeHowToUseRepurposeLeftoversIdeas.splice(indexRemove, 1);
        setRecipeHoldRecipeHowToUseRepurposeLeftoversIdeas([...oldRecipeHowToUseRepurposeLeftoversIdeas]);
    }

    // handle Dishes that also use leftover ingredients
    function handleRecipeDishesThatAlsoUseLeftoverIngredients(eventObject) {
        eventObject.preventDefault();

        // making a copy of current array of objects
        let oldRecipeDishesThatAlsoUseLeftoverIngredients = recipeDishesThatAlsoUseLeftoverIngredients.slice()
        // setting new dishes to the value of input field of form
        let newDish = {
            name : eventObject.target.value
        }
        // getting the index of what was the value upon last rending from the copy of the array 
        let indexFromFunction = getPairingIndexByName(eventObject.target.attributes.name.value, oldRecipeDishesThatAlsoUseLeftoverIngredients)
        oldRecipeDishesThatAlsoUseLeftoverIngredients[indexFromFunction] = newDish
        setRecipeDishesThatAlsoUseLeftoverIngredients([...oldRecipeDishesThatAlsoUseLeftoverIngredients]);
    }

    const addDishLeftoverIngredients = (e) => {
        e.preventDefault();

        let newDish = {
            name : ''
        }
        setRecipeDishesThatAlsoUseLeftoverIngredients([...recipeDishesThatAlsoUseLeftoverIngredients, newDish]);
    }

    const removeDishLeftoverIngredients = (dishName, e) => {
        e.preventDefault();

        let oldRecipeDishesThatAlsoUseLeftoverIngredients = recipeDishesThatAlsoUseLeftoverIngredients.slice();
        let indexRemove = getPairingIndexByName(dishName, recipeDishesThatAlsoUseLeftoverIngredients);
        oldRecipeDishesThatAlsoUseLeftoverIngredients.splice(indexRemove, 1);
        setRecipeDishesThatAlsoUseLeftoverIngredients([...oldRecipeDishesThatAlsoUseLeftoverIngredients]);
    }


    // handle Meal Affinities
    function handleRecipeMealAffinities(eventObject) {
        eventObject.preventDefault();

        // making a copy of current array of objects
        let oldRecipeMealAffinities = recipeMealAffinities.slice()
        // setting new dishes to the value of input field of form
        let newAffinity = {
            name : eventObject.target.value
        }
        // getting the index of what was the value upon last rending from the copy of the array 
        let indexFromFunction = getPairingIndexByName(eventObject.target.attributes.name.value, oldRecipeMealAffinities)
        oldRecipeMealAffinities[indexFromFunction] = newAffinity
        setRecipeMealAffinities([...oldRecipeMealAffinities]);
    }

    const addMealAffinity = (e) => {
        e.preventDefault();

        let newAffinity = {
            name : ''
        }
        setRecipeMealAffinities([...recipeMealAffinities, newAffinity]);
    }

    const removeMealAffinity = (affinityName, e) => {
        e.preventDefault();

        let oldRecipeMealAffinities = recipeMealAffinities.slice();
        let indexRemove = getPairingIndexByName(affinityName, recipeMealAffinities);
        oldRecipeMealAffinities.splice(indexRemove, 1);
        setRecipeMealAffinities([...oldRecipeMealAffinities]);
    }






    function convertDTOSchema(recipeName, recipeDescription, recipeIngredients, recipeMethods, recipeServings, recipePrepTimeTotal, recipeActiveTimeTotal, 
        recipeTotalTimeTotal, recipeEquipment, recipePairings, recipeNotes, recipeRating, recipeAuthor, recipeFoodOrDrink, recipePictures,
        recipeOftenMadeAlongside, recipeSeasonality, recipeTags, recipePairsWith, recipeOrigin, recipeEaseLevel, recipeMeal, recipeCategory,
        recipeHowToStore, recipeHowToReheat, recipeHowToFreeze, recipeHowToUseRepurposeLeftoversIdeas, recipeDishesThatAlsoUseLeftoverIngredients,
        recipeMealAffinities) {
        let name = recipeName;
        let description = recipeDescription;
        let version = 0;
        let ingredients = recipeIngredients;
        let method = recipeMethods;
        let servings = recipeServings;
        let prepTime = recipePrepTimeTotal;
        let activeTime = recipeActiveTimeTotal;
        let totalTime = recipeTotalTimeTotal;
        let equipment = recipeEquipment;
        let pairings = recipePairings;
        let notes = recipeNotes;
        let rating = recipeRating;
        let author = recipeAuthor;
        let foodOrDrink = recipeFoodOrDrink;
        let pictures = recipePictures;
        let oftenMadeAlongside = recipeOftenMadeAlongside;
        let seasonality = recipeSeasonality;
        let tags = recipeTags;
        let pairsWith = recipePairsWith;
        let notesInPlaceCollapse = true;
        let origin = recipeOrigin;
        let easeLevel = recipeEaseLevel;
        let meal = recipeMeal;
        let category = recipeCategory;
        let howToStore = recipeHowToStore;
        let howToReheat = recipeHowToReheat;
        let howToFreeze = recipeHowToFreeze;
        let howToUseRepurposeLeftoversIdeas = recipeHowToUseRepurposeLeftoversIdeas;
        let dishesThatAlsoUseLeftoverIngredients = recipeDishesThatAlsoUseLeftoverIngredients;
        let mealAffinities = recipeMealAffinities;
        let lastCooked = '';
        let created = '';
        let allDatesCooked = [''];
        let allDatesUpdated = [''];

        const recipeDTO = {name, description, version, ingredients, method, servings, prepTime, activeTime, totalTime, equipment, pairings, notes, rating, author, foodOrDrink, pictures,
                            oftenMadeAlongside, seasonality, tags, pairsWith, notesInPlaceCollapse, origin, easeLevel, meal, category, howToStore, howToReheat, howToFreeze,
                            howToUseRepurposeLeftoversIdeas, dishesThatAlsoUseLeftoverIngredients, mealAffinities, lastCooked, created, allDatesCooked, allDatesUpdated}

        return recipeDTO;
    }




    function saveRecipe(e) {
        e.preventDefault();
        // handle durations
        let recipePrepTimeTotal = handleRecipePrepTimeTotal();
        let recipeActiveTimeTotal = handleRecipeActiveTimeTotal();
        let recipeTotalTimeTotal = handleRecipeTotalTime()

        // convert naming to DTO schema
        const recipeDTO = convertDTOSchema(recipeName, recipeDescription, recipeIngredients, recipeMethods, recipeServings, recipePrepTimeTotal, recipeActiveTimeTotal, 
            recipeTotalTimeTotal, recipeEquipment, recipePairings, recipeNotes, recipeRating, recipeAuthor, recipeFoodOrDrink, recipePictures,
            recipeOftenMadeAlongside, recipeSeasonality, recipeTags, recipePairsWith, recipeOrigin, recipeEaseLevel, recipeMeal, recipeCategory,
            recipeHowToStore, recipeHowToReheat, recipeHowToFreeze, recipeHowToUseRepurposeLeftoversIdeas, recipeDishesThatAlsoUseLeftoverIngredients,
            recipeMealAffinities)

        // const recipe = {recipeName, recipeDescription, recipeIngredients, recipeMethods, recipeServings, recipePrepTimeTotal, recipeActiveTimeTotal, 
        //                 recipeTotalTimeTotal, recipeEquipment, recipePairings, recipeNotes, recipeRating, recipeAuthor, recipeFoodOrDrink, recipePictures,
        //                 recipeOftenMadeAlongside, recipeSeasonality, recipeTags, recipePairsWith, recipeOrigin, recipeEaseLevel, recipeMeal, recipeCategory,
        //                 recipeHowToStore, recipeHowToReheat, recipeHowToFreeze, recipeHowToUseRepurposeLeftoversIdeas, recipeDishesThatAlsoUseLeftoverIngredients,
        //                 recipeMealAffinities}
        console.log(recipeDTO)

        createRecipe(recipeDTO).then((response) => {
            console.log(response.data);
            navigator('/recipes')
        })
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
            {/* can also experiment w/ this to move buttons to right */}
            <div className="d-grid gap-2 d-md-flex justify-content-md-end"><button className='btn btn-success btn-sm' onClick={addIngredient}>Add Ingredient</button></div>
            
            {(recipeIngredients).map((recipeIngredients, index) => {
                return(
                    
                    // <div className='form-group mb-2' key={recipeIngredients.ingredientName}>
                    <div className='form-group mb-2' key={'recipeIngredient'+ index}>
                        <input
                            key={'ingredientName:' + index}
                            ind={recipeIngredients.ingredientName}
                            type='text'
                            placeholder='Enter an ingredient'
                            // placeholder={'ingredientName:' + recipeIngredients.ingredientName}
                            name='recipeIngredients'
                            value={recipeIngredients.ingredientName}
                            className='form-control'
                            onChange={handleRecipeIngredients}
                            // autoFocus='autoFocus'
                            
                        >
                        </input>
                        {/* {ingredientQtyDiv(recipeIngredients)} */}
                        <input
                            key={'ingredientName.ingredientQty:' + index}
                            ingname={recipeIngredients.ingredientName}
                            type='text'
                            placeholder='Enter a quantity'
                            // placeholder={'ingredientName:' + recipeIngredients.ingredientName + '.ingredientQty:' + recipeIngredients.ingredientQty}
                            name='recipeIngredientsQty'
                            value={recipeIngredients.ingredientQty}
                            className='form-control'
                            onChange={handleRecipeIngredientsQty}
                            // autoFocus='autoFocus'
                            
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

    // function ingredientQtyDiv(object) {
    //     return (
    //         <>
    //             <input
    //                 key={'ingredientName:' + object.ingredientName + '.ingredientQty:' + object.ingredientQty}
    //                 ingname={object.ingredientName}
    //                 type='text'
    //                 placeholder='Enter a quantity'
    //                 // placeholder={'ingredientName:' + recipeIngredients.ingredientName + '.ingredientQty:' + recipeIngredients.ingredientQty}
    //                 name='recipeIngredientsQty'
    //                 value={object.ingredientQty}
    //                 className='form-control'
    //                 onChange={handleRecipeIngredientsQty}
    //                 autoFocus='autoFocus'
                    
    //             >
    //             </input>
    //         </>
    //     );
    // }


    function methodsDiv() {
        // this functional component renders the ability to add multiple methods and delete said methods
        return (
            <>
            <label className='form-label'>Recipe Methods:</label>
            <br/>
            <button className='btn btn-success btn-sm' onClick={addMethod}>Additional Method</button>
            {(recipeMethods).map((recipeMethods, index) => {
                return(
                    
                    // <div className='form-group mb-2' key={recipeMethods}>
                    <div className='form-group mb-2' key={'recipeMethods' + index}>
                        <input
                            // key={recipeMethods}
                            key={'method'+index}
                            type='text'
                            placeholder='Enter recipe method'
                            name={recipeMethods}
                            value={recipeMethods}
                            className='form-control'
                            onChange={handleRecipeMethods}
                            // autoFocus='autoFocus'
                            
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
            {(recipeEquipment).map((recipeEquipment, index) => {
                return(
                    
                    <div className='form-group mb-2' key={'recipeEquipment'+index}>
                        <input
                            key={'recipeEquipmentName'+index}
                            type='text'
                            placeholder='Enter a piece of equipment'
                            name={recipeEquipment.name}
                            value={recipeEquipment.name}
                            className='form-control'
                            onChange={handleRecipeEquipment}
                            // autoFocus='autoFocus'
                            
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
            {(recipePairings).map((recipePairings, index) => {
                return(
                    
                    <div className='form-group mb-2' key={'recipePairings'+index}>
                        <input
                            key={'recipePairings.name'+index}
                            type='text'
                            placeholder='Enter a pairing'
                            name={recipePairings.name}
                            value={recipePairings.name}
                            className='form-control'
                            onChange={handleRecipePairings}
                            // autoFocus='autoFocus'
                            
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
            {(recipeNotes).map((recipeNotes, index) => {
                return(
                    
                    <div className='form-group mb-2' key={'recipeNotes'+index}>
                        <input
                            key={'recipeNote'+index}
                            type='text'
                            placeholder='Enter recipe note'
                            name={recipeNotes}
                            value={recipeNotes}
                            className='form-control'
                            onChange={handleRecipeNotes}
                            // autoFocus='autoFocus'
                            
                        >
                        </input>
                        <button className='btn btn-danger btn-sm' onClick={(e) => removeNote(recipeNotes, e)}>Remove Note</button>
                    </div>
                )
                })}
            </>
        )
    }

    function picturesDiv() { 
                // this functional component renders the ability to add multiple ingredients and delete said ingredients
        return (
            <>
            <label className='form-label'>Recipe Pictures:</label>
            <br/>
            {/* <button className='btn btn-success btn-sm' onClick={addIngredient}>Add Ingredient</button> */}

            {/* can experiment to make buttons +'s and -'s on the left and right... from https://codepen.io/dartokloning/pen/ZEBjgWm */}
            {/* <button className='btn btn-success btn-sm' onClick={addIngredient}><span class="glyphicon glyphicon-plus"></span></button> */}
            {/* can also experiment w/ this to move buttons to right */}

            {/* <div className="d-grid gap-2 d-md-flex justify-content-md-end"><button className='btn btn-success btn-sm' onClick={addPicture}>Add Picture</button></div> */}
            

                {/* got some of this functionality from here: https://levelup.gitconnected.com/how-to-implement-multiple-file-uploads-in-react-4cdcaadd0f6e  */}
                <div className='form-group mb-2' key='recipePicturesDiv'>
                        <input
                            key='recipePicturesInput'
                            type='file'
                            name='recipePictures'
                            className='form-control'
                            onChange={handleRecipePictures}
                            // autoFocus='autoFocus'
                            id='file'
                            multiple
                            disabled={fileLimit}
                            accept='application/pdf, image/png'
                            placeholder='Choose Pictures'
                        >
                        </input>

                        {/* <label htmlFor='file'>
                            <a className={`btn btn-primary ${!fileLimit ? '' : 'disabled' } `}>Upload Files</a>
                        </label> */}

                        <div className='uploaded-files-list'>
                            {recipePictures.map((file, index) => (
                                <div key={index}>
                                    {file.name}
                                </div>
                            ))}
                        </div>
                        
                    </div>
            

                {/** 
            {(recipePictures).map((recipePictures, index) => {
                return(
                    
                    <div className='form-group mb-2' key={index}>
                        <input
                            key={index}
                            type='file'
                            // placeholder='Enter an ingredient'
                            name={index}
                            // value={recipeIngredients.ingredientName}
                            className='form-control'
                            onChange={handleRecipePictures}
                            autoFocus='autoFocus'
                            id='file'
                            
                        >
                        </input>
                        {/* <button className='btn btn-danger btn-sm' onClick={(e) => removeIngredient(recipeIngredients.ingredientName, e)}>Remove Ingredient</button> * /}

                        <label htmlFor='file' className="sr-only">Choose file</label>
                        {/* <button className='btn btn-danger btn-sm' onClick={(e) => removeIngredient(recipeIngredients.ingredientName, e)}><span class="glyphicon glyphicon-minus"></span></button> * /}
                        
                    </div>
                )
                })}
            */}
            </>
        );
    }

    function oftenMadeAlongsideDiv() {
        // this functional component renders the ability to add multiple recipe's this recipe is often made alongside and delete said recipe associations
        return (
            <>
            <label className='form-label'>Recipes Often Made Alongside:</label>
            <br/>
            <button className='btn btn-success btn-sm' onClick={addOftenMadeAlongside}>Additional Recipe made alongside</button>
            {(recipeOftenMadeAlongside).map((recipeOftenMadeAlongside, index) => {
                return(
                    
                    <div className='form-group mb-2' key={'oftenMadeAlongsideDiv'+index}>
                        <input
                            key={'oftenMadeAlongsideInput'+index}
                            type='text'
                            placeholder='Enter a recipe name'
                            name={recipeOftenMadeAlongside.name}
                            value={recipeOftenMadeAlongside.name}
                            className='form-control'
                            onChange={handleRecipeOftenMadeAlongside}
                            // autoFocus='autoFocus'
                            
                        >
                        </input>
                        <button className='btn btn-danger btn-sm' onClick={(e) => removeOftenMadeAlongside(recipeOftenMadeAlongside.name, e)}>Remove Recipe</button>
                    </div>
                )
                })}
            
            </>
        );
    }
    
    
    function tagsDiv() {
        // this functional component renders the ability to add multiple tags and delete said tags
        return (
            <>
            <label className='form-label'>Recipe Tags:</label>
            <br/>
            <button className='btn btn-success btn-sm' onClick={addTag}>Additional Tag</button>
            {(recipeTags).map((recipeTags, index) => {
                return(
                    
                    <div className='form-group mb-2' key={'recipeTagsDiv'+index}>
                        <input
                            key={'recipeTagsInput'+index}
                            type='text'
                            placeholder='Enter recipe tag'
                            name={recipeTags}
                            value={recipeTags}
                            className='form-control'
                            onChange={handleRecipeTags}
                            // autoFocus='autoFocus'
                            
                        >
                        </input>
                        <button className='btn btn-danger btn-sm' onClick={(e) => removeTag(recipeTags, e)}>Remove Tag</button>
                    </div>
                )
                })}
            </>
        )
    }

    function pairsWithDiv() {
        // this functional component renders the ability to add multiple pairings and delete said pairings
        return (
            <>
            <label className='form-label'>Recipe Pairs With:</label>
            <br/>
            <button className='btn btn-success btn-sm' onClick={addPairsWith}>Additional Pairing</button>
            {(recipePairsWith).map((recipePairsWith, index) => {
                return(
                    
                    <div className='form-group mb-2' key={'pairsWithDiv'+index}>
                        <input
                            key={'pairsWithInput'+index}
                            type='text'
                            placeholder='Enter a pairing'
                            name={recipePairsWith.name}
                            value={recipePairsWith.name}
                            className='form-control'
                            onChange={handleRecipePairsWith}
                            // autoFocus='autoFocus'
                            
                        >
                        </input>
                        <button className='btn btn-danger btn-sm' onClick={(e) => removePairsWith(recipePairsWith.name, e)}>Remove Pairing</button>
                    </div>
                )
                })}
            
            </>
        );
    }


    function mealDiv() {
        // this functional component renders the ability to add multiple meals and delete said tags
        return (
            <>
            <label className='form-label'>Meal:</label>
            <br/>
            <div className="btn-group btn-group-sm" role="group" aria-label="Basic checkbox toggle button group">
                <input 
                    type="checkbox" 
                    className="btn-check" 
                    id="btncheck1" 
                    autoComplete="off"
                    value="ANY"
                    onChange={handleRecipeMeal}
                />
                <label className="btn btn-outline-primary" htmlFor="btncheck1">Any</label>

                <input 
                    type="checkbox" 
                    className="btn-check" 
                    id="btncheck2" 
                    autoComplete="off"
                    value="BREAKFAST"
                    onChange={handleRecipeMeal}
                />
                <label className="btn btn-outline-primary" htmlFor="btncheck2">Breakfast</label>

                <input 
                    type="checkbox" 
                    className="btn-check" 
                    id="btncheck7" 
                    autoComplete="off"
                    value="BRUNCH"
                    onChange={handleRecipeMeal}
                />
                <label className="btn btn-outline-primary" htmlFor="btncheck7">Brunch</label>

                <input 
                    type="checkbox" 
                    className="btn-check" 
                    id="btncheck3" 
                    autoComplete="off"
                    value="LUNCH"
                    onChange={handleRecipeMeal}
                />
                <label className="btn btn-outline-primary" htmlFor="btncheck3">Lunch</label>

                <input 
                    type="checkbox" 
                    className="btn-check" 
                    id="btncheck6" 
                    autoComplete="off"
                    value="SNACK"
                    onChange={handleRecipeMeal}
                />
                <label className="btn btn-outline-primary" htmlFor="btncheck6">Snack</label>

                <input 
                    type="checkbox" 
                    className="btn-check" 
                    id="btncheck4" 
                    autoComplete="off"
                    value="DINNER"
                    onChange={handleRecipeMeal}
                />
                <label className="btn btn-outline-primary" htmlFor="btncheck4">Dinner</label>

                <input 
                    type="checkbox" 
                    className="btn-check" 
                    id="btncheck5" 
                    autoComplete="off"
                    value="DESSERT"
                    onChange={handleRecipeMeal}
                />
                <label className="btn btn-outline-primary" htmlFor="btncheck5">Dessert</label>

                

                
            </div>



                    {/* <div className='form-group mb-2' key={recipeMeal}>
                        <input
                            key={recipeMeal}
                            type='text'
                            placeholder='Enter recipe tag'
                            name={recipeMeal}
                            value={recipeMeal}
                            className='form-control'
                            onChange={handleRecipeTags}
                            autoFocus='autoFocus'
                            
                        >
                        </input>
                        <button className='btn btn-danger btn-sm' onClick={(e) => removeTag(recipeTags, e)}>Remove Tag</button>
                    </div> */}

            </>
        )
    }

    function categoryDiv() {
        // this functional component renders the ability to add multiple categories and delete said categories
        return (
            <>
            <label className='form-label'>Recipe Categories:</label>
            <br/>
            <button className='btn btn-success btn-sm' onClick={addCategory}>Additional Category</button>
            {(recipeCategory).map((recipeCategory, index) => {
                return(
                    
                    <div className='form-group mb-2' key={'recipeCategoryDiv'+index}>
                        <input
                            key={'recipeCategoryInput'+index}
                            type='text'
                            placeholder='Enter recipe category'
                            name={recipeCategory}
                            value={recipeCategory}
                            className='form-control'
                            onChange={handleRecipeCategories}
                            // autoFocus='autoFocus'
                            
                        >
                        </input>
                        <button className='btn btn-danger btn-sm' onClick={(e) => removeCategory(recipeCategory, e)}>Remove Category</button>
                    </div>
                )
                })}
            </>
        )
    }

    function useLeftoversIdeasDiv() {
        // this functional component renders the ability to add multiple notes and delete said notes
        return (
            <>
            <label className='form-label'>How to use/repurpose leftovers ideas:</label>
            <br/>
            <button className='btn btn-success btn-sm' onClick={addIdea}>Additional Idea</button>
            {(recipeHowToUseRepurposeLeftoversIdeas).map((recipeHowToUseRepurposeLeftoversIdeas, index) => {
                return(
                    
                    <div className='form-group mb-2' key={'howToUseRepurposeLeftoversIdeasDiv'+index}>
                        <input
                            key={'howToUseRepurposeLeftoversIdeasInput'+index}
                            type='text'
                            placeholder='Enter leftover idea'
                            name={recipeHowToUseRepurposeLeftoversIdeas}
                            value={recipeHowToUseRepurposeLeftoversIdeas}
                            className='form-control'
                            onChange={handleRecipeHowToUseRepurposeLeftoversIdeas}
                            // autoFocus='autoFocus'
                            
                        >
                        </input>
                        <button className='btn btn-danger btn-sm' onClick={(e) => removeIdea(recipeHowToUseRepurposeLeftoversIdeas, e)}>Remove Idea</button>
                    </div>
                )
                })}
            </>
        )
    }

    function leftoverIngredientsDiv() {
        // this functional component renders the ability to add multiple dishes and delete said dishes
        return (
            <>
            <label className='form-label'>Dishes that also use leftover ingredients:</label>
            <br/>
            <button className='btn btn-success btn-sm' onClick={addDishLeftoverIngredients}>Additional Dish</button>
            {(recipeDishesThatAlsoUseLeftoverIngredients).map((recipeDishesThatAlsoUseLeftoverIngredients, index) => {
                return(
                    
                    <div className='form-group mb-2' key={'dishesThatAlsoUseLeftoverIngredientsDiv'+index}>
                        <input
                            key={'dishesThatAlsoUseLeftoverIngredientsInput'+index}
                            type='text'
                            placeholder='Enter a recipe name'
                            name={recipeDishesThatAlsoUseLeftoverIngredients.name}
                            value={recipeDishesThatAlsoUseLeftoverIngredients.name}
                            className='form-control'
                            onChange={handleRecipeDishesThatAlsoUseLeftoverIngredients}
                            // autoFocus='autoFocus'
                            
                        >
                        </input>
                        <button className='btn btn-danger btn-sm' onClick={(e) => removeDishLeftoverIngredients(recipeDishesThatAlsoUseLeftoverIngredients.name, e)}>Remove Dish</button>
                    </div>
                )
                })}
            
            </>
        );
    }

    function mealAffinitiesDiv() {
        // this functional component renders the ability to add multiple affinities and delete said affinities
        return (
            <>
            <label className='form-label'>Meal Affinities:</label>
            <br/>
            <button className='btn btn-success btn-sm' onClick={addMealAffinity}>Additional Affinity</button>
            {(recipeMealAffinities).map((recipeMealAffinities, index) => {
                return(
                    
                    <div className='form-group mb-2' key={'mealAffinitiesDiv'+index}>
                        <input
                            key={'mealAffinitiesInput'+index}
                            type='text'
                            placeholder='Enter a recipe name'
                            name={recipeMealAffinities.name}
                            value={recipeMealAffinities.name}
                            className='form-control'
                            onChange={handleRecipeMealAffinities}
                            // autoFocus='autoFocus'
                            
                        >
                        </input>
                        <button className='btn btn-danger btn-sm' onClick={(e) => removeMealAffinity(recipeMealAffinities.name, e)}>Remove Affinity</button>
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
                <h2 className='text-center'>Add New Recipe</h2>
                <div className='card-body'>
                    <form encType="multipart/form-data">
                        <div className='form-group mb-2'>
                            <label className='form-label'>Recipe Name:</label>
                            <input
                                type='text'
                                placeholder='EnterRecipe Name'
                                name='recipeName'
                                value={recipeName}
                                className='form-control'
                                onChange={handleRecipeName}
                                // autoFocus='autoFocus'
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
                        {/* {ingredientsDiv(recipeIngredients, addIngredient, handleRecipeIngredients, removeIngredient, handleRecipeIngredientsQty)} */}
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
                        {picturesDiv()}

                        {/* often made alongside */}
                        {oftenMadeAlongsideDiv()}

                        {/* seasonality */}
                        <div className="form-floating">
                            <select className="form-select form-select-sm" aria-label="Small select example" id='recipeSeasonalityControlSelect' onChange={handleRecipeSeasonality}>
                                <option defaultValue="ANY">Any</option>
                                <option value="SPRING">Spring</option>
                                <option value="SUMMER">Summer</option>
                                <option value="AUTUMN">Autumn</option>
                                <option value="WINTER">Winter</option>
                            </select>
                            <label className='floatingSelect'>Seasonality</label>
                        </div>

                        {/* tags */}
                        {tagsDiv()}
                        {/* pairs with */}
                        {pairsWithDiv()}

                        {/* origin */}
                        <div className='form-group mb-2'>
                            <label className='form-label'>Recipe Origin:</label>
                            <input
                                type='text'
                                placeholder="Where is this recipe from?"
                                name='recipeOrigin'
                                value={recipeOrigin}
                                className='form-control'
                                onChange={handleRecipeOrigin}
                            >
                            </input>
                        </div>

                        {/* easeLevel */}
                        <div className="form-floating">
                            <select className="form-select form-select-sm" aria-label="Small select example" id='recipeEaseLevelControlSelect' onChange={handleRecipeEaseLevel}>
                                <option defaultValue="EASELEVEL">EaseLevel</option>
                                <option value="EASY">Easy</option>
                                <option value="EASYMEDIUM">Easy-Medium</option>
                                <option value="MEDIUM">Medium</option>
                                <option value="MEDIUMHARD">Medium-Hard</option>
                                <option value="HARD">Hard</option>
                            </select>
                            <label className='floatingSelect'>Ease Level</label>
                        </div>

                        {/* meal */}
                        {mealDiv()}
                        <br/>
                        {/* categories */}
                        {categoryDiv()}

                        {/* how to store */}
                        <div className='form-group mb-2'>
                            <label className='form-label'>How To Store:</label>
                            <textarea
                                // type='textarea'
                                placeholder="How do you store?"
                                name='recipeHowToStore'
                                value={recipeHowToStore}
                                className='form-control'
                                onChange={handleRecipeHowToStore}
                                rows='1'
                            />
                        </div>

                        {/* how to reheat */}
                        <div className='form-group mb-2'>
                            <label className='form-label'>How To Reheat:</label>
                            <textarea
                                placeholder="How do you reheat?"
                                name='recipeHowToReheat'
                                value={recipeHowToReheat}
                                className='form-control'
                                onChange={handleRecipeHowToReheat}
                                rows='1'
                            />
                        </div>

                        {/* how to freeze */}
                        <div className='form-group mb-2'>
                            <label className='form-label'>How To Freeze:</label>
                            <textarea
                                placeholder="How do you freeze?"
                                name='recipeHowToFreeze'
                                value={recipeHowToFreeze}
                                className='form-control'
                                onChange={handleRecipeHowToFreeze}
                                rows='1'
                            />
                        </div>

                        {/* how to use/repurpose leftovers ideas */}
                        {useLeftoversIdeasDiv()}
                        {/* dishes that also use leftover ingredients */}
                        {leftoverIngredientsDiv()}
                        {/* meal affinities */}
                        {mealAffinitiesDiv()}



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