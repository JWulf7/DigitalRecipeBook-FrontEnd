import React, { useEffect, useState } from 'react'
import { createRecipe, getRecipe } from '../services/RecipeService'
import { useNavigate, useParams } from 'react-router-dom'

const RecipeComponent = () => {

    const { name } = useParams()

    const [recipe, setRecipe] = useState([])

    const navigator = useNavigate();

    useEffect(() => {
        getRecipe(name).then((Response) => {
            setRecipe(Response.data);
        }).catch(error => {
            console.error(error);
        })

    }, [])


    function updateRecipe() {
        navigator('/update-recipe')
    }

    return (
        <div className='container'>

            <h1>{"Hello " + name}</h1>
            <div className="col g-3"/>
                <div className="container">
                    <div className="row" key={'row1'}>
                        row 1
                    </div>
                    <div className="row" key={'row2'}>
                        row 2
                    </div>
                    <div className="row" key={'row3'}>
                        row 3
                    </div>
                    <div className="row" key={'row4'}>
                        row 4
                    </div>
                </div>




            <div className="col g-3"/>
            
            


        </div>



    )

    // return (
    //     <div className='container'>
    
    //         <h2 className='text-center'>List of Recipes</h2>
    //         <button className='btn btn-primary mb-2' onClick={addNewRecipe}>Add Recipe</button>
    //         <table className='table table-striped table-bordered' height='100%'>
    //             <thead>
    //                 <tr>
    //                     <th>Recipe ID</th>
    //                     <th>Recipe Name</th>
    //                     <th>Description</th>
    //                     <th>Version</th>
    //                     <th>Ingredients</th>
    //                     <th>Method</th>
    //                     <th>Servings</th>
    //                     <th>Prep Time</th>
    //                     <th>Active Time</th>
    //                     <th>Total Time</th>
    //                     <th>Equipment</th>
    //                     <th>Pairings</th>
    //                     <th>Notes</th>
    //                     <th>Rating</th>
    //                     <th>Author</th>
    //                     <th>Food or Drink</th>
    //                     <th>Pictures</th>
    //                     <th>Often made alongside</th>
    //                     <th>Seasonality</th>
    //                     <th>Tags</th>
    //                     <th>Pairs with</th>
    //                     <th>Notes in place collapse</th>
    //                     <th>Origin</th>
    //                     <th>Ease Level</th>
    //                     <th>Meal</th>
    //                     <th>Category</th>
    //                     <th>How to Store</th>
    //                     <th>How to Reheat</th>
    //                     <th>How to Freeze</th>
    //                     <th>How to use/repurpose Leftovers Ideas</th>
    //                     <th>Dishes that also use Leftover Ingredients</th>
    //                     <th>Meal Affinities</th>
    //                     <th>Last Cooked</th>
    //                     <th>Created</th>
    //                     <th>All Dates Cooked</th>
    //                     <th>All Dates Updated</th>
    //                 </tr>
    //             </thead>
    //             <tbody>
    //                 {
    //                 /*    dummyData.map(recipe =>   */
    //                     recipes.map(recipe =>    
    //                         <tr key={recipe.id}>
    //                             <td>{recipe.id}</td>
    //                             <td>{recipe.name}</td>
    //                             <td>{recipe.description}</td>
    //                             <td>{recipe.version}</td>
    //                             <td><ul>{parseIngredients(recipe.ingredients).map(([ingKey, ingValue]) => <li>{ingValue} {ingKey}</li>)}</ul></td>
    //                             <td><ul>{recipe.method.map(technique => <li>{technique}</li>)}</ul></td>
    //                             <td>{recipe.servings}</td>
    //                             <td>{convertDuration(recipe.prepTime)}</td>
    //                             <td>{convertDuration(recipe.activeTime)}</td>
    //                             <td>{convertDuration(recipe.totalTime)}</td>
    //                             <td><ul>{recipe.equipment.map(equip => <li>{equip.name}</li>)}</ul></td>
    //                             <td><ul>{recipe.pairings.map(pairing => <li>{pairing.name}</li>)}</ul></td>
    //                             <td><ul>{recipe.notes.map(note => <li>{note}</li>)}</ul></td>
    //                             <td>{recipe.rating}</td>
    //                             <td>{recipe.author}</td>
    //                             <td>{recipe.foodOrDrink}</td>
    //                             <td><ul>{recipe.pictures.map(pic => <li>{pic}</li>)}</ul></td>
    //                             <td><ul>{recipe.oftenMadeAlongside.map(alongside => <li>{alongside.name}</li>)}</ul></td>
    //                             <td>{recipe.seasonality}</td>
    //                             <td><ul>{recipe.tags.map(tag => <li>{tag}</li>)}</ul></td>
    //                             <td><ul>{recipe.pairsWith.map(pair => <li>{pair.name}</li>)}</ul></td>
    //                             <td>{recipe.notesInPlaceCollapse.valueOf}</td>
    //                             <td>{recipe.origin}</td>
    //                             <td>{recipe.easeLevel}</td>
    //                             <td><ul>{recipe.meal.map(meal => <li>{meal}</li>)}</ul></td>
    //                             <td><ul>{recipe.category.map(category => <li>{category}</li>)}</ul></td>
    //                             <td>{recipe.howToStore}</td>
    //                             <td>{recipe.howToReheat}</td>
    //                             <td>{recipe.howToFreeze}</td>
    //                             <td><ul>{recipe.howToUseRepurposeLeftoversIdeas.map(idea => <li>{idea}</li>)}</ul></td>
    //                             <td><ul>{recipe.dishesThatAlsoUseLeftoverIngredients.map(dish => <li>{dish.name}</li>)}</ul></td>
    //                             <td><ul>{recipe.mealAffinities.map(meal => <li>{meal.name}</li>)}</ul></td>
    //                             <td>{recipe.lastCooked}</td>
    //                             <td>{recipe.created}</td>
    //                             <td><ul>{recipe.allDatesCooked.map(date => <li>{date}</li>)}</ul></td>
    //                             <td><ul>{recipe.allDatesUpdated.map(date => <li>{date}</li>)}</ul></td>
    //                         </tr>)
    //                 }
    
    //             </tbody>
    //         </table>
    //     </div>
    //   )
    
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
export default RecipeComponent