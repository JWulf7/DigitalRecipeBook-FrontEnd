import axios from "axios";

const REST_API_BASE_URL : string = 'http://localhost:8080/api/schedules';
const REST_API_GET_TODAY_URL : string = 'http://localhost:8080/api/schedules/today';
const REST_API_GET_DATE_URL : string = 'http://localhost:8080/api/schedules/';
const REST_API_GET_NEXT_SEVEN_DAYS_URL : string = 'http://localhost:8080/api/schedules/nextSeven';
const REST_API_GET_ALL_HISTORY_URL : string = 'http://localhost:8080/api/schedules';
const REST_API_PUT_UPDATE_URL : string = 'http://localhost:8080/api/schedules/update';

export const listAllHistory = () => {
    return axios.get(REST_API_GET_ALL_HISTORY_URL);
}

export const updateSchedule = (schedule) => {
    console.log("inside ScheduleService.updateSchedule()")
    console.log("schedule object = ->")
    console.log(schedule)
    return axios.put(REST_API_PUT_UPDATE_URL, schedule);
}

export const getScheduleDate = (date) => {
    var getScheduleURL = REST_API_GET_DATE_URL.concat(date);
    return axios.get(getScheduleURL);
}

export const getScheduleToday = () => {
    return axios.get(REST_API_GET_TODAY_URL);
}