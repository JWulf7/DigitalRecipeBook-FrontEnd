import React, { useEffect, useState } from 'react'
import { createRecipe, getRecipe, updateRecipe } from '../services/RecipeService'
import { useNavigate, useParams } from 'react-router-dom'
import Collapsible from 'react-collapsible'

const UpdateRecipeComponent = () => {

    const { name } = useParams()

    
    // initial recipe before any edits
    const [recipe, setRecipe] = useState([])

    useEffect(() => {
        if(name){
        getRecipe(name).then((Response) => {
            setRecipe(Response.data);
            setWholeRecipe(Response.data);
            console.log(recipe)
            console.log("Response.data -> " + String(Response.data) + " : end of response data")
        }).catch(error => {
            console.error(error);
        })
    }
    }, [name])


    function parseIngredients(obj) {
        console.log("in parseIngredients(obj) :: obj = ->")
        console.log(obj)
        var newObj = {};
        Object.keys(obj).forEach(key => {
        newObj[key] = obj[key]
        })
        console.log("new obj = ->")
        console.log(newObj);
        console.log(Object.entries(newObj));
        return Object.entries(newObj);
      }

    function parseIngredientsTwo(obj) {
        console.log("in parseIngredientsTwo(obj) :: obj = ->")
        console.log(obj)
        var newObj = {};
        var newArray = [];
        Object.keys(obj).forEach(key => {
            let newIngredient = {
                ingredientName : '',
                ingredientQty : ''
        
            }
            console.log("key = ->")
            console.log(key)
            newIngredient.ingredientName = key;
            newIngredient.ingredientQty = obj[key];
            console.log("new ingredient = >")
            console.log(newIngredient)
            newArray.push(newIngredient)
            })
        console.log("newArray = ->")
        console.log(newArray)
        return newArray;

    }

    function setWholeRecipe(recipe) {
        // set all state variables w/ incoming recipe data
        console.log("starting setWholeRecipe() function")
        {(recipe && setRecipeName(recipe.name)); 
            setRecipeDescription(recipe.description);
            console.log("about to setRecipeIngredients :: recipe.ingredients = ->")
            console.log(recipe.ingredients)
            setRecipeIngredients([...parseIngredientsTwo(recipe.ingredients)]);
            // setRecipeIngredients([...recipe.ingredients]);
            console.log("parse recipeIngredientsOutput = ->")
            console.log(parseIngredientsTwo(recipe.ingredients))
            console.log("after  setRecipeIngredients :: recipeIngredients = ->")
            console.log(recipeIngredients)
            setRecipeMethods([...recipe.method]);
            setRecipeServings(recipe.servings);
            console.log("in setWholeRecipe(), about to hit splitSetDuration()")
            // splitSetDuration();
            setRecipePrepTimeDays(splitSetDuration(recipe.prepTime).days)
            console.log("after setting, recipePrepTimeDays = ->")
            console.log(recipePrepTimeDays)
            setRecipePrepTimeHours(splitSetDuration(recipe.prepTime).hours)
            console.log("after setting, recipePrepTimeHours = ->")
            console.log(recipePrepTimeHours)
            setRecipePrepTimeMinutes(splitSetDuration(recipe.prepTime).minutes)
            console.log("after setting, recipePrepTimeMinutes = ->")
            console.log(recipePrepTimeMinutes)
            setRecipeActiveTimeHours(splitSetDuration(recipe.activeTime).hours)
            setRecipeActiveTimeMinutes(splitSetDuration(recipe.activeTime).minutes)
            setRecipeTotalTimeDays(splitSetDuration(recipe.totalTime).days)
            setRecipeTotalTimeHours(splitSetDuration(recipe.totalTime).hours)
            setRecipeTotalTimeMinutes(splitSetDuration(recipe.totalTime).minutes)
            setRecipeEquipment([...recipe.equipment])
            setRecipePairings([...recipe.pairings])
            setRecipeNotes([...recipe.notes])
            setRecipeRating(recipe.rating)
            setRecipeAuthor(recipe.author)
            setRecipeFoodOrDrink(recipe.foodOrDrink)
            setRecipePictures([...recipe.pictures])
            setrecipeOftenMadeAlongside([...recipe.oftenMadeAlongside])
            setRecipeSeasonality(recipe.seasonality)
            setRecipeTags([...recipe.tags])
            setRecipePairsWith([...recipe.pairsWith])
            setRecipeOrigin(recipe.origin)
            setRecipeEaseLevel(recipe.easeLevel)
            setRecipeMeal([...recipe.meal])
            setRecipeCategory([...recipe.category])
            setRecipeHowToStore(recipe.howToStore)
            setRecipeHowToReheat(recipe.howToReheat)
            setRecipeHowToFreeze(recipe.howToFreeze)
            setRecipeHowToUseRepurposeLeftoversIdeas([...recipe.howToUseRepurposeLeftoversIdeas])
            setRecipeDishesThatAlsoUseLeftoverIngredients([...recipe.dishesThatAlsoUseLeftoverIngredients])
            setRecipeMealAffinities([...recipe.mealAffinities])
        }
            
        
        
    }

    const navigator = useNavigate();

    const [recipeName, setRecipeName] = useState(recipe.name)
    const [recipeDescription, setRecipeDescription] = useState(recipe.description)
    // ingredients
    const ingredient = {
        ingredientName : '',
        ingredientQty : ''

    }
    // const [recipeIngredients, setRecipeIngredients] = useState(Array.of(ingredient)) // might need to change the starting/default value to something else...?
    const [recipeIngredients, setRecipeIngredients] = useState(recipe.ingredients) // might need to change the starting/default value to something else...?
    var [ingredientsIndex, setIngredientsIndex] = useState(0)  // might change back to const???.... 
    // methods
    // const [recipeMethods, setRecipeMethods] = useState([''])
    const [recipeMethods, setRecipeMethods] = useState(recipe.method)
    const [methodsIndex, setMethodsIndex] = useState(0)

    const [recipeServings, setRecipeServings] = useState(recipe.servings)
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
    const [recipeEquipment, setRecipeEquipment] = useState(recipe.equipment)
    // const [recipeEquipment, setRecipeEquipment] = useState(Array.of(equipment))
    const [equipmentIndex, setEquipmentIndex] = useState(0) // I don't think I even ever use these indexes...??? (not really....)

    // pairings
    const pairing = {
        name : ''
    }
    const [recipePairings, setRecipePairings] = useState(recipe.pairings)

    const [recipeNotes, setRecipeNotes] = useState(recipe.notes)
    
    const [recipeRating, setRecipeRating] = useState(recipe.rating)

    const [recipeAuthor, setRecipeAuthor] = useState(recipe.author)

    const [recipeFoodOrDrink, setRecipeFoodOrDrink] = useState(recipe.foodOrDrink)

    const [recipePictures, setRecipePictures] = useState(recipe.pictures)

    const MAX_COUNT = 5;

    const [fileLimit, setFileLimit] = useState(false)

    // alongside
    const alongside = {
        name : ''
    }
    const [recipeOftenMadeAlongside, setrecipeOftenMadeAlongside] = useState(recipe.oftenMadeAlongside)

    const [recipeSeasonality, setRecipeSeasonality] = useState(recipe.seasonality)

    const [recipeTags, setRecipeTags] = useState(recipe.tags)

    const [recipePairsWith, setRecipePairsWith] = useState(recipe.pairsWith)

    const [recipeOrigin, setRecipeOrigin] = useState(recipe.origin)

    const [recipeEaseLevel, setRecipeEaseLevel] = useState(recipe.easeLevel)

    const [recipeMeal, setRecipeMeal] = useState(recipe.meal)

    // const [recipeCategory, setRecipeCategory] = useState(recipe.category)
    const [recipeCategory, setRecipeCategory] = useState([''])

    const [recipeHowToStore, setRecipeHowToStore] = useState(recipe.howToStore)

    const [recipeHowToReheat, setRecipeHowToReheat] = useState(recipe.howToReheat)

    const [recipeHowToFreeze, setRecipeHowToFreeze] = useState(recipe.howToFreeze)

    const [recipeHowToUseRepurposeLeftoversIdeas, setRecipeHowToUseRepurposeLeftoversIdeas] = useState(recipe.howToUseRepurposeLeftoversIdeas)

    const [recipeDishesThatAlsoUseLeftoverIngredients, setRecipeDishesThatAlsoUseLeftoverIngredients] = useState(recipe.dishesThatAlsoUseLeftoverIngredients)

    const [recipeMealAffinities, setRecipeMealAffinities] = useState(recipe.mealAffinities)


    const [errors, setErrors] = useState({
        recipeName: '', 
        // recipeDescription: '', 
        // recipeIngredients: Array.of(ingredient), 
        // recipeMethods: [''], 
        // recipeServings: '', 
        // recipePrepTimeTotal: '', 
        // recipeActiveTimeTotal: '', 
        // recipeTotalTimeTotal: '', 
        // recipeEquipment: [equipment], 
        // recipePairings: [pairing], 
        // recipeNotes: [''],
        // recipeRating: 0, 
        // recipeAuthor: '', 
        // recipeFoodOrDrink: '', 
        // recipePictures: [''],
        // recipeOftenMadeAlongside: [alongside], 
        // recipeSeasonality: '', 
        // recipeTags: [''], 
        // recipePairsWith: [pairing], 
        // recipeOrigin: '', 
        // recipeEaseLevel: '', 
        // recipeMeal: [''], 
        // recipeCategory: [''],
        // recipeHowToStore: '', 
        // recipeHowToReheat: '', 
        // recipeHowToFreeze: '', 
        // recipeHowToUseRepurposeLeftoversIdeas: [''], 
        // recipeDishesThatAlsoUseLeftoverIngredients: [pairing],
        // recipeMealAffinities: [pairing]
    })



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
        if (recipePrepTimeDays !== '') {
            total = total.concat(recipePrepTimeDays, 'D')
        }
        total = total.concat('T')
        if (recipePrepTimeHours !== '') {
            total = total.concat(recipePrepTimeHours, 'H')
        }
        if (recipePrepTimeMinutes !== '') {
            total = total.concat(recipePrepTimeMinutes, 'M')
        } else {
            total = total.concat('0M')
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
        if (recipeActiveTimeHours !== '') {
            total = total.concat(recipeActiveTimeHours, 'H')
        }
        if (recipeActiveTimeMinutes !== '') {
            total = total.concat(recipeActiveTimeMinutes, 'M')
        } else {
            total = total.concat('0M')
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
        if (recipeTotalTimeDays !== '') {
            total = total.concat(recipeTotalTimeDays, 'D')
        }
        total = total.concat('T')
        if (recipeTotalTimeHours !== '') {
            total = total.concat(recipeTotalTimeHours, 'H')
        }
        if (recipeTotalTimeMinutes !== '') {
            total = total.concat(recipeTotalTimeMinutes, 'M')
        } else {
            total = total.concat('0M')
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




    function convertIngredientsForSerialization(ingredients) {
        console.log("inside convertIngredientsForSerialization")
        let sendIngredients = {};
        console.log("ingredients parameter = ->")
        console.log(ingredients)
        ingredients.map((ingredients) => {
            console.log("iterating through ingredients...")
            console.log("current 'ingredients' = ->")
            console.log(ingredients)
            console.log("ingredients.ingredientName = ->")
            console.log(ingredients.ingredientName)
            console.log("ingredients.ingredientQty = ->")
            console.log(ingredients.ingredientQty)
            console.log("setting/adding previous k/v pair to sendIngredients")
        sendIngredients[ingredients.ingredientName] = ingredients.ingredientQty;
            console.log("sendIngredients is now =>")
            console.log(sendIngredients)
         } )
         console.log("sendIngredients = ->")
         console.log(sendIngredients)
         return sendIngredients;
    }


    function convertDTOSchema(recipeId,recipeName, recipeDescription, recipeIngredients, recipeMethods, recipeServings, recipePrepTimeTotal, recipeActiveTimeTotal, 
        recipeTotalTimeTotal, recipeEquipment, recipePairings, recipeNotes, recipeRating, recipeAuthor, recipeFoodOrDrink, recipePictures,
        recipeOftenMadeAlongside, recipeSeasonality, recipeTags, recipePairsWith, recipeOrigin, recipeEaseLevel, recipeMeal, recipeCategory,
        recipeHowToStore, recipeHowToReheat, recipeHowToFreeze, recipeHowToUseRepurposeLeftoversIdeas, recipeDishesThatAlsoUseLeftoverIngredients,
        recipeMealAffinities) {
        // let id = recipeId;
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

        // const recipeDTO = {id, name, description, version, ingredients, method, servings, prepTime, activeTime, totalTime, equipment, pairings, notes, rating, author, foodOrDrink, pictures,
        const recipeDTO = {name, description, version, ingredients, method, servings, prepTime, activeTime, totalTime, equipment, pairings, notes, rating, author, foodOrDrink, pictures,
                            oftenMadeAlongside, seasonality, tags, pairsWith, notesInPlaceCollapse, origin, easeLevel, meal, category, howToStore, howToReheat, howToFreeze,
                            howToUseRepurposeLeftoversIdeas, dishesThatAlsoUseLeftoverIngredients, mealAffinities, lastCooked, created, allDatesCooked, allDatesUpdated}

        return recipeDTO;
    }


    function submitRecipeUpdate(e) {
        console.log('Inside submitRecipeUpdate() function')
        console.log('recipe.id = ->')
        console.log(recipe.id)
        e.preventDefault();
        // validate form
        if(validateForm()){

                // handle durations
            let recipePrepTimeTotal = handleRecipePrepTimeTotal();
            let recipeActiveTimeTotal = handleRecipeActiveTimeTotal();
            let recipeTotalTimeTotal = handleRecipeTotalTime()

            // handle ingredient serialization
            console.log(" before convertIngredientsForSerialization :: recipeIngredients = ->")
            console.log(recipeIngredients)
            let ingredientObject = convertIngredientsForSerialization(recipeIngredients);
            console.log(" after convertIngredientsForSerialization :: ingredientObject = ->")
            console.log(ingredientObject)

            // convert naming to DTO schema
            const recipeDTO = convertDTOSchema(recipe.id, recipeName, recipeDescription, ingredientObject, recipeMethods, recipeServings, recipePrepTimeTotal, recipeActiveTimeTotal, 
                recipeTotalTimeTotal, recipeEquipment, recipePairings, recipeNotes, recipeRating, recipeAuthor, recipeFoodOrDrink, recipePictures,
                recipeOftenMadeAlongside, recipeSeasonality, recipeTags, recipePairsWith, recipeOrigin, recipeEaseLevel, recipeMeal, recipeCategory,
                recipeHowToStore, recipeHowToReheat, recipeHowToFreeze, recipeHowToUseRepurposeLeftoversIdeas, recipeDishesThatAlsoUseLeftoverIngredients,
                recipeMealAffinities)

            console.log("before submit update... recipeDTO = ->")
            console.log(recipeDTO)
            console.log("before submit update... end recipeDTO")

            updateRecipe(recipeDTO).then((response) => {
                console.log(response.data);
                goBack(recipe.name);
            })
        }
    }


    function saveRecipe(e) {
        e.preventDefault();
        // validate form
        if(validateForm()){

                // handle durations
            let recipePrepTimeTotal = handleRecipePrepTimeTotal();
            let recipeActiveTimeTotal = handleRecipeActiveTimeTotal();
            let recipeTotalTimeTotal = handleRecipeTotalTime()

            // handle ingredient serialization
            let ingredientObject = convertIngredientsForSerialization(recipeIngredients);


            // convert naming to DTO schema
            const recipeDTO = convertDTOSchema(recipeName, recipeDescription, ingredientObject, recipeMethods, recipeServings, recipePrepTimeTotal, recipeActiveTimeTotal, 
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
                goBack(recipe.name);
                // navigator('/recipes')
            })
        }
    }

    // Form Validation Function
    function validateForm() {
        let valid = true;

        const errorsCopy = {... errors}

        if (recipeName.trim()) {
            errorsCopy.recipeName = '';
            console.log('hit the validateForm true condition... validation should be successful')
        } else {
            errorsCopy.recipeName = 'A Recipe Name is required';
            valid = false;
            console.log('hit the validateForm false condition... validation should be failed')
        }
        if (recipeIngredients == Array.of(ingredient)) {
            setRecipeIngredients([null]);
        }
        if (recipeMethods == ['']) {
            setRecipeMethods([null]);
        }
        if (recipePairsWith == Array.of(pairing)) {
            setRecipePairsWith([null]);
        }
        if (recipePairings == Array.of(pairing)) {
            setRecipePairings([null]);
        }
        if (recipeDishesThatAlsoUseLeftoverIngredients == Array.of(pairing)) {
            setRecipeDishesThatAlsoUseLeftoverIngredients([null]);
        }
        if (recipeOftenMadeAlongside == Array.of(pairing)) {
            setrecipeOftenMadeAlongside([null]);
        }
        if (recipeMealAffinities == Array.of(pairing)) {
            setRecipeMealAffinities([null]);
        }
        if (recipeEquipment == Array.of(equipment)) {
            setRecipeEquipment([null]);
        }

        setErrors(errorsCopy)
        return valid;
    }



    // useEffect(() => {
    //     getRecipe(name).then((Response) => {
    //         setRecipe(Response.data);
    //         console.log(recipe)
    //         console.log("Response.data -> " + String(Response.data) + " : end of response data")
    //     }).catch(error => {
    //         console.error(error);
    //     })

    // }, [])


    function submitRecipe(name) {
        // need to use recipe service to make call
        const navTo = '/recipe/'+ name + '/update';
        navigator(navTo);
        // navigator('/recipe/:name/update')
    }

    function goBack(name) {
        const navTo = '/recipe/'+ name;
        navigator(navTo);
    }



    // Dynamic Inputs

    function categoryDiv() {
        // this functional component renders the ability to add multiple categories and delete said categories
        return (
            <>
                <button className='btn btn-success btn-sm' onClick={addCategory}>Additional Category</button>
                <div className="row">
                    {(recipeCategory)?.map((category, index) => {
                        
                        return(
                            <>

                                <input
                                    key={'recipeCategoryInput'+index}
                                    type='text'
                                    placeholder={category}
                                    name={category}
                                    value={category}
                                    className='form-control updateInput'
                                    onChange={handleRecipeCategories}                                    
                                >
                                </input>
                                <button className='btn btn-danger btn-sm updateButton' onClick={(e) => removeCategory(category, e)}>Remove Category</button>
                            
                            </>
                        )
                        })}
                </div>
            </>
        )
    }




    function foodOrDrinkDiv() {
        {/* food or drink */}
        return(
        // <div className="form-floating">
            <>
                <select className="form-select form-select-sm h-50" aria-label="Small select example" id='recipeFoodorDrinkControlSelect' onChange={handleRecipeFoodOrDrink} placeholder={recipeFoodOrDrink}>
                    <option value="FOOD">Food</option>
                    <option value="DRINK">Drink</option>
                </select>
                <label className='floatingSelect updateInput'>Food or Drink</label>
            </>
        )
    }



    function mealDiv() {
        // this functional component renders the ability to add multiple meals and delete said tags
        return (
            <>
            <div className="btn-group btn-group-sm" role="group" aria-label="Basic checkbox toggle button group">
                <input 
                    type="checkbox" 
                    className="btn-check" 
                    id="btncheck1" 
                    autoComplete="off"
                    value="ANY"
                    onChange={handleRecipeMeal}
                    checked={recipeMeal?.includes("ANY") ? true : false}
                />
                <label className="btn btn-outline-primary" htmlFor="btncheck1">Any</label>

                <input 
                    type="checkbox" 
                    className="btn-check" 
                    id="btncheck2" 
                    autoComplete="off"
                    value="BREAKFAST"
                    onChange={handleRecipeMeal}
                    checked={recipeMeal?.includes("BREAKFAST") ? true : false}
                />
                <label className="btn btn-outline-primary" htmlFor="btncheck2">Breakfast</label>

                <input 
                    type="checkbox" 
                    className="btn-check" 
                    id="btncheck7" 
                    autoComplete="off"
                    value="BRUNCH"
                    onChange={handleRecipeMeal}
                    checked={recipeMeal?.includes("BRUNCH") ? true : false}
                />
                <label className="btn btn-outline-primary" htmlFor="btncheck7">Brunch</label>

                <input 
                    type="checkbox" 
                    className="btn-check" 
                    id="btncheck3" 
                    autoComplete="off"
                    value="LUNCH"
                    onChange={handleRecipeMeal}
                    checked={recipeMeal?.includes("LUNCH") ? true : false}
                />
                <label className="btn btn-outline-primary" htmlFor="btncheck3">Lunch</label>

                <input 
                    type="checkbox" 
                    className="btn-check" 
                    id="btncheck6" 
                    autoComplete="off"
                    value="SNACK"
                    onChange={handleRecipeMeal}
                    checked={recipeMeal?.includes("SNACK") ? true : false}
                />
                <label className="btn btn-outline-primary" htmlFor="btncheck6">Snack</label>

                <input 
                    type="checkbox" 
                    className="btn-check" 
                    id="btncheck4" 
                    autoComplete="off"
                    value="DINNER"
                    onChange={handleRecipeMeal}
                    checked={recipeMeal?.includes("DINNER") ? true : false}
                />
                <label className="btn btn-outline-primary" htmlFor="btncheck4">Dinner</label>

                <input 
                    type="checkbox" 
                    className="btn-check" 
                    id="btncheck5" 
                    autoComplete="off"
                    value="DESSERT"
                    onChange={handleRecipeMeal}
                    checked={recipeMeal?.includes("DESSERT") ? true : false}
                />
                <label className="btn btn-outline-primary" htmlFor="btncheck5">Dessert</label>

                

                
            </div>
            </>
        )
    }

    function seasonalityDiv() {
        return(
            <>
                {/* seasonality */}
                    <select className="form-select form-select-sm" aria-label="Small select example" id='recipeSeasonalityControlSelect' onChange={handleRecipeSeasonality} placeholder={recipeSeasonality}>
                        <option value="ANY">Any</option>
                        <option value="SPRING">Spring</option>
                        <option value="SUMMER">Summer</option>
                        <option value="AUTUMN">Autumn</option>
                        <option value="WINTER">Winter</option>
                    </select>
                    <label className='floatingSelect'>Seasonality</label>
            </>
        )
    }


    function ratingDiv() {
        return(
            <>
                {/* rating */}
                    <select className="form-select form-select-sm" aria-label="Small select example" id='recipeRatingControlSelect' onChange={handleRecipeRating} placeholder={recipeRating}>
                        {/* <option selected>*****</option> */}
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                    {/* <label className='floatingSelect' for="recipeRatingControlSelect">Recipe Rating in Stars</label> */}
                    <label className='floatingSelect'>Recipe Rating in Stars</label>
            </>
        )
    }

    function nameDiv() {
        return(
            <>
                            <input
                                type='text'
                                placeholder={recipeName}
                                name='recipeName'
                                value={recipeName}
                                // Dynamically changing (adding a) className based on form validation
                                className={`recipeNameUpdate form-control form-control-lg ${ errors.recipeName ? 'is-invalid': ''}`}
                                onChange={handleRecipeName}
                                style={{'font-size':'300%'}}
                                id='recipeName'
                            >
                            </input>
                            <label for="recipeName">recipe name</label>
                            {/* dynamically add div for validation feedback if validation fails */}
                            { errors.recipeName && <div className='invalid-feedback'> { errors.recipeName} </div>}
            </>

        )
    }

    function easeLevelDiv() {
        return(
            <>
                            <select className="form-select form-select-sm" aria-label="Small select example" id='recipeEaseLevelControlSelect' onChange={handleRecipeEaseLevel} placeholder={recipeEaseLevel}>
                                <option value="EASELEVEL">EaseLevel</option>
                                <option value="EASY">Easy</option>
                                <option value="EASYMEDIUM">Easy-Medium</option>
                                <option value="MEDIUM">Medium</option>
                                <option value="MEDIUMHARD">Medium-Hard</option>
                                <option value="HARD">Hard</option>
                            </select>
                            <label className='floatingSelect'>Ease Level</label>
            </>

        )
    }

    function notesDiv() {
        // this functional component renders the ability to add multiple notes and delete said notes
        return (
            <>
            {/* <label className='form-label'>Recipe Notes:</label>
            <br/> */}
            <button className='btn btn-success btn-sm' onClick={addNote}>Additional Note</button>
            {(recipeNotes)?.map((recipeNotes, index) => {
                return(
                    
                    <div className='form-group mb-2' key={'recipeNotes'+index}>
                        <input
                            key={'recipeNote'+index}
                            type='text'
                            // placeholder='Enter recipe note'
                            placeholder={recipeNotes}
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

    function descriptionDiv() {
        return (
            <>
                <div className='form-group mb-2 recipeDesc form-floating'>
                    {/* <label className='form-label'>Recipe Description:</label> */}
                    <input
                        type='text'
                        // placeholder='Enter Recipe Description'
                        placeholder={recipeDescription}
                        name='recipeDescription'
                        value={recipeDescription}
                        className='form-control'
                        onChange={handleRecipeDescription}
                        id='recipeDescription'
                    >
                    </input>
                    <label for="recipeDescription">description</label>
                </div>
            </>
        )
    }

    function recipeServingsDiv() {
        return (
            <>
                {/* <div className='form-group mb-2 form-floating'> */}
                    
                    <input
                        type='number'
                        min='1'
                        max='100'
                        // placeholder='Enter Recipe Servings'
                        placeholder={recipeServings}
                        name='recipeServings'
                        value={recipeServings}
                        className='form-control'
                        onChange={handleRecipeServings}
                        id='recipeServings'
                    >
                    </input>
                    <label for='recipeServings'>Recipe Servings:</label>
                {/* </div> */}
            </>
        )
    }

    function prepTimeDiv() {
        return (
            <>
                {/* prep time */}
                {/* <div className='form-group mb-2 form-floating'> */}
                            {/* <label className='form-label'>Recipe Prep Time:</label> */}
                            <div className="form-floating d-flex">
                            <input
                                type='number'
                                min='0'
                                max='100'
                                // placeholder='Days'
                                placeholder={recipePrepTimeDays}
                                name='recipePrepTimeDays'
                                value={recipePrepTimeDays}
                                className='form-control'
                                onChange={handleRecipePrepTimeDays}
                                id='recipePrepTimeDays'
                            >
                            </input>
                            <label for='recipePrepTimeDays' className='align-items-right'>Prep Time Days</label>
                            </div>
                            <div className="form-floating d-flex">
                            <input
                                type='number'
                                min='0'
                                max='23'
                                // placeholder='Hours'
                                placeholder={recipePrepTimeHours}
                                name='recipePrepTimeHours'
                                value={recipePrepTimeHours}
                                className='form-control'
                                onChange={handleRecipePrepTimeHours}
                                id='recipePrepTimeHours'
                            >
                            </input>
                            <label for='recipePrepTimeHours'>Prep Time Hours</label>
                            </div>
                            <div className="form-floating">
                            <input
                                type='number'
                                min='0'
                                max='59'
                                // placeholder='Minutes'
                                placeholder={recipePrepTimeMinutes}
                                name='recipePrepTimeMinutes'
                                value={recipePrepTimeMinutes}
                                className='form-control'
                                onChange={handleRecipePrepTimeMinutes}
                                id='recipePrepTimeMinutes'
                            >
                            </input>
                            <label for='recipePrepTimeMinutes'>Prep Time Minutes</label>
                            </div>
                        {/* </div> */}
            </>
        )
    }

    function activeTimeDiv() {
        return (
            <>
                {/* prep time */}
                {/* <div className='form-group mb-2 form-floating'> */}
                            {/* <label className='form-label'>Recipe Prep Time:</label> */}
                            <div className="form-floating d-flex">
                            <input
                                type='number'
                                min='0'
                                max='23'
                                // placeholder='Hours'
                                placeholder={recipeActiveTimeHours}
                                name='recipeActiveTimeHours'
                                value={recipeActiveTimeHours}
                                className='form-control'
                                onChange={handleRecipeActiveTimeHours}
                                id='recipeActiveTimeHours'
                            >
                            </input>
                            <label for='recipeActiveTimeHours'>Active Time Hours</label>
                            </div>
                            <div className="form-floating">
                            <input
                                type='number'
                                min='0'
                                max='59'
                                // placeholder='Minutes'
                                placeholder={recipeActiveTimeMinutes}
                                name='recipeActiveTimeMinutes'
                                value={recipeActiveTimeMinutes}
                                className='form-control'
                                onChange={handleRecipeActiveTimeMinutes}
                                id='recipeActiveTimeMinutes'
                            >
                            </input>
                            <label for='recipeActiveTimeMinutes'>Active Time Minutes</label>
                            </div>
                        {/* </div> */}
            </>
        )
    }

    function totalTimeDiv() {
        return (
            <>
                {/* prep time */}
                {/* <div className='form-group mb-2 form-floating'> */}
                            {/* <label className='form-label'>Recipe Prep Time:</label> */}
                            <div className="form-floating d-flex">
                            <input
                                type='number'
                                min='0'
                                max='100'
                                // placeholder='Days'
                                placeholder={recipeTotalTimeDays}
                                name='recipeTotalTimeDays'
                                value={recipeTotalTimeDays}
                                className='form-control'
                                onChange={handleRecipeTotalTimeDays}
                                id='recipeTotalTimeDays'
                            >
                            </input>
                            <label for='recipeTotalTimeDays' className='align-items-right'>Total Time Days</label>
                            </div>
                            <div className="form-floating d-flex">
                            <input
                                type='number'
                                min='0'
                                max='23'
                                // placeholder='Hours'
                                placeholder={recipeTotalTimeHours}
                                name='recipeTotalTimeHours'
                                value={recipeTotalTimeHours}
                                className='form-control'
                                onChange={handleRecipeTotalTimeHours}
                                id='recipeTotalTimeHours'
                            >
                            </input>
                            <label for='recipeTotalTimeHours'>Total Time Hours</label>
                            </div>
                            <div className="form-floating">
                            <input
                                type='number'
                                min='0'
                                max='59'
                                // placeholder='Minutes'
                                placeholder={recipeTotalTimeMinutes}
                                name='recipeTotalTimeMinutes'
                                value={recipeTotalTimeMinutes}
                                className='form-control'
                                onChange={handleRecipeTotalTimeMinutes}
                                id='recipeTotalTimeMinutes'
                            >
                            </input>
                            <label for='recipeTotalTimeMinutes'>Total Time Minutes</label>
                            </div>
                        {/* </div> */}
            </>
        )
    }

    function ingredientsDiv() { 
                // this functional component renders the ability to add multiple ingredients and delete said ingredients
        return (
            <>
            {/* <label className='form-label'>Recipe Ingredients:</label> */}
            <br/>
            {/* <button className='btn btn-success btn-sm' onClick={addIngredient}>Add Ingredient</button> */}

            {/* can experiment to make buttons +'s and -'s on the left and right... from https://codepen.io/dartokloning/pen/ZEBjgWm */}
            {/* <button className='btn btn-success btn-sm' onClick={addIngredient}><span class="glyphicon glyphicon-plus"></span></button> */}
            {/* can also experiment w/ this to move buttons to right */}
            {/* <div className="d-grid gap-2 d-md-flex justify-content-md-end"><button className='btn btn-success btn-sm' onClick={addIngredient}>Add Ingredient</button></div> */}
            {/* <button className='btn btn-success btn-sm' onClick={addIngredient}>Add Ingredient</button> */}
            {(recipeIngredients)?.map((recipeIngredients, index) => {
                console.log("iterating through recipeIngredients")
                console.log("recipeIngredients = ->")
                console.log(recipeIngredients)
                return(
                    
                    // <div className='form-group mb-2' key={recipeIngredients.ingredientName}>
                    <div className='form-group mb-2' key={'recipeIngredient'+ index}>
                        <input
                            key={'ingredientName:' + index}
                            ind={recipeIngredients.ingredientName}
                            type='text'
                            placeholder={recipeIngredients[0]}
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
                            placeholder={recipeIngredients[1]}
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

    function equipmentDiv() {
        // this functional component renders the ability to add multiple equipment and delete said equipment
        return (
            <>
            {/* <label className='form-label'>Recipe Equipment:</label> */}
            <br/>
            {/* <button className='btn btn-success btn-sm' onClick={addEquipment}>Additional Equipment</button> */}
            {(recipeEquipment)?.map((recipeEquipment, index) => {
                return(
                    
                    <div className='form-group mb-2' key={'recipeEquipment'+index}>
                        <input
                            key={'recipeEquipmentName'+index}
                            type='text'
                            placeholder={recipeEquipment.name}
                            name={recipeEquipment.name}
                            value={recipeEquipment.name}
                            className='form-control'
                            onChange={handleRecipeEquipment}
                        >
                        </input>
                        <button className='btn btn-danger btn-sm' onClick={(e) => removeEquipment(recipeEquipment.name, e)}>Remove Equipment</button>
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
            {/* <label className='form-label'>Recipe Methods/Steps:</label> */}
            <br/>
            <button className='btn btn-success btn-sm' onClick={addMethod}>Additional Method</button>
            {(recipeMethods)?.map((recipeMethods, index) => {
                return(
                    
                    // <div className='form-group mb-2' key={recipeMethods}>
                    <div className='form-group mb-2' key={'recipeMethods' + index}>
                        {(index +1) + "."}
                        <input
                            // key={recipeMethods}
                            key={'method'+index}
                            type='text'
                            placeholder= {recipeMethods}
                            name={recipeMethods}
                            value={recipeMethods}
                            className='form-control'
                            onChange={handleRecipeMethods}
                        >
                        </input>
                        <button className='btn btn-danger btn-sm' onClick={(e) => removeMethod(recipeMethods, e)}>Remove Method</button>
                    </div>
                )
                })}
            </>
        )
    }

    function authorDiv() {
        return(
            <>
                {/* author */}
                <div className='form-group mb-2 form-floating'>
                    {/* <label className='form-label'>Recipe Author:</label> */}
                    <input
                        type='text'
                        placeholder={recipeAuthor}
                        name='recipeAuthor'
                        value={recipeAuthor}
                        className='form-control'
                        onChange={handleRecipeAuthor}
                        id='recipeAuthor'
                    >
                    </input>
                    <label for='recipeAuthor'>Author</label>
                </div>
            </>
        )
    }

    function originDiv() {
        return(
            <>
                {/* origin */}
                <div className='form-group mb-2 form-floating'>
                    {/* <label className='form-label'>Recipe Origin:</label> */}
                    <input
                        type='text'
                        placeholder={recipeOrigin}
                        name='recipeOrigin'
                        value={recipeOrigin}
                        className='form-control'
                        onChange={handleRecipeOrigin}
                        id='recipeOrigin'
                    >
                    </input>
                    <label for='recipeOrigin'>Origin</label>
                </div>
            </>
        )
    }

    function storageDiv() {
        return(
            <>
                {/* how to store */}
                <div className='form-group mb-2'>
                    {/* <label className='form-label'>How To Store:</label> */}
                    <textarea
                        // type='textarea'
                        placeholder={recipeHowToStore}
                        name='recipeHowToStore'
                        value={recipeHowToStore}
                        className='form-control'
                        onChange={handleRecipeHowToStore}
                        rows='1'
                    />
                </div>
            </>
        )
    }

    function reheatDiv() {
        return(
            <>
                {/* how to reheat */}
                <div className='form-group mb-2'>
                    {/* <label className='form-label'>How To Reheat:</label> */}
                    <textarea
                        placeholder={recipeHowToReheat}
                        name='recipeHowToReheat'
                        value={recipeHowToReheat}
                        className='form-control'
                        onChange={handleRecipeHowToReheat}
                        rows='1'
                    />
                </div>
            </>
        )
    }

    function freezeDiv() {
        return(
            <>
                {/* how to freeze */}
                <div className='form-group mb-2'>
                    {/* <label className='form-label'>How To Freeze:</label> */}
                    <textarea
                        placeholder={recipeHowToFreeze}
                        name='recipeHowToFreeze'
                        value={recipeHowToFreeze}
                        className='form-control'
                        onChange={handleRecipeHowToFreeze}
                        rows='1'
                    />
                </div>
            </>
        )
    }

    function useLeftoversIdeasDiv() {
        // this functional component renders the ability to add multiple notes and delete said notes
        return (
            <>
            {/* <label className='form-label'>How to use/repurpose leftovers ideas:</label> */}
            <br/>
            {/* <button className='btn btn-success btn-sm' onClick={addIdea}>Additional Idea</button> */}
            {(recipeHowToUseRepurposeLeftoversIdeas)?.map((recipeHowToUseRepurposeLeftoversIdeas, index) => {
                return(
                    
                    <div className='form-group mb-2' key={'howToUseRepurposeLeftoversIdeasDiv'+index}>
                        <input
                            key={'howToUseRepurposeLeftoversIdeasInput'+index}
                            type='text'
                            placeholder={recipeHowToUseRepurposeLeftoversIdeas}
                            name={recipeHowToUseRepurposeLeftoversIdeas}
                            value={recipeHowToUseRepurposeLeftoversIdeas}
                            className='form-control'
                            onChange={handleRecipeHowToUseRepurposeLeftoversIdeas}
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
            {/* <label className='form-label'>Dishes that also use leftover ingredients:</label> */}
            <br/>
            {/* <button className='btn btn-success btn-sm' onClick={addDishLeftoverIngredients}>Additional Dish</button> */}
            {(recipeDishesThatAlsoUseLeftoverIngredients)?.map((recipeDishesThatAlsoUseLeftoverIngredients, index) => {
                return(
                    
                    <div className='form-group mb-2' key={'dishesThatAlsoUseLeftoverIngredientsDiv'+index}>
                        <input
                            key={'dishesThatAlsoUseLeftoverIngredientsInput'+index}
                            type='text'
                            placeholder={recipeDishesThatAlsoUseLeftoverIngredients.name}
                            name={recipeDishesThatAlsoUseLeftoverIngredients.name}
                            value={recipeDishesThatAlsoUseLeftoverIngredients.name}
                            className='form-control'
                            onChange={handleRecipeDishesThatAlsoUseLeftoverIngredients}
                        >
                        </input>
                        <button className='btn btn-danger btn-sm' onClick={(e) => removeDishLeftoverIngredients(recipeDishesThatAlsoUseLeftoverIngredients.name, e)}>Remove Dish</button>
                    </div>
                )
                })}
            
            </>
        );
    }

    function oftenMadeAlongsideDiv() {
        // this functional component renders the ability to add multiple recipe's this recipe is often made alongside and delete said recipe associations
        return (
            <>
            {/* <label className='form-label'>Recipes Often Made Alongside:</label> */}
            <br/>
            {/* <button className='btn btn-success btn-sm' onClick={addOftenMadeAlongside}>Additional Recipe made alongside</button> */}
            {(recipeOftenMadeAlongside)?.map((recipeOftenMadeAlongside, index) => {
                return(
                    
                    <div className='form-group mb-2' key={'oftenMadeAlongsideDiv'+index}>
                        <input
                            key={'oftenMadeAlongsideInput'+index}
                            type='text'
                            placeholder={recipeOftenMadeAlongside.name}
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

    function pairingsDiv() {
        // this functional component renders the ability to add multiple pairings and delete said pairings
        return (
            <>
            {/* <label className='form-label'>Recipe Pairings:</label> */}
            <br/>
            {/* <button className='btn btn-success btn-sm' onClick={addPairing}>Additional Pairing</button> */}
            {(recipePairings)?.map((recipePairings, index) => {
                return(
                    
                    <div className='form-group mb-2' key={'recipePairings'+index}>
                        <input
                            key={'recipePairings.name'+index}
                            type='text'
                            placeholder={recipePairings.name}
                            name={recipePairings.name}
                            value={recipePairings.name}
                            className='form-control'
                            onChange={handleRecipePairings}
                        >
                        </input>
                        <button className='btn btn-danger btn-sm' onClick={(e) => removePairing(recipePairings.name, e)}>Remove Pairing</button>
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
            {/* <label className='form-label'>Meal Affinities:</label> */}
            <br/>
            {/* <button className='btn btn-success btn-sm' onClick={addMealAffinity}>Additional Affinity</button> */}
            {(recipeMealAffinities)?.map((recipeMealAffinities, index) => {
                return(
                    
                    <div className='form-group mb-2' key={'mealAffinitiesDiv'+index}>
                        <input
                            key={'mealAffinitiesInput'+index}
                            type='text'
                            placeholder={recipeMealAffinities.name}
                            name={recipeMealAffinities.name}
                            value={recipeMealAffinities.name}
                            className='form-control'
                            onChange={handleRecipeMealAffinities}
                        >
                        </input>
                        <button className='btn btn-danger btn-sm' onClick={(e) => removeMealAffinity(recipeMealAffinities.name, e)}>Remove Affinity</button>
                    </div>
                )
                })}
            
            </>
        );
    }

    function pairsWithDiv() {
        // this functional component renders the ability to add multiple pairings and delete said pairings
        return (
            <>
            <br/>
            {(recipePairsWith)?.map((recipePairsWith, index) => {
                return(
                    
                    <div className='form-group mb-2' key={'pairsWithDiv'+index}>
                        <input
                            key={'pairsWithInput'+index}
                            type='text'
                            placeholder={recipePairsWith.name}
                            name={recipePairsWith.name}
                            value={recipePairsWith.name}
                            className='form-control'
                            onChange={handleRecipePairsWith}
                        >
                        </input>
                        <button className='btn btn-danger btn-sm' onClick={(e) => removePairsWith(recipePairsWith.name, e)}>Remove Pairing</button>
                    </div>
                )
                })}
            
            </>
        );
    }

    // function tagsDiv() {
    //     // this functional component renders the ability to add multiple tags and delete said tags
    //     return (
    //         <>
    //         <br/>
    //         {(recipeTags)?.map((recipeTags, index) => {
    //             return(
                    
    //                 <div className='form-group mb-2' key={'recipeTagsDiv'+index}>
    //                     <input
    //                         key={'recipeTagsInput'+index}
    //                         type='text'
    //                         placeholder={recipeTags[index]}
    //                         name={recipeTags}
    //                         value={recipeTags}
    //                         className='form-control'
    //                         onChange={handleRecipeTags}
    //                     >
    //                     </input>
    //                     <button className='btn btn-danger btn-sm' onClick={(e) => removeTag(recipeTags, e)}>Remove Tag</button>
    //                 </div>
    //             )
    //             })}
    //         </>
    //     )
    // }

    function tagsDiv() {
        // this functional component renders the ability to add multiple tags and delete said tags
        return (
            <>
            <br/>
            {/* <button className='btn btn-success btn-sm' onClick={addTag}>Additional Tag</button> */}
            {(recipeTags)?.map((tag, index) => {
                return(
                    <div className='form-group mb-2' key={'recipeTags' + index}>
                        <input
                            key={'tag'+index}
                            type='text'
                            placeholder= {tag}
                            name={tag}
                            value={tag}
                            className='form-control'
                            onChange={handleRecipeTags}
                        >
                        </input>
                        <button className='btn btn-danger btn-sm' onClick={(e) => removeTag(tag, e)}>Remove Tag</button>
                    </div>
                )
                })}
            </>
        )
    }







    console.log(recipe);
    {(recipe.name && recipe) 
        console.log("recipe is at this point....");
        console.log(recipe);
        return (
            
           
            <div className='container d-grid gap-3'>
    
                {/* <h1>{"Hello " + name}</h1> */}
                <div className="col g-1"/>
                    <div className="container">
                        {/* <button className='btn btn-success mb-2' onClick={() => submitRecipeUpdate(recipeName)}>Submit Update</button> */}
                        <button className='btn btn-success mb-2' onClick={(e) => submitRecipeUpdate(e)}>Submit Update</button>
                        <button className='btn btn-danger mb-2' onClick={() => goBack(recipe.name)}>Cancel</button>
                    </div>
                    <div className="container">
                        {/* row 1 */}
                        <div className="row border border-3 border-warning" key={'row1'}>
                            <div className="col-sm-4 border border -2 border-info ms-auto" key={'row1-col1'}>
                                <div className="row border border-1 border-warning ms-auto" key={'row1-col1-row1'}>
                                    {/* {recipe.category?.map((category, index) => category + (((index+1) < recipe.category.length) ? ' | ' : ''))} */}

                                    {/* {recipe.category?.map((category, index) => {() => categoryDiv(category, index)} )} + (((index+1) < recipe.category.length) ? ' | ' : ''))} */}

                                    {/* {recipe.category?.map((category, index) => {categoryDiv(category, index)} )}  */}




                                    {(recipeCategory && categoryDiv())}

                                    {/* {(recipe.category && categoryDiv(recipe.category))} */}





                                    {/* {recipe.categoty? && categoryDiv} */}
    
                                </div>
                                <div className="row border border-1 border-warning ms-auto form-floating" key={'row1-col1-row2'}>
                                    {/* {recipe.foodOrDrink} */}
                                    {foodOrDrinkDiv()}
                                </div>
                                <div className="row border border-1 border-warning ms-auto" key={'row1-col1-row3'}>
                                    {/* {recipe.meal?.map((meal, index) => meal + (((index+1) < recipe.meal.length) ? ' | ' : ''))} */}

                                    {mealDiv()}

                                </div>
                                <div className="row border border-1 border-warning ms-auto form-floating" key={'row1-col1-row4'}>
                                    {/* {recipe.season + ' season'} */}
                                    {seasonalityDiv()}


                                </div>
                                <div className="row border border-1 border-warning ms-auto form-floating" key={'row1-col1-row5'}>
                                    {/* {recipe.rating + ' stars'} */}
                                    {ratingDiv()}


                                </div>
                            </div>
                            <div className="col-1 border border -2 border-info" key={'row1-col2'}>
                                
                            </div>
                            <div className="col-5 border border -2 border-info" key={'row1-col3'}>
                                <div className="row border border-1 border-warning" key={'row1-col3-row1'}>
                                    <br/>
                                </div>
                                <div className="row border border-1 border-warning" key={'row1-col3-row2'}>
                                    <br/>
                                </div>
                                <div className="row border border-1 border-warning form-floating" key={'row1-col3-row3'}>
                                        {/* <div className='recipeName'>{String(recipe.name).toUpperCase()}</div> */}

                                        {nameDiv()}
                                    
                                        
                                    
    
                                </div>
                            </div>
                            <div className="col-2 border border -2 border-info" key={'row1-col4'}>
                                <div className="row border border-1 border-warning form-floating" key={'row1-col4-row1'}>
                                    {/* <div className='recipeItal'>difficulty
                                    </div>{recipe.easeLevel} */}
                                    {easeLevelDiv()}
                                </div>
                                <div className="row border border-1 border-warning" key={'row1-col4-row2'}>
                                    <br/>
                                </div>
                                <div className="row border border-1 border-warning" key={'row1-col4-row3'}>
                                    <br/>
                                </div>
                                <div className="row border border-1 border-warning" key={'row1-col4-row4'}>
                                    <br/>
                                </div>
                                <div className="row border border-1 border-warning" key={'row1-col4-row5'}>
                                    <br/>
                                </div>
                            </div>
                        </div>
                        {/* row 2 */}
                        <div className="row border border-3 border-warning" key={'row2'}>
                            <div className="col">
                                {/* Notes:
                                <ul>
                                    {recipe.notes?.map((note, index) => 
                                        <li key={'recipeNote' + (index+1)}>note</li>
                                    )}
                                </ul> */}
                                {notesDiv()}
                            </div>
                            <div className="col">
                                {/* <p className='recipeDesc'>{recipe.description}</p> */}
                                {descriptionDiv()}
                            </div>
                        </div>
    
                        {/* row 3 */}
                        <div className="row border border-3 border-warning" key={'row3'}>
                            <div className="col">
                                <div className="row"><br/></div>
                                <div className="row d-flex justify-content-center form-group mb-2 form-floating">
                                    {/* <p className="recipeItal d-flex justify-content-center">yield : </p> {recipe.servings} Servings */}
                                    
                                    {recipeServingsDiv()}
                                </div>
                                <div className="row"></div>
                                <div className="row"></div>
                                <div className="row"></div>
                                
                            </div>
                            <div className="col">
                                <div className="row"><br/></div>
                                {/* <label className='form-label'>Recipe Prep Time:</label> */}
                                {/* <div className="row form-group mb-2 form-floating"> */}
                                <div className="row mb-2">
                                        {/* <div className="col recipeItal">prep time : </div>
                                        <div className="col">{recipe.prepTime && convertDuration(recipe.prepTime)}</div> */}
                                        
                                        {prepTimeDiv()}
                                </div>
                                {/* <label className='form-label'>Recipe Active Time:</label> */}
                                <div className="row">
                                        {/* <div className="col recipeItal">active time : </div>
                                        <div className="col">{recipe.activeTime && convertDuration(recipe.activeTime)}</div> */}
                                        {activeTimeDiv()}
                                </div>
                                <div className="row">
                                        {/* <div className="col recipeItal">total time : </div>
                                        <div className="col">{recipe.totalTime && convertDuration(recipe.totalTime)}</div> */}
                                        {totalTimeDiv()}
                                </div>
                                <div className="row"><br/></div>
                            </div>
                            <div className="col">
                                <div className="row"><br/></div>
                                <div className="row">
                                        {/* <p className='recipeDesc'>Version : <div>{recipe.version}</div></p>  */}
                                        <p className='recipeItal'>Version : <span className='recipeDesc'>{recipe.version}</span></p> 
                                </div>
                                <div className="row"><br/></div>
                                <div className="row"><br/></div>
                                <div className="row"><br/></div>
                            </div>
                        </div>
                        {/* row 4 */}
                        <div className="row border border-3 border-warning" key={'row4'}>
                            <div className="col ">
                                <p className='recipeItal d-flex justify-content-center'>ingredients : </p>
                                {/* <div className='d-flex justify-content-center'> */}
                                {/* <div className="d-grid gap-2 d-md-flex justify-content-md-end"><button className='btn btn-success btn-sm' onClick={addIngredient}>Add Ingredient</button></div> */}
                                <button className='btn btn-success btn-sm' onClick={addIngredient}>Add Ingredient</button>


                                <div className='d-flex'>
                                {/* <ul>
                                    {recipe.ingredients && (parseIngredients(recipe?.ingredients).map(([ingKey, ingValue], index) => <li key={'ingredient'+index}>{ingValue} {ingKey}</li>))}
                                </ul> */}
                                {ingredientsDiv()}
                                </div>
                            </div>
                            <div className="col">
                                <p className='recipeItal d-flex justify-content-center'>equipment : </p>
                                <div className="d-flex justify-content-center">
                                    <button className='btn btn-success btn-sm' onClick={addEquipment}>Additional Equipment</button>
                                </div>
                                <div className='d-flex justify-content-center'>
                                    
                                {/* <ul>
                                    {recipe.equipment?.map((equip, index) => <li key={'equip' + index}>{equip.name}</li>)}
                                </ul> */}
                                    {equipmentDiv()}
                                </div>
                            </div>
                        </div>
    
                        {/* row 5 */}
                        {/* <div className="row border border-3 border-warning offset-sm-1" key={'row5'}> */}
                        <div className="row border border-3 border-warning ms-auto d-flex justify-content-center" key={'row5'}>
                                <div className='d-flex justify-content-center recipeItal'>Procedure :</div>
                                 
                                {/* <ol className=''>
                                    {recipe.method?.map((step, index) => <li className='d-flex justify-content-center' key={'step' + index}>{(index+1) +'. ' +step}</li>)}
                                </ol> */}
                                    {methodsDiv()}
                        </div>
    
                        {/* row 6 */}
                        <div className="row border border-3 border-warning ms-auto d-flex justify-content-center" key={'row6'}>
                            <div className="col-sm-4 border border -2 border-info ms-auto" key={'row6-col1'}>
                            </div>
                            <div className="col-sm-4 border border -2 border-info ms-auto" key={'row6-col2'}>
                            </div>
                            <div className="col-sm-4 border border -2 border-info ms-auto" key={'row6-col3'}>
                                <div className='d-flex justify-content-center recipeItal'>from :</div>
                                {/* {recipe.author}, {recipe.origin} */}
                                {authorDiv()}
                                {originDiv()}
                            </div>
                                
                        </div>
    
                        {/* row 7 */}
                        <div className="row border border-3 border-warning ms-auto d-flex justify-content-center" key={'row7'}>
                                <div className='d-flex justify-content-center recipeItal'>Pictures :</div>
                                <div className='d-flex justify-content-center'></div>
                                
                        </div>
    
                        {/* row 8 */}
                        <div className="row border border-3 border-warning ms-auto d-flex justify-content-center" key={'row8'}>
                            <div className="col-sm-4 border border -2 border-info ms-auto" key={'row8-col1'}>
                                <div className='d-flex justify-content-center recipeItal'>storage</div>
                                {/* <div className='d-flex justify-content-center'>{recipe.howToStore}</div> */}
                                {storageDiv()}
                            </div>
                            <div className="col-sm-4 border border -2 border-info ms-auto" key={'row8-col2'}>
                                <div className='d-flex justify-content-center recipeItal'>reheat</div>
                                {/* <div className='d-flex justify-content-center'>{recipe.howToReheat}</div> */}
                                {reheatDiv()}
                            </div>
                            <div className="col-sm-4 border border -2 border-info ms-auto" key={'row8-col3'}>
                                <div className='d-flex justify-content-center recipeItal'>freeze</div>
                                {/* <div className='d-flex justify-content-center'>{recipe.howToFreeze}</div> */}
                                {freezeDiv()}
                            </div>
                                
                        </div>
    
                        {/* row 9 */}
                        <div className="row border border-3 border-warning ms-auto d-flex justify-content-center" key={'row9'}>
                            <div className="col-sm-6 border border -2 border-info ms-auto" key={'row9-col1'}>
                                <div className='d-flex justify-content-center recipeItal'>repurpose leftovers</div>
                                <div className='d-flex justify-content-center'>
                                    <button className='btn btn-success btn-sm' onClick={addIdea}>Additional Idea</button>
                                </div>
                                <div className='d-flex justify-content-center'>
                                    {/* <ul>
                                        {recipe.howToUseRepurposeLeftoversIdeas?.map((idea, index) => <li key={'repurposeIdea' + index}>{idea}</li>)}
                                    </ul> */}
                                    {useLeftoversIdeasDiv()}
                                </div>
                            </div>
                            <div className="col-sm-6 border border -2 border-info ms-auto" key={'row9-col2'}>
                                <div className='d-flex justify-content-center recipeItal'>leftover ingredients</div>
                                <div className="d-flex justify-content-center">
                                    <button className='btn btn-success btn-sm' onClick={addDishLeftoverIngredients}>Additional Dish</button>
                                </div>
                                <div className='d-flex justify-content-center'>
                                    {/* <ul>
                                        {recipe.dishesThatAlsoUseLeftoverIngredients?.map((dish, index) => <li key={'leftoverDish' + index}>{dish.name}</li>)}
                                    </ul> */}
                                    {leftoverIngredientsDiv()}
                                </div>
                            </div>
                                
                        </div>
    
                        {/* row 10 */}
                        <div className="row border border-3 border-warning ms-auto d-flex justify-content-center" key={'row10'}>
                            <div className="col-sm-3 border border -2 border-info ms-auto" key={'row10-col1'}>
                                <div className='d-flex justify-content-center recipeItal'>often made alongside</div>
                                <div className="d-flex justify-content-center">
                                    <button className='btn btn-success btn-sm' onClick={addOftenMadeAlongside}>Additional Recipe made alongside</button>
                                </div>
                                <div className='d-flex justify-content-center'>
                                    {/* <ul>
                                        {recipe.oftenMadeAlongside?.map((dish, index) => <li key={'oftenAlongside' + index}>{dish.name}</li>)}
                                    </ul> */}
                                    {oftenMadeAlongsideDiv()}
                                </div>
                            </div>
                            <div className="col-sm-3 border border -2 border-info ms-auto" key={'row10-col2'}>
                                <div className='d-flex justify-content-center recipeItal'>pairings</div>
                                <div className="d-flex justify-content-center">
                                    <button className='btn btn-success btn-sm' onClick={addPairing}>Additional Pairing</button>
                                </div>
                                <div className='d-flex justify-content-center'>
                                    {/* <ul>
                                        {recipe.pairings?.map((dish, index) => <li key={'pairings' + index}>{dish.name}</li>)}
                                    </ul> */}
                                    {pairingsDiv()}
                                </div>
                            </div>
                            <div className="col-sm-3 border border -2 border-info ms-auto" key={'row10-col3'}>
                                <div className='d-flex justify-content-center recipeItal'>meal affinities</div>
                                <div className="d-flex justify-content-center">
                                    <button className='btn btn-success btn-sm' onClick={addMealAffinity}>Additional Affinity</button>
                                </div>
                                <div className='d-flex justify-content-center'>
                                    {/* <ul>
                                        {recipe.mealAffinities?.map((affinity, index) => <li key={'affinity' + index}>{affinity.name}</li>)}
                                    </ul> */}
                                    {mealAffinitiesDiv()}
                                </div>
                            </div>
                            <div className="col-sm-3 border border -2 border-info ms-auto" key={'row10-col4'}>
                                <div className='d-flex justify-content-center recipeItal'>pairs with</div>
                                <div className="d-flex justify-content-center">
                                    <button className='btn btn-success btn-sm' onClick={addPairsWith}>Additional Pairing</button>
                                </div>
                                <div className='d-flex justify-content-center'>
                                    {/* <ul>
                                        {recipe.pairsWith?.map((dish, index) => <li key={'pairsWith' + index}>{dish.name}</li>)}
                                    </ul> */}
                                    {pairsWithDiv()}
                                </div>
                            </div>
                                
                        </div>
    
                        {/* row 11 */}
                        <div className="row border border-3 border-warning ms-auto d-flex justify-content-center" key={'row11'}>
                            <div className="col-sm-4 border border -2 border-info ms-auto" key={'row8-col1'}>
                                <div className='d-flex justify-content-center recipeItal'>created</div>
                                <div className='d-flex justify-content-center'>{recipe.created}</div>
                            </div>
                            <div className="col-sm-4 border border -2 border-info ms-auto" key={'row8-col2'}>
                                <div className='d-flex justify-content-center recipeItal'>last cooked</div>
                                {/* <div className='d-flex justify-content-center'>{recipe.allDatesCooked[0]}</div> */}
                                <div className='d-flex justify-content-center'>{recipe.allDatesCooked && recipe.allDatesCooked[0]}
                                
                                </div>
                                
                                {/* <Collapsible trigger='more...' triggerWhenOpen='less...'> */}
                                <Collapsible trigger={<button type="button" className="btn btn-primary btn-circle btn-sm">+</button>} 
                                            triggerWhenOpen={<button type="button" className="btn btn-primary btn-circle btn-sm">-</button>}>
                                    {/* <button className="btn btn-circle" onClick={() => {this.toggle.bind('demo') }}>
                                        This button collapses
                                    </button> */}
                                    <ul>
                                        {recipe.allDatesCooked?.map((date, index) => ((index > 0) ? <li key={'allDatesCooded' + index}  className='d-flex justify-content-center'>{date}</li> : false))}
                                        
                                        {/* // <li key={'allDatesCooded' + index}>{(index > 0)&&{date}}</li>)} */}
                                    </ul>
                                    {/* <ul>
                                        {recipe.allDatesCooked?.map((date, index) => <li key={'allDatesCooded' + index}>{(index > 0)&&{date}}</li>)}
                                    </ul> */}
                                </Collapsible>
                            </div>
                            <div className="col-sm-4 border border -2 border-info ms-auto" key={'row8-col3'}>
                                <div className='d-flex justify-content-center recipeItal'>updated</div>
                                <div className='d-flex justify-content-center'>{recipe.allDatesUpdated && recipe.allDatesUpdated[0]}
                                
                                </div>
                                
                                <Collapsible trigger={<button type="button" className="btn btn-primary btn-circle btn-sm">+</button>} 
                                            triggerWhenOpen={<button type="button" className="btn btn-primary btn-circle btn-sm">-</button>}>
    
                                    <ul>
                                        {recipe.allDatesUpdated?.map((date, index) => ((index > 0) ? <li key={'allDatesUpdated' + index}  className='d-flex justify-content-center'>{date}</li> : false))}
                                        
                                    </ul>
    
                                </Collapsible>
                            </div>
                                
                        </div>
    
                        {/* row 12 */}
                        <div className="row border border-3 border-warning ms-auto d-flex justify-content-center" key={'row12'}>
                                <div className='d-flex justify-content-center recipeItal'>Tags :</div>
                                <div className="d-flex justify-content-center">
                                    <button className='btn btn-success btn-sm' onClick={addTag}>Additional Tag</button>
                                </div>
                                <div className='d-flex justify-content-center'>
                                    {/* {recipe.tags?.map((tag, index) => '#'+ tag + (((index+1) < recipe.tags.length) ? ' | ' : ''))} */}
                                    {tagsDiv()}
                                </div>
                                
                        </div>
    
                    </div>
    
    
    
    
                <div className="col g-3"/>
                
                
    
    
            </div>
    
            
            
    )}




    // function parseIngredients(obj) {
    //     var newObj = {};
    //     Object.keys(obj).forEach(key => {
    //     newObj[key] = obj[key]
    //     })
    
    //     console.log(newObj);
    //     console.log(Object.entries(newObj));
    //     return Object.entries(newObj);
    //   }
    
    
    function convertDuration(t){ 
        //dividing period from time
        var x = t.split('T'),
            duration = '',
            time = {},
            period = {},
            //just shortcuts
            s = 'string',
            v = 'variables',
            l = 'letters',
            // store the information about ISO8601 duration format and the divided strings
            d = {
                period: {
                    string: x[0].substring(1,x[0].length),
                    len: 4,
                    // years, months, weeks, days
                    letters: ['Y', 'M', 'W', 'D'],
                    variables: {}
                },
                time: {
                    string: x[1],
                    len: 3,
                    // hours, minutes, seconds
                    letters: ['H', 'M', 'S'],
                    variables: {}
                }
            };
        //in case the duration is a multiple of one day
        if (!d.time.string) {
            d.time.string = '';
        }
    
        for (var i in d) {
            var len = d[i].len;
            for (var j = 0; j < len; j++) {
                d[i][s] = d[i][s].split(d[i][l][j]);
                if (d[i][s].length>1) {
                    d[i][v][d[i][l][j]] = parseInt(d[i][s][0], 10);
                    d[i][s] = d[i][s][1];
                } else {
                    d[i][v][d[i][l][j]] = 0;
                    d[i][s] = d[i][s][0];
                }
            }
        } 
        period = d.period.variables;
        time = d.time.variables;
        time.H +=   24 * period.D + 
                                24 * 7 * period.W +
                                24 * 7 * 4 * period.M + 
                                24 * 7 * 4 * 12 * period.Y;
    
        if (time.H) {
            duration = time.H + ':';
            if (time.M < 10) {
                time.M = '0' + time.M;
            }
        }
    
        if (time.S < 10) {
            time.S = '0' + time.S;
        }
    
        duration += time.M + ':' + time.S;
        return duration;
    }

    //  totalTime=PT28H30M
    // function splitSetDuration(t) {
    function splitSetDuration(t) {
        console.log("in splitSetDuration()")
        // var t = "PT28H30M"
        // var t = "PT2M"
        // var t = "PT0S"
        // work on this tomorrow.. start here!

        var timeArray = t.split('T')
        var contains = [];
        console.log("timeArray after split('T') on array param = ->")
        console.log(timeArray)
        var time = timeArray[1]
        if (time.includes('H')) {
            console.log("contains H is true")
            contains.push('H')
        }
        if (time.includes('M')) {
            console.log("contains M is true")
            contains.push('M')
        }
        if (time.includes('S')) {
            console.log("contains S is true")
            contains.push('S')
        }
        var nextSplit;
        console.log('contains = -> ')
        console.log(contains)
        if (contains.includes('H')) {
            nextSplit = timeArray[1].split('H')
            console.log("after split on H, nextSplit = ->")
            console.log(nextSplit)
        
            var hours = nextSplit[0]
            nextSplit.shift()

            console.log("after splitting hours, hours = ->")
            console.log(hours)
            // find days from hours
            if(hours.valueOf() >= 24) {
                console.log("starting 24 hour day statement")
                var days = hours.valueOf()/24;
                days = days.toFixed(0)
                hours = hours - (days * 24)
            }
            console.log("after shift, nextSplit = ->")
            console.log(nextSplit)
        }
        
        if (contains.includes('M')) {
            console.log("includes 'M', starting conditional ")
            console.log("currently timeArray = ->")
            console.log(timeArray)
            console.log("currently nextSplit = ->")
            console.log(nextSplit)
            if (!nextSplit) {
                console.log("inside !nextSplit false conditional")
                console.log("nextSplit is = ->")
                console.log(nextSplit)
                nextSplit = timeArray[1].split('M')
                var minutes = nextSplit[0]

            } else {
                console.log("inside nextSplit true conditional")
                var minutes = nextSplit[0].replace('M', '')
            }
            console.log("after splitting on M")
            console.log("nextSplit is = ->")
            console.log(nextSplit)
            console.log("nextSplit is currently = ->")
            console.log(nextSplit)
            nextSplit.shift()
            console.log("after shift, nextSplit = ->")
            console.log(nextSplit)
        }
        if (contains.includes('S')) {
            console.log("includes 'S', starting conditional ")
            console.log("currently timeArray = ->")
            console.log(timeArray)
            console.log("currently nextSplit = ->")
            console.log(nextSplit)
            if (!nextSplit) {
                console.log("inside !nextSplit false conditional")
                console.log("nextSplit is = ->")
                console.log(nextSplit)
                nextSplit = timeArray[1].split('S')
                var seconds = nextSplit[0]

            } else {
                console.log("inside nextSplit true conditional")
                var seconds = nextSplit[0].replace('S', '')
            }
        }
        console.log("at the end of the function ::: values are ::  days = " + days + ", hours = " + hours + ", minutes = " + minutes + ", seconds = " + seconds)
        if (!days) {days = 0}
        if (!hours) {hours = 0}
        if (!minutes) {minutes = 0}
        if (!seconds) {seconds = 0}
        days = Number.parseInt(days)
        hours = Number.parseInt(hours)
        minutes = Number.parseInt(minutes)
        seconds = Number.parseInt(seconds)
        var timeMap = {
            'days' : days,
            'hours' : hours,
            'minutes' : minutes,
            'seconds' : seconds
        }
        console.log("end of method... will be returning, timeMap = ->")
        console.log(timeMap)
        return timeMap;
    }
    
}
    

export default UpdateRecipeComponent