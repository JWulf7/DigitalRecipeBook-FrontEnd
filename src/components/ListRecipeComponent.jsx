import React, {useEffect, useState} from 'react'
import { listRecipes } from '../services/RecipeService'
import { useNavigate } from 'react-router-dom'

const ListRecipeComponent = () => {

    const [recipes, setRecipes] = useState([])

    const navigator = useNavigate();

    useEffect(() => {
        listRecipes().then((Response) => {
            setRecipes(Response.data);
        }).catch(error => {
            console.error(error);
        })

    }, [])

    
/*
    const dummyData = [
        {
            id: 0,
            name: "Banana Bread",
            description: "Quick bread of ripe bananas",
            version: 1.0,
            ingredients: {
                "flour": "2 c.",
                "banana": "3",
                "baking powder": "1/4 tsp",
                "brown sugar": "1/4 c."
            },
            method: ["Mixing", "Baking"],
            servings: 8,
            prepTime: "PT15M",
            activeTime: "PT15M",
            totalTime: "PT1H15M",
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
                    name: "Vanilla Bourbon Pecan Butter"
                }
            ],
            notes: ["Don't overmix batter, a little scarce flour should be visible when putting into pan"],
            rating: 5,
            author: "Bobby Flay",
            foodOrDrink: "FOOD",
            pictures: [],
            oftenMadeAlongside: [
                {
                    name: "Vanilla Bourbon Pecan Butter"
                }
            ],
            seasonality: "Any",
            tags: ["Quickbread"],
            pairsWith: [
                {
                    name: "Vanilla Bourbon Pecan Butter"
                }
            ],
            notesInPlaceCollapse: true,
            origin: "Brunch With Bobby",
            easeLevel: "EASYMEDIUM",
            meal: [
                "BRUNCH",
                "BREAKFAST",
                "DESSERT",
                "SNACK",
                "ANY"
            ],
            category: [
                "Quickbread"
            ],
            howToStore: "wrap tightly in plastic wrap",
            howToReheat: "can slice and toast in toaster or in saute pan",
            howToFreeze: "wrap tightly in plastic wrap",
            howToUseRepurposeLeftoversIdeas: ["french toast", "can make into a bread pudding"],
            dishesThatAlsoUseLeftoverIngredients: [
                {
                    name: "Pecan stuff"
                }
            ],
            mealAffinities: [
                {
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
            ingredients: {
                "flour": "200 g.",
                "sourdough starter": "80 g.",
                "olive oil": "9 g.",
                "honey": "4 g."
            },
            method: ["Mixing", "Kneading", "Proofing", "Baking"],
            servings: 2,
            prepTime: "P3DT4H",
            activeTime: "PT1H",
            totalTime: "P5D",
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
            meal: [
                "LUNCH",
                "DINNER",
                "SNACK",
                "ANY"
            ],
            category: [
                "Yeastbread",
                "Sourdough"
            ],
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
           }
    ]
*/


    function addNewRecipe() {
        navigator('/add-recipe')
    }

  return (
    <div className='container'>

        <h2 className='text-center'>List of Recipes</h2>
        <button className='btn btn-primary mb-2' onClick={addNewRecipe}>Add Recipe</button>
        <table className='table table-striped table-bordered' height='100%'>
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
                /*    dummyData.map(recipe =>   */
                    recipes.map(recipe =>    
                        <tr key={recipe.id}>
                            <td>{recipe.id}</td>
                            <td>{recipe.name}</td>
                            <td>{recipe.description}</td>
                            <td>{recipe.version}</td>
                            <td><ul>{parseIngredients(recipe.ingredients).map(([ingKey, ingValue]) => <li>{ingValue} {ingKey}</li>)}</ul></td>
                            <td><ul>{recipe.method.map(technique => <li>{technique}</li>)}</ul></td>
                            <td>{recipe.servings}</td>
                            <td>{convertDuration(recipe.prepTime)}</td>
                            <td>{convertDuration(recipe.activeTime)}</td>
                            <td>{convertDuration(recipe.totalTime)}</td>
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
                            <td><ul>{recipe.meal.map(meal => <li>{meal}</li>)}</ul></td>
                            <td><ul>{recipe.category.map(category => <li>{category}</li>)}</ul></td>
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

  function parseIngredients(obj) {
    var newObj = {};
    Object.keys(obj).forEach(key => {
    newObj[key] = obj[key]
    })

    console.log(newObj);
    console.log(Object.entries(newObj));
    return Object.entries(newObj);
  }


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

}

{/*

                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    




                            
                            
                            
                            
                            
                            
                            
                            
                            
                            
                            
                            
                            
                            
                            
*/}

export default ListRecipeComponent