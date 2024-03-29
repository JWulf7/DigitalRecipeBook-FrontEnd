import React, { useEffect, useState } from 'react'
import { getScheduleToday } from '../../services/CalendarService';
import { useNavigate } from 'react-router-dom';



interface Props {
    date: string;
    schedule?: Schedule;
}

interface Schedule {
    date: string;
    todaysPlannedMeals: PlannedMeal[];
    tomorrowsPlannedMeals: PlannedMeal[];
    prepList: string[];
    allMealsPlanned: any;
    notes: string[];
    actualMeals: any;
}

let meals : string[] = ["BREAKFAST", "BRUNCH", "LUNCH", "SNACK", "DINNER", "DESSERT", "ANY"];

interface PlannedMeal {
    id: number;
    name: string;
    meal: string;
    menu: RecipeName[];
    allDatesCooked: Date[];
    notes: string[];
}

interface RecipeName {
    id: number;
    name: string;
}


// const RenderScheduleDate = (string: date) => {
const RenderScheduleDate = ({date, schedule} : Props) => {


  return (
    

        <>
            {console.log("in RenderScheduleDate component; date = ->")}
            {console.log(date)}
            {console.log("in RenderScheduleDate component; schedule = ->")}
            {console.log(schedule)}
            <div>RenderScheduleDate</div>
            <div>another div returned</div>
            {/* <div> */}
            {/* {meals.map((mealName, index) => { */}
            {meals.map((mealName, index) => (
                <div>can i return this?</div>
                // START HERE NEXT:  DEBUGGING THIS... TRYING TO RENDER THE SCHEDULE.. COMMENTED OUT A LOT BELOW JUST FOR DEBUGGING .. BUT WANT A LOT OF THE FUNCTIONALITY
                //      CHECK RECIPEBOOKTABLEOFCONTENTSCOMPONENT.CATEGORYLINKS() AND .RENDERCATEGORIES()
                
                schedule?.todaysPlannedMeals.map((plannedMeal, index) => (
                    <div></div>
                ))
                // console.log("iterating through each mealName; mealName = -> ")
                // console.log(mealName)
                // {<div>some text here</div>}
                // // if (schedule?.todaysPlannedMeals.forEach.name.includes(mealName)) {
                //     schedule?.todaysPlannedMeals.map((plannedMeal, index) => {
                //         console.log("iterating through each plannedMeal; plannedMeal = -> ")
                //         console.log(plannedMeal)
                //         console.log("should be hitting true here for 'Dinner' = -> ")
                //         if(mealName.match(plannedMeal.meal)) {
                //             console.log("if conditional true; mealName.match(plannedMeal.meal) = -> ")
                //             console.log(plannedMeal)
                //             console.log("if conditional true; mealName = -> ")
                //             console.log(mealName)
                //             console.log("if conditional true; plannedMeal.meal = -> ")
                //             console.log(plannedMeal.meal)
                //             console.log("if conditional true; about to hit return statement :::!!!")
                //            return(
                //             <>
                //                 {console.log("in return statement")}
                //                 <div id={'plannedMealReturnDiv'+index}>
                //                     <h2 id={'plannedMealReturnH2'+index}>{plannedMeal.meal}</h2>
                //                     {/* {console.log("under header")} */}
                //                     {/* <div>{plannedMeal.menu.na}</div> */}
                //                     {/* <div>
                //                         <ul>
                //                             {plannedMeal.menu.map((recipeName, index) => {
                //                                 return (
                //                                     <>
                //                                         <li>
                //                                             {recipeName.name}
                //                                         </li>
                //                                     </>
                //                                 );
                //                             })}
                //                         </ul>
                //                     </div> */}
                //                 </div>
                //             </>
                //            )

                //         }

                //     }
                //     )
                    
                //     {
                //     console.log("includes was true for ")
                // }



            ))}
            {/* // })} */}
            {/* </div> */}

        </>

        // <>
        // {console.log("in RenderScheduleDate component; date = ->")}
        // {console.log(date)}
        // {console.log("in RenderScheduleDate component; schedule = ->")}
        // {console.log(schedule)}
        // <div>RenderScheduleDate</div>
        // {(meals).map((mealName, index) => {
        //     // if (schedule?.todaysPlannedMeals.forEach.name.includes(mealName)) {
        //         (schedule?.todaysPlannedMeals.map((plannedMeal, index) => {

        //         }
        //         )
        //         ) {
        //         console.log("includes was true for ")
        //     }

        // })}


        // </>




    
  )
}

export default RenderScheduleDate