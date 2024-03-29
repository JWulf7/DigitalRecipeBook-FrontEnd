import React, { useEffect, useState } from 'react'
import { listAllHistory } from '../../services/CalendarService';
import { useNavigate } from 'react-router-dom';

const ScheduleHistory : React.FC = () => {

  const [allSchedules, setAllSchedules] = useState([])


  const navigator = useNavigate();

  useEffect(() => {
      listAllHistory().then((Response) => {
          setAllSchedules(Response.data);
          // console.log("useEffect console.log of recipes -> " +recipes)
      }).catch(error => {
          console.error(error);
      })

  }, [])



  return (


    <>
      <div>ScheduleHistory</div>
    
    </>
    
  )
}

export default ScheduleHistory