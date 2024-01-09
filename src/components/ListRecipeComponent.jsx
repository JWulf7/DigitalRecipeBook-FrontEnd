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
            method: ["Mixing", "Baking"],
            servings: 8,
            prepTime: "15m",
            activeTime: "20m",
            totalTime: "1h",
            equipment: [
                {
                    name: "mixing bowl"
                },
                {
                    name: "loaf pan"
                },
                {
                    name: "oven"
                }
            ],
            pairings: [
                {
                    id: 47,
                    name: "Vanilla Bourbon Pecan Butter"
                }
            ],
            notes: ["Don't overmix batter, a little scarce flour should be visible when putting into pan"],
            rating: 5,
            author: "Bobby Flay",
            foodOrDrink: "food",
            pictures: ["Picture1 of Banana bread"],
            oftenMadeAlongside: [
                {
                    id: 47,
                    name: "Vanilla Bourbon Pecan Butter"
                }
            ],
            seasonality: "Any",
            tags: ["Quickbread"],
            pairsWith: [
                {
                    id: 47,
                    name: "Vanilla Bourbon Pecan Butter"
                }
            ],
            notesInPlaceCollapse: true,
            origin: "Brunch With Bobby",
            easeLevel: "EASYMEDIUM",
            meal: "ANY",
            category: "Quickbread",
            howToStore: "wrap tightly in plastic wrap",
            howToReheat: "can slice and toast in toaster or in saute pan",
            howToFreeze: "wrap tightly in plastic wrap",
            howToUseRepurposeLeftoversIdeas: ["french toast", "can make into a bread pudding"],
            dishesThatAlsoUseLeftoverIngredients: [
                {
                    id: 17,
                    name: "Pecan stuff"
                }
            ],
            mealAffinities: [
                {
                    id: 14,
                    name: "some recipe?"
                }
            ],
            lastCooked: "2023-12-12T14:59:11.9416134",
            created: "2023-10-10T12:59:11.9416134",
            allDatesCooked: ["2023-12-12T14:59:11.9416134"],
            allDatesUpdated: ["2023-12-12T14:59:11.9416134"],

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
            method: ["Mixing", "Kneading", "Proofing", "Baking"],
            servings: 2,
            prepTime: "2d",
            activeTime: "1h",
            totalTime: "2d",
            equipment: [
                {
                    name: "stand mixer"
                },
                {
                    name: "mixing bowl"
                },
                {
                    name: "proofing container"
                },
                {
                    name: "oven"
                },
                {
                    name: "pizza steel"
                }
            ],
            pairings: [
                {
                    id: 30,
                    name: "Alfredo Sauce"
                }
            ],
            notes: ["try to only touch pizza dough 1-3 touches after removing from proofing container", "pizza is good!"],
            rating: 5,
            author: "Jonathan Wulf",
            foodOrDrink: "food",
            pictures: ["picture1 of pizza dough"],
            oftenMadeAlongside: [
                {
                    id: 30,
                    name: "Alfredo Sauce"
                },
                {
                    id: 25,
                    name: "Pork Ragu"
                }
            ],
            seasonality: "Any",
            tags: ["Italian", "Pizza", "Neopolitan", "Sourdough"],
            pairsWith: [
                {
                    id: 30,
                    name: "Alfredo Sauce"
                }
            ],
            notesInPlaceCollapse: false,
            origin: "Original Recipe",
            easeLevel: "MEDIUM",
            meal: "ANY",
            category: "Yeastbread",
            howToStore: "can put leftover pieces in tupperware",
            howToReheat: "325* oven, 4 mins",
            howToFreeze: "maybe don't want to freeze",
            howToUseRepurposeLeftoversIdeas: ["don't know"],
            dishesThatAlsoUseLeftoverIngredients: [
                {
                    id: 20,
                    name: "Shrimp Fettucini Alfredo"
                }
            ],
            mealAffinities: [
                {
                    id: 21,
                    name: "Sourdough Naan Bread"
                }
            ],
            lastCooked: null,
            created: "2023-12-12T14:59:11.9416134",
            allDatesCooked: ["2023-12-12T14:59:11.9416134", "2022-10-12T14:59:11.9416134"],
            allDatesUpdated: ["2023-12-12T14:59:11.9416134", "2022-10-12T14:59:11.9416134"],
            
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
                            <td><ul>{recipe.ingredients.map(ingredient => <li>{ingredient.name}</li>)}</ul></td>
                            <td><ul>{recipe.method.map(technique => <li>{technique}</li>)}</ul></td>
                            <td>{recipe.servings}</td>
                            <td>{recipe.prepTime}</td>
                            <td>{recipe.activeTime}</td>
                            <td>{recipe.totalTime}</td>
                            <td><ul>{recipe.equipment.map(equip => <li>{equip.name}</li>)}</ul></td>
                            <td><ul>{recipe.pairings.map(pairing => <li>{pairing.name}</li>)}</ul></td>
                            <td><ul>{recipe.notes.map(note => <li>{note}</li>)}</ul></td>
                            <td>{recipe.rating}</td>
                            <td>{recipe.author}</td>
                            <td>{recipe.foodOrDrink}</td>
                            <td><ul>{recipe.pictures.map(pic => <li>{pic}</li>)}</ul></td>
                            <td><ul>{recipe.oftenMadeAlongside.map(alongside => <li>{alongside.name}</li>)}</ul></td>
                            <td>{recipe.seasonality}</td>
                            <td><ul>{recipe.tags.map(tag => <li>{tag}</li>)}</ul></td>
                            <td><ul>{recipe.pairsWith.map(pair => <li>{pair.name}</li>)}</ul></td>
                            <td>{recipe.notesInPlaceCollapse.valueOf}</td>
                            <td>{recipe.origin}</td>
                            <td>{recipe.easeLevel}</td>
                            <td>{recipe.meal}</td>
                            <td>{recipe.category}</td>
                            <td>{recipe.howToStore}</td>
                            <td>{recipe.howToReheat}</td>
                            <td>{recipe.howToFreeze}</td>
                            <td><ul>{recipe.howToUseRepurposeLeftoversIdeas.map(idea => <li>{idea}</li>)}</ul></td>
                            <td><ul>{recipe.dishesThatAlsoUseLeftoverIngredients.map(dish => <li>{dish.name}</li>)}</ul></td>
                            <td><ul>{recipe.mealAffinities.map(meal => <li>{meal.name}</li>)}</ul></td>
                            <td>{recipe.lastCooked}</td>
                            <td>{recipe.created}</td>
                            <td><ul>{recipe.allDatesCooked.map(date => <li>{date}</li>)}</ul></td>
                            <td><ul>{recipe.allDatesUpdated.map(date => <li>{date}</li>)}</ul></td>
                        </tr>)
                }

            </tbody>
        </table>
    </div>
  )
}

{/*

                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    




                            
                            
                            
                            
                            
                            
                            
                            
                            
                            
                            
                            
                            
                            
                            
*/}

export default ListRecipeComponent