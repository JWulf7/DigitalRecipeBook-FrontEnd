import React, { useEffect, useState } from 'react'
import { getScheduleToday } from '../../services/CalendarService';
import { useNavigate, Link } from 'react-router-dom';



interface Props {
    date: string;
    schedule: Schedule;
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


const RenderScheduleDate = ({date, schedule} : Props) => {



    function renderMeal(mealName : string) {
        return (
            <>
                {
                    schedule.todaysPlannedMeals.map((meal, index) =>
                    { if(mealName == meal.meal)
                        return(
                            <>
                                {/* <div className="mealCategory">{mealName}</div>
                                <div className='mealName'>{meal.name}</div> */}
                                <span className="mealCategory" key={"mealCategorykey"+mealName}>{mealName}</span>
                                <span className='mealName' key={"mealNameKey"+meal.name}>   : {meal.name}</span>
                                <ul>
                                {meal.menu.map((mealComponent, index) =>
                                    {return(
                                        <>
                                            {/* <div className='menuItem'>{mealComponent.name}</div> */}
                                            {/* <li className='menuItem' key={"menuItemKey"+index}>{mealComponent.name}</li>
                                            <Link to={"/recipe/"+mealComponent?.name}>{mealComponent.name}</Link> */}
                                            <li className='menuItem' key={"menuItemKey"+index}>
                                                <Link to={"/recipe/"+mealComponent?.name}>{mealComponent.name}</Link>
                                            </li>
                                        </>
                                    )}
                                )}
                                </ul>
                            </>
                        )
                    }
                    )
                }
            </>
        )
    }


  {if (schedule?.date && schedule)
    return (
    

        <>
            {console.log("in RenderScheduleDate component; date = ->")}
            {console.log(date)}
            {console.log("in RenderScheduleDate component; schedule = ->")}
            {console.log(schedule)}
            {meals.map((mealName, index) => (

                <>
                    {renderMeal(mealName)}
                    <br/>
                </>

            ))}

        </>



    
  )}
}

export default RenderScheduleDate