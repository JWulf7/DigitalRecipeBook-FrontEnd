import React from 'react'
import { useParams } from 'react-router-dom';

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

// const UpdateScheduleComponent = ({date, schedule} : Props) => {
  const UpdateScheduleComponent = () => {

    const { date } = useParams()

  return (
    <div>UpdateScheduleComponent</div>
  )
}

export default UpdateScheduleComponent