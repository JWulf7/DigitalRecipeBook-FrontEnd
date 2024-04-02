import React, { useEffect, useState } from 'react'
import { getScheduleToday } from '../../services/CalendarService';
import { useNavigate } from 'react-router-dom';
import RenderScheduleDate from './RenderScheduleDate';

const Today : React.FC = () => {

    const [schedule, setSchedule] = useState<Schedule>();

    const navigator = useNavigate();

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

    useEffect(() => {
        getScheduleToday().then((Response) => {
            setSchedule(Response.data);
            console.log("inside useEffect(), after setSchedule(Response.data) :: schedule = -->")
            console.log(schedule)
            console.log("Response.data -> " + String(Response.data) + " : end of response data")
        }).catch(error => {
            console.error(error);
        })

    }, [])


    function updateSchedule(date) {
        const navTo = '/calendar/update/'.concat(date);
        navigator(navTo);
        // navigator('/recipe/:name/update')
    }


    {if(schedule?.date && schedule)
    return (

        <>
            <div>Today component
                <h2>{schedule?.date}</h2>
            </div>
            <div className='flex'>
                <button className='btn btn-primary mb-2' onClick={() => updateSchedule(schedule?.date)}>Update Schedule</button>
            </div>
            {/* <div>{...schedule}</div> */}
            {console.log("in rendering/returning phase; schedule = -> ")}
            {console.log(schedule)}
            <br/>
            <div className="row">
                
                {/* <div className="col"></div> */}
                <div className="col d-flex justify-content-center">
                    <div className="card">
                        <h4 className='scheduleTitle'>Today's Schedule:</h4>
                        <div className="card-body">
                            <RenderScheduleDate date={schedule?.date!} schedule={schedule}></RenderScheduleDate>
                        </div>

                    </div>
                    
                
                </div>
                {/* <div className="col"></div> */}
            </div>
        </>
        

    )}
}

export default Today