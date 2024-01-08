import React from 'react'

const ListRecipeComponent = () => {

    const dummyData = [
        {
            id: 0,
            name: "Banana Bread",
            description: "Quick bread of ripe bananas",
            version: 1.0,
            ingredients: [
                {
                    name: "brown sugar"
                },
                {
                    name: "baking powder"
                },
                {
                    name: "flour"
                },
                {
                    name: "banana"
                }
            ],
            
        },
        {   id: 1,
            name: "Pizza Dough",
            description: "sourdough pizza dough",
            version: 1.0,
            ingredients: [
                {
                    name: "brown sugar"
                },
                {
                    name: "baking powder"
                },
                {
                    name: "flour"
                },
                {
                    name: "banana"
                }
            ],
            
            /*
            id: 0,
            name: "Banana Bread",
            description: "Quick bread of ripe bananas baked in a loaf pan",
            version: 1.0,
            ingredients: [
                {
                    name: "brown sugar"
                },
                {
                    name: "baking powder"
                },
                {
                    name: "flour"
                },
                {
                    name: "banana"
                }
            ],
            method: null,
            servings: 8,
            prepTime: null,
            activeTime: null,
            totalTime: null,
            equipment: null,
            pairings: null,
            notes: null,
            rating: 0,
            author: null,
            foodOrDrink: null,
            pictures: null,
            oftenMadeAlongside: null,
            seasonality: null,
            tags: null,
            pairsWith: null,
            notesInPlaceCollapse: null,
            origin: null,
            easeLevel: null,
            meal: null,
            category: null,
            howToStore: null,
            howToReheat: null,
            howToFreeze: null,
            howToUseRepurposeLeftoversIdeas: null,
            dishesThatAlsoUseLeftoverIngredients: null,
            mealAffinities: null,
            lastCooked: null,
            created: "2023-12-12T14:59:11.9416134",
            allDatesCooked: null,
            allDatesUpdated: null
        */}
        //{"id":2,"name":"Pizza Dough","description":"Neopolitanish pizza dough leavened with sourdough starter","version":1.0,"ingredients":[{"name":"water"},{"name":"honey"},{"name":"sourdough starter"},{"name":"flour"}],"method":null,"servings":0,"prepTime":null,"activeTime":null,"totalTime":null,"equipment":[],"pairings":[],"notes":null,"rating":0,"author":null,"foodOrDrink":null,"pictures":null,"oftenMadeAlongside":[],"seasonality":null,"tags":null,"pairsWith":[],"notesInPlaceCollapse":null,"origin":null,"easeLevel":null,"meal":null,"category":null,"howToStore":null,"howToReheat":null,"howToFreeze":null,"howToUseRepurposeLeftoversIdeas":null,"dishesThatAlsoUseLeftoverIngredients":[],"mealAffinities":[],"lastCooked":null,"created":null,"allDatesCooked":null,"allDatesUpdated":null},
        //{"id":3,"name":"Pork Ragu","description":"Italian Ragu of pork sausage","version":1.0,"ingredients":[{"name":"crushed tomatoes"},{"name":"garlic"},{"name":"sweet Italian salsiccia"},{"name":"yellow onion"}],"method":null,"servings":0,"prepTime":null,"activeTime":null,"totalTime":null,"equipment":[],"pairings":[],"notes":null,"rating":0,"author":null,"foodOrDrink":null,"pictures":null,"oftenMadeAlongside":[],"seasonality":null,"tags":null,"pairsWith":[],"notesInPlaceCollapse":null,"origin":null,"easeLevel":null,"meal":null,"category":null,"howToStore":null,"howToReheat":null,"howToFreeze":null,"howToUseRepurposeLeftoversIdeas":null,"dishesThatAlsoUseLeftoverIngredients":[],"mealAffinities":[],"lastCooked":null,"created":null,"allDatesCooked":null,"allDatesUpdated":null}
    ]

  return (
    <div className='container'>

        <h2 className='text-center'>List of Recipes</h2>
        <table className='table table-striped table-bordered'>
            <thead>
                <tr>
                    <th>Recipe ID</th>
                    <th>Recipe Name</th>
                    <th>Description</th>
                    <th>Version</th>
                    <th>Ingredients</th>
                    
                </tr>
            </thead>
            <tbody>
                {
                    dummyData.map(recipe =>
                        <tr key={recipe.id}>
                            <td>{recipe.id}</td>
                            <td>{recipe.name}</td>
                            <td>{recipe.description}</td>
                            <td>{recipe.version}</td>
                            
                            <td>{recipe.ingredients.values.toString()}</td>
                        </tr>)
                }

            </tbody>
        </table>
    </div>
  )
}

{/*

                    <th>Method</th>
                    <th>Servings</th>
                    <th>Prep Time</th>
                    <th>Active Time</th>
                    <th>Total Time</th>
                    <th>Equipment</th>
                    <th>Pairings</th>
                    <th>Notes</th>
                    <th>Rating</th>
                    <th>Author</th>
                    <th>Food or Drink</th>
                    <th>Pictures</th>
                    <th>Often made alongside</th>
                    <th>Seasonality</th>
                    <th>Tags</th>
                    <th>Pairs with</th>
                    <th>Notes in place collapse</th>
                    <th>Origin</th>
                    <th>Ease Level</th>
                    <th>Meal</th>
                    <th>Category</th>
                    <th>How to Store</th>
                    <th>How to Reheat</th>
                    <th>How to Freeze</th>
                    <th>How to use/repurpose Leftovers Ideas</th>
                    <th>Dishes that also use Leftover Ingredients</th>
                    <th>Meal Affinities</th>
                    <th>Last Cooked</th>
                    <th>Created</th>
                    <th>All Dates Cooked</th>
                    <th>All Dates Updated</th>



                    
                            <td>{recipe.method}</td>
                            <td>{recipe.servings}</td>
                            <td>{recipe.prepTime}</td>
                            <td>{recipe.activeTime}</td>
                            <td>{recipe.totalTime}</td>
                            <td>{recipe.equipment}</td>
                            <td>{recipe.pairings}</td>
                            <td>{recipe.notes}</td>
                            <td>{recipe.rating}</td>
                            <td>{recipe.author}</td>
                            <td>{recipe.foodOrDrink}</td>
                            <td>{recipe.pictures}</td>
                            <td>{recipe.oftenMadeAlongside}</td>
                            <td>{recipe.seasonality}</td>
                            <td>{recipe.tags}</td>
                            <td>{recipe.pairsWith}</td>
                            <td>{recipe.notesInPlaceCollapse}</td>
                            <td>{recipe.origin}</td>
                            <td>{recipe.easeLevel}</td>
                            <td>{recipe.meal}</td>
                            <td>{recipe.category}</td>
                            <td>{recipe.howToStore}</td>
                            <td>{recipe.howToReheat}</td>
                            <td>{recipe.howToFreeze}</td>
                            <td>{recipe.howToUseRepurposeLeftoversIdeas}</td>
                            <td>{recipe.dishesThatAlsoUseLeftoverIngredients}</td>
                            <td>{recipe.mealAffinities}</td>
                            <td>{recipe.lastCooked}</td>
                            <td>{recipe.created}</td>
                            <td>{recipe.allDatesCooked}</td>
                            <td>{recipe.allDatesUpdated}</td>
*/}

export default ListRecipeComponent