import React, { useEffect, useState } from 'react'
import { createRecipe, getRecipe } from '../services/RecipeService'
import { useNavigate, useParams } from 'react-router-dom'
import Collapsible from 'react-collapsible'

const RecipeComponent = () => {

    const { name } = useParams()

    const [recipe, setRecipe] = useState([])

    const navigator = useNavigate();

    useEffect(() => {
        getRecipe(name).then((Response) => {
            setRecipe(Response.data);
            console.log(recipe)
            console.log("Response.data -> " + String(Response.data) + " : end of response data")
        }).catch(error => {
            console.error(error);
        })

    }, [])


    function updateRecipe(name) {
        const navTo = '/recipe/'+ name + '/update';
        navigator(navTo);
        // navigator('/recipe/:name/update')
    }

    {(recipe.name && recipe) 
    return (
        
        
        <div className='container d-grid gap-3'>

            {/* <h1>{"Hello " + name}</h1> */}
            <div className="col g-1"/>
                <div className="container">
                    <button className='btn btn-primary mb-2' onClick={() => updateRecipe(recipe.name)}>Update Recipe</button>
                </div>
                <div className="container">
                    {/* row 1 */}
                    <div className="row border border-3 border-warning" key={'row1'}>
                        <div className="col-sm-4 border border -2 border-info ms-auto" key={'row1-col1'}>
                            <div className="row border border-1 border-warning ms-auto" key={'row1-col1-row1'}>

                                {recipe.category?.map((category, index) => category + (((index+1) < recipe.category.length) ? ' | ' : ''))}

                            </div>
                            <div className="row border border-1 border-warning ms-auto" key={'row1-col1-row2'}>
                                {recipe.foodOrDrink}
                            </div>
                            <div className="row border border-1 border-warning ms-auto" key={'row1-col1-row3'}>
                                {recipe.meal?.map((meal, index) => meal + (((index+1) < recipe.meal.length) ? ' | ' : ''))}
                            </div>
                            <div className="row border border-1 border-warning ms-auto" key={'row1-col1-row4'}>
                                {recipe.season + ' season'}
                            </div>
                            <div className="row border border-1 border-warning ms-auto" key={'row1-col1-row5'}>
                                {recipe.rating + ' stars'}
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
                            <div className="row border border-1 border-warning" key={'row1-col3-row3'}>
                                {/* <h2 className='recipeName display-3'> */}
                                {/* <h2 className='recipeName'>
                                    {String(recipe.name).toUpperCase()}
                                </h2> */}
                                    <div className='recipeName'>{String(recipe.name).toUpperCase()}</div>
                                
                                    
                                

                            </div>
                        </div>
                        <div className="col-2 border border -2 border-info" key={'row1-col4'}>
                            <div className="row border border-1 border-warning" key={'row1-col4-row1'}>
                                <div className='recipeItal'>difficulty
                                </div>{recipe.easeLevel}
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
                            Notes:
                            <ul>
                                {recipe.notes?.map((note, index) => 
                                    <li key={'recipeNote' + (index+1)}>note</li>
                                )}
                            </ul>
                            
                        </div>
                        <div className="col">
                            <p className='recipeDesc'>{recipe.description}</p>
                        </div>
                    </div>

                    {/* row 3 */}
                    <div className="row border border-3 border-warning" key={'row3'}>
                        <div className="col">
                            <div className="row"><br/></div>
                            <div className="row d-flex justify-content-center">
                                <p className="recipeItal d-flex justify-content-center">yield : </p> {recipe.servings} Servings
                            </div>
                            <div className="row"></div>
                            <div className="row"></div>
                            <div className="row"></div>
                            
                        </div>
                        <div className="col">
                            <div className="row"><br/></div>
                            <div className="row">
                                    <div className="col recipeItal">prep time : </div>
                                    <div className="col">{recipe.prepTime && convertDuration(recipe.prepTime)}</div>
                            </div>
                            <div className="row">
                                    <div className="col recipeItal">active time : </div>
                                    <div className="col">{recipe.activeTime && convertDuration(recipe.activeTime)}</div>
                            </div>
                            <div className="row">
                                    <div className="col recipeItal">total time : </div>
                                    <div className="col">{recipe.totalTime && convertDuration(recipe.totalTime)}</div>
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
                            <div className='d-flex justify-content-center'>
                            <ul>
                                {recipe.ingredients && (parseIngredients(recipe?.ingredients).map(([ingKey, ingValue], index) => <li key={'ingredient'+index}>{ingValue} {ingKey}</li>))}
                            </ul>
                            </div>
                        </div>
                        <div className="col">
                            <p className='recipeItal d-flex justify-content-center'>equipment : </p>
                            <div className='d-flex justify-content-center'>
                            <ul>
                                {recipe.equipment?.map((equip, index) => <li key={'equip' + index}>{equip.name}</li>)}
                            </ul>
                            </div>
                        </div>
                    </div>

                    {/* row 5 */}
                    {/* <div className="row border border-3 border-warning offset-sm-1" key={'row5'}> */}
                    <div className="row border border-3 border-warning ms-auto d-flex justify-content-center" key={'row5'}>
                            <div className='d-flex justify-content-center recipeItal'>Procedure :</div>
                             
                            <ol className=''>
                                {recipe.method?.map((step, index) => <li className='d-flex justify-content-center' key={'step' + index}>{(index+1) +'. ' +step}</li>)}
                            </ol>
                    </div>

                    {/* row 6 */}
                    <div className="row border border-3 border-warning ms-auto d-flex justify-content-center" key={'row6'}>
                        <div className="col-sm-4 border border -2 border-info ms-auto" key={'row6-col1'}>
                        </div>
                        <div className="col-sm-4 border border -2 border-info ms-auto" key={'row6-col2'}>
                        </div>
                        <div className="col-sm-4 border border -2 border-info ms-auto" key={'row6-col3'}>
                            <div className='d-flex justify-content-center recipeItal'>from :</div>
                            {recipe.author}, {recipe.origin}
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
                            <div className='d-flex justify-content-center'>{recipe.howToStore}</div>
                        </div>
                        <div className="col-sm-4 border border -2 border-info ms-auto" key={'row8-col2'}>
                            <div className='d-flex justify-content-center recipeItal'>reheat</div>
                            <div className='d-flex justify-content-center'>{recipe.howToReheat}</div>
                        </div>
                        <div className="col-sm-4 border border -2 border-info ms-auto" key={'row8-col3'}>
                            <div className='d-flex justify-content-center recipeItal'>freeze</div>
                            <div className='d-flex justify-content-center'>{recipe.howToFreeze}</div>
                        </div>
                            
                    </div>

                    {/* row 9 */}
                    <div className="row border border-3 border-warning ms-auto d-flex justify-content-center" key={'row9'}>
                        <div className="col-sm-6 border border -2 border-info ms-auto" key={'row9-col1'}>
                            <div className='d-flex justify-content-center recipeItal'>repurpose leftovers</div>
                            <div className='d-flex justify-content-center'>
                                <ul>
                                    {recipe.howToUseRepurposeLeftoversIdeas?.map((idea, index) => <li key={'repurposeIdea' + index}>{idea}</li>)}
                                </ul>
                            </div>
                        </div>
                        <div className="col-sm-6 border border -2 border-info ms-auto" key={'row9-col2'}>
                            <div className='d-flex justify-content-center recipeItal'>leftover ingredients</div>
                            <div className='d-flex justify-content-center'>
                                <ul>
                                    {recipe.dishesThatAlsoUseLeftoverIngredients?.map((dish, index) => <li key={'leftoverDish' + index}>{dish.name}</li>)}
                                </ul>
                            </div>
                        </div>
                            
                    </div>

                    {/* row 10 */}
                    <div className="row border border-3 border-warning ms-auto d-flex justify-content-center" key={'row10'}>
                        <div className="col-sm-3 border border -2 border-info ms-auto" key={'row10-col1'}>
                            <div className='d-flex justify-content-center recipeItal'>often made alongside</div>
                            <div className='d-flex justify-content-center'>
                                <ul>
                                    {recipe.oftenMadeAlongside?.map((dish, index) => <li key={'oftenAlongside' + index}>{dish.name}</li>)}
                                </ul>
                            </div>
                        </div>
                        <div className="col-sm-3 border border -2 border-info ms-auto" key={'row10-col2'}>
                            <div className='d-flex justify-content-center recipeItal'>pairings</div>
                            <div className='d-flex justify-content-center'>
                                <ul>
                                    {recipe.pairings?.map((dish, index) => <li key={'pairings' + index}>{dish.name}</li>)}
                                </ul>
                            </div>
                        </div>
                        <div className="col-sm-3 border border -2 border-info ms-auto" key={'row10-col3'}>
                            <div className='d-flex justify-content-center recipeItal'>meal affinities</div>
                            <div className='d-flex justify-content-center'>
                                <ul>
                                    {recipe.mealAffinities?.map((affinity, index) => <li key={'affinity' + index}>{affinity.name}</li>)}
                                </ul>
                            </div>
                        </div>
                        <div className="col-sm-3 border border -2 border-info ms-auto" key={'row10-col4'}>
                            <div className='d-flex justify-content-center recipeItal'>pairs with</div>
                            <div className='d-flex justify-content-center'>
                                <ul>
                                    {recipe.pairsWith?.map((dish, index) => <li key={'pairsWith' + index}>{dish.name}</li>)}
                                </ul>
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
                            <div className='d-flex justify-content-center'>
                                {recipe.tags?.map((tag, index) => '#'+ tag + (((index+1) < recipe.tags.length) ? ' | ' : ''))}
                            </div>
                            
                    </div>

                </div>




            <div className="col g-3"/>
            
            


        </div>

        
        
    )}

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